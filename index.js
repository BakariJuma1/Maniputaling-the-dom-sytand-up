let firstName = "Bakari Juma";
let job = "jnr Dev";
let hired = "You have hired bakari";
let skills = ["HTML", "CSS", "JavaScript"];
let projects = "link";
let contact = "calling";

//changing or writing into the html page using the inner.html method adding the value of my p to firstnamme+ job
document.getElementById("myP").innerHTML = `Name: ${firstName} `;

document.getElementById("myP2").innerHTML = `Job: ${job} `;
document.getElementById("mySpan1").innerHTML = `skills: ${skills}`;

document.getElementById("mySpan2").innerHTML = `projects: ${projects}`;

document.getElementById("myButton").addEventListener("click", function () {
  document.getElementById("thanks").innerHTML = hired;
});

function openEmail() {
  window.location.href = "mailto:jumaisaq@gmail.com";
}
document.getElementById("contactButton").addEventListener("click", openEmail);
