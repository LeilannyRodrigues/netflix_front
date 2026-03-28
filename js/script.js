document.addEventListener('DOMContentLoaded', () => {
    // Seleciona todos os links de perfil
    const profileLinks = document.querySelectorAll('.profile');

    profileLinks.forEach(link => {
        link.addEventListener('click', () => {
            // Obtém o nome (figcaption) e o atributo src da imagem
            const name = link.querySelector('figcaption').textContent;
            const image = link.querySelector('img').getAttribute('src');

            // Salva os dados nas chaves exatas que o seu catalogo/js/main.js está procurando
            localStorage.setItem('perfilAtivoNome', name);
            localStorage.setItem('perfilAtivoImagem', image);
        });
    });

    // Lógica adicional: Alternância de Tema (Modo Claro/Escuro)
    const themeBtn = document.querySelector('.theme-btn');
    if (themeBtn) {
        themeBtn.addEventListener('click', () => {
            document.body.classList.toggle('light-mode');
            const isLight = document.body.classList.contains('light-mode');
            localStorage.setItem('theme', isLight ? 'light' : 'dark');
        });
    }
});
