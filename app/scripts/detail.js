'use strict';

var productTemplate;
var commentTemplate;

function renderProduct(productId) {

    $.ajax({
        url: 'mocks/item.json'
    }).then(function(response) {

        var html = productTemplate(response);

        $('.detail').append(html);

        addListeners();

    });

}

function addListeners() {

    $('.btn-unfuncy .btn').click(function(evt) {
        evt.preventDefault();
        evt.stopPropagation();
        $(evt.target).parents('.btn-group').addClass('hidden');
        $(evt.target).parents('.btn-group').siblings('.btn-group').removeClass('hidden');
        // @todo: send message to backend
    });

    $('.btn-funcy .btn').click(function(evt) {
        evt.preventDefault();
        evt.stopPropagation();
        $(evt.target).parents('.btn-group').addClass('hidden');
        $(evt.target).parents('.btn-group').siblings('.btn-group').removeClass('hidden');
        // @todo: send message to backend
    });

    $('#comment-input').keypress(function(event) {
        if (event.which === 13 || event.keyCode === 13) {
            $('#comment-input').parents('.media').before(commentTemplate({
                name: 'me',
                text: $('#comment-input').val()
            }));
            $('#comment-input').val('');
            return false;
        }
        return true;
    });

    $('.panel-side .images img').click(function(evt) {
        var src = $(evt.target).attr('src');
        $('.panel-main .product img').attr('src', src);
    });

}


if (window.location.pathname === '/detail.html') {
    var productTemplateString = $('#product-template').html();
    productTemplate = _.template(productTemplateString);

    var commentTemplateString = $('#comment-template').html();
    commentTemplate = _.template(commentTemplateString);

    var query = getQueryString();
    renderProduct(query.product);
}
