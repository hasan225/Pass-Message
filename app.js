const form = document.querySelector(".message-form");

form.addEventListener("submit", (e) => {
    e.preventDefault()

    const message = document.querySelector(".message");
    const message_content = document.querySelector(".message-content");
    const feedback = document.querySelector(".feedback");

   if(message.value===""){
       feedback.style.display="block";
     setTimeout(()=>{
         feedback.style.display="none";

     },3000)
       
   }

   else{
       message_content.textContent=message.value;
       message.value='';
   }
})