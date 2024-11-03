function initializePortfolio() {
    const items = document.querySelectorAll('.portfolio-item');

    items.forEach(item => {
        item.onclick = function() {
            const url = item.getAttribute('data-url');
            location.href = url;  
        };
    });
}


initializePortfolio();
