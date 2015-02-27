'use strict';

function getQueryString() {

    var query = window.location.search.slice(1, window.location.search.length);
    query = query.split('&');

    var result = {};

    query.forEach(function(queryItem) {
        queryItem = queryItem.split('=');
        result[queryItem[0]] = queryItem[1];
    });

    return result;
}
