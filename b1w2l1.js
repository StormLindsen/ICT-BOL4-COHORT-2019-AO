//Storm Lindsen Opodracht: Pizza calculator
var KleinePizza = prompt ("hoeveel kleine pizza's wilt u bestellen?"); //laat een prompt zien met de vraag hiernaast en een invoerbalk om het antwoord op de vraag in te voeren
var MediumPizza = prompt ("hoeveel medium pizza's wilt u bestellen?"); //laat een prompt zien met de vraag hiernaast en een invoerbalk om het antwoord op de vraag in te voeren
var GrotePizza = prompt ("hoeveel grote pizza's wilt u bestellen?"); //laat een prompt zien met de vraag hiernaast en een invoerbalk om het antwoord op de vraag in te voeren
var PrijsKleinePizza = 4 
var PrijsMediumPizza = 9
var PrijsGrotePizza = 11.99
document.write (" Totaal aantal kleine pizza's: ", KleinePizza, " Prijs: ", PrijsKleinePizza * KleinePizza) //laat in het document het totaal aantal kleine pizza's en de prijs zien
document.write (" Totaal aantal medium pizza's: ", MediumPizza, " Prijs: ", PrijsMediumPizza * MediumPizza) //laat in het document het totaal aantal grote pizza's en de prijs zien
document.write (" Totaal aantal grote pizza's: ", GrotePizza, " Prijs: ", PrijsGrotePizza * GrotePizza) //laat in het document het totaal aantal grote pizza's en de prijs zien
document.write (" Totale prijs: ", KleinePizza * PrijsKleinePizza + MediumPizza * PrijsMediumPizza + GrotePizza * PrijsGrotePizza ) //berekent de totale prijs en laat dit in het document zien