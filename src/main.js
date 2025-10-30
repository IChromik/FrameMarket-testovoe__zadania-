document.addEventListener('DOMContentLoaded', function() {
    function hideIncompleteRow() {
        const productGrid = document.querySelector('.product-grid');
        const productCards = Array.from(document.querySelectorAll('.product-card'));
        
        if (productCards.length === 0) return;
        
        productCards.forEach(card => card.style.display = '');
        
        const gridRect = productGrid.getBoundingClientRect();
        const cardRects = productCards.map(card => card.getBoundingClientRect());
        
        const firstRowTop = cardRects[0].top;
        let currentRowTop = firstRowTop;
        let visibleCards = [];
        
        cardRects.forEach((rect, index) => {
            if (Math.abs(rect.top - currentRowTop) < 10) {
                visibleCards.push(productCards[index]);
            } else {
                currentRowTop = rect.top;
            }
        });
        
        const firstRowCards = cardRects.filter(rect => 
            Math.abs(rect.top - firstRowTop) < 10
        ).length;
        
        const fullRows = Math.floor(productCards.length / firstRowCards);
        const cardsToShow = fullRows * firstRowCards;
        
        productCards.forEach((card, index) => {
            if (index >= cardsToShow) {
                card.style.display = 'none';
            }
        });
    }
    setTimeout(hideIncompleteRow, 100);
    window.addEventListener('resize', hideIncompleteRow);
});

// Функция для управления состоянием меню
const menuToggle = document.getElementById('menu-toggle');
const body = document.body;
const menuOverlay = document.querySelector('.menu-overlay');

menuToggle.addEventListener('change', function() {
    if (this.checked && window.innerWidth <= 639) {
        body.classList.add('menu-open');
    } else {
        body.classList.remove('menu-open');
    }
});

// Функция для добавления тени при скролле
const scrollHeader = () => {
    const header = document.getElementById('header');
    if (window.scrollY >= 10) {
        header.classList.add('bg-header');
    } else {
        header.classList.remove('bg-header');
    }
}

window.addEventListener('scroll', scrollHeader);
document.addEventListener('DOMContentLoaded', scrollHeader);

