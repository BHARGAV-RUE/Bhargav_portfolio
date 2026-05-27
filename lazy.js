document.addEventListener("DOMContentLoaded",()=>{

const sections=document.querySelectorAll(".section");

const observer=new IntersectionObserver((entries)=>{

entries.forEach((entry)=>{

if(entry.isIntersecting){

const index=[...sections].indexOf(entry.target);

setTimeout(()=>{

entry.target.classList.add("show");

},index*80);

observer.unobserve(entry.target);

}

});

},{
threshold:0.15
});

sections.forEach(sec=>{
observer.observe(sec);
});

});