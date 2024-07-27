document.addEventListener("DOMContentLoaded", function() {
    const loader = document.getElementById("loader");
    const content = document.getElementById("content");
    
    setTimeout(function() {
        loader.style.opacity = '0';
        content.classList.remove('hidden');
        content.classList.add('visible');
        
        setTimeout(function() {
            loader.style.display = 'none';
        }, 500); // Додатковий час для плавного зникнення лоадера
    }, 1500); // Затримка 1.5 секунди для показу анімації завантаження

    const learnMoreBtn = document.getElementById("learnMoreBtn");
    if (learnMoreBtn) {
        learnMoreBtn.addEventListener("click", function() {
            alert("Дякуємо за інтерес! Дізнайтесь більше на нашій сторінці 'Про нас'.");
        });
    }
});
