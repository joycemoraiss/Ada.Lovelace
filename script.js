// Efeito suave ao rolar para seções
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Atualizar ano no footer (opcional)
const year = new Date().getFullYear();
document.getElementById('year').textContent = year;