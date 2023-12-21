const drawerButton = document.querySelector(".home-button").addEventListener("click", numberDraw)


function numberDraw(){
    const numberMin = Math.ceil(document.querySelector(".input-min").value)
    const numberMax = Math.floor(document.querySelector(".input-max").value)
    const result = Math.floor(Math.random() * (numberMax-numberMin + 1)) + numberMin;
    
    alert(result)
}   