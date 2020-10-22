var one=document.querySelector("#one")

    one.addEventListener("click", ()=>{
        one.textContent="am clicked";
        one.style.color="red";
        
    })

var two=document.querySelector("#two")
two.addEventListener("dbclick",()=>{
    two.textContent="double clicked";
    two.style.color="green";
})
