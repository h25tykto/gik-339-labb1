

{
    let variableString = "sträng"
    var variableNumber = 123456789
    const variableArray = [variableString, variableNumber]
    
    const num1 = 0
    let arg1;
    let sum = false
    const add = (num1, num2) => 
    {
        num1 ? "thruty" : "falsy"
        
        if(num1 != null && num2 != null && !isNaN(num1) && !isNaN(num2))
        {
            return num1 + num2 
        }
        else
        {   
            return "Input inkorrekt"
        }
        
        console.log(num1 == 0);
        console.log(num2 === '0');
        console.log(num2 === 0);
        console.log(num1 == NaN);
    }
    console.log(add(sum,1))
    console.log(add("0", 3))
    console.log(add(3, "num1"))
    console.log(add(-5, num1))
    console.log(add(arg1, 7))
    console.log(add())
    
    console.log(sum)
    console.log(num1)
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
 
 UPPGIFT 4 Refelektion: 
 
 En ternary operator är en förkortad vilkorssatts, likt en if-sats, men som bara tar en variabel 
 och har ett utfall om det är sant eller truthy och ett utfall om det är falskt eller falsy
 
 Dubbelt likamed tecken, ==, genomför en jämförelse, men den är mer implicit, vissa jämförelser ger sant även om de inte är exakt lika, tex ger 0 == "0" sant.
 Trippelt likamed tecken, === genomför en strikt jämförelse, den ger bara sant om det som jämförs är exakt lika
 
 I if-sattsen finns vikoret num1/num2 != null, vilket innebär att det inom måsvingarna bara utförs om varken num1 eller num2 är null
 
 UPPGIFT 5 Reflektion: 
 Parameter: Parametrar är variablerna i parantesen i definitionen av en funktioner/metoder, i koden ovan är num1 och num2 i parantesen i add-funktionen parametrar
 De är bara referenser till vad funktionen vill ha som in-värden
 Variabel: En variabel är ett namngivet element som kan anta olika värden och användas på olika ställen i programmet. 
 Argument: Argument är variablarna som faktiskt skickas till funktionen/metoden, i koden ovan på alla ställen där add-metoden används skickas det in argument 
 
 Num1 returnerar 0, num1 ges sitt värde innan funktionen, och funktionen returnerar summan av två variabler utan att förändra dem, så num1 är fortfarande 0
 
 add(sum, 1): Först kollar funktionen att argumenten är definierade, inte null, sedan använder funktionen metoden (!)isNaN för att kolla om argumenten är nummer.
 Om argumenten inte är definierade eller nummer så returnerar funktionen strängen "Input inkorrekt", annars returnerar de summan av talen. Sum är satt som false, boolska värden sätts som 1 vid true och 0 vid false
 därför passerar det isNaN checken. add(sum, 1) returnerar 0 + 1 = 1. 
 console.log(add("0", 3)) = 03
 console.log(add(3, "num1")) = "Input inkorrekt"
 console.log(add(-5, num1)) = -5
 console.log(add(arg1, 7)) = "Input inkorrekt"
 console.log(add()) = "Input inkorrekt"
 */

