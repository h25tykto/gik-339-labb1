

{
    let variableString = "sträng"
    var variableNumber = 123456789
    const variableArray = [variableString, variableNumber]
    
    const add = (num1, num2) => { return num1 + num2 }
}




/*
UPPGIFT 2 Reflektion: 

console.log(variableNumber) 
Skrivet innan blocket returnerar undefined, de andra ger fel

console.log(variableString)
console.log(variableArray)
console.log(variableNumber)
Alla tre skrivna innuti blocket skrivs ut korrekt
 
console.log(variableNumber) 
Skrivet efter blockwt eturnernar 123456789 korrekt, de andra ger fel

var är nåbar utanför blocket, men innan variabeln defineras ges "undefined"
let är bara nåbar inom blocket det definerats inom, samma med const, men const kan inte ändras efter att den definerats
 
 
 UPPGIFT 3 Reflektion:
 
 Om man definerat functionen add med let istället för const hade det sedan gått att definera om add till någonting annat
 ex let add = "nytt värde"
 
 Funktionen definerad med en funktionsdeklaration:
 
 function add(num1,num2) { return num1 + num2 }
 
 Att en funktion "returnerar någonting" är precis vad det låter som, när man kallar på funktionen får man någonting tillbaka.
 I det här fallet så får man ut summan av de två variablerna num1 och num2 
 */

