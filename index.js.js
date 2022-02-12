window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("image1");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }

  function updateClock(){
    var now = new Date();
    var dname = now.getDay(),
    mo = now.getMonth(),
    dnum = now.getDate(),
    yr = now.getFullYear(),
    hou = now.getHours(),
    min = now.getMinutes(),
    sec = now.getSeconds(),
    pe = "AM";

    if(hou == 0){
        hou = 12;
    }
    if(hou > 12){
        hou = hou-12;
        pe = "PM";
    }
    Number.prototype.pad = function(digits){
        for(var n = this.toString(); n.length < digits; n = 0+n);
        return n;
    }

    var months = ["January", "February", "March", "April", "May", "June", "July", "Auguest", "September", "October", "November", "December"];
    var week = ["Sunday", "Monday", "Tuesday", "Wenesday", "Thursday", "Friday", "Saturday", "Sunday"];
    var ids = ["dayname", "month", "daynum", "year", "hour", "minutes", "seconds","period"];
    var Values = [ week[dname],  month[mo], dnum.pad(2), yr, hou.pad(2),  min.pad(2), sec.pad(2), pe];
    for(var i = 0;i<ids.length;i++){
        document.getElementById(ids[i]).firstChild.nodeValue = Values[i];
    }
}
function initClock(){
   updateClock();
   window.setInterval("updateClock()", 1);
}

var modal = document.getElementById('id01');

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

