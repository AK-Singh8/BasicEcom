function getRandomColor() {
    let val1 = Math.ceil(0 + Math.random() * 255);
    let val2 = Math.ceil(0 + Math.random() * 255);
    let val3 = Math.ceil(0 + Math.random() * 255);
    return `rgb(${val1}, ${val2}, ${val3})`
}

let a = setInterval(() => {
    document.querySelector(".nav").style.background = getRandomColor();
}, 1000);


document.getElementById("b4").addEventListener("click",()=>{
    document.querySelector(".nav").style.display="none";
    body.style.display="block";
})