const textarea=document.querySelector("#textarea")
const totalcount=document.querySelector(".totalcount")
const remcount=document.querySelector(".remcount")

textarea.addEventListener("input",(e)=>{
const total=textarea.value.length;
totalcount.innerHTML=total;
remcount.innerHTML=50-total;

if(total===50){
    textarea.disabled=true
}
else{
    textarea.disabled=false
}
})