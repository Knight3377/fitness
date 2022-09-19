var btn = $('.back-to-top');
var header = $('.header');

$(window).scroll(function() {
    fadeIn();
    if ($(window).scrollTop() > 1000) {
        btn.addClass('show');
    } else {
        btn.removeClass('show');
    }

});


var i = 1;

function openNav(x) {
    i++;
    x.classList.toggle("change");
    if (i % 2 != 1) {
        $('#myNav').fadeIn();
        document.getElementById("myNav").style.width = "80%";
        $('body').css('overflow', 'hidden');

        $('.sp-menu').hide();
        $('.sp-menu-close').show();
        $('.logo').css('opacity', '0.5');
        $('.main').css('opacity', '0.5');
    } else {
        $('#myNav').fadeOut();
        document.getElementById("myNav").style.width = "0%";
        $('body').css('overflow', 'auto');
        $('.menu_fadeIn').removeClass('animate__animated animate__fadeInLeft');

        $('.sp-menu').show();
        $('.sp-menu-close').hide();
        $('.logo').css('opacity', '1');
        $('.main').css('opacity', '1');
    }

}
$("#nav_search_link").on('click', function(event) {
    document.getElementById("myNav").style.width = "0%";
    $(".menu_btn .container").removeClass("change");
    i++;
});

function fadeIn() {
    $('.title-animation-wrapper').each(function() {

        var elemPos = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll >= elemPos - windowHeight) {
            $(this).addClass('title-animated');
        } else {}
    });
    $('.img-animation-wrapper').each(function() {
        var elemPos = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll >= elemPos - windowHeight) {
            $(this).addClass('img-animated');
        } else {}
    });

}

function openPage(pageName, elmnt) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    document.getElementById(pageName).style.display = "block";
    tablinks = document.getElementsByClassName("tablink");
}

// document.getElementById("defaultOpen").click();

$(".restaurant_introduction_grid_content .grid_item a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();

        // Store hash
        var hash = this.hash;

        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 300, function() {

            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
        });
    } // End if
});
$(".header_content li a").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();

        // Store hash
        var hash = this.hash;

        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 300, function() {

            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
        });
    } // End if
});

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn1 = document.getElementById("check_btn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
// btn1.onclick = function() {
//     modal.style.display = "block";
// }

// When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//     modal.style.display = "none";
// }

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }
var j = 1;
$(document).ready(function() {
    $('.notice-bell').click(function() {
        if (j == 1) {
            $('.popup').show();
            j = 0;
        }else{
            $('.popup').hide();
            j = 1;
        }
    });

    $('.profile-menu .profile-menu-item').hover(function() {
        $(this).css('background-color', '#D1C74E');
        $(this).find('a').css('color', 'white');
    }, function(){
        $(this).css('background-color', 'white');
        $(this).find('a').css('color', '#d1c74e');
    });
});



