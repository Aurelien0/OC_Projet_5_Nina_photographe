$(document).ready(function() {
    $('.gallery').mauGallery({
        columns: {
            xs: 1,
            sm: 2,
            md: 3,
            lg: 3,
            xl: 3
        },
        lightBox: true,
        lightboxId: 'myAwesomeLightbox',
        showTags: true,
        tagsPosition: 'top'
    });
});

// Bloquer le comportement par défaut du formulaire de contact
document.addEventListener("DOMContentLoaded", function() {
    var submitButton = document.querySelector('input[type="submit"]');
    
    submitButton.addEventListener("click", function(event) {
      event.preventDefault();
    });
  });
  