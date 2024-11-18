/** 
 * Equality Comparison - Võrdlemine 
 * == vs === vs object.is()
 * == võrdleb omavahel väärtusi
 * === ja object.is() võrdleb omavahel väärtusi ning andmetüüpe
 */

console.log("It is working!");
console.log(5 == "5"); // True
console.log(5 === "5"); // False
console.log(1 === true); // False
console.log(Object.is(5,"5")); // False

/**
 * Type Coersion vs Conversion
 *käsitsi sundmine versus automaatne muutmine
 */

console.log(5 + "5"); // JS runtime automaatselt konverdib number tüübi stringiks
console.log(5 + Number("5")); // Käsitsi sunnime String 5 olema Number 5

/**
 * typeof Operator
 * - tagastab meile väärtuse andmetüübi
 */

console.log(typeof "Joosep Leps"); // String


