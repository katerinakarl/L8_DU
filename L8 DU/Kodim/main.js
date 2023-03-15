/*Mějme tři cateringové společnosti dodávající občerstvení na různé akce. Jsou to

Just Food: Dodává levné jídlo vyrobené z nepříliš kvalitních surovin.

Your Mama: Dodává středně drahé jídlo vyrobené z lepších surovin.

Flavour Haven: Dodává drahé jídlo z kvalitních surovin.

Napište pro každou z těcho společností funkci s jedním parametrem, který udává, pro kolik lidí se catering objednává. Funkce pak vrátí řetězec obsahující zprávu o tom že catering byl dodán a za jakou cenu. Například

catering od Flavour Haven pro 100 lidí za 300000 Kč

Vyzkoušjte si vaše funkce v konzoli. Poté napište funkci createEvent, která představuje vytvoření nějaké události s cateringem. Funkce na vstupu obdrží název události, počet lidí a funkci, pomocí které se má provést catering. Funkce createEvent pak vrátí zprávu ve smyslu

*/

/* 
Catering - úkol1

const justfood = (pocetPorci) => {
return `Vybrán Just Food catering pro $(pocetPorci) za ${Math.round(pocetPorci * 100)} Kč`
}

const yourMama = (pocetPorci) => {
return `Vybrán Your Mama catering pro $(pocetPorci) za ${Math.round(pocetPorci * 130)} Kč`
    }

const flavourHeaven = (pocetPorci) => {
return `Vybrán Flavour Heaven catering pro $(pocetPorci) za ${Math.round(pocetPorci * 160)} Kč`
            }

const createEvent = (nazevUdalosti, pocetPorci, catering) => {
return `Událost ${nazevUdalosti} o ${pocetPorci} hostech zajišťuje ${catering}`
            }
            
document.body.innerHTML = createEvent("Oslava 70. narozenin babičky Libušky", 45, "Your Mama")
*/

/*
Kostaka - ukol 2

let viditelneCislo = 1
const kostka = document.querySelector('.dice')
const pootocKostkou = () => {
	viditelneCislo = viditelneCislo + 1
	if (viditelneCislo === 7) {
		viditelneCislo = 1
	}
	kostka.src = `img/side${viditelneCislo}.svg`
}
document.addEventListener('keydown', pootocKostkou)
*/

