function abrirModal(boton) {
    const card = boton.closest('.cards');

    const imgBlock = card.querySelector('.img-producto').cloneNode(true);
    const contentBlock = card.querySelector('.card-content').cloneNode(true);
    const modalContentBlock = card.querySelector('.modal-content').cloneNode(true);

    const parrafo = contentBlock.querySelector('p');


    if (parrafo) {
        parrafo.style.fontSize = '1.5rem';
        parrafo.style.transform = 'translateY(-25px)';

    }

    const modal = document.getElementById('productModal');
    const modalBody = document.getElementById('modalDynamicBody');

    modalBody.innerHTML = '';

    modalBody.append(imgBlock, contentBlock, modalContentBlock);

    modalContentBlock.style.display = 'block';
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function cerrarModal() {

    const modal = document.getElementById('productModal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

