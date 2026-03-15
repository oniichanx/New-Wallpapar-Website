const gallery = document.getElementById("gallery");
let images = [];

/* โหลดรายชื่อรูป */
fetch("images.json")
.then(res => res.json())
.then(files => {
  files.forEach((file,i)=>{
    let img = document.createElement("img");
    img.loading = "lazy";
    img.src = "wallpaper/" + file;

    gallery.appendChild(img);
    images.push(img);

    img.onclick = () => showImage(i);
  });
});

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");
const downloadBtn = document.getElementById("download");

let current = 0;

function showImage(index){

current = index;

lightbox.style.display="flex";
lightboxImg.src = images[current].src;
downloadBtn.href = images[current].src;

}

nextBtn.onclick=(e)=>{

e.stopPropagation();

current=(current+1)%images.length;

showImage(current);

};

prevBtn.onclick=(e)=>{

e.stopPropagation();

current=(current-1+images.length)%images.length;

showImage(current);

};

/* ปิด popup */

lightbox.onclick=()=>{

lightbox.style.display="none";

};

/* keyboard control */

document.addEventListener("keydown",(e)=>{

if(lightbox.style.display!=="flex") return;

if(e.key==="Escape") lightbox.style.display="none";

if(e.key==="ArrowRight"){

current=(current+1)%images.length;
showImage(current);

}

if(e.key==="ArrowLeft"){

current=(current-1+images.length)%images.length;
showImage(current);

}

});

/* mobile swipe */

let startX=0;

lightbox.addEventListener("touchstart",(e)=>{

startX=e.touches[0].clientX;

});

lightbox.addEventListener("touchend",(e)=>{

let endX=e.changedTouches[0].clientX;

if(startX-endX>50){

current=(current+1)%images.length;
showImage(current);

}

if(endX-startX>50){

current=(current-1+images.length)%images.length;
showImage(current);

}

});