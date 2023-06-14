const one=document.querySelectorAll('.accordion')
const tow=document.querySelectorAll('.main-panel')

    one.forEach((element)=>{
        element.addEventListener("click",()=>{
         element.classList.toggle('active');
         var panel = element.nextElementSibling;
        
       
         if (panel.style.maxHeight) {
        
            panel.style.maxHeight = null;
            panel.style.transform = "scaleY(0)";
         } else {
            panel.style.maxHeight = 9000 + "px";
            panel.style.transform = "scaleY(1)";}
             
            
    }); 
})

 





