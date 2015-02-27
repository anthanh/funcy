'use strict';

if (window.location.pathname === '/index.html') {

    $('#contact-form').submit(function(evt) {
        evt.preventDefault();

        var formData = {};
        formData.name = $('#contact-form #name').val();
        formData.email = $('#contact-form #email').val();
        formData.newsletter = $('#contact-form #newsletter:checked').val();
        formData.subject = $('#contact-form input[name="subject"]:checked').val();
        formData.message = $('#contact-form #message').val();
        console.log('formData', formData);
        alert('Sended!');

    });
}
