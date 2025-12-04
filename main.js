const mobileMenuButton = document.getElementById("mobile-menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

console.log( "RYAN button:", mobileMenuButton );
console.log( "RYAN menu:", mobileMenu );

mobileMenuButton.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
});
