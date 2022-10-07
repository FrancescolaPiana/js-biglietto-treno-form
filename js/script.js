

const button = document.getElementById('buttoncalc');
// ciò indica che la pressicone del bottone corrispondera alla costante button

const caclticket = function(){
    let km = parseInt(document.getElementById('km').value);
    let age = parseInt(document.getElementById('age').value);
     console.log(km);
     console.log(age);

    let basePrice = km * 0.21;
    console.log(basePrice);

    if(age < 18){
        sale = 0.8;
     }
     else if(age > 65){
        sale = 0.6;
     }
     else{
        sale = 1;
     };
     
     console.log(sale);

     let discountentPrice = basePrice * sale;
     console.log(discountentPrice);

     var twoDecimal = discountentPrice.toFixed(2);
     console.log(twoDecimal);

     document.getElementById('kmtxt').innerHTML = km;
    document.getElementById('costtxt').innerHTML = twoDecimal;

    


};
// ho dato una costante alla funzione di prendere i dati e processarli

button.addEventListener('click', caclticket )
// alla pressione del bottone si avvierà al funzione calcticket

console.log(km);