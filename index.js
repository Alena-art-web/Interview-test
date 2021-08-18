// 1
var twoSum = function(nums, target) {

    let obj = {};

    for ( let i = 0; i < nums.length; i++ ) {
        obj[nums[i]] = i;
    }

    for ( let i = 0; i < nums.length; i++ ) {
        const n = target - nums[i];
        if (obj[n] && obj[n] != i) {
            return [i, obj[n]]; 
        }
    }
    return []; 
}; 

// 2

function romanize(num) {
    let roman = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1};
    let result = '';
    let i;

    for ( i in roman ) {
        while ( num >= roman[i] ) { 
            result += i;
            num -= roman[i];
        }
    }
    return result;
}




