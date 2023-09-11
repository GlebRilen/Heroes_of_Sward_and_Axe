const hero = document.querySelector('#hero');
// var heroLeft = 480, heroTop = 240;
const metka = document.querySelector('#metka');
const ground = document.querySelector('#ground');
const putnik = document.querySelector('#putnik');
let battleWindow = true;
// var sechasBejit = false;
let arr =  ["440400","480400","480360","440360","440440","400440","400400","360400","320400","320440","360440","280440","240440","200480","240480","320480","360480","400480","480440","480480","520480","400520","360520","320520","480320","520360","560360","600360","520400","600400","640400","640360","680360","680400","600320","640320","680320","680280","600160","160240","160200","200200","240200","280200","320200","360200","640160","600200","400200","440200","480200","520200","560160","520160","480160","440160","400160","360160","320160","280160","240160","200160","160160","760160","800160","800200","320560","280560","240560","240600","280600","320600","360600","360560","400560","440560","440520","360640","320640","280640","240640","240680","200680","280680","320680","360680","520880","400920","640280","600280","560240","600240","640240","640200","680200","720200","720160","680160","400880","400840","440800","440840","480840","480800","440760","480760","480720","440720","440680","440640","480640","480680","520840","520800","520760","520720","520680","520640","520600","520560","560600","560560","560640","560680","560720","560760","560800","600560","600520","640520","680520","640560","280720","240720","200720","240760","440920","440880","480920","480880","520920","560200","520240","480240","440240","400240","360240","320240","600600","600640","640600","680600","680560","640680","720560","720520","720480","760480","760440","800440","800480","840440","800400","840400",
"840360","880360","880400","880440","200280","160280","280280","360280","680840","720840","760840","760880","720880","680880","640840","640800","680800","720800","720760","680760","640760","640720","960960","960840","960360","960320","960280","960240","960200","960160","960400","960440","960480",
"680680","680720","720720","720680","760720","760680","760640","800680","840680","800720","840640","800640","800600","840600","800560","840560","880560","880520","920560","880600","920600","920640","960640","960600","960560","760520","120120","200120","240120","160120","280120","320120","360120","400120","440120","480120","520120","560120","600120","640120","680120","720120","760120","800120","960520","960680","240240","200240","280240","840120","880120","920120","960120","120240","120280","120200","120160","120320","120360","120400","120440","120480","120520","120560","120600","120640","120680","120720","120760","120800","120840","120880","120920","120960","160960","200960","240960","280960","320960","360960","400960","440960","480960","520960","560960","600960","640960","680960","720960","760960","800960","840960","880960","920960","960720","960760","960800","960880","960920"];
////////////////////////////////////////////////////////////////

    // if(sechasBejit == false){
        document.getElementById('ground').addEventListener('click', nachatHodGeroya);
    // }
