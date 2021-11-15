const currentMainImage = document.querySelector(".gallery-image4 img");

const imagestoChooseFrom = document.querySelectorAll(".gallery img")

imagestoChooseFrom.forEach(img => img.addEventListener("click", imageClick));

function imageClick(e) {
    console.log(e.target);
    imagestoChooseFrom.forEach(img => img.style.opacity = 1);
    currentMainImage.src = e.target.src;
    e.target.style.opacity = 0.5;
}