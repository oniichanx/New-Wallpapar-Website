const images = document.querySelectorAll(".gallery img");
const preview = document.getElementById("preview");
const previewImg = document.getElementById("preview-img");

images.forEach(img => {
    img.onclick = () => {
        preview.style.display = "flex";
        previewImg.src = img.src;
    }
});

preview.onclick = () => {
    preview.style.display = "none";
};