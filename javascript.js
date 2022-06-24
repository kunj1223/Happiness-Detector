var x = prompt("My mood is :   (Please enter number between 1 to 10.)")
parseInt(x,3)
window.onload= function print() {
    if(x>=1 && x<=3) {
   
        document.getElementById("image").src ='images/sad.png';
        document.getElementById("msg").innerHTML="Don't be sad.";
        document.getElementById("msg").style.backgroundColor="blue";
        document.getElementById("msg").href="https://thakkaha.dev.fast.sheridanc.on.ca/anim.htm?t=sad";
        
    }
     else if (x>=4 && x<=7) {
        document.getElementById("msg").innerHTML="Your mood is neutral.";
        document.getElementById("msg").style.backgroundColor="gray";
        document.getElementById("msg").href="https://thakkaha.dev.fast.sheridanc.on.ca/anim.htm?t=neutral";
    }
     

    else if (x>=8 && x<=10) {
        document.getElementById("image").src ='images/happy.png';
        document.getElementById("msg").innerHTML="It's great to see you happy.";
        document.getElementById("msg").style.backgroundColor="orange";
        document.getElementById("msg").href="https://thakkaha.dev.fast.sheridanc.on.ca/anim.htm?t=happy";
    }
    else if (x>10)
    {
        alert("Please enter any number between 1 to 10.")
    }

}
