function updatemenu() {
  if (document.getElementById('responsive-menu').checked == true) {
    document.getElementById('menu').style.borderBottomRightRadius = '0';
    document.getElementById('menu').style.borderBottomLeftRadius = '0';
  }
    
  else {
    document.getElementById('menu').style.borderRadius = '0px';
  }
}

//thx to scriptol.com :D

function dateDiff(dateold, datenew)
{
  var ynew = datenew.getFullYear();
  var mnew = datenew.getMonth();
  var dnew = datenew.getDate();
  var yold = dateold.getFullYear();
  var mold = dateold.getMonth();
  var dold = dateold.getDate();
  var diff = ynew - yold;
  if(mold > mnew) diff--; //mold 😦
  else
  {
    if(mold == mnew)
    {
      if(dold > dnew) diff--;
    }
  }
  return diff;
}

var today = new Date();
var dob = new Date("9 July 2008");
document.getElementById("age").innerHTML = dateDiff(dob, today)