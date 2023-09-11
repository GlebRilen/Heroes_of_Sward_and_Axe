const ratushaWindow = document.getElementById('ratusha-window');
const fortWindow = document.getElementById('fort-window');
const ratusha = document.getElementById('ratusha');
const fort = document.getElementById('fort');
const ratushaBuy = document.getElementById('ratusha-buy');
const citadelBuy = document.getElementById('citadel-buy');
const bratstvoBuy = document.getElementById('bratstvo-buy');
const kuznicaBuy = document.getElementById('kuznica-buy');
const rinokBuy = document.getElementById('rinok-buy');
const gildiaBuy = document.getElementById('gildia-buy');
const verfBuy = document.getElementById('verf-buy');
const konushniBuy = document.getElementById('konushni-buy');
const bastionBuy = document.getElementById('bastion-buy');
const fortpostBuy = document.getElementById('fortpost-buy');
const strelkovBuy = document.getElementById('strelkov-buy');
const grifonovBuy = document.getElementById('grifonov-buy');
const barakiBuy = document.getElementById('baraki-buy');
const monastirBuy = document.getElementById('monastir-buy');
const arenaBuy = document.getElementById('arena-buy');
const portalBuy = document.getElementById('portal-buy');
const closeRatushaWindow = document.getElementById('close-ratusha-window');
const romul = document.querySelectorAll('.zdania');
const ramstein = document.querySelectorAll('.zdaniaHouse');
const kupitMonstrov = document.querySelector('#kupit-monstrov');
const menshe = document.querySelector('#menshe');
const bolshe = document.querySelector('#bolshe');
const skolko = document.querySelector('#skolko');
//Поля для покупки монстров в Форте
const m1 = document.querySelector('#m1');
const m2 = document.querySelector('#m2');
const m3 = document.querySelector('#m3');
const m4 = document.querySelector('#m4');
const m5 = document.querySelector('#m5');
const m6 = document.querySelector('#m6');
const m7 = document.querySelector('#m7');
const m8 = document.querySelector('#m8');
const naim = document.querySelector('#naim');
const naimu = document.querySelectorAll('.naimu');
const kop1 = document.querySelector('#kop1');
const luchnik1 = document.querySelector('#luchnik1');
const grifon1 = document.querySelector('#grifon1');
const ricar1 = document.querySelector('#ricar1');
const monah1 = document.querySelector('#monah1');
const chempion1 = document.querySelector('#chempion1');
const angel1 = document.querySelector('#angel1');
const monstri = ['kop1', 'luchnik1', 'grifon1', 'ricar1', 'monah1', 'chempion1', 'angel1']
const kupitVse = document.querySelector('#kupit-vse');
const kupitAktivna = document.querySelector('#kupit-aktivna');
const kupitOtmena = document.querySelector('#kupit-otmena');
const closeFortWindow = document.querySelector('#close-fort-window');
//Переменные ресурсов
const derevo = document.querySelector('#derevo')

derevo.textContent = 12;

//  rtut, ruda, sera, cristal, dragkamni, zoloto;
let isGildia1Buy = false;
var isCastleMenue = true;






function fortFunction() {
  fortWindow.style.display = 'block';
  isCastleMenue = false;
  
}; 


fort.addEventListener('click', fortFunction);






//Открывает окно покупки монстров
m1.addEventListener('click', function(){naim.style.display = 'block'; kop1.style.display = 'block';});
m2.addEventListener('click', function(){naim.style.display = 'block'; luchnik1.style.display = 'block';});
m3.addEventListener('click', function(){naim.style.display = 'block'; grifon1.style.display = 'block';});
m4.addEventListener('click', function(){naim.style.display = 'block'; ricar1.style.display = 'block';});
m5.addEventListener('click', function(){naim.style.display = 'block'; monah1.style.display = 'block';});
m6.addEventListener('click', function(){naim.style.display = 'block'; chempion1.style.display = 'block';});
m7.addEventListener('click', function(){naim.style.display = 'block'; angel1.style.display = 'block';});
m8.addEventListener('click', function(){naim.style.display = 'block'; angel1.style.display = 'block';});
kupitVse.addEventListener('click', function(){console.log('Vse kupleni')});
kupitAktivna.addEventListener('click', function(){console.log('Mojno kupit monstrov')})
kupitOtmena.addEventListener('click', function() {  naim.style.display = 'none';  kop1.style.display = 'none';
  luchnik1.style.display = 'none';  grifon1.style.display = 'none';  ricar1.style.display = 'none';
  monah1.style.display = 'none';  chempion1.style.display = 'none';  angel1.style.display = 'none';});
