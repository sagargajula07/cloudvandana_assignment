function submitForm() {
  // Perform validation (you can add more detailed validation logic as needed)
  const fname = document.getElementById("firstName").value;
  const lname = document.getElementById("lastName").value;
  const dob = document.getElementById("dob").value;
  const country = document.getElementById("country").value;
  const gender = document.querySelector('input[name="gender"]:checked');
  const profession = document.getElementById("profession").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("mobile").value;

  var regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g; //Javascript reGex for Email Validation.
  var regPhone = /^\d{10}$/; // Javascript reGex for Phone Number validation.
  var regName = /\d+$/g; // Javascript reGex for Name validation

  if (fname == "" || regName.test(fname)) {
    window.alert("Please enter your first name properly.");
    fname.focus();
  }
  if (lname == "" || regName.test(lname)) {
    window.alert("Please enter your last name properly.");
    lname.focus();
  }
  if (dob == "") {
    alert("Please enter date of birth.");
    dob.focus();
  }
  if (country == "") {
    alert("Please select the country.");
    country.focus();
  }
  if (gender == null) {
    alert("Please enter the gender.");
    gender.focus();
  }
  if (profession == "") {
    alert("Please enter the profession.");
    profession.focus();
  }

  if (email == "" || !regEmail.test(email)) {
    window.alert("Please enter a valid e-mail address.");
    email.focus();
  }

  if (phone == "" || !regPhone.test(phone)) {
    alert("Please enter valid phone number.");
    phone.focus();
  }

  if (
    !fname ||
    !lname ||
    !dob ||
    !country ||
    !gender ||
    !profession ||
    !email ||
    !phone
  ) {
    alert("Please fill in all fields.");
    return;
  }

  const popupContent = `
    <p>First Name: ${fname}</p>
    <p>Last Name: ${lname}</p>
    <p>Date of Birth: ${dob}</p>
    <p>Select your country: ${country}</p>
    <p>Gender: ${gender.value}</p>
    <p>Profession: ${profession}</p>
    <p>Email: ${email}</p>
    <p>Mobile Number: ${phone}</p>
  `;

  const popup = document.getElementById("popupContent");
  popup.innerHTML = popupContent;

  const popupElement = document.getElementById("popup");
  popupElement.style.display = "block";
}

function closePopup() {
  const popupElement = document.getElementById("popup");
  popupElement.style.display = "none";
}

function resetForm() {
  document.getElementById("firstName").value = "";
  document.getElementById("lastName").value = "";
  document.getElementById("dob").value = "";
  document.getElementById("country").value = "";
  document.querySelector('input[name="gender"]').checked = false;
  document.getElementById("profession").value = "";
  document.getElementById("email").value = "";
  document.getElementById("mobile").value = "";
}
