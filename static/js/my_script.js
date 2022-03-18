
var myForm = document.forms["costform"];

function getCarTypePrice(){
  let carTypeRates={
    "None":0,
    "Neoplan Tourliner":2,
    "Volvo":2.3,
    "School Bus":1.9,
    "Small White Bus":1.5,
    "Neoplan Cityliner VIP":2.5}
  let carTypePrice=0;
  const selectedCarType = myForm.elements["cartype"];
  carTypePrice = carTypeRates[selectedCarType.value];
  return carTypePrice;
}

function getAdditionalFee(){
  let fees = {
  "Selectfee":0,
  "Small":50,
  "Medium":150,
  "Large":300
}
  let additionalFee=0;
  const selectedFee = myForm.elements["selectedfee"];
  additionalFee = fees[selectedFee.value];
  return additionalFee;
}

function addbufferFee(){
  let bufferFee=1;
  const includeBufferFee = myForm.elements["includebuffer"];

  if(includeBufferFee.checked==true)
  {
      bufferFee=1.1;
  }
  return bufferFee;
}


function getKms()
{
    const kms = myForm.elements["kms"];
    let howmany =0;
    if(kms.value!="")
    {
        howmany = parseInt(kms.value);
    }
    if(howmany<= 999999){
      return howmany;
    }else{
      return 999999
    }

}



function calculateTotal()
{
    const ridePrice = (getAdditionalFee() + (getKms()*(getCarTypePrice())) ) *addbufferFee();


    //display the result
    document.getElementById('totalPrice').innerHTML = ridePrice.toFixed(2)  + " PLN";

}
