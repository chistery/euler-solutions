// Problem 12
// ==========
// 
// The sequence of triangle numbers is generated by adding the natural
// numbers. So the 7th triangle number would be 1 + 2 + 3 + 4 + 5 + 6 + 7 =
// 28. The first ten terms would be:
// 
//                  1, 3, 6, 10, 15, 21, 28, 36, 45, 55, ...
// 
// Let us list the factors of the first seven triangle numbers:
// 
//    1: 1
//    3: 1,3
//    6: 1,2,3,6
//   10: 1,2,5,10
//   15: 1,3,5,15
//   21: 1,3,7,21
//   28: 1,2,4,7,14,28
// 
// We can see that 28 is the first triangle number to have over five
// divisors.
// 
// What is the value of the first triangle number to have over five hundred
// divisors?

function list_divisors(n) {
    var sum = 1,
        square = Math.sqrt(n)
    for (var i = 1; i <= square; i++) {
        if (n % i == 0) {
            sum += 2
        }
    }
    return sum
}

function find_five_hundred() {
    var sum = 0
    for (var i = 1;; i++) {
        sum += i;
        if (list_divisors(sum) > 500) {
            return sum
        }
    }
}

// TODO: return your answer for this prompt.
return find_five_hundred();