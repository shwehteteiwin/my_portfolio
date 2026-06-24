
const romsImages = document.querySelectorAll(".roms-gallery img");
const modal = document.getElementById("romsModal");
const modalImage = document.getElementById("modalImage");
const closeModal = document.querySelector(".close-modal");

romsImages.forEach(img => {
    img.addEventListener("click", () => {
        modal.classList.add("show");
        modalImage.src = img.src;
    });
});

closeModal.addEventListener("click", () => {
    modal.classList.remove("show");
});

modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.classList.remove("show");
    }
});
