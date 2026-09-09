window.addEventListener("load", () => {
    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        card.style.opacity = "0";

        setTimeout(() => {
            card.style.opacity = "1";
            card.style.transition = "1s";
        }, 300);
    });

    const menuBtn = document.querySelector(".menu-btn");
    const navLinks = document.querySelector(".nav-links");

    if (menuBtn && navLinks) {
        menuBtn.addEventListener("click", () => {
            navLinks.classList.toggle("active");
        });

        navLinks.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", () => {
                navLinks.classList.remove("active");
            });
        });
    }

    const bookingForm = document.getElementById("booking-form");
    const bookingMessage = document.querySelector(".booking-message");
    const dateInput = document.querySelector('#stay-date');

    if (dateInput) {
        const today = new Date();
        today.setDate(today.getDate() + 1);
        const isoDate = today.toISOString().split('T')[0];
        dateInput.min = isoDate;
    }

    if (bookingForm) {
        bookingForm.addEventListener("submit", event => {
            event.preventDefault();

            const nameField = bookingForm.querySelector("#full-name");
            const firstName = nameField?.value.trim().split(" ")[0] || "Guest";
            const roomType = bookingForm.querySelector("#room-type").value;

            bookingMessage.textContent = `Thanks ${firstName}! Your ${roomType || 'room'} booking request is on the way.`;
            bookingMessage.classList.add("visible");

            setTimeout(() => {
                bookingMessage.classList.remove("visible");
            }, 5000);

            bookingForm.reset();
            if (dateInput) dateInput.value = "";
        });
    }
});
