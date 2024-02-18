const serviceItems = document.querySelector(".portfolio");
const popup = document.querySelector(".popup-box");
const popupCloseBtn = popup.querySelector(".popup-close-btn");
const popupCloseIcon = popup.querySelector(".popup-close-icon");

serviceItems.addEventListener("click",function(event){
        console.log(event.target.tagName.toLowerCase());
    if(event.target.tagName.toLowerCase() == "div"){
        const item = event.target.parentElement;
        const title = item.querySelector(".title").innerHTML;
        const readMoreCont = item.querySelector(".read-more-cont").innerHTML;
        popup.querySelector("h3").innerHTML = title;
        popup.querySelector(".popup-body").innerHTML=readMoreCont;
        popupBox();
    }
    // if (event.target.tagName.toLowerCase() == "button") {
    //     const item = event.target.parentElement;
    //     const h3 = item.querySelector("h3").innerHTML;
    //     const readMoreCont = item.querySelector(".read-more-cont").innerHTML;
    //     popup.querySelector("h3").innerHTML = h3 ;
    //     popup.querySelector(".popup-body").innerHTML = readMoreCont;
    //     popupBox();
    // }
})

popupCloseBtn.addEventListener("click",popupBox);
popupCloseIcon.addEventListener("click",popupBox);

popup.addEventListener("click",function(event){
    if(event.target == popup){
        popupBox();
    }
})
function popupBox(){
    popup.classList.toggle("open");
}