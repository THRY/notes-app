import { default as data } from './model.js';

let controller = (function() {


    $('.style-switcher .choice').click(function() {
        $('.style-switcher .choice').toggleClass('active');
    })

    $(window).on('load', function() {
        console.log(data.get('all')); 
    });

}()); 

export default { controller };



