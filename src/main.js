function showDetails(category) {
   const details = document.querySelectorAll(".product-details");
   details.forEach((detail) => (detail.style.display = "none"));

   const selectedCategory = document.getElementById(category);
   selectedCategory.style.display = "block";
}

let cartCount = 0;

function addToCart() {
   cartCount++;
   document.querySelector(".cart-count").textContent = cartCount;
}