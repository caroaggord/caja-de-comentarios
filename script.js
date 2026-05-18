const commentForm = document.getElementById('commentForm');
const commentInput = document.getElementById('commentInput');
const commentsContainer = document.getElementById('commentsContainer');

commentForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const commentText = commentInput.value.trim();
    if (commentText !== "") {
        commentForm.requestFullscreen(); 
    }
})
function crearComentario(texto) {
    const ahora = new Date();
    const fechaHora = ahora.toLocaleString('es-MX', {
        day: '2-digit',
        month: '2-digit',
        year: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
    });
    const commentCard = document.createElement('div');
    commentCard.classList.add('comment-text');

    const pText = document.createElement('p');
    pText.classList.add('comment-text');
    pText.textContent = texto;

    const spanDate = document.createElement('span');
    spanDate.classList.add('comment-date');
    spanDate.textContent = 'Publicado el: ${fechaHora}';

    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete-btn');
    deleteBtn.textContent = 'Eliminar';

    deleteBtn.addEventListener('click', function() {
        commentCard.remove();
    });

commentCard.appendChild(pText);
commentCard.appendChild(spanDate);
commentCard.appendChild(deleteBtn);

commentsContainer.insertBefore(commentCard, commentsContainer.firstChild); 
}