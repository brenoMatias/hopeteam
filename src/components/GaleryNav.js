import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jQuery';

$(document).ready(function(){
    $('.burger-menu').on('click', function(){
        $('.mobile-nav').slideToggle("slow");
    })
});
