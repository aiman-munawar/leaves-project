var page1=document.querySelector("#page1");

var  page2=document.querySelector("#page2");

var page3=document.querySelector("#page3");

var  btn1=document.querySelector("#content button");

var btn2=document.querySelector("#glasspage button");

btn1.addEventListener("click",function(){
    page1.style.display="none";
    page2.style.display="block";
    page3.style.display="none";
})

btn2.addEventListener("click",function(){
    page1.style.display="none";
    page2.style.display="none";
    page3.style.display="flex";
})