'use strict';
/* jshint camelcase:false */
/* global hello */

if (window.location.pathname === '/register.html') {
    $('#register-form').validate({
        rules: {
            email: {
                required: true
            },
            'first-name': {
                required: true
            },
            'last-name': {
                required: true
            },
            password: {
                required: true,
            },
            repassword: {
                equalTo: '#password'
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

    hello.init({
        facebook: '281749621980454'
    }, {
        'redirect_uri': 'oauth.html',
        scope: 'email'
    });

    $('#google').click(function() {
        hello('google').login();
    });

    $('#facebook').click(function() {
        hello('facebook').login();
    });

    hello.on('auth.login', function(auth) {

        // call user information, for the given network
        hello(auth.network).api('/me').then(function(user) {
            // Inject it into the container
            console.log(user);
            $('#email').val(user.email);
            $('#first-name').val(user.first_name);
            $('#last-name').val(user.last_name);
        });
    });
}
