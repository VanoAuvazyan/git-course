const array = [1,2,3,4,5]

Array.prototype.multyBy = function(n) {
    return this.map(function(i) {
        return i * n
    })
}