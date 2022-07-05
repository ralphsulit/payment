//////////////////////////////
/////Editing Billing Information
////////////////////////////// 

// Variables
let submitBtn = document.getElementById('billingBtn');
let email = document.getElementById('billingEmail');
let fullName = document.getElementById('billname');
let address = document.getElementById('billAddress');
let phoneNum = document.getElementById('billPhoneNumber');

// Billing Info Variables
let infoName = document.getElementById('infoName');
let infoAddress = document.getElementById('infoAddress');
let infoNumber = document.getElementById('infoNumber');
let infoEmail = document.getElementById('infoEmail');


// Edit Billing Information
submitBtn.addEventListener('click', function (e) {
  e.preventDefault();
  
  // FullName
  infoName.innerText = fullName.value;
  fullName.value = '';  

  // Address
  infoAddress.innerText = address.value;
  address.value = '';

  // Phone Number 
  infoNumber.innerText = phoneNum.value;
  phoneNum.value = '';

  //email
  infoEmail.innerText = email.value;
  email.value = '';
})


//////////////////////////////
/////Checkbox
//////////////////////////////

// Variables
let checkBox = document.getElementById('flexCheckChecked');
let cert1 = document.getElementById('certificate-1');

console.log(cert1.innerText); 

// When Clicked Cerificate will be added on the Order Summary
let check = () => {
  if (checkBox.checked === true) {
    cert1.style.display = 'flex';
  } else {
    cert1.style.display = 'none';
  }
};