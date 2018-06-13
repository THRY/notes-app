import { default as data } from './model.js';

let controller = (function() {


    $('.style-switcher .choice').click(function() {
        $('.style-switcher .choice').toggleClass('active');
    })

    $('.create').click(function() {
        $('header, main').toggleClass('blur');
        $('.modal').fadeIn(50);
    })

    $('.modal .close').click(function() {
        $('header, main').toggleClass('blur');
        $('.modal').fadeOut(50);
    }); 

    $(window).on('load', function() {
        console.log(data.get('all')); 
        window.localStorage.setItem('123', JSON.stringify({ title: 'papipao', description: "", importance: "", until: "" }));
        console.log(JSON.parse(window.localStorage.getItem('123')));
    });

}()); 

export default { controller };



