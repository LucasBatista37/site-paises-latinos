document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.item'); // Selecione todas as imagens
    const thumbnails = document.querySelectorAll('.thumbnail'); // Selecione todas as miniaturas
    let currentIndex = 0; // Índice da imagem atual

    function showItem(index) {
        items.forEach((item, i) => {
            item.style.opacity = i === index ? '1' : '0'; // Mostrar a imagem atual e esconder as outras
        });
        thumbnails.forEach((thumb, i) => {
            thumb.classList.toggle('active', i === index); // Ativa a miniatura atual
            thumb.classList.toggle('inactive', i !== index); // Desativa as outras miniaturas
        });
    }

    function showNext() {
        currentIndex = (currentIndex + 1) % items.length; // Incrementa o índice e faz o loop para o início
        showItem(currentIndex);
    }

    function showPrev() {
        currentIndex = (currentIndex - 1 + items.length) % items.length; // Decrementa o índice e faz o loop para o final
        showItem(currentIndex);
    }

    document.getElementById('next').addEventListener('click', showNext);
    document.getElementById('prev').addEventListener('click', showPrev);

    // Inicializar com a primeira imagem visível
    showItem(currentIndex);

    // Adicionar funcionalidade de clicar na miniatura
    thumbnails.forEach((thumb, i) => {
        thumb.addEventListener('click', () => {
            currentIndex = i;
            showItem(currentIndex);
        });
    });
});
