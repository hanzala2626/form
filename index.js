function jk(){
    var fname = document.getElementById('fname').value;
    var lname = document.getElementById('lname').value;
    var male = document.getElementById('male').value;
    var female = document.getElementById('female').value;
    var address = document.getElementById('address').value;
    var email = document.getElementById('email').value;
    var mobile = document.getElementById('mobile').value;
    var areapin = document.getElementById('area-pin').value;
    var paymentType = document.getElementById('payment-type').value;
    var paymentOption = document.getElementById('Payment-Option').value;
    var cardNumber = document.getElementById('card-No').value;
    var cvv = document.getElementById('cvv').value;
    var cardexpiarydate = document.getElementById('cardexpiarydate').value;
    
       document.getElementById('massage').innerHTML="here is person detail"+"<br/>"+"<br/>"+
       "first name = "+fname+"<br/>"+
       "last name = " +lname+"<br/>"+
       "male = " +male+"<br/>"+
       "female = " +female+"<br/>"+
       "addres = " +address+"<br/>"+
       "email = " +email+"<br/>"+
       " mobile = " +mobile+"<br/>"+
       "pincode = " +areapin+"<br/>"+"<br/>"+

       "here is person bank detail"+"<br/>"+"<br/>"+

       "ptype = " +paymentType+"<br/>"+
       " poption = " +paymentOption+"<br/>"+
       " cardno. = " +cardNumber+"<br/>"+
       " cvv = " +cvv+"<br/>"+
       "form filling date = " +cardexpiarydate+"<br/>" ;
       

       

        
   }
   document.getElementById('button').addEventListener('click',jk);
