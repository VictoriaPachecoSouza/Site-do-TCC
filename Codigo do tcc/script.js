/*modo escuro e lupa de pesquisa*/
const body = document.querySelector("body"),
 nav = document.querySelector("nav"),
 modeToggle = document.querySelector(".dark-light"),
  searchToggle = document.querySelector(".searchToggle");


   modeToggle.addEventListener("click", () => {
    modeToggle.classList.toggle("active");
    body.classList.toggle("dark");
});
/*js code to toggle search box*/
searchToggle.addEventListener("clik", () => {
    searchToggle.classList.toggle("active");
   });