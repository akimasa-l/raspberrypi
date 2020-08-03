const img = document.querySelector("img");
function myalert(){
    //alert("生きて");
}
function changeImage(){
    if(img.getAttribute("src")==="images/unnamed.png"){
        img.setAttribute("src","images/009.png");
    } else {
        img.setAttribute("src","images/unnamed.png")
    }
}
img.onclick=changeImage;
document.querySelector('p').onclick = myalert()