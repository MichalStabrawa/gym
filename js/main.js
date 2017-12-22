
/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}



//popUp/////////////////////////////////////////////////////////////////////

function popShow(){
    document.getElementById('popUp').style.display="block";
}
document.getElementById('btnPopStart').addEventListener('click',popShow);


function popHiden(){
  document.getElementById('popUp').style.display="none";
}
document.getElementById('btnPopUp').addEventListener('click',popHiden);