function nachatHodGeroya(ext){ 
        
    var vnutriGeroya = document.querySelector('#hero')
    var heroStyle = vnutriGeroya.getAttribute('style');
    var heroLeft = heroStyle.substring(6, 9),
        heroTop = heroStyle.substring(18, 21);
heroLeft = (Math.round(heroLeft/10))*10;
heroTop = (Math.round(heroTop/10))*10;
    var heroPosition = '' + heroLeft + heroTop;
    var korotkiyPut1 = [],  //Тот массив, по которому будем возвращаться в случае тупика
        korotkiyPut2 = [],  
        korotkiyPut = [],
        tutUjeBil = [];
    while(putnik.children.length >0){document.getElementById('metka').remove();}
    let otstupX = window.scrollX, otstupY = window.scrollY;
    let delX = (ext.clientX + otstupX) % 40, delY = (ext.clientY + otstupY) % 40, gdeX = ext.clientX + otstupX - delX, gdeY = ext.clientY + otstupY - delY;
    let deltaX = gdeX - heroLeft, deltaY = gdeY - heroTop,
    deltaXY = Math.abs(deltaX) - Math.abs(deltaY),
    menshee = Math.min(Math.abs(deltaX), Math.abs(deltaY));
    bolshee = Math.max(Math.abs(deltaX), Math.abs(deltaY)); ostatokPuti = bolshee - menshee;
    var gdeXString = '' + gdeX,
        gdeYString = '' + gdeY,
        mestoVstrechi = gdeXString + gdeYString;   //Координаты на карте уже в виде текста
       console.log(mestoVstrechi)
///////////////////////////////////////////////////////////////////////////////////////////////////
var kolvoMetok = document.querySelectorAll('.metka').length;
console.log(kolvoMetok);
 if(arr.indexOf(mestoVstrechi) == -1  && gdeX < 960 && gdeX > 120 && gdeY > 160 && gdeY < 960  && battleWindow == false){
//    sechasBejit = true;
    function postoi(massiv, cel){
    if(massiv == 'massiv1'){
        var targetX = gdeX, targetY = gdeY, delta = deltaXY;
    }
    if(massiv == 'massiv2'){
        var posledniElement = cel, targetX = posledniElement.substr(0, 3), targetY = posledniElement.substr(3, 3);
        delta = Math.abs(targetX - heroLeft) - Math.abs(targetY - heroTop)
    }
function prohod(){
if(korotkiyPut.length == 0){korotkiyPut[0] = heroPosition};
var currentPosition = korotkiyPut[korotkiyPut.length -1],
    currentPosX = currentPosition.substr(0, 3),
    currentPosY = currentPosition.substr(3, 3),
    puti = 0,
    granica = false;
    if(+currentPosX < 960 && +currentPosX > 100 && +currentPosY > 100 && +currentPosY < 960){granica = true}
    var vVerh = false, vPravo = false, vNiz = false, vLevo = false, vVerhLevo = false, vVerhPravo = false, vNizLevo = false, vNizPravo = false;       
 {  
if(arr.indexOf(+currentPosX + currentPosY -40 + '') == -1
                && tutUjeBil.indexOf(+currentPosX + currentPosY -40 + '') == -1
                && granica == true)
                    {puti = puti + 1; vVerh = true;}
            if(arr.indexOf(+currentPosX + 40 + currentPosY + '') == -1
                && tutUjeBil.indexOf(+currentPosX + 40 + currentPosY + '') == -1
                && granica == true)
                    {puti = puti + 1; vPravo = true;}
            if(arr.indexOf('' + (+currentPosX) + (+currentPosY + 40)) == -1
                && tutUjeBil.indexOf('' + (+currentPosX) + (+currentPosY + 40)) == -1
                && granica == true)
                    {puti = puti + 1; vNiz = true;}
            if(arr.indexOf(+currentPosX - 40 + currentPosY + '') == -1
                && tutUjeBil.indexOf(+currentPosX - 40 + currentPosY + '') == -1
                && granica == true)
                    {puti = puti + 1; vLevo = true;}
            if(arr.indexOf((+currentPosX - 40) + currentPosY -40 + '') == -1
                && tutUjeBil.indexOf((+currentPosX - 40) + currentPosY -40 + '') == -1
                && granica == true)
                    {puti = puti + 1; vVerhLevo = true;}
            if(arr.indexOf((+currentPosX + 40) + '' + (currentPosY -40)) == -1
                && tutUjeBil.indexOf((+currentPosX + 40) + '' + (currentPosY -40)) == -1
                && granica == true)
                    {puti = puti + 1; vVerhPravo = true;}
            if(arr.indexOf('' + (+currentPosX - 40) + (+currentPosY + 40)) == -1
                && tutUjeBil.indexOf('' + (+currentPosX - 40) + (+currentPosY + 40)) == -1
                && granica == true)
                    {puti = puti + 1; vNizLevo = true;}
            if(arr.indexOf('' + (+currentPosX + 40) + (+currentPosY + 40)) == -1
                && tutUjeBil.indexOf('' + (+currentPosX + 40) + (+currentPosY + 40)) == -1
                && granica == true)
                    {puti = puti + 1; vNizPravo = true;}
}
function dobavitHod(napravlenie){
    if(napravlenie == 'verh'){
        var nextPosToString = (+currentPosX) + '' + (currentPosY - 40) + '';
        tutUjeBil.push(nextPosToString);
        korotkiyPut.push(nextPosToString);
    }
    if(napravlenie == 'pravo'){
        var nextPosToString =  +currentPosX + 40 + currentPosY + '';
        tutUjeBil.push(nextPosToString);
        korotkiyPut.push(nextPosToString);
    }
    if(napravlenie == 'niz'){
        var nextPosToString = ('' + (+currentPosX) + (+currentPosY + 40));
        tutUjeBil.push(nextPosToString);
        korotkiyPut.push(nextPosToString);
    }
    if(napravlenie == 'levo'){
        var nextPosToString = +currentPosX - 40 + currentPosY + '';
        tutUjeBil.push(nextPosToString);
        korotkiyPut.push(nextPosToString);
    }
    if(napravlenie == 'verhLevo'){
        var nextPosToString = (+currentPosX - 40) + currentPosY -40 + '';
        tutUjeBil.push(nextPosToString);
        korotkiyPut.push(nextPosToString);
    }
    if(napravlenie == 'verhPravo'){
        var nextPosToString =  (+currentPosX + 40) + '' + (currentPosY -40);
        tutUjeBil.push(nextPosToString);
        korotkiyPut.push(nextPosToString);
    }
    if(napravlenie == 'nizLevo'){
        var nextPosToString = ('' + (+currentPosX - 40) + (+currentPosY + 40));
        tutUjeBil.push(nextPosToString);
        korotkiyPut.push(nextPosToString);

    }
    if(napravlenie == 'nizPravo'){
        var nextPosToString = '' + (+currentPosX + 40) + (+currentPosY + 40);
        tutUjeBil.push(nextPosToString);
        korotkiyPut.push(nextPosToString);
    }
}
if(puti > 0){
    /////////
        if(+targetX < +currentPosX && +targetY < +currentPosY && delta < 0){
                if(vVerhLevo == true){dobavitHod('verhLevo')}
                else if(vVerh == true){dobavitHod('verh')}
                else if(vLevo == true){dobavitHod('levo')}
                else if(vNizLevo == true){dobavitHod('nizLevo')}
                else if(vVerhPravo == true){dobavitHod('verhPravo')}
                else if(vNiz == true){dobavitHod('niz')}
                else if(vPravo == true){dobavitHod('pravo')}
                else if(vNizPravo == true){dobavitHod('nizPravo')}  }
        if(+targetX < +currentPosX && +targetY < +currentPosY && delta > 0){
                if(vVerhLevo == true){dobavitHod('verhLevo')} 
                else if(vLevo == true){dobavitHod('levo')}
                else if(vVerh == true){dobavitHod('verh')}
                else if(vNizLevo == true){dobavitHod('nizLevo')}
                else if(vVerhPravo == true){dobavitHod('verhPravo')}
                else if(vNiz == true){dobavitHod('niz')}
                else if(vPravo == true){dobavitHod('pravo')}
                else if(vNizPravo == true){dobavitHod('nizPravo')}}
        if(+targetX < +currentPosX && +targetY < +currentPosY && delta == 0){
                if(vVerhLevo == true){dobavitHod('verhLevo')}
                else if(vVerh == true){dobavitHod('verh')}
                else if(vLevo == true){dobavitHod('levo')}
                else if(vNizLevo == true){dobavitHod('nizLevo')}
                else if(vVerhPravo == true){dobavitHod('verhPravo')}
                else if(vNiz == true){dobavitHod('niz')}
                else if(vPravo == true){dobavitHod('pravo')}
                else if(vNizPravo == true){dobavitHod('nizPravo')}}
        if(+targetX < +currentPosX && +targetY > +currentPosY && delta < 0){
                if(vNizLevo == true){dobavitHod('nizLevo')} 
                else if(vNiz == true){dobavitHod('niz')}
                else if(vLevo == true){dobavitHod('levo')}
                else if(vNizPravo == true){dobavitHod('nizPravo')}
                else if(vVerhLevo == true){dobavitHod('verhLevo')}
                else if(vPravo == true){dobavitHod('pravo')}
                else if(vVerh == true){dobavitHod('verh')}
                else if(vVerhPravo == true){dobavitHod('verhPravo')}}
        if(+targetX < +currentPosX && +targetY > +currentPosY && delta > 0){
                if(vNizLevo == true){dobavitHod('nizLevo')}
                else if(vLevo == true){dobavitHod('levo')}
                else if(vNiz == true){dobavitHod('niz')}
                else if(vVerhLevo == true){dobavitHod('verhLevo')}
                else if(vNizPravo == true){dobavitHod('nizPravo')}
                else if(vVerh == true){dobavitHod('verh')}
                else if(vPravo == true){dobavitHod('pravo')}
                else if(vVerhPravo == true){dobavitHod('verhPravo')}            }
        if(+targetX < +currentPosX && +targetY > +currentPosY && delta == 0){
                if(vNizLevo == true){dobavitHod('nizLevo')}
                else if(vNiz == true){dobavitHod('niz')}
                else if(vLevo == true){dobavitHod('levo')}
                else if(vVerhLevo == true){dobavitHod('verhLevo')}
                else if(vNizPravo == true){dobavitHod('nizPravo')}
                else if(vVerh == true){dobavitHod('verh')}
                else if(vPravo == true){dobavitHod('pravo')}
                else if(vVerhPravo == true){dobavitHod('verhPravo')}            }
        if(+targetX < +currentPosX && +targetY == +currentPosY && delta < 0){
                if(vLevo == true){dobavitHod('levo')}
                else if(vVerhLevo == true){dobavitHod('verhLevo')}
                else if(vNizLevo == true){dobavitHod('nizLevo')}
                else if(vVerh == true){dobavitHod('verh')}
                else if(vNiz == true){dobavitHod('niz')}
                else if(vVerhPravo == true){dobavitHod('verhPravo')}
                else if(vNizPravo == true){dobavitHod('nizPravo')}
                else if(vPravo == true){dobavitHod('pravo')}            }
        if(+targetX < +currentPosX && +targetY == +currentPosY && delta > 0){
                if(vLevo == true){dobavitHod('levo')}
                else if(vVerhLevo == true){dobavitHod('verhLevo')}
                else if(vNizLevo == true){dobavitHod('nizLevo')}
                else if(vVerh == true){dobavitHod('verh')}
                else if(vNiz == true){dobavitHod('niz')}
                else if(vVerhPravo == true){dobavitHod('verhPravo')}
                else if(vNizPravo == true){dobavitHod('nizPravo')}
                else if(vPravo == true){dobavitHod('pravo')}            }
        if(+targetX < +currentPosX && +targetY == +currentPosY && delta == 0){
                if(vLevo == true){dobavitHod('levo')}
                else if(vVerhLevo == true){dobavitHod('verhLevo')}
                else if(vNizLevo == true){dobavitHod('nizLevo')}
                else if(vVerh == true){dobavitHod('verh')}
                else if(vNiz == true){dobavitHod('niz')}
                else if(vVerhPravo == true){dobavitHod('verhPravo')}
                else if(vNizPravo == true){dobavitHod('nizPravo')}
                else if(vPravo == true){dobavitHod('pravo')}            }
        if(+targetX > +currentPosX && +targetY < +currentPosY && delta < 0){
                    if(vVerhPravo == true){dobavitHod('verhPravo')}
                    else if(vVerh == true){dobavitHod('verh')}
                    else if(vPravo == true){dobavitHod('pravo')}
                    else if(vVerhLevo == true){dobavitHod('verhLevo')}
                    else if(vNizPravo == true){dobavitHod('nizPravo')}
                    else if(vLevo == true){dobavitHod('levo')}
                    else if(vNiz == true){dobavitHod('niz')}
                    else if(vNizLevo == true){dobavitHod('nizLevo')}  }
                if(+targetX > +currentPosX && +targetY < +currentPosY && delta > 0){
                    if(vVerhPravo == true){dobavitHod('verhPravo')}
                    else if(vPravo == true){dobavitHod('pravo')}
                    else if(vVerh == true){dobavitHod('verh')}
                    else if(vNizPravo == true){dobavitHod('nizPravo')}
                    else if(vVerhLevo == true){dobavitHod('verhLevo')}
                    else if(vLevo == true){dobavitHod('levo')}
                    else if(vNiz == true){dobavitHod('niz')}
                    else if(vNizLevo == true){dobavitHod('nizLevo')}  }
                if(+targetX > +currentPosX && +targetY < +currentPosY && delta == 0){
                    if(vVerhPravo == true){dobavitHod('verhPravo')}
                    else if(vPravo == true){dobavitHod('pravo')}
                    else if(vVerh == true){dobavitHod('verh')}
                    else if(vNizPravo == true){dobavitHod('nizPravo')}
                    else if(vVerhLevo == true){dobavitHod('verhLevo')}
                    else if(vLevo == true){dobavitHod('levo')}
                    else if(vNiz == true){dobavitHod('niz')}
                    else if(vNizLevo == true){dobavitHod('nizLevo')}  }
                if(+targetX > +currentPosX && +targetY > +currentPosY && delta < 0){
                    if(vNizPravo == true){dobavitHod('nizPravo')} 
                    else if(vNiz == true){dobavitHod('niz')}
                    else if(vPravo == true){dobavitHod('pravo')}
                    else if(vNizLevo == true){dobavitHod('nizLevo')}
                    else if(vVerhPravo == true){dobavitHod('verhPravo')}
                    else if(vLevo == true){dobavitHod('levo')}
                    else if(vVerh == true){dobavitHod('verh')}
                    else if(vVerhLevo == true){dobavitHod('verhLevo')}}
                if(+targetX > +currentPosX && +targetY > +currentPosY && delta > 0){
                    if(vNizPravo == true){dobavitHod('nizPravo')}
                    else if(vPravo == true){dobavitHod('pravo')}
                    else if(vNiz == true){dobavitHod('niz')}
                    else if(vVerhPravo == true){dobavitHod('verhPravo')}
                    else if(vNizLevo == true){dobavitHod('nizLevo')}
                    else if(vLevo == true){dobavitHod('levo')}
                    else if(vVerh == true){dobavitHod('verh')}
                    else if(vVerhLevo == true){dobavitHod('verhLevo')}            }
                if(+targetX > +currentPosX && +targetY > +currentPosY && delta == 0){
                    if(vNizPravo == true){dobavitHod('nizPravo')}
                    else if(vNiz == true){dobavitHod('niz')}
                    else if(vPravo == true){dobavitHod('pravo')}
                    else if(vNizLevo == true){dobavitHod('nizLevo')}
                    else if(vVerhPravo == true){dobavitHod('verhPravo')}
                    else if(vLevo == true){dobavitHod('levo')}
                    else if(vVerh == true){dobavitHod('verh')}
                    else if(vVerhLevo == true){dobavitHod('verhLevo')}            }
                if(+targetX > +currentPosX && +targetY == +currentPosY && delta < 0){
                    if(vPravo == true){dobavitHod('pravo')}
                    else if(vVerhPravo == true){dobavitHod('verhPravo')}
                    else if(vNizPravo == true){dobavitHod('nizPravo')}
                    else if(vVerh == true){dobavitHod('verh')}
                    else if(vNiz == true){dobavitHod('niz')}
                    else if(vVerhLevo == true){dobavitHod('verhLevo')}
                    else if(vNizLevo == true){dobavitHod('nizLevo')}
                    else if(vLevo == true){dobavitHod('levo')}            }
                 if(+targetX > +currentPosX && +targetY == +currentPosY && delta > 0){
                    if(vPravo == true){dobavitHod('pravo')}
                    else if(vVerhPravo == true){dobavitHod('verhPravo')}
                    else if(vNizPravo == true){dobavitHod('nizPravo')}
                    else if(vVerh == true){dobavitHod('verh')}
                    else if(vNiz == true){dobavitHod('niz')}
                    else if(vVerhLevo == true){dobavitHod('verhLevo')}
                    else if(vNizLevo == true){dobavitHod('nizLevo')}
                    else if(vLevo == true){dobavitHod('levo')}            }
                if(+targetX > +currentPosX && +targetY == +currentPosY && delta == 0){
                    if(vPravo == true){dobavitHod('pravo')}
                    else if(vVerhPravo == true){dobavitHod('verhPravo')}
                    else if(vNizPravo == true){dobavitHod('nizPravo')}
                    else if(vVerh == true){dobavitHod('verh')}
                    else if(vNiz == true){dobavitHod('niz')}
                    else if(vVerhLevo == true){dobavitHod('verhLevo')}
                    else if(vNizLevo == true){dobavitHod('nizLevo')}
                    else if(vLevo == true){dobavitHod('levo')}            }
                if(+targetX == +currentPosX && +targetY < +currentPosY){
                        if(vVerh == true){dobavitHod('verh')}
                        else if(vVerhLevo == true){dobavitHod('verhLevo')}
                        else if(vVerhPravo == true){dobavitHod('verhPravo')}
                        else if(vLevo == true){dobavitHod('levo')}
                        else if(vPravo == true){dobavitHod('pravo')}
                        else if(vNizLevo == true){dobavitHod('nizLevo')}
                        else if(vNizPravo == true){dobavitHod('nizPravo')}
                        else if(vNiz == true){dobavitHod('niz')}  }
                if(+targetX == +currentPosX && +targetY > +currentPosY){
                        if(vNiz == true){dobavitHod('niz')} 
                        else if(vNizLevo == true){dobavitHod('nizLevo')}
                        else if(vNizPravo == true){dobavitHod('nizPravo')}
                        else if(vPravo == true){dobavitHod('pravo')}
                        else if(vLevo == true){dobavitHod('levo')}
                        else if(vVerhPravo == true){dobavitHod('verhPravo')}
                        else if(vVerhLevo == true){dobavitHod('verhLevo')}
                        else if(vVerh == true){dobavitHod('verh')}}
}
else if(puti == 0){
    korotkiyPut.pop(korotkiyPut.length - 1)
    // console.log('Элемент ' + korotkiyPut.length + 'был удален')
}
//
if(massiv == 'massiv1'){
    korotkiyPut1.push(korotkiyPut[korotkiyPut.length - 1]);  //Тот массив, по которому будем возвращаться в случае тупика
};
if(massiv == 'massiv2'){
    korotkiyPut2.push(korotkiyPut[korotkiyPut.length - 1]);
}
}
prohod();
}
while(korotkiyPut[korotkiyPut.length - 1] != mestoVstrechi){
    postoi('massiv1', mestoVstrechi);
}
korotkiyPut = [];
    tutUjeBil = [];
/////////////////
function sokratitPut(){
    for(var i=0; i <= korotkiyPut1.length - 1; i++){
        var krainiElement = korotkiyPut1[korotkiyPut1.length - 1 - i];
        while(korotkiyPut2[korotkiyPut2.length - 1] != krainiElement){
                postoi('massiv2', krainiElement);
            }
            if(korotkiyPut2.length < korotkiyPut1.length - i){
                    var altArr = korotkiyPut2;
                    var ostatokMassiva = korotkiyPut1.length - i;
                    for(j = ostatokMassiva; j <= korotkiyPut1.length - 1; j++){
                        altArr.push(korotkiyPut1[j]);
                    }
                    korotkiyPut1 = altArr;
                    vneshniyArr = altArr;
            }
         korotkiyPut = [];
         tutUjeBil = [];   
         korotkiyPut2 = [];
}
}
sokratitPut();
/////////////
for(i=0;i< korotkiyPut1.length-1;i++){

    if(i> 0){ var currPosX = korotkiyPut1[i].substr(0, 3),
        currPosY = korotkiyPut1[i].substr(3, 3),
        curX = +currPosX, curY = +currPosY;
    var currPosPredX = korotkiyPut1[i-1].substr(0, 3),
        currPosPredY = korotkiyPut1[i-1].substr(3, 3),
        curPredX = +currPosPredX, curPredY = +currPosPredY;
    var currPosSledX = korotkiyPut1[i+1].substr(0, 3),
        currPosSledY = korotkiyPut1[i+1].substr(3, 3),
        curSledX = +currPosSledX, curSledY = +currPosSledY;
}
            if(i == 0){
                var currPosX = korotkiyPut1[0].substr(0, 3),
                    currPosY = korotkiyPut1[0].substr(3, 3),
                    curX = +currPosX, curY = +currPosY;
                var currPosPredX = heroPosition.substr(0, 3),
                    currPosPredY = heroPosition.substr(3, 3),
                    curPredX = +currPosPredX, curPredY = +currPosPredY;
                var currPosSledX = korotkiyPut1[i+1].substr(0, 3),
                    currPosSledY = korotkiyPut1[i+1].substr(3, 3),
                    curSledX = +currPosSledX, curSledY = +currPosSledY;   
            } 
            var strelka = 'Levo-Pravo';
    {if(curX == curPredX && curX == curSledX && curY < curPredY && curY > curSledY){strelka = 'Niz-Verh';}
    if(curX == curPredX && curX > curSledX && curY < curPredY && curY > curSledY){strelka = 'Niz-VerhLevo';}
    if(curX == curPredX && curX < curSledX && curY < curPredY && curY > curSledY){strelka = 'Niz-VerhPravo';}
    if(curX < curPredX && curX > curSledX && curY < curPredY && curY > curSledY){strelka = 'NizPravo-VerhLevo';}
    if(curX < curPredX && curX == curSledX && curY < curPredY && curY > curSledY){strelka = 'NizPravo-Verh';}
    if(curX < curPredX && curX > curSledX && curY < curPredY && curY == curSledY){strelka = 'NizPravo-Levo';}
    if(curX < curPredX && curX > curSledX && curY == curPredY && curY < curSledY){strelka = 'Pravo-NizLevo';}
    if(curX < curPredX && curX > curSledX && curY == curPredY && curY == curSledY){strelka = 'Pravo-Levo';}
    if(curX < curPredX && curX > curSledX && curY == curPredY && curY > curSledY){strelka = 'Pravo-VerhLevo';}
    if(curX < curPredX && curX > curSledX && curY > curPredY && curY == curSledY){strelka = 'VerhPravo-Levo';}
    if(curX < curPredX && curX > curSledX && curY > curPredY && curY < curSledY){strelka = 'VerhPravo-NizLevo';}
    if(curX < curPredX && curX == curSledX && curY > curPredY && curY < curSledY){strelka = 'VerhPravo-Niz';}
    if(curX == curPredX && curX < curSledX && curY > curPredY && curY < curSledY){strelka = 'Verh-NizPravo';}
    if(curX == curPredX && curX == curSledX && curY > curPredY && curY < curSledY){strelka = 'Verh-Niz';}
    if(curX == curPredX && curX > curSledX && curY > curPredY && curY < curSledY){strelka = 'Verh-NizLevo';}
    if(curX > curPredX && curX < curSledX && curY > curPredY && curY == curSledY){strelka = 'VerhLevo-Pravo';}
    if(curX > curPredX && curX < curSledX && curY > curPredY && curY < curSledY){strelka = 'VerhLevo-NizPravo';}
    if(curX > curPredX && curX == curSledX && curY > curPredY && curY < curSledY){strelka = 'VerhLevo-Niz';}
    if(curX > curPredX && curX < curSledX && curY == curPredY && curY == curSledY){strelka = 'Levo-Pravo';}
    if(curX > curPredX && curX < curSledX && curY == curPredY && curY > curSledY){strelka = 'Levo-VerhPravo';}
    if(curX > curPredX && curX < curSledX && curY == curPredY && curY < curSledY){strelka = 'Levo-NizPravo';}
    if(curX > curPredX && curX == curSledX && curY < curPredY && curY > curSledY){strelka = 'NizLevo-Verh';}
    if(curX > curPredX && curX < curSledX && curY < curPredY && curY > curSledY){strelka = 'NizLevo-VerhPravo';}
    if(curX > curPredX && curX < curSledX && curY < curPredY && curY == curSledY){strelka = 'NizLevo-Pravo';}}
    metka.style.left = `${curX}px`; metka.style.top = `${curY}px`;
    metka.style.background = `url('./image/Map/Napravlenie/${strelka}.png') no-repeat`;
    metka.style.display = 'block';
    metka.classList.add('metka');
    putnik.appendChild(metka.cloneNode()); 
}
for(i=korotkiyPut1.length -1;i<korotkiyPut1.length;i++){
    var ono = korotkiyPut1[i],
            onoX = ono.substr(0, 3),
            onoX = +onoX,
            onoY = ono.substr(3, 3),
            onoY = +onoY;
    metka.style.left = `${onoX}px`; metka.style.top = `${onoY}px`;
        metka.style.background = `url('./image/Map/Metka.png') no-repeat`;
        metka.style.display = 'block';
        metka.classList.add('metka');
        putnik.appendChild(metka.cloneNode());
    if(i==korotkiyPut1.length -1) var moveListener = setInterval(move, 7);


}
                             
function move(){
    console.log('Листенер удален')
    document.getElementById('ground').removeEventListener('click', nachatHodGeroya);
    if(korotkiyPut1.length > 0){
        var tekPosX = korotkiyPut1[0].substr(0, 3),
            tekPosY = korotkiyPut1[0].substr(3, 3),
            tekPosX = +tekPosX, tekPosY = +tekPosY;
 
    if(heroLeft < tekPosX && heroTop < tekPosY){heroLeft++; heroTop++;  hero.style.animationName = 'movedownright'}
    else if(heroLeft < tekPosX && heroTop > tekPosY){heroLeft++; heroTop--; hero.style.animationName = 'moveupright'}
    else if(heroLeft < tekPosX && heroTop == tekPosY){heroLeft++; hero.style.animationName = 'moveright'}
    else if(heroLeft > tekPosX && heroTop < tekPosY){heroLeft--; heroTop++; hero.style.animationName = 'movedownleft'}
    else if(heroLeft > tekPosX && heroTop > tekPosY){heroLeft--; heroTop--; hero.style.animationName = 'moveupleft'}
    else if(heroLeft > tekPosX && heroTop == tekPosY){heroLeft--; hero.style.animationName = 'moveleft'}
    else if(heroLeft == tekPosX && heroTop < tekPosY){heroTop++; hero.style.animationName = 'movedown'}
    else if(heroLeft == tekPosX && heroTop > tekPosY){heroTop--; hero.style.animationName = 'moveup'}
    else if(heroLeft == tekPosX && heroTop == tekPosY){korotkiyPut1.shift();  putnik.children[0].remove();
        if(korotkiyPut1.length == 0){
            clearInterval(moveListener, 7);
            //  sechasBejit = false;
             document.getElementById('ground').addEventListener('click', nachatHodGeroya);
            console.log('Листенер добавлен')
        if(hero.style.animationName == 'movedown') hero.style.animationName = 'stopdown';
        else if(hero.style.animationName == 'movedownleft') hero.style.animationName = 'stopdownleft';
        else if(hero.style.animationName == 'moveleft') hero.style.animationName = 'stopleft';
        else if(hero.style.animationName == 'moveupleft') hero.style.animationName = 'stopupleft';
        else if(hero.style.animationName == 'moveup') hero.style.animationName = 'stopup';
        else if(hero.style.animationName == 'moveupright') hero.style.animationName = 'stopupright';
        else if(hero.style.animationName == 'moveright') hero.style.animationName = 'stopright';
        else if(hero.style.animationName == 'movedownright') hero.style.animationName = 'stopdownright';
       
    }            
    }
     hero.style.left = `${heroLeft}px`; hero.style.top = `${heroTop}px`;
    }
}



    // setInterval(move, 7);





var lop = heroTop;
document.addEventListener("keydown", function(event) {
    if (event.keyCode == 87){
        hero.style.top = `${lop}px`;
        lop++;
      }
    })
}
}



