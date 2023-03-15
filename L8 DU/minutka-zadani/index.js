/* Zařiďte, aby minutka začala zvonit za pět vteřin po otevření stránky. Zvonění zařídíte tak, že k elementu budíku přídáte CSS třídu alarm--ring.

Nechte uživatele skrze prompt zadat kolik vteřin má uplynout než minutka začne zvonit.

Můžete zařídit i spuštění zvuku. Stačí ze stránky vybrat audio element a zavolat na něm metodu play. Abyste zvuk slyšeli, musíte po zadání času na stránku kliknout. Prohlížeč Chrome totiž brání stránkam přehrávat audio či video dokud uživatel se stránkou nějak neinteragoval.
Přidejte na stránku tlačítko, které umožní odpočet minutky zrušit dřív, než začne zvonit.

Káťa notes: Napíšu tlačítko na které uživatel klikne - interakce, Zjistím počet vteřin, napíšu fci setTimeout kde čas bude vstup z promptu, přidám tlačítko, které bude umět zastavit zvuk, budíku přidám třídu alarm ring která se přiřadí po čase z promptu */

//Zvonění po 5 vteřinách

/* const budikZvoneni = () => {
    const alarmElm = document.querySelector('.alarm');
    alarmElm.classList.add('alarm--ring');
    document.body.innerHTML = "Budík zvoní po 5 vteřinách";
}

setTimeout(budikZvoneni, 5000);*/

//Zjistit počet vteřin

let casovac = document.querySelector ("#alarmVstup");
let vstupUzivatelAlarm = Number(prompt("Za jak dlouho zazvoní budík? Zadej počet vteřin"));

alarmVstup.innerHTML = vstupUzivatelAlarm;
let pocetVterin = (vstupUzivatelAlarm * 1000)

//Spustit časovač

const budik = document.querySelector (".alarm");

setTimeout(() => {
	document.querySelector(".container").addClass(".alarm--ring")
}, pocetVterin)


//Ovládat vyzvánění

const prehravac = document.getElementById (".prehravac")
function mute(){
    prehravac.volume = 0;
    }


