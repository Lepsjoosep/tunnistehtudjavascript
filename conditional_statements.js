/**
 * CONDITIONAL STATEMENTS
 * - if...else
 * - switch statement
 */

/**
 * IF...ELSE
 */

// Too poest Piima, kui on saia, too kaks.
const isThereBread = true;

// Niimoodi kirjutatakse if...else lauseid pikalt
if (isThereBread) {
    // kui if on true, siis käivitame selle koodibloki
    console.log("Toon poest kaks piima")
} else {
    // kui if on false, siis käivitame selle koodibloki
    console.log("Toon ühe piim")
}

//Ternary operaator, kuidas kirjutada if...else lauseid lühidalt
// conditional ? true : false
console.log(isThereBread ? "Kui on true" : "Kui on false")

/**
 * SWITCH statement
 */

let redbullsDrankToday = 2;

switch(redbullsDrankToday) {
    case 1:
        console.log("uhm, anna minna");
        break;
    case 2:
        console.log("on ruumi, aga hakkab otsa saama");
        break;
    case 3:
        console.log("Ja ongi kõik, max on täis");
        break;
    default:
        console.log("Palju palju, Mine arsti juurde");
        break;
}