function vsePregradi(){
for (i=0; i<arr.length;i++){
    var currentPosition = arr[i],
    currentPosX = currentPosition.substr(0, 3),
    currentPosY = currentPosition.substr(3, 3);

    putnik.appendChild(metka.cloneNode()); 
       metka.style.left = `${currentPosX}px`;
    metka.style.top = `${currentPosY}px`;
    metka.style.display = 'block';
}
}
// vsePregradi();

var dob = false, ubr = false;
document.addEventListener('keydown', function(rot){
    if(rot.keyCode == 16) var dob = true;
    if(rot.keyCode == 17) var ubr = true;


document.addEventListener('click', function(ext){
    // console.log(ext.clientX);

    let otstupX = window.scrollX, otstupY = window.scrollY;
    let delX = (ext.clientX + otstupX) % 40, 
        delY = (ext.clientY + otstupY) % 40, 
        gdeX = ext.clientX + otstupX - delX, 
        gdeY = ext.clientY + otstupY - delY,
     dobavitPregradu = '' + gdeX + gdeY;
     var ubratPregradu = arr.indexOf(dobavitPregradu);
    if(ubratPregradu >= 0 && ubr == true) arr[ubratPregradu] = '000000';
    if(ubratPregradu == -1) arr.push(dobavitPregradu);
       vsePregradi();
});
});
////////////BattleField///////////////////////////
{let cell = document.querySelector('#cell'),
    allcells = document.querySelector('#allcells'),
    pickmanBattle = document.querySelector('#pickmanBattle'),
    pidkmanlives = document.querySelector('#pidkmanlives');

var gnolWin = false, pickmanWin = false;
let battleCell = ['300280','280240','300200','280160','300120','340280','320240','340200','320160','340120','380280','360240','380200','360160','380120','420280','400240','420200','400160','420120','460280','440240','460200','440160','460120','500280','480240','500200','480160','500120','540280','520240','540200','520160','540120','580280','560240','580200','560160','580120','620280','600240','620200','600160','620120','660280','640240','660200','640160','660120','700280','680240','700200','680160','700120','740200','720160','740120','780280','780200','760160','780120','820280','800240','820200','800160','820120','860280','840240','860200','840160','860120','900280','880240','900200','880160','900120','940280','920240','940200','920160','940120','280320','320320','360320','400320','440320','480320','520320','560320','600320','640320','680320','760320','800320','840320','880320','920320','300360','340360','380360','420360','460360','500360','540360','580360','620360','660360','700360','900360','940360',"280400","320400","360400","400400","440400","480400","520400","560400","600400","640400","680400","720400","760400","800400","840400","880400","920400","300440","340440","380440","420440","460440","500440","540440","580440","620440","660440","700440","740440","780440","820440","860440","900440","940440","280480","320480","360480","400480","440480","480480","520480","560480","600480","640480","680480","720480","760480","800480","840480","880480","920480"];
while(allcells.children.length > 0){document.getElementById('cell').remove();}

function dobabitListenerNaGnola(){
        var gnoliBattleStyle = document.querySelector('#gnoliBattle').getAttribute('style'),
            gnolBattleLeft = +gnoliBattleStyle.substring(6, 9),
            gnolBattleTop = +gnoliBattleStyle.substring(18, 21);
            document.getElementById('pickmanBattle').className = 'active';
        goThere(gnolBattleLeft, gnolBattleTop);
    };

function postroitCell(){
  
document.getElementById('gnoliBattle').addEventListener('click', dobabitListenerNaGnola);
var pickmanBattleStyle = document.querySelector('#pickmanBattle').getAttribute('style'),
    pickmanBattleLeft = +pickmanBattleStyle.substring(6, 9),
    pickmanBattleTop = +pickmanBattleStyle.substring(18, 21);

    var skorost = 120;
        for(i=0;i<battleCell.length;i++){
            var vono = battleCell[i],
                    vonoX = vono.substr(0, 3),
                    vonoY = vono.substr(3, 3),
                    vonoX = +vonoX,
                    vonoY = +vonoY,
                    skorostGepatenuza = (((pickmanBattleLeft - skorost) - pickmanBattleLeft)*((pickmanBattleLeft - skorost) - pickmanBattleLeft)) + (((pickmanBattleTop - skorost) - pickmanBattleTop)*((pickmanBattleTop - skorost) - pickmanBattleTop)),
                    cellGepatenuza = ((pickmanBattleLeft - vonoX)*(pickmanBattleLeft - vonoX)) + ((pickmanBattleTop - vonoY)*(pickmanBattleTop - vonoY));
            if(cellGepatenuza < skorostGepatenuza){
                cell.style.left = `${vonoX}px`; cell.style.top = `${vonoY}px`;
                cell.style.background = `url('./image/Battle/Cell2.png') no-repeat`;
                cell.style.display = 'block';
                allcells.appendChild(cell.cloneNode());
            }    
        }

        for(i=0; i < allcells.children.length; i++){
            let sota = allcells.children[i];
                sota.addEventListener('click', function(){
                    
                    let cellCoords = this.getAttribute('style'),
                        cellX = +cellCoords.substring(6, 9),
                        cellY = +cellCoords.substring(18, 21);
                            
                    document.getElementById('pickmanBattle').className = 'active';
                    document.getElementById('pickmanlivestable').style.display = 'none';
                    document.getElementById('pidkmanlives').style.display = 'none';
                    document.getElementById('pickmanBattle').style.width = '60px';
                        goThere(cellX, cellY);
                        console.log(cellX, cellY);
                })
        }

}


setTimeout(postroitCell, 1);

function goThere(cellLeft, cellTop){
    while(allcells.children.length > 0) document.getElementById('cell').remove();

    var pickmanBattleStyle = document.querySelector('#pickmanBattle').getAttribute('style'),
            pickmanBattleLeft = +pickmanBattleStyle.substring(6, 9),
            pickmanBattleTop = +pickmanBattleStyle.substring(18, 21);
    var gnoliBattleStyle = document.querySelector('#gnoliBattle').getAttribute('style'),
            gnolBattleLeft = +gnoliBattleStyle.substring(6, 9),
            gnolBattleTop = +gnoliBattleStyle.substring(18, 21);
           
var vozleGnola = false;
  if(cellLeft == gnolBattleLeft && cellTop == gnolBattleTop){
    if(gnolBattleLeft > pickmanBattleLeft && gnolBattleTop > pickmanBattleTop) cellLeft -= 20, cellTop -= 40;
    if(gnolBattleLeft > pickmanBattleLeft && gnolBattleTop < pickmanBattleTop) cellLeft -= 20, cellTop += 40;
    if(gnolBattleLeft > pickmanBattleLeft && gnolBattleTop == pickmanBattleTop) cellLeft -= 40, cellTop = cellTop;
    if(gnolBattleLeft < pickmanBattleLeft && gnolBattleTop > pickmanBattleTop) cellLeft += 20, cellTop -= 40;
    if(gnolBattleLeft < pickmanBattleLeft && gnolBattleTop < pickmanBattleTop) cellLeft += 20, cellTop += 40;
    if(gnolBattleLeft < pickmanBattleLeft && gnolBattleTop == pickmanBattleTop) cellLeft += 40, cellTop = cellTop;
    if(gnolBattleLeft == pickmanBattleLeft && gnolBattleTop > pickmanBattleTop) cellLeft -= 20, cellTop -= 40;
    if(gnolBattleLeft == pickmanBattleLeft && gnolBattleTop < pickmanBattleTop) cellLeft += 20, cellTop += 40;
    vozleGnola = true;
   
}
 if(vozleGnola === true && pickmanBattleLeft == cellLeft && pickmanBattleTop == cellTop && document.getElementById('pickmanBattle').className === 'active'){
    pickmanKick();
   }  

if(document.getElementById('pickmanBattle').className === 'active') {
    var intervalPickmanGo = setInterval(goThereSlowly, 10);
}


    
function pickmanKick(){

        if(gnolBattleLeft < pickmanBattleLeft) {
            document.getElementById('pickmanBattle').style.animation = 'pickmanKickLeft 0.5s 1 linear';
            document.getElementById('pickmanBattle').style.margin = '-50px -73px';
        }
        if(gnolBattleLeft >= pickmanBattleLeft) {
            document.getElementById('pickmanBattle').style.animation = 'pickmanKickRight 0.5s 1 linear';
            document.getElementById('pickmanBattle').style.margin = '-60px -23px';
        
        }
        document.getElementById('pickmanBattle').style.width = '130px';
        document.getElementById('pickmanBattle').style.height = '100px';
        document.getElementById('pickmanBattle').className = '';

            function gnolPain(){
                document.getElementById('gnollives').textContent -= 1;
                if(document.getElementById('gnollives').textContent > 0){
                    if(gnolBattleLeft < pickmanBattleLeft){
                        document.getElementById('gnoliBattle').style.animation = 'gnoliPainRight 400ms 1 linear';
                        document.getElementById('gnoliBattle').style.width = '85px';
                        document.getElementById('gnoliBattle').style.height = '100px';
                        document.getElementById('gnoliBattle').style.margin = '-38px -27px';
        
                    }
                    if(gnolBattleLeft >= pickmanBattleLeft){
                        document.getElementById('gnoliBattle').style.animation = 'gnoliPainLeft 400ms 1 linear';
                        document.getElementById('gnoliBattle').style.width = '85px';
                        document.getElementById('gnoliBattle').style.height = '100px';
                        document.getElementById('gnoliBattle').style.margin = '-38px -15px';
                    }
                }
                if(document.getElementById('gnollives').textContent <= 0){
                    pickmanWin = true;
                    setTimeout(battleEnd, 3000);
                }
            }
           
                setTimeout(gnolPain, 300);
                setTimeout(ostanovitPickman, 500);
             
}
    
function ostanovitPickman(){
                    console.log('put zaverchen')   
                    document.getElementById('pickmanBattle').style.animation = 'pickmanStandRight 1s infinite linear'; 
                    document.getElementById('pickmanBattle').className = '';
                    document.getElementById('pickmanBattle').style.margin = '-65px -3px';
                    document.getElementById('pickmanlivestable').style.display = 'block';
                    document.getElementById('pidkmanlives').style.display = 'block';
                    document.getElementById('pickmanBattle').style.width = '48px';
                    document.getElementById('gnoliBattle').className = 'active';
                    if(document.getElementById('gnollives').textContent > 0){
                        setTimeout(gnolHodit, 200);
                    }
                    if(document.getElementById('gnollives').textContent <= 0){
                        document.getElementById('gnoliBattle').style.margin = '-50px -10px';
                        document.getElementById('gnoliBattle').style.animation = 'gnoliKill 400ms 1 linear';
                        document.getElementById('gnoliBattle').style.width = '80px';
                        document.getElementById('gnoliBattle').style.height = '100px';
                        document.getElementById('zatemnenie').style.display = 'block';         
                        document.getElementById('zatemnenie').style.animation = 'zatemnenie 3s 1 linear';
                        document.getElementById('gnollivestable').style.display = 'none';  
                        document.getElementById('gnollives').style.display = 'none'; 
                        function gnolRip(){
                            document.getElementById('gnoliBattle').style.animation = 'gnolRip 400ms infinite linear';
                        }
                        setTimeout(gnolRip, 400);
                    }
}

function goThereSlowly(){
    if(pickmanBattleLeft <= cellLeft){
        document.getElementById('pickmanBattle').style.animation = 'pickmanGoRight 0.5s infinite linear';
    }
    if(pickmanBattleLeft > cellLeft){
        document.getElementById('pickmanBattle').style.animation = 'pickmanGoLeft 0.5s infinite linear';
    }


    if(pickmanBattleLeft != cellLeft || pickmanBattleTop != cellTop){
        if(pickmanBattleLeft < cellLeft){pickmanBattleLeft++;}
        if(pickmanBattleLeft > cellLeft){pickmanBattleLeft--;}
        if(pickmanBattleTop > cellTop){pickmanBattleTop--;}
        if(pickmanBattleTop < cellTop){pickmanBattleTop++;}
        if(pickmanBattleLeft == cellLeft){pickmanBattleLeft = pickmanBattleLeft}
        if(pickmanBattleTop == cellTop){pickmanBattleTop = pickmanBattleTop}
        pickmanBattle.style.left = `${pickmanBattleLeft}px`;
        pickmanBattle.style.top = `${pickmanBattleTop}px`;
           
        
        if(pickmanBattleLeft == cellLeft && pickmanBattleTop == cellTop){
            if(vozleGnola == true){
                clearInterval(intervalPickmanGo);
                pickmanKick();
            }else if(vozleGnola == false){
                clearInterval(intervalPickmanGo);
                ostanovitPickman();
            }
           
            }
    }
}
}
////////////////gnolHodit();//////////////
function gnolHodit(){
    document.getElementById('gnoliBattle').removeEventListener('click', dobabitListenerNaGnola);
    document.getElementById('gnoliBattle').className === '';
    var gnoliBattleStyle = document.querySelector('#gnoliBattle').getAttribute('style'),
        gnolBattleLeft = +gnoliBattleStyle.substring(6, 9),
        gnolBattleTop = +gnoliBattleStyle.substring(18, 21),
        gnoliBattle = document.querySelector('#gnoliBattle');
    var pickmanBattleStyle = document.querySelector('#pickmanBattle').getAttribute('style'),
        pickmanBattleLeft = +pickmanBattleStyle.substring(6, 9),
        pickmanBattleTop = +pickmanBattleStyle.substring(18, 21);
    var skorostGnol = 100,
        gnolCell = [];
                for(i=0;i<battleCell.length;i++){
                    var vono = battleCell[i],
                            vonoX = vono.substr(0, 3),
                            vonoY = vono.substr(3, 3),
                            vonoX = +vonoX,
                            vonoY = +vonoY,
                            skorostGepatenuza = (((gnolBattleLeft - skorostGnol) - gnolBattleLeft)*((gnolBattleLeft - skorostGnol) - gnolBattleLeft)) + (((gnolBattleTop - skorostGnol) - gnolBattleTop)*((gnolBattleTop - skorostGnol) - gnolBattleTop)),
                            cellGepatenuza = ((gnolBattleLeft - vonoX)*(gnolBattleLeft - vonoX)) + ((gnolBattleTop - vonoY)*(gnolBattleTop - vonoY));
                    if(cellGepatenuza < skorostGepatenuza){
                        gnolCell.push(battleCell[i]);
                    }    
                }
                var nomerCell = 9999990099999;
                    massCerkanoCell = 99999999900999999999;
                for (i=0;i<gnolCell.length;i++){
                    var vono = gnolCell[i],
                            vonoX = vono.substr(0, 3),
                            vonoY = vono.substr(3, 3),
                            vonoX = +vonoX,
                            vonoY = +vonoY,
                            rasstoyanieDoPickman = ((vonoX - pickmanBattleLeft)*(vonoX - pickmanBattleLeft)) + ((vonoY - pickmanBattleTop)*(vonoY - pickmanBattleTop));
                        if(massCerkanoCell > rasstoyanieDoPickman){
                            massCerkanoCell = rasstoyanieDoPickman;
                            nomerCell = i;
                        }
                       
                }
                        var cerkanoCell = gnolCell[nomerCell],
                            gnolCellX = +cerkanoCell.substr(0,3),
                            gnolCellY = +cerkanoCell.substr(3,3);
var vozlePickman = false;
if(gnolCellX == pickmanBattleLeft && gnolCellY == pickmanBattleTop){
    if(gnolBattleLeft > pickmanBattleLeft && gnolBattleTop > pickmanBattleTop) gnolCellX += 20, gnolCellY += 40;
    if(gnolBattleLeft > pickmanBattleLeft && gnolBattleTop < pickmanBattleTop) gnolCellX += 20, gnolCellY -= 40;
    if(gnolBattleLeft > pickmanBattleLeft && gnolBattleTop == pickmanBattleTop) gnolCellX += 40, gnolCellY = gnolCellY;
    if(gnolBattleLeft < pickmanBattleLeft && gnolBattleTop > pickmanBattleTop) gnolCellX -= 20, gnolCellY += 40;
    if(gnolBattleLeft < pickmanBattleLeft && gnolBattleTop < pickmanBattleTop) gnolCellX -= 20, gnolCellY -= 40;
    if(gnolBattleLeft < pickmanBattleLeft && gnolBattleTop == pickmanBattleTop) gnolCellX -= 40, gnolCellY = gnolCellY;
    if(gnolBattleLeft == pickmanBattleLeft && gnolBattleTop > pickmanBattleTop) gnolCellX += 20, gnolCellY += 40;
    if(gnolBattleLeft == pickmanBattleLeft && gnolBattleTop < pickmanBattleTop) gnolCellX -= 20, gnolCellY -= 40;
    vozlePickman = true;
    
}
document.getElementById('gnoliBattle').className === 'active';    

function gnolKick(){
    
    console.log('gnolKick');
    if(gnolBattleLeft >= pickmanBattleLeft) document.getElementById('gnoliBattle').style.animation = 'gnoliKickLeft 0.5s 1 linear';
    if(gnolBattleLeft < pickmanBattleLeft) document.getElementById('gnoliBattle').style.animation = 'gnoliKickRight 0.5s 1 linear';
    
    document.getElementById('gnoliBattle').style.width = '90px';
    document.getElementById('gnoliBattle').style.height = '100px';
    document.getElementById('gnoliBattle').style.margin = '-60px -23px';
    document.getElementById('gnoliBattle').className = '';
    
        function pickmanPain(){
            document.getElementById('pidkmanlives').textContent -= 1;
            if(document.getElementById('pidkmanlives').textContent > 0){
                    if(gnolBattleLeft > pickmanBattleLeft){
                            document.getElementById('pickmanBattle').style.animation = 'pickmanPainRight 400ms 1 linear';
                            document.getElementById('pickmanBattle').style.width = '85px';
                            document.getElementById('pickmanBattle').style.height = '100px';
                            document.getElementById('pickmanBattle').style.margin = '-70px -20px';
                    }
                    if(gnolBattleLeft < pickmanBattleLeft){
                            document.getElementById('pickmanBattle').style.animation = 'pickmanPainLeft 400ms 1 linear';
                            document.getElementById('pickmanBattle').style.width = '85px';
                            document.getElementById('pickmanBattle').style.height = '100px';
                            document.getElementById('pickmanBattle').style.margin = '-70px -20px';
                    }
            }
            if(document.getElementById('pidkmanlives').textContent <= 0){
                    document.getElementById('pickmanBattle').style.margin = '-50px -10px';
                    document.getElementById('pickmanBattle').style.animation = 'pickmanKill 400ms 1 linear';
                    document.getElementById('zatemnenie').style.display = 'block';         
                    document.getElementById('zatemnenie').style.animation = 'zatemnenie 3s 1 linear';
                    document.getElementById('pickmanlivestable').style.display = 'none';  
                    document.getElementById('pidkmanlives').style.display = 'none'; 
                    gnolWin = true;
                    setTimeout(battleEnd, 3000);
            }
        }
        setTimeout(pickmanPain, 300);
        setTimeout(ostanovitGnola, 500);
}

if(document.getElementById('gnoliBattle').className === 'active'){
     setInterval(goGnolSlowly, 10);
     
}


var kolvoStopovGnol = 1;

function ostanovitGnola(){
                document.getElementById('gnoliBattle').className = '';
                document.getElementById('gnoliBattle').style.animation = 'gnoliStandLeft 1s infinite linear';
                document.getElementById('gnoliBattle').style.width = '47px';
                document.getElementById('gnoliBattle').style.height = '78px';
                document.getElementById('gnoliBattle').style.margin = '-40px -9px';
                if( document.getElementById('pidkmanlives').textContent > 0){
                    document.getElementById('pickmanBattle').style.animation = 'pickmanStandRightActive 1s infinite linear';
                    document.getElementById('pickmanBattle').style.margin = '-65px -3px';
                    document.getElementById('gnollivestable').style.display = 'block';
                    document.getElementById('gnollives').style.display = 'block';
                    console.log('ostanovitGnola');
                    postroitCell();
                }  
                if( document.getElementById('pidkmanlives').textContent <= 0){
                    document.getElementById('pickmanBattle').style.margin = '-45px -5px';
                    document.getElementById('pickmanBattle').style.animation = 'pickmanRip 1s infinite linear';
                    // document.getElementById('pickmanBattle').style.margin = '-65px 30px';
                } 
                
               
}
    
function stopGnol(){
    if(vozlePickman == true) gnolKick(); 
    if(vozlePickman == false) ostanovitGnola();
}

function goGnolSlowly(){
   
        if(gnolBattleLeft != gnolCellX || gnolBattleTop != gnolCellY){
            if(gnolBattleLeft >= pickmanBattleLeft) document.getElementById('gnoliBattle').style.animation = 'gnoliGoLeft 0.5s infinite linear';
            if(gnolBattleLeft < pickmanBattleLeft) document.getElementById('gnoliBattle').style.animation = 'gnoliGoRight 0.5s infinite linear';
            document.getElementById('gnollivestable').style.display = 'none';
            document.getElementById('gnollives').style.display = 'none';
            document.getElementById('gnoliBattle').style.width = '60px';
                if(gnolBattleLeft < gnolCellX){gnolBattleLeft++;}
                if(gnolBattleLeft > gnolCellX){gnolBattleLeft--;}
                if(gnolBattleTop > gnolCellY){gnolBattleTop--;}
                if(gnolBattleTop < gnolCellY){gnolBattleTop++;}
                if(gnolBattleLeft == gnolCellX){gnolBattleLeft = gnolBattleLeft}
                if(gnolBattleTop == gnolCellY){gnolBattleTop = gnolBattleTop}
            gnoliBattle.style.left = `${gnolBattleLeft}px`;
            gnoliBattle.style.top = `${gnolBattleTop}px`;
            }
            if(kolvoStopovGnol == 1 && gnolBattleLeft == gnolCellX && gnolBattleTop == gnolCellY){
                if(kolvoStopovGnol == 1) {
                    stopGnol(); 
                    
                }
                kolvoStopovGnol += 1;
                }

    }
}




function battleEnd(){
    

    document.getElementById('battleEnd').style.display = 'block';
    document.getElementById('zatemnenie').style.backgroundColor = 'black';
    document.getElementById('zatemnenie').style.filter = 'opacity(0.5)';
    document.getElementById('okButtonEndBattle').style.display = 'block';
    document.getElementById('okButtonEndBattle').addEventListener('mousedown', function(){
        document.getElementById('okButtonEndBattle').style.filter = 'opacity(1)';
    })
    document.getElementById('okButtonEndBattle').addEventListener('mouseup', function(){
        document.getElementById('okButtonEndBattle').style.filter = 'opacity(0)';
        console.log('oK');
        document.getElementById('battle').style.display = 'none';
        battleWindow = false;
    })
    if(gnolWin == true){
    document.getElementById('battleEnd').innerHTML = '<video src="image/Battle/BattleEnd/Lost1.mp4" id="video1" autoplay></video><video src="image/Battle/BattleEnd/Lost2.mp4" id="video2" autoplay loop></video>';
    document.getElementById('video1').style.display = 'block';
        document.getElementById('okButtonEndBattle').style.left = '783px';
        document.getElementById('okButtonEndBattle').style.top = '500px';
       
    function battleEnd2(){
            document.getElementById('video2').style.display = 'block';
            document.getElementById('video1').style.display = 'none';
        }
    setTimeout(battleEnd2, 4000);
    }
    if(pickmanWin == true){
        console.log('Конец боя')
        document.getElementById('battleEnd').innerHTML = '<video src="image/Battle/BattleEnd/Win.mp4" id="video3" autoplay loop></video>';
        document.getElementById('video3').style.display = 'block';
        
    }
}
}



                    