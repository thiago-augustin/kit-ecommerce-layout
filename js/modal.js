function openModal (md) {
    let modal = document.getElementById(md);
    if (typeof modal == 'undefined' || modal === null)
        return;

    modal.style.display = 'block';
}

function openCardModal (md) {
    
    let modal = document.getElementById(md);
    if (typeof modal == 'undefined' || modal === null)
        return;

    modal.style.display = 'block';
    closeModal('modal-details');
}

function closeModal(md) {
    let modal = document.getElementById(md);
    if (typeof modal == 'undefined' || modal === null){
        return;
    }else {
        modal.style.display = 'none';
    }
}