


document.addEventListener("mousemove",()=>{

    let soap =document.querySelector(".soap");
    soap.style.left =(event.pageX) +'px';

    soap.style.top =(event.pageY) +'px';
    let i=document.createElement('i')
    document.body.appendChild(i)
    i.style.left=(event.pageX)+"px"
    i.style.top=(event.pageY)+"px"
    setTimeout(()=>{
        document.body.removeChild(i)
    },1500)

});