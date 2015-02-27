'use strict';

var productItemTemplate;
var PAGE_SIZE = 8;
var PAGE_NUMBER = 0;

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

}

function getMore(search) {

    var query = {
        page: PAGE_NUMBER,
        pageSize: PAGE_SIZE,
    };

    if (search) {
        query.search = search;
    }

    $.ajax({
        url: 'mocks/list.json?' + $.param(query)
    }).then(function(response) {

        PAGE_NUMBER++;

        var html = '';

        response.forEach(function(product) {
            html += productItemTemplate(product);
        });

        $('#product-list').append(html);

        addListeners();

    });
}

$('#show-more').click(function() {
    var query = getQueryString();
    getMore(query.search);
});

$('#search').keypress(function(event) {
    if (event.which === 13 || event.keyCode === 13) {
        window.location = 'list.html?search=' + $('#search').val();
        return false;
    }
    return true;
});


if (window.location.pathname === '/list.html') {

    var productItemTemplateString = $('#product-item-template').html();
    var productItemTemplate = _.template(productItemTemplateString);

    var query = getQueryString();
    getMore(query.search);
}
