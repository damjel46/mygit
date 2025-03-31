const items = document.querySelectorAll(".item");
const bottoms = document.querySelectorAll(".bottom");
items.forEach((item, index) => {
    item.addEventListener("click", () => {
        bottoms.forEach(bottom=> bottom.classList.remove("active"));
        bottoms[index].classList.add("active");
    })
})