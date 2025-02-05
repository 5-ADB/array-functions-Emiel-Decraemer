let fruiten = ["appels", "peren", "tomaten", "papaya", "bannaan"]

let fruit1 = fruiten.at(3)
console.log(fruit1);

console.log("-------------------------------------");
// array.at kan een variabele benoemen naar één element van een array

let fruit2 = fruiten.join(" en ")
console.log(fruit2);

console.log("-------------------------------------");
// array.join maakt van een array een variabele en veranderd de separator naar wat je wil(in dit geval van een komma naar en)

let fruit3 = fruiten.pop()
console.log(fruiten);
console.log(fruit3);

console.log("-------------------------------------");
// array.pop verwijderd het laatste element van je array en geeft die aan de nieuwe variabele naam(in dit geval is dit bannaan die naar fruit3 gaat)

fruiten.push("komkommer")
console.log(fruiten);

console.log("-------------------------------------");
// array.push zet een extra element of elementen in een array

let fruit4 = fruiten.shift()
console.log(fruiten);
console.log(fruit4);

console.log("-------------------------------------");
// array.shift verwijderd het eerste element van je array en geeft die aan de nieuwe variabele naam(in dit geval is dit appel die naar fruit4 gaat)

fruiten.unshift("appel")
console.log(fruiten);

console.log("-------------------------------------");
// array.unshift voegt een element of elementen toe aan het begin van je array

fruiten.delete()