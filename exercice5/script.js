let tableau = [1, 2, 3, 4, 5, 6]

//ETAPE 1
function sum1(tab) {
    let sum = 0
    for (let i = 0; i < tab.length; i++) {
        sum += tab[i]
    }
    return sum
}

//ETAPE 2
function sum2(tab, index = 0) {
    if (index == tab.length) {
        return 0
    }
    else {
        return tab[index] + sum2(tab, index + 1)
    }
}


function sum3(arr) {
    if (arr.length == 0) {
        return 0
    }
    else {
        return arr[0] + sum3(arr.slice(1))
    }
}


//ETAPE 3
function factorial(num) {
    if (num != 0) {
        return (num * factorial(num - 1))
    }
    else {
        return 1
    }
}
/*
function factorial(n) {
    res = 1
    for (let index = 1; index <= n; index++) {
        res = index * res
    }
    return res
}
*/
//ETAPE 4
function fibonacci(x, y) {
    console.log(x);
    x = x + y
    if (x < 100) fibonacci(y,x);
    else return console.log("end")
}


function fib(n){
    if (n == 0) return 0
    else if (n == 1) return 1
    else return fib(n-1) + fib(n-2)
}

console.log(fib(13));