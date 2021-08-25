var BASE_URL = 'https://wifi-stage.ayo.digital/';
var Util = {
    getSearchParams: function (k) {
        var p = {};
        location.search.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (s, k, v) { p[k] = v })
        return k ? p[k] : p;
    },
    setSessionData: function (key, value) {
        return sessionStorage.setItem(key, value);
    },
    getSessionData: function (key) {
        return sessionStorage.getItem(key);
    },
    getSessionDataJSONString: function (key, index) {
        let data = JSON.parse(sessionStorage.getItem(key));
        return index ? data[index] : data;
    },
    decodeURL: function (url) {
        return decodeURIComponent(decodeURI(url));
    },
    getSearchActionParams: function (url, k) {
        var p = {};
        url.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (s, k, v) { p[k] = v })
        return k ? p[k] : p;
    },
    setAllParamsToSession: function (url) {
        if (url) {
            let decodedURL = new URL(this.decodeURL(url));
            let decodedParams = this.getSearchActionParams(decodedURL.href);
            return this.setSessionData('params', JSON.stringify(decodedParams));
        }
    },
    processPayment: function (id) {
        event.preventDefault();
        showLoading();
        let email = Util.getSessionData('email');
        let url = BASE_URL + `wifi/ap/user/plan/payment/process/${id}/${email}`;
        $.get(url, function (response) {
            hideLoading();
            if (response.success == true && response.is_redirect == true) {
                toastr.success(response.message, 'Success');
                window.location.href = response.redirect_url;
            } else if (response.success == true && response.is_redirect != true) {
                toastr.info(response.message, 'Info');
            } else {
                console.log(response);
                toastr.error("Something went wrong!, Please try again", 'Error');
            }
        });
    },
    cipher: function (salt) {
        const textToChars = text => text.split('').map(c => c.charCodeAt(0));
        const byteHex = n => ("0" + Number(n).toString(16)).substr(-2);
        const applySaltToChar = code => textToChars(salt).reduce((a, b) => a ^ b, code);

        return text => text.split('')
            .map(textToChars)
            .map(applySaltToChar)
            .map(byteHex)
            .join('');
    },

    decipher: function (salt) {
        const textToChars = text => text.split('').map(c => c.charCodeAt(0));
        const applySaltToChar = code => textToChars(salt).reduce((a, b) => a ^ b, code);
        return encoded => encoded.match(/.{1,2}/g)
            .map(hex => parseInt(hex, 16))
            .map(applySaltToChar)
            .map(charCode => String.fromCharCode(charCode))
            .join('');
    },
    encode: function (text) {
        const salt = '0123456789abcdefghijklmnopqrstuvwxyz';
        const encodeText = this.cipher(salt);
        return encodeText(text);
    },
    decode: function (text) {
        const salt = '0123456789abcdefghijklmnopqrstuvwxyz';
        const decodeText = this.decipher(salt);
        return decodeText(text);
    },
    setDataLocalStorage: function (key, value) {
        return localStorage.setItem(key, value);
    },
    getDataLocalStorage: function (key) {
        return localStorage.getItem(key);
    },
    loginGuard: function () {
        showLoading()
        let email = Util.getDataLocalStorage('email');
        let url = BASE_URL + `wifi/ap/user/is/logged/${email}`;
        if (email && email != undefined) {
            $.ajax({
                url: url,
                type: 'GET',
                success: function (response) {
                    Util.setDataLocalStorage('email', response.data.email);
                    setTimeout(function () {
                        if (window.location.pathname != '/account.html') {
                            window.location.href = '/account.html';
                        }
                    }, 1500);
                },
                error: function (error) {
                    if (window.location.pathname != '/') {
                        window.location.href = '/';
                    }

                }
            });
        }
    }
};