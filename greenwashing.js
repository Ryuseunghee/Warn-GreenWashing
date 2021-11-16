window.addEventListener('scroll',scrollFunction);
window.addEventListener('load', scrollFunction);
window.addEventListener("load", function(){
    var section = document.querySelector("#section8");
    var container = section.querySelector(".dragcontainer");
    var box = section.querySelector(".box");
    var dragging = false;
    var offset = {x:0, y:0};
    var current = null;

    container.onmousedown = function(e){
        if(e.target.classList.contains("box")){
            dragging = true;
            current = e.target;
            offset.x = e.offsetX;
            offset.y = e.offsetY;
        }
    };

    container.onmousemove = function(e){
        if(!dragging) return;

        current.style.left = e.pageX-offset.x+"px";
        current.style.top = e.pageY-offset.y+"px";
    };

    container.onmouseup = function(e){
        dragging = false;
    };
});

let animationStartLine = 100;

let scrollDivs = document.querySelectorAll('.scrollAni');


function scrollFunction()
{
    for(let i = 0; i<scrollDivs.length; i++)
    {
       if(!scrollDivs[i].classList.contains('show'))
       {
            if( window.innerHeight > scrollDivs[i].getBoundingClientRect().top + animationStartLine)
            {
                scrollDivs[i].classList.add('show');
            }
       }
    }
}