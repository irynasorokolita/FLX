let a = parseFloat(prompt('Input value a =','0'));
let b = parseFloat(prompt('Input value b =','0'));
let c = parseFloat(prompt('Input value c =','0'));
if (isNaN(a) || isNaN(b) || isNaN(c) || a === 0) {
    alert('Invalid input data');
} else {
    let D = b * b - 4 * a * c;
    if ( D > 0) {
        let x1 = (-b + Math.sqrt(D)) / (2 * a);
        let x2 = (-b - Math.sqrt(D)) / (2 * a);
        alert('x1=' + +x1.toFixed(2) + '; x2=' + +x2.toFixed(2));
    } else if (D === 0) {
        let x = -b / (2 * a);
        alert('x=' + x.toFixed(2));
    } else if (D < 0) {
        alert('no solution');
    }
}
