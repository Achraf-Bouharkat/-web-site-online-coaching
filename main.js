window.onload = function(){
    let div7 = document.getElementById("div7");
    let div4 = document.getElementById("div4");
    let div2 = document.getElementById("div2");
    let div8 = document.getElementById("div8");
    let div5 = document.getElementById("div5");
    let div3 = document.getElementById("div3");
    document.getElementById("tz").onclick=function(){
        div2.style.display = "none";
        div3.style.display = "flex";
        div7.style.display = "flex";
        div8.style.display = "inline-block";

    }
    document.getElementById("ar").onclick=function(){
        div2.style.display = "none";
        div4.style.display = "flex";
        div7.style.display = "flex";
        div8.style.display = "inline-block";

    }
    document.getElementById("en").onclick=function(){
        div2.style.display = "none";
        div5.style.display = "flex";
        div7.style.display = "flex";
        div8.style.display = "inline-block";

    }
    document.getElementById("btninst").onclick = function(){
        div2.style.display = "flex";
        div5.style.display = "none";
        div7.style.display = "none";
        div4.style.display = "none";
        div3.style.display = "none";
        div8.style.display = "none";
    }
}