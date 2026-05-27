const form=document.getElementById("contactForm");
const status=document.getElementById("status");

form.addEventListener("submit", async(e)=>{

e.preventDefault();

status.innerHTML="TRANSMITTING SIGNAL...";

const data={

name:document.getElementById("name").value,
email:document.getElementById("email").value,
message:document.getElementById("message").value

};

try{

await fetch("https://script.google.com/macros/s/AKfycbzPSmxin7ttnOCakSKkHYOpqOh-tLXjpXWxdKBu4F0azci50INmMHdu2ahu69xrsVbk7Q/exec",{
method:"POST",
body:JSON.stringify(data)
});

status.innerHTML="✓ MESSAGE DELIVERED";

form.reset();

}
catch{

status.innerHTML="✕ TRANSMISSION FAILED";

}

});