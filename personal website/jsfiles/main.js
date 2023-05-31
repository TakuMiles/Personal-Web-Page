let btnstatus = false;

let funcontrol = document.querySelector("#myBtn");
let turnoff = document.querySelector(".image");
let turnon = document.querySelector(".continue-reading");

function myFunction()
{
    if(btnstatus === false)
    {
        turnoff.style.opacity = "0.8";

        turnon.style.visibility = "visible";
        btnstatus = true;
    }else if(btnstatus === true)
    {
        turnon.style.visibility = "hidden";
        btnstatus = false;
    }
}