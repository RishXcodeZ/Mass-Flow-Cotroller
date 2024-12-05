document.getElementById('btn').addEventListener('click' , function(){
    const contactSection = document.getElementById('contact-us');
    if (contactSection) {
        contactSection.scrollIntoView({behaviour : 'smooth', block: 'start'});
    } else {
        console.error("Element with ID 'contact-us' not found.");
    }
    });
    
    document.getElementById("show-more-btn").addEventListener("click", function () {
        const hiddenCards = document.querySelectorAll(".hidden");
        hiddenCards.forEach((card) => {
          card.style.display = "block"; // Reveal hidden cards
        });
        // Force the parent container to recalculate its height
        const container = document.querySelector(".product-section");
        container.style.height = "auto";
        this.style.display = "none"; // Hide the button
        });