(function () {
  // start with retrieving the elements from the page, and then adding event handling. then write the logic. refer to the seasons example / homework

var carInfo = document.querySelectorAll('.data-ref');
var thumbInfo= document.querySelector('.thumbInfo');
var car1 = document.querySelector('#F55');
var car2 = document.querySelector('#F56');
var car3 = document.querySelector('#R58');
var modelName = document.querySelector('.modelName');
var priceInfo = document.querySelector('.priceInfo');
var modelDetails = document.querySelector('.modelDetails');
var appliedClass;


  //link the images to the descriptions in the other folder with an index
function changeCars(){
  //console.log("working");
let objectIndex= carData[this.id];

//opacity

  thumbInfo.classList.remove('nonActive');

  thumbInfo.classList.add('nonActive');

//define the variables by their value in the index
modelName.firstChild.nodeValue= objectIndex.model;
priceInfo.firstChild.nodeValue= objectIndex.price;
modelDetails.firstChild.nodeValue= objectIndex.details;

appliedClass = this.id;
}


carInfo.forEach(function(element,index){
  element.addEventListener('click', changeCars, false);
})

changeCars.call(document.querySelector('#F55'));
})();