closeFortWindow.addEventListener('click', closeFortWindowFunction);


menshe.addEventListener('mousedown', function(){menshe.src = 'image/nan/kupitMensheDown.png';})
bolshe.addEventListener('mousedown', function(){bolshe.src = 'image/nan/kupitBolsheDown.png'})
document.addEventListener('mouseup', function(){bolshe.src = 'image/nan/kupitBolshe.png'; menshe.src = 'image/nan/kupitMenshe.png'})





function closeFortWindowFunction() {
  fortWindow.style.display = 'none';
  isCastleMenue = true;
  renderHouse();
}

function  closeRatushaWindowFunction(){
  // primer();
  ratushaWindow.style.display = 'none';
  isCastleMenue = true;
  renderHouse();
};
function  ratushaFunction(){
  ratushaWindow.style.display = 'block';
  isCastleMenue = false;
  ratushaWindow.addEventListener('click', () => {
    console.log();
  });

  renderHouse();
};


class Zdanie{
  constructor(domName, isBuy, level, disp){
    this.domName = domName
    this.isBuy = isBuy
    this.level = level
    this.disp = disp
    this.houseBuy = function() {
      this.isBuy = true;
    }
  }
}



const vseDoma = [{domVar: 'ratushaHouse1', domName: 'ratushaHouse',  isBuy: false,  level: 1,  display: 'none'},
{domVar: 'citadelHouse1',  domName: 'citadelHouse',  isBuy: false,  level: 1,  display: 'none'},
{domVar: 'bratstvoHouse1',  domName: 'bratstvoHouse',  isBuy: false,  level: 1,  display: 'none'},
{domVar: 'kuznicaHouse1',  domName: 'kuznicaHouse',  isBuy: false,  level: 1,  display: 'none'},
{domVar: 'rinokHouse1',  domName: 'rinokHouse',  isBuy: false,  level: 1,  display: 'none'},
{domVar: 'gildiaHouse1',  domName: 'gildiaHouse',  isBuy: false,  level: 1,  disNone() { gildiaHouse.style.display = 'none'}, disBlock() {gildiaHouse.style.display = 'block'}},
{domVar: 'verfHouse1',  domName: 'verfHouse',  isBuy: false,  level: 1,  disNone() { verfHouse.style.display = 'none'}, disBlock() {verfHouse.style.display = 'block'}},
{domVar: 'konushniHouse1',  domName: 'konushniHouse',  isBuy: false,  level: 1,   disNone() { konushniHouse.style.display = 'none'}, disBlock() {konushniHouse.style.display = 'block'}},
{domVar: 'bastionHouse1',  domName: 'bastionHouse',  isBuy: false,  level: 1,   disNone() { bastionHouse.style.display = 'none'}, disBlock() {bastionHouse.style.display = 'block'}},
{domVar: 'fortpostHouse1',  domName: 'fortpostHouse',  isBuy: false,  level: 1,   disNone() { fortpostHouse.style.display = 'none'}, disBlock() {fortpostHouse.style.display = 'block'}},
{domVar: 'strelkovHouse1',  domName: 'strelkovHouse',  isBuy: false,  level: 1,  display: 'none'},
{domVar: 'grifonovHouse1',  domName: 'grifonovHouse',  isBuy: false,  level: 1,  display: 'none'},
{domVar: 'barakiHouse1',  domName: 'barakiHouse1',  isBuy: false,  level: 1,  display: 'none'},
{domVar: 'monastirHouse1',  domName: 'monastirHouse1',  isBuy: false,  level: 1,  display: 'none'},
{domVar: 'arenaHouse1',  domName: 'arenaHouse',  isBuy: false,  level: 1,  display: 'none'},
{domVar: 'portalHouse1',  domName: 'portalHouse',  isBuy: false,  level: 1,  display: 'none'}];


