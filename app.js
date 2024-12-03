var minPartitions = function(n) {
    let max  = 0 
    for (let i = 0; i  < n.length ; i++){
        let num = Number(n[i])
        if(num > max){
            max= num
        }
    }
    return max
};

var minPartitions = function(n) {
    let mySet = new Set(n.split('').sort())
    let substract = 0
    let result = 0
    for (const value of mySet) {
        let integer = parseInt(value)
        if(integer){
            integer = integer - substract
            result += integer
            substract += integer
        }
    }
    return result
};