$(document).ready(function(){
    // LAYOUT
        // CUSTOM DROPDOWN

        $('button.dropdown-slide').click(function(){
            $(this).siblings('.dropdown-element').slideToggle();
        })

    // HEADER

        // STICKY HEADER
        if($(window).scrollTop() > 0){
            $('#header').addClass('sticky');
        } else {
            $('#header').removeClass('sticky')
        }

        $(window).scroll(function(){
            if($(window).scrollTop() > 0){
                $('#header').addClass('sticky');
            } else {
                $('#header').removeClass('sticky')
            }
        })

        // POSITION MENU FOR MOBILE VERSION

        $(window).resize(function(){
            if ($(window).width() < 992){
                $('.menu-wrapper').css('top', $('#header').height());
            } else {
                $('.menu-wrapper').css('top', 0);
            }
        })

        if ($(window).width() < 992){
            $('.menu-wrapper').css('top', $('#header').height());
            $(window).scroll(function(){
                
                // console.log($('#header').height());
                
                let prevVal = $('#header').height();
                // console.log(prevVal);
                setTimeout(function(){
                    let nextVal = $('#header').height();
                    // console.log(nextVal);
                    if(prevVal !== nextVal){
                        $('.menu-wrapper').css('top', $('#header').height());
                    }
                }, 300)                
            })
        } else {
            $('.menu-wrapper').css('top', 0);
        }

        // *** FIX *** IF USE HAMBURGER MOBILE AND RESIZE THE WINDOW TO DESKTOP VIEW THE MENU STAY IN DISPLAY NONE

        $(window).resize(function(){
            if($(window).width() > 992){
                if($('.menu-wrapper:visible').length == 0){
                    $('.menu-wrapper').css('display', 'flex');
                } 
            } else {
                if($('.menu-wrapper:visible').length > 0){
                    $('.menu-wrapper').css('display', 'none');
                } 
                
            }   
        })

        // HAMBURGER
        var $hamburger = $(".hamburger");
        $hamburger.on("click", function(e) {
            $hamburger.toggleClass("is-active");

            if($('.menu-wrapper .overlay-js').length > 0){
                $('.menu-wrapper .overlay-js').slideUp();
                setTimeout(function(){
                    $('.menu-wrapper .overlay-js').remove();
                }, 400)                
            } else {
                $('.menu-wrapper').append(overlayJS);
                $('.menu-wrapper .overlay-js').slideDown();
            }
            $('.menu-wrapper').slideToggle();
        });

        $(document).on('click', '.overlay-js', function(){
            if($(this).parent('.menu-wrapper').length > 0){
                $(this).fadeOut();
                $(this).remove();
                $('.menu-wrapper').slideUp();
                $hamburger.removeClass("is-active");
            }
        })
        

    // HOMEPAGE
        // MOVE BUTTON 'ACQUISTA SUBITO' FROM TOP TO BOTTOM
        if($(window).width() < 768){
            $('.button-move-js').insertAfter('main#main section.header-section.section-site-b')
        }

        $(window).resize(function(){
            if($(window).width() < 768){
                $('.button-move-js').insertAfter('main#main section.header-section.section-site-b')
            } else {
                $('.button-move-js').insertAfter('section.header-section.section-site-a .col-12.title-wrapper')
            }
        })

    // MODAL

    $(document).on('click', '.modal-section span.close', function(){
        $('.modal-section').removeClass('active');
        $('.menu-wrapper .overlay-js').slideUp(); 
        setTimeout(function(){
            $('.modal-section').remove();
            $('.overlay-js').remove();
        }, 300)               
    })
})

var overlayJS = $('<div/>', {class: 'overlay-js'});

var modalJS =
$('<div/>', {class: 'modal-section'}).append(
    $('<div/>', {class: 'modal-container'}).append(
        $('<div/>', {class: 'modal__title'}).append(
            $('<h3/>').append(
                    $('<span/>', {text: 'Hai bisogno di un consiglio?'}
                ).append(
                    $('<br/>')
                ).append(
                    $('<span/>', {text: 'Dimmi come ti senti:'})
                )
            )
        )
    ).append(
        $('<div/>', {class: 'grid-link'}).append(
            $('<div/>', {class: 'link-wrapper'}).append(
                $('<a/>', {class: 'modal-link'}).append(
                    $('<span/>', {class: 'modal-icon'}).append(
                        $('<img/>', {src: 'img/home/modal/icons/01.svg'})
                    )
                ).append(
                    $('<span/>', {class: 'modal-label', text: 'Diarrea'})
                )
            )
        ).append(
            $('<div/>', {class: 'link-wrapper'}).append(
                $('<a/>', {class: 'modal-link'}).append(
                    $('<span/>', {class: 'modal-icon'}).append(
                        $('<img/>', {src: 'img/home/modal/icons/02.svg'})
                    )
                ).append(
                    $('<span/>', {class: 'modal-label', text: 'Costipazione'})
                )
            )
        ).append(
            $('<div/>', {class: 'link-wrapper'}).append(
                $('<a/>', {class: 'modal-link'}).append(
                    $('<span/>', {class: 'modal-icon'}).append(
                        $('<img/>', {src: 'img/home/modal/icons/03.svg'})
                    )
                ).append(
                    $('<span/>', {class: 'modal-label', text: 'Vomito'})
                )
            )
        ).append(
            $('<div/>', {class: 'link-wrapper'}).append(
                $('<a/>', {class: 'modal-link'}).append(
                    $('<span/>', {class: 'modal-icon'}).append(
                        $('<img/>', {src: 'img/home/modal/icons/04.svg'})
                    )
                ).append(
                    $('<span/>', {class: 'modal-label', text: 'Mal di pancia'})
                )
            )
        ).append(
            $('<div/>', {class: 'link-wrapper'}).append(
                $('<a/>', {class: 'modal-link'}).append(
                    $('<span/>', {class: 'modal-icon'}).append(
                        $('<img/>', {src: 'img/home/modal/icons/05.svg'})
                    )
                ).append(
                    $('<span/>', {class: 'modal-label', text: 'Gonfiore intestinale'})
                )
            )
        ).append(
            $('<div/>', {class: 'link-wrapper'}).append(
                $('<a/>', {class: 'modal-link'}).append(
                    $('<span/>', {class: 'modal-icon'}).append(
                        $('<img/>', {src: 'img/home/modal/icons/06.svg'})
                    )
                ).append(
                    $('<span/>', {class: 'modal-label', text: 'Irregolarità'})
                )
            )
        )
    ).append(
        $('<div/>', {class: 'wrapper-button'}).append(
            $('<a/>', {class: 'btn-site btn-white', text: 'Continua'})
        )   
    ).append(
        $('<span/>', {class: 'close'}).append(
            $('<i/>', {class: 'bi bi-x'})
        )
    )
);

// FUNCTION TO OPEN MODAL
function openModal(){
    overlayJS.insertAfter('#footer');
    modalJS.insertAfter('#footer');

    if($(window).width() < 992){
        $('.menu-wrapper').slideUp();
        $(".hamburger").removeClass("is-active");
    }

    overlayJS.slideDown();
    setTimeout(function(){
        $('.modal-section').addClass('active');
    }, 200)
    
}


    