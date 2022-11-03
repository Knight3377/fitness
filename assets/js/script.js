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


var j = 1;


$(document).ready(function() {

    var lesson_image_height = $('.lesson-box-inner').innerHeight() + 2;
    $('.lesson-image').css('height', lesson_image_height);

    
    //file upload part
    $('#resetbtn1').hide();
    $('#resetbtn2').hide();
    $('#resetbtn3').hide();
    $('#resetbtn4').hide();
    $('#resetbtn5').hide();
    $('#resetbtn1').on('click', function(e) {
        var $el = $('#actual-btn1');
        $el.wrap('<form>').closest(
          'form').get(0).reset();
        $el.unwrap();
        $('span#file-chosen1').html('');
        $('span#file-chosen1').html('<span id="file-chosen1">ファイルをアップロード</span>');
        $('#resetbtn1').hide();
    });
    $('#resetbtn2').on('click', function(e) {
        var $el = $('#actual-btn2');
        $el.wrap('<form>').closest(
          'form').get(0).reset();
        $el.unwrap();
        $('span#file-chosen2').html('');
        $('span#file-chosen2').html('<span id="file-chosen2">ファイルをアップロード</span>');
        $('#resetbtn2').hide();
    });
    $('#resetbtn3').on('click', function(e) {
        var $el = $('#actual-btn3');
        $el.wrap('<form>').closest(
          'form').get(0).reset();
        $el.unwrap();
        $('span#file-chosen3').html('');
        $('span#file-chosen3').html('<span id="file-chosen3">ファイルをアップロード</span>');
        $('#resetbtn3').hide();
    });
    $('#resetbtn4').on('click', function(e) {
        var $el = $('#actual-btn4');
        $el.wrap('<form>').closest(
          'form').get(0).reset();
        $el.unwrap();
        $('span#file-chosen4').html('');
        $('span#file-chosen4').html('<span id="file-chosen4">ファイルをアップロード</span>');
        $('#resetbtn4').hide();
    });
    $('#resetbtn5').on('click', function(e) {
        var $el = $('#actual-btn5');
        $el.wrap('<form>').closest(
          'form').get(0).reset();
        $el.unwrap();
        $('span#file-chosen5').html('');
        $('span#file-chosen5').html('<span id="file-chosen5">ファイルをアップロード</span>');
        $('#resetbtn5').hide();
    });
    //end


    //question & answer add part
    $('.qa-field').find('.del').hide();
    $('.question-new').on('click', function(e) {
        $('<div class="qa-upload-box  qa-box-new"><div class="question-add"><h3>Q</h3><textarea id="ques" name="ques" rows="5" cols="33" placeholder="よくある質問を入力する"></textarea></div><div class="answer-add"><h3>A</h3><textarea id="ans" name="ans" rows="5" cols="33" placeholder="質問の回答を入力する"></textarea></div><p class="del" style="display: block;"><span>×</span>この質問を削除する</p></div>').insertBefore('.question-new');
        // $('.qa-field').find('.del').show();
    });

    $(document).on('click','.qa-box-new .del',function(){
        var $el = $(this).parent('.qa-box-new');
        $el.closest('.qa-box-new').remove();
    });

    //end


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
    }, function() {
        $(this).css('background-color', 'white');
        $(this).find('a').css('color', 'black');
    });


    function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                $('#picture').attr('src', e.target.result);
            }
            reader.readAsDataURL(input.files[0]);
        }
    }

    $("#fileinput").change(function () {
        readURL(this);
    });
    //modals part

    jQuery(".tb-next").click(function () {
        let cur = $(this).closest("#tabArea").find(".tab-pan.active");
        if (jQuery(cur).next().length > 0) {
          $(".tb-prev").removeClass("hide");
          jQuery(".tab-pan").removeClass("active");
          jQuery(cur).next().addClass("active");
        }
        if (jQuery(cur).next().next().length == 0) {
          $(".tb-next").addClass("hide");
          $(".submitbtn").removeClass("hide");
        }
      });

      $(".tb-prev").click(function () {
        let cur = $(this).closest("#tabArea").find(".tab-pan.active");
        if (jQuery(cur).prev().length > 0) {
          $(".submitbtn").addClass("hide");
          $(".tb-next").removeClass("hide");
          jQuery(".tab-pan").removeClass("active");
          jQuery(cur).prev().addClass("active");
        }
        if (jQuery(cur).prev().prev().length == 0) {
          $(".tb-prev").addClass("hide");
        }
      });

      $('.notice-circle i').click(function(){
        index = $(this).attr('attr');
        jQuery(".tab-pan").removeClass("active");
        $(".tab-pan:nth-child(" + index + ")").addClass("active");
      });

    //mail register button event
    $("#policy_check").click(function() {
        if (this.checked) {
             $('.mail-register').css('background-color', '#D1C74E');
             $('.mail-register').css('box-shadow', '0px 4px 0px #8d8422'); 
             $('.mail-register').removeAttr('disabled'); 
        } else {
            $('.mail-register').css('background-color', '#9D9D9D');
            $('.mail-register').css('box-shadow', '0px 4px 0px #313131');  
        }
    });
   
});

//file upload

const actualBtn1 = document.getElementById('actual-btn1');
const actualBtn2 = document.getElementById('actual-btn2');
const actualBtn3 = document.getElementById('actual-btn3');
const actualBtn4 = document.getElementById('actual-btn4');
const actualBtn5 = document.getElementById('actual-btn5');

const fileChosen1 = document.getElementById('file-chosen1');
const fileChosen2 = document.getElementById('file-chosen2');
const fileChosen3 = document.getElementById('file-chosen3');
const fileChosen4 = document.getElementById('file-chosen4');
const fileChosen5 = document.getElementById('file-chosen5');

actualBtn1.addEventListener('change', function(){
  fileChosen1.textContent = this.files[0].name;
      console.log($(this).parent('.photo-add').find('.del'));
      $(this).parent('.photo-add').find('.del').show();
});
actualBtn2.addEventListener('change', function(){
  fileChosen2.textContent = this.files[0].name;
      console.log($(this).parent('.photo-add').find('.del'));
      $(this).parent('.photo-add').find('.del').show();
});
actualBtn3.addEventListener('change', function(){
  fileChosen3.textContent = this.files[0].name;
      console.log($(this).parent('.photo-add').find('.del'));
      $(this).parent('.photo-add').find('.del').show();
});

actualBtn4.addEventListener('change', function(){
  fileChosen4.textContent = this.files[0].name;
      console.log($(this).parent('.photo-add').find('.del'));
      $(this).parent('.photo-add').find('.del').show();
});
actualBtn5.addEventListener('change', function(){
  fileChosen5.textContent = this.files[0].name;
      console.log($(this).parent('.photo-add').find('.del'));
      $(this).parent('.photo-add').find('.del').show();
});



//published part
var $select = $('select#order');
$select.each(function() {
    $(this).addClass($(this).children(':selected').val());
}).on('change', function(ev) {
    $(this).attr('class', '').addClass($(this).children(':selected').val());
});

$('.userinfo-register').click(function(){
    $('.lesson-add-complete-notice').show();
    $('.page-mypage-lesson-add .container').css('position', 'relative');
});


