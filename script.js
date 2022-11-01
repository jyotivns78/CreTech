var myIndex = 0;
carousel();

function carousel()
{
    var i;
    var x = document.getElementsByClassName("mySlides");
    for(i=0; i < x.length; i++)
    {
        x[i].style.display = "none";
    }
    myIndex++;
    if(myIndex > x.length)
    {
        myIndex = 1;
    }
    x[myIndex-1].style.display = "block";
    setTimeout(carousel, 5000);
}

// Number Counting for FunFact

let valueDisplays = document.querySelectorAll(".count-text");
let interval = 6000;

valueDisplays.forEach((valueDisplay) => {
    let startValue = 0;
    let endValue = parseInt(valueDisplay.getAttribute("data-val"));
    let duration = Math.floor(interval / endValue);
    let counter = setInterval(function () {
        startValue += 1;
        valueDisplay.textContent = startValue;
        if(startValue == endValue)
        {
            clearInterval(counter);
        }
    }, duration);
});

// Cursor

var cursor = document.querySelector(".cursor");
var cursor2 = document.querySelector(".cursor2");

document.addEventListener("mousemove", function(e){
    cursor.style.cssText = cursor2.style.cssText = "left: " + e.clientX + "px; top: " + e.clientY + "px;";
});


























