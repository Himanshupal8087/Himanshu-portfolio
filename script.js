let icon = document.querySelector("#i")
let item = document.querySelector(".second")

icon.addEventListener("click",()=>{

   
if(item.style.display === "none"){


    item.style.display = "flex";
    

}
else{
    item.style.display = "none";
   

}

    
})