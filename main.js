let hexvalue=[0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
let body=document.querySelector("body");
let button=document.querySelector("body button");
let heading=document.querySelector("body h2 span")
button.addEventListener('click',myfunction);
function myfunction(){
    let color="#";
    for(let i=0;i<6;i++){
        var randomIndex=parseInt(Math.random()*hexvalue.length)
        color+=hexvalue[randomIndex]
    }
    heading.textContent=color;
body.style.backgroundColor=color;
}