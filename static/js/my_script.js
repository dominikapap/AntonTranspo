var theForm = document.forms["costform"];

var car_type_price= new Array();
car_type_price["None"]=0;
car_type_price["Neoplan Tourliner"]=2;
car_type_price["Volvo"]=2.3;
car_type_price["School Bus"]=1.9;
car_type_price["Small White Bus"]=1.5;
car_type_price["Neoplan Cityliner VIP"]=2.5;


function getCarTypePrice()
{
    var carTypePrice=0;
    var theForm = document.forms["costform"];
    var selectedCarType = theForm.elements["cartype"];
    carTypePrice = car_type_price[selectedCarType.value];
    return carTypePrice;
}

var additional_fees = new Array();
additional_fees["Selectfee"]=0;
additional_fees["Small"]=50;
additional_fees["Medium"]=150;
additional_fees["Large"]=300;


function getAdditionalFee()
{
    var additionalFee=0;
    var theForm = document.forms["costform"];
    var selectedFee = theForm.elements["selectedfee"];
    additionalFee = additional_fees[selectedFee.value];
    return additionalFee;
}

function addbufferFee()
{
    var bufferFee=1;
    var theForm = document.forms["costform"];
    var includeBufferFee = theForm.elements["includebuffer"];

    if(includeBufferFee.checked==true)
    {
        bufferFee=1.1;
    }
    return bufferFee;
}


function getKms()
{
    var theForm = document.forms["costform"];
    var kms = theForm.elements["kms"];
    var howmany =0;
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
    var ridePrice = (getAdditionalFee() + (getKms()*(getCarTypePrice())) ) *addbufferFee();


    //display the result
    document.getElementById('totalPrice').innerHTML = ridePrice.toFixed(2)  + " PLN";

}
