const menuBtn = document.getElementById('menu-btn');
const navMenu = document.getElementById('nav-menu');

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('active');
    navMenu.classList.toggle('active');
});

const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});

const form = document.querySelector('form');

        form.addEventListener('submit', function(event) {
            event.preventDefault();
            
            const school = form.querySelector('input[name="school"]').value;
            const designation = form.querySelector('input[name="designation"]').value;
            const name = form.querySelector('input[name="name"]').value;
            const email = form.querySelector('input[name="email"]').value;
            const phone = form.querySelector('input[name="phone"]').value;
            const message = form.querySelector('textarea[name="message"]').value;

            if (school && designation && name && email && phone && message ) {
                alert("Message sent successfully!");
                form.reset();
            } else {
                alert("Please fill in all required fields.");
            }
        });


        
        let lastScroll = window.scrollY;

        window.addEventListener('scroll', () => {
            const navbar = document.getElementById("navbar");
            if (!navbar) return;
        
            const currentScroll = window.scrollY;
            
            if (currentScroll > lastScroll && currentScroll > 20) {
                // Scrolling down - hide navbar
                navbar.style.top = "-20%";
            } else {
                // Scrolling up or at top - show navbar
                navbar.style.top = "0";
            }
            
            lastScroll = currentScroll;
        });