console.log(vseDoma.domVar);


function renderHouse() {
  for(i=0; i < ramstein.length; i++) {
      if(isCastleMenue == true){ if (ramstein[i].classList == 'zdaniaHouse buy'){ ramstein[i].style.display = 'none'} 
                              else if (ramstein[i].classList == 'zdaniaHouse') {    ramstein[i].style.display = 'block'} }
      else if(isCastleMenue == false) {    ramstein[i].style.display = 'none'}}
};

// console.log((document.querySelector('#gildiaHouse').classList) == 'buy');

// console.log((document.querySelector('#gildiaHouse').id));





let doma = ['ratusha-buy', 'citadel-buy', 'bratstvo-buy', 'kuznica-buy', 'rinok-buy', 'gildia-buy', 'verf-buy', 'konushni-buy', 'bastion-buy', 'storojevaya-buy', 'strelkov-buy', 'grifonov-buy', 'baraki-buy', 'monastir-buy', 'arena-buy', 'portal-buy']

let domTwo = [];
let ron = 'df';

doma.forEach(function(index, i) {
  let gor = doma[i].substr(0, doma[i].indexOf('-buy'));
  domTwo.push(gor + 'Buy')
 });
  




  
  


function ratushaBuyFunction() {
  console.log('ratushaBuyFuncti');
}

ratushaBuy.addEventListener('click', ratushaBuyFunction);
ratusha.addEventListener('click', ratushaFunction);
fort.addEventListener('click', fortFunction);

//Слушатель событий для постройки зданий при их покупке
ratushaBuy.addEventListener('click', () => {document.querySelector('#ratushHouse').classList.remove('buy');});
citadelBuy.addEventListener('click', () => {document.querySelector('#citadelHouse').classList.remove('buy');});
bratstvoBuy.addEventListener('click', () => {document.querySelector('#bratstvoHouse').classList.remove('buy');});
kuznicaBuy.addEventListener('click', () => {document.querySelector('#kuznicaHouse').classList.remove('buy');});
rinokBuy.addEventListener('click', () => {document.querySelector('#rinokHouse').classList.remove('buy');});
gildiaBuy.addEventListener('click', () => {document.querySelector('#gildiaHouse').classList.remove('buy');});
verfBuy.addEventListener('click', () => {document.querySelector('#verfHouse').classList.remove('buy');});
konushniBuy.addEventListener('click', () => {document.querySelector('#konushniHouse').classList.remove('buy');});
bastionBuy.addEventListener('click', () => {document.querySelector('#bastionHouse').classList.remove('buy');});
fortpostBuy.addEventListener('click', () => {document.querySelector('#fortpostHouse').classList.remove('buy');});
strelkovBuy.addEventListener('click', () => {document.querySelector('#strelkovHouse').classList.remove('buy');});
grifonovBuy.addEventListener('click', () => {document.querySelector('#grifonovHouse').classList.remove('buy');});
barakiBuy.addEventListener('click', () => {document.querySelector('#barakiHouse').classList.remove('buy');});
monastirBuy.addEventListener('click', () => {document.querySelector('#monastirHouse').classList.remove('buy');});
arenaBuy.addEventListener('click', () => {document.querySelector('#arenaHouse').classList.remove('buy');});
portalBuy.addEventListener('click', () => {document.querySelector('#portalHouse').classList.remove('buy');});
closeRatushaWindow.addEventListener('click', closeRatushaWindowFunction);

document.addEventListener('keydown', function(evt) {
  if(evt.keyCode === 27 && ratushaWindow.style.display === 'block') {
    closeRatushaWindowFunction();
  }
  if(evt.keyCode === 27 && fortWindow.style.display === 'block'){
    closeFortWindowFunction();
  }
});


//Функции для отображения зданий при их постройке










