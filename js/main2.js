/*Functions in JS*/

/*function savatchaniTekshir(uzatilganContainer =[78,"text"]){

    if (uzatilganContainer.length == 0){

        document.write("Savatchamiz ichida " + uzatilganContainer.length + " ta ma'lumot bor!");
    }

    else {
        document.write("Savatchamiz ichida " + uzatilganContainer.length + " dona ma'lumot bor!");
    }

}
let container = ["1234",1,2,3,4,5,6];

savatchaniTekshir(container);
*/


/*Date in JS*/

let sana = new Date();

sana.setFullYear(2011)
sana.setMonth(8)
sana.setDate(2)
/*
sana.setHours(17)
sana.setMinutes(40)
sana.setSeconds(1)
sana.setMilliseconds(10)
sana.setTime(26)
sana.setUTCFullYear(2011)
sana.setUTCMonth(5)
sana.setUTCDate(23)
sana.setUTCDay(4)
sana.setUTCHours(17)
sana.setUTCSeconds(1)
sana.setUTCMinutes(40)
sana.setUTCMilliseconds(10)
*/


let yil = sana.getFullYear();
let oy = sana.getMonth();
let kun  = sana.getDate();
let haftakuni = sana.getDay();
let hafta =["Yakshanba","Dushanba","Seshanba","Chorshanba","Payshanba","Juma","Shanba",];
let oylar = ["yanvar","Fevral","Mart","aprel","May", "Iyun","Iyul", "Avgust",
    "Sentabr","Oktabr","Noyabr","Dekabr"];
let soat = sana.getHours();
let minut = sana.getMinutes();
let secund = sana.getSeconds();
let millisecond = sana.getMilliseconds();
let vaqt = sana.getTime();
let timezoneOffset = sana.getTimezoneOffset();
let utcFullYear = sana.getUTCFullYear();
let utcMonth = sana.getUTCMonth();
let utc = sana.getUTCDate();
let utcDay = sana.getUTCDay();
let utcHours = sana.getUTCHours();
let utcSeconds = sana.getUTCSeconds();
let utcMinutes = sana.getUTCMinutes();
let utcMilliseconds = sana.getUTCMilliseconds();

document.write(yil + "-yil " + kun + "-" + oylar[oy]+ " haftaning " + hafta[haftakuni] + " kuni")