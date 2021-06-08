var i=0;
var image=document.getElementById("dvd");
var imgs=new Array('dvd-white.svg', 'dvd-red.svg', 'dvd-lime.svg', 'dvd-blue.svg', 'dvd-pink.svg', 'dvd-lightLime.svg');
var j=imgs.length;
function imgsrc(){
     if (i!=(j-1))
           {i++;}
    else{
      i=0;
    }
image.src=imgs[i];
}

dvd.onclick = function () {
  imgsrc();
}


var dvdX = 0;
var dvdY = 0;


function moveDVDxPlus() {
  if(dvdX < (document.documentElement.clientWidth - 100)) {
    dvdX +=1
    dvd.style.left = dvdX + "px";
    setTimeout(moveDVDxPlus, 5);
  }
  else{
    moveDVDxMinus();
    imgsrc()
  }
}
function moveDVDxMinus() {
  if(dvdX > 0) {
    dvdX -=1
    dvd.style.left = dvdX + "px";
    setTimeout(moveDVDxMinus, 5);
  }
  else{
    moveDVDxPlus();
    imgsrc()
  }
}
function moveDVDyPlus() {
  if(dvdY < (document.documentElement.clientHeight - 50.95)) {
    dvdY +=1
    dvd.style.top = dvdY + "px";
    setTimeout(moveDVDyPlus, 5);
  }
  else{
    moveDVDyMinus();
    imgsrc()
  }
}
function moveDVDyMinus() {
  if(dvdY > 0) {
    dvdY -=1
    dvd.style.top = dvdY + "px";
    setTimeout(moveDVDyMinus, 5);
  }
  else{
    moveDVDyPlus();
    imgsrc()
  }
}
moveDVDxPlus();
moveDVDyPlus();
