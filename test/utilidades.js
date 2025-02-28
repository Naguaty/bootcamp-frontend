
 const suma = (a, b) => {
    return a + b;
};

 function formatoMoneda(numero) {
    return `$${numero.toFixed(2)}`;
}

function esPalindromo(palabra) {
    if (typeof palabra !== 'string') return false;
    const limpia = palabra.toLowerCase().replace(/\s/g, '');
    return limpia === limpia.split('').reverse().join('');
}


