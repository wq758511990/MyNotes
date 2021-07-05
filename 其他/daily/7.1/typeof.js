function myTypeof(res) {
    return Object.prototype.toString.call(res).slice(8, -1).toLowerCase()
}