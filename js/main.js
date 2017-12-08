(function () {
  // start with retrieving the elements from the page, and then adding event handling. then write the logic. refer to the seasons example / homework

var carInfo = document.querySelectorAll('.data-ref');
const httpRequest = new XMLHttpRequest();

// function changeCars2(){
//   const url =  './includes/functions.php?carModel=' + this.id;
//   fetch (url)
//   .then((resp)=> resp.json())
//   .then((data)=> {processResult(data);})
//   .catch(function (error){
//     console.log(error);
//   });
  /*// set up AJAX call => handle errors first
  if (!httpRequest){
    alert('giving up not working');
    return false;
  }
  httpRequest.onreadystatechange = processRequest;
  httpRequest.open('GET', './includes/functions.php?carModel=' + this.id);
  httpRequest.send();
}

function processRequest() {
   let reqIndicator = document.querySelector('.request-state');
   reqIndicator.textContent = httpRequest.readyState;
   debugger;

   if (httpRequest.readyState === XMLHttpRequest.DONE) {
     if (httpRequest.status === 200) { // 200 means everything is awesome
       //debugger;
       let data = JSON.parse(httpRequest.responseText); //turn data into js object


   processResult(data);//send data to the function
     } else {
       alert('There was a problem with the request.');
     }
   }
 }

carInfo.forEach(function(element,index){
  element.addEventListener('click', changeCars2, false);
})*/

var thumbInfo= document.querySelector('.thumbInfo');
var car1 = document.querySelector('#F55');
var car2 = document.querySelector('#F56');
var car3 = document.querySelector('#R58');
var modelName = document.querySelector('.modelName');
var priceInfo = document.querySelector('.priceInfo');
var modelDetails = document.querySelector('.modelDetails');
var appliedClass;


  //link the images to the descriptions in the other folder with an index
function changeCars(data){
  let objectIndex= carData[this.id];
  const {model, price, details} = data; //deconstruction assignment
  /*let modelName = document.querySelector('.modelName').textContent= model;
  let priceInfo = document.querySelector('.priceInfo').innerHTML = price;
  let modelDetails = document.querySelector('.modelDetails').textContent = details;*/
  //console.log("working");
//opacity

  thumbInfo.classList.remove('nonActive');

  thumbInfo.classList.add('nonActive');
//define the variables by their value in the index
modelName.firstChild.nodeValue= objectIndex.model;
priceInfo.firstChild.nodeValue= objectIndex.price;
modelDetails.firstChild.nodeValue= objectIndex.details;

appliedClass = this.id;
//backticks are new ES6 template strings - look it up
document.querySelector(`#${data.model}`).classList.remove('nonActive');
}


carInfo.forEach(function(element,index){
  element.addEventListener('click', changeCars, false);
})

changeCars.call(document.querySelector('#F55'));
})();
