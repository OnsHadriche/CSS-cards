
const container = document.querySelectorAll(".button_1");

// const x = document.getElementsByClassName("big_container")[0];
const x = document.querySelector(".big_container");
const y = document.querySelectorAll(".btn_1");

const visa = document.getElementById("visa");
const visa1= document.getElementsByClassName("small_container")[0];
const ajout = document.querySelector("#add_pro"); 
let prodContainer = document.querySelector("#container_add");


 const change = document.getElementById("change");
 const dark = document.getElementById("dark");

 dark.addEventListener("click",(eo) => {
     change.classList.toggle("dark");
     
 })
