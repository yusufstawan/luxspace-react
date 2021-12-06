/* eslint-disable no-extend-native */
if (!Number.hasOwnProperty("currency"))
    Number.prototype.currency = function (decimals = 0) {
        const currency = new Intl.NumberFormat(navigator.language, {
            style: "currency", currency: "IDR"
        })

        return currency.format(this)
    }
