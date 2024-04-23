document.querySelectorAll('.collage .photo').forEach(photo => {
    photo.addEventListener('click', function() {
        // Закрываем все остальные описания
        document.querySelectorAll('.photo-description').forEach(desc => {
            desc.classList.add('hidden');
        });
        // Показываем или скрываем описание под текущим фото
        this.querySelector('.photo-description').classList.toggle('hidden');
    });
});
