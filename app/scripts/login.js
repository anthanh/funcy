'use strict';

if (window.location.pathname === '/login.html') {
    $('#login-form').validate({
        rules: {
            email: {
                required: true
            },
            password: {
                required: true
            }
        },
        success: function(label, element) {
          label.addClass('valid');
          $(element).parents('.form-group').addClass('has-success').removeClass('has-error');
        },
        highlight: function(element) {
          $(element).parents('.form-group').addClass('has-error').removeClass('has-success');
        },
        submitHandler: function(form) {
          alert('valid');
          console.log(form);
          // @todo: send to backend
        }
    });
}
