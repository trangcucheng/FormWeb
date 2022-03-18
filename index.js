const inpname = document.getElementById("name");
const inpemail = document.getElementById("email");
const inpgender = document.getElementById("gender");
const inpage = document.getElementById("age");
const submit = document.getElementById("btn");

function storage() {
  localStorage.setItem("name", inpname.value);
  localStorage.setItem("email", inpemail.value);
  localStorage.setItem("gender", inpgender.value);
  localStorage.setItem("age", inpage.value);
}

console.log(localStorage);
