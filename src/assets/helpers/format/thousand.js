/* eslint-disable no-extend-native */
if (!Number.hasOwnProperty("thousand"))
    Number.prototype.thousand = function (decimals = 0) {
        const thousand = new Intl.NumberFormat(navigator.language)

        return thousand.format(this)
    }
