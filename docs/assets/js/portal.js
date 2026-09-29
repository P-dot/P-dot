const header=document.querySelector(".topbar"),menu=document.querySelector(".menu");
menu?.addEventListener("click",()=>{const open=header.classList.toggle("open");menu.setAttribute("aria-expanded",open)});
document.querySelectorAll("nav a").forEach(a=>a.addEventListener("click",()=>{header.classList.remove("open");menu?.setAttribute("aria-expanded","false")}));
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add("visible")}),{threshold:.08});
document.querySelectorAll(".card,.path,.track-grid article,.control a").forEach(el=>observer.observe(el));