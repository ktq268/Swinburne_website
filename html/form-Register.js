const form_Register = document.getElementById("form_Register");

form_Register.addEventListener("submit", (e) => {
  e.preventDefault();

  // Fullname
  let inputFullname4 = document.getElementById("inputFullname4").value;

  let inputBirthDate4 = document.getElementById("inputBirthDate4").value;

  let inputPhoneNumber4 = document.getElementById("inputPhoneNumber4").value;

  let inputEmail4 = document.getElementById("inputEmail4").value;

  let inputSchool4 = document.getElementById("inputSchool4").value;

  let inputCity4 = document.getElementById("inputCity4").value;

  let inputMajor4 = document.getElementById("inputMajor4").value;

  let inputCampus4 = document.getElementById("inputCampus4").value;

  let timhieuswinburne1 = document.getElementById("timhieuswinburne1").value;

  fetch(
    `https://webhook.site/93aa53b2-c0de-42ed-876c-e1dd57e0beba?inputFullname4=${inputFullname4}&inputBirthDate4=${inputBirthDate4}&inputPhoneNumber4=${inputPhoneNumber4}&inputEmail4=${inputEmail4}&inputSchool4=${inputSchool4}&inputCity4=${inputCity4}&inputMajor4=${inputMajor4}&inputCampus4=${inputCampus4}&timhieuswinburne1=${timhieuswinburne1}`
  );

  alert("Submit Successfully");
});
