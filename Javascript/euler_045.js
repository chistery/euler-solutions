// Problem 45
// ==========
// 
// Triangle, pentagonal, and hexagonal numbers are generated by the following
// formulae:
// 
// Triangle     T[n]=n(n+1)/2   1, 3, 6, 10, 15, ...
// Pentagonal   P[n]=n(3n-1)/2  1, 5, 12, 22, 35, ...
// Hexagonal    H[n]=n(2n-1)    1, 6, 15, 28, 45, ...
// 
// It can be verified that T[285] = P[165] = H[143] = 40755.
// 
// Find the next triangle number that is also pentagonal and hexagonal.

var bigInt = require('big-integer');
var m = {};
var out = new Set();
var i = 2;
while (out.size <= 1) {
    var T = bigInt(i).plus(1).multiply(i).divide(2).toString();
    var P = bigInt(i).multiply(3).minus(1).multiply(i).divide(2).toString();
    var H = bigInt(i).multiply(2).minus(1).multiply(i).toString();
    [T, P, H].forEach(function(e) {
        if (e in m) {
            m[e] += 1;
            if (m[e] >= 3) {
                out.add(e);
            }
        } else {
            m[e] = 1;
        }
    });
    i++;
}
var a = Array.from(out);

// TODO: return your answer for this prompt.
return a[1];