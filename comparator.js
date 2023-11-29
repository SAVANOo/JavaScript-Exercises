console.log(Comparator(null, null)); // true
console.log(Comparator('a', true)); // false
console.log(Comparator(2, 4)); // false
console.log(Comparator('2', 2)); // true 
console.log(Comparator(2, '2')); // true 
console.log(Comparator(true, 2)); // false 
console.log(Comparator('ada', 'von')); // false 
console.log(Comparator('ada', 'ada')); // true 
console.log(Comparator(1, true)); // true 
console.log(Comparator(0, false)); // true 
console.log(Comparator('1', true)); // true 
console.log(Comparator('0', false)); // true
console.log(Comparator(false, '0')); // true
console.log(Comparator('0', true)); // false 

function Comparator(a, b) {
    if (typeof a == typeof b) {
        return a === b;
    }
    if (((typeof a == 'string' && !isNaN(a)) || (typeof b == 'string' && !isNaN(b)))
        && (typeof a == 'number' || typeof b == 'number')) {
        typeof a == 'string' ? Number(a) : Number(b);
        return a === b;
    }
    if (((typeof a == 'string' && !isNaN(a)) || (typeof b == 'string' && !isNaN(b)))
        && (typeof a == 'boolean' || typeof b == 'boolean')) {
        typeof a == 'string' ? (a == '1' ? a = true : a = false) : (b == '1' ? b = true : b = false);
        return a === b;
    }
    if (((typeof a == 'number') || (typeof b == 'number'))
        && (typeof a == 'boolean' || typeof b == 'boolean')) {
        typeof a == 'number' ? (a == 1 ? a = true : a = false) : (b == 1 ? b = true : b = false);
        return a === b;
    }
    else {
        return false;
    }
}