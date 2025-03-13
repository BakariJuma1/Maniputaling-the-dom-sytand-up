let firstName = "Bakari Juma";
let job = "jnr Dev";
let hired = "You have hired bakari";
//changing or writing into the html page using the inner.html method adding the value of my p to firstnamme+ job
document.getElementById(
  "myP"
).innerHTML = `my name is ${firstName}  a  ${job} `;

document.getElementById("myButton").addEventListener("click", function () {
  document.getElementById("thanks").innerHTML = hired;
});
