// document.addEventListener('DOMContentLoaded', function(){

// let chatItem = document.getElementById("first_li");
// let chatAreaBox = document.querySelectorAll(".chat_area");


// chatItem.addEventListener("click",function(){
//     chatAreaBox.style.display = "block";

// })
// })

let FirstLi = document.querySelectorAll('li');
let ChattingArea = document.querySelector('.chat_area');
let Arrow = document.querySelector('#arrow');
Arrow.addEventListener("click",()=>{
    ChattingArea.style.display ="none"
})

FirstLi.forEach(element => {
    element.addEventListener("click", ()=>{
        ChattingArea.style.display ="block"
       })
});







