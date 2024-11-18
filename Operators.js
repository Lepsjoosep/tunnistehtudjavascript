/**
 * Operaatorid
 */

/**
 * || tähendab või(OR)
 * && tähendab ja(AND)
 * ! tähendab ei(NOT)
 */

const a = 3;
const b = -2;

// || puhul peab üks pooltest olema TRUE, et statement oleks TRUE
// Jätkame kui a on suurem kui 0 või b on suurem kui 0
console.log(a > 0 || b > 0); // TRUE 

// && puhul peavad mõlemad pooled olema TRUE, et statement oleks TRUE
// Kui üks pooltest on FALSE on kogu  statement FALSE
// Jätkame kui a on suurem kui 0 ja b on suurem kui 0
console.log(a > 0 && b > 0); // FALSE

// ! puhul pööratakse väärtus ümber vastama ei küsimusele.
// kui enne oli väärtus FALSE, siis kasutades ! operaatorit on vastus nüüd TRUE
const isThisJavascript = true;
console.log("without ! operator", isThisJavascript) // TRUE
console.log("with ! operator", !isThisJavascript)// FALSE