const images = document.querySelectorAll(".gallery img");
const preview = document.getElementById("preview");
const previewImg = document.getElementById("preview-img");

images.forEach(img => {
    img.addEventListener("click", () => {
        preview.style.display = "flex";
        previewImg.src = img.src;
    });
});

preview.addEventListener("click", (e) => {
    if (e.target !== previewImg) {
        preview.style.display = "none";
    }
});

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        preview.style.display = "none";
    }
});
