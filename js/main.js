$(function(){

    $('.about-water__text-hide').hide().prev().on('click', function(e){
    e.preventDefault();
    $('.about-water__text-hide').not(this).slideUp();
    $(this).next().not(':visible').slideDown();});

    $('.shop-cataloge__filter').on('click', function(){
        $('.shop__items').slideToggle(700);
    });




    $('.nav__burger-menu').on('click', function(){
        $('.nav__item-adapt').toggleClass('nav__item-adapt--active');
    });


    $('.nav__hide').hide().prev().on('click', function(){
    $('.nav__hide').not(this).slideUp();
    $(this).next().not(':visible').slideDown();});


    $(".review-block__rating").rateYo({
        starWidth: "15px",
        normalFill: "#fff",
        ratedFill: "#FECC00",
        starSvg: '<svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.91712 6.57874L10.6687 1.18803L12.4202 6.57874C12.656 7.30437 13.3322 7.79567 14.0952 7.79567H19.7633L15.1777 11.1273C14.5604 11.5758 14.3021 12.3707 14.5379 13.0964L16.2895 18.4871L11.7039 15.1554C11.0866 14.707 10.2507 14.707 9.63348 15.1554L5.04787 18.4871L6.79942 13.0964C7.03519 12.3707 6.77691 11.5758 6.15964 11.1273L1.57403 7.79567H7.24216C8.00514 7.79567 8.68134 7.30438 8.91712 6.57874Z" stroke="#FECC00" stroke-width="1.80132"/></svg>',
        readOnly: true,
    });
    

    $('.related-products__slider').slick({
        slidesToShow: 4,
        prevArrow: '<button type="button" class="slick-prev"><svg width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.303692 8.70946L7.16526 15.6177C7.36113 15.8149 7.62218 15.9231 7.90054 15.9231C8.1792 15.9231 8.4401 15.8147 8.63597 15.6177L9.25895 14.9903C9.45466 14.7934 9.56248 14.5304 9.56248 14.25C9.56248 13.9698 9.45466 13.698 9.25895 13.5011L5.25601 9.46216L17.9735 9.46216C18.5469 9.46216 19 9.01023 19 8.43279L19 7.54588C19 6.96845 18.5469 6.47095 17.9735 6.47095L5.21059 6.47095L9.2588 2.40948C9.45451 2.21228 9.56233 1.95646 9.56233 1.67606C9.56233 1.39598 9.45451 1.13642 9.2588 0.939379L8.63582 0.314048C8.43995 0.116852 8.17905 0.00938983 7.90039 0.0093898C7.62203 0.00938978 7.36098 0.118251 7.16511 0.315446L0.303538 7.22349C0.107205 7.42131 -0.000767983 7.68538 4.47038e-06 7.96609C-0.000613534 8.24773 0.107205 8.51195 0.303692 8.70946Z" fill="#0083C3"/></svg></button>',
        
        nextArrow: '<button type="button" class="slick-next"><svg width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.6963 7.28322L11.8347 0.375015C11.6389 0.17782 11.3778 0.0695801 11.0995 0.0695801C10.8208 0.0695801 10.5599 0.177975 10.364 0.375015L9.74105 1.00237C9.54534 1.19925 9.43752 1.46223 9.43752 1.74263C9.43752 2.02287 9.54534 2.29471 9.74105 2.4916L13.744 6.53052H1.02645C0.453061 6.53052 0 6.98245 0 7.55988V8.44679C0 9.02423 0.453061 9.52172 1.02645 9.52172H13.7894L9.7412 13.5832C9.54549 13.7804 9.43767 14.0362 9.43767 14.3166C9.43767 14.5967 9.54549 14.8563 9.7412 15.0533L10.3642 15.6786C10.5601 15.8758 10.821 15.9833 11.0996 15.9833C11.378 15.9833 11.639 15.8744 11.8349 15.6772L18.6965 8.76918C18.8928 8.57136 19.0008 8.3073 19 8.02659C19.0006 7.74495 18.8928 7.48073 18.6963 7.28322Z" fill="#0083C3"/></svg></button>',

        responsive: [
            {
              breakpoint: 1201,
              settings: {
                slidesToShow: 3,
              }
            },
            {
                breakpoint: 606,
                settings: {
                  slidesToShow: 2,
                }
              }
        ]

    });


    $('.product-tabs__top-item').on('click', function(e){
        e.preventDefault();
        $('.product-tabs__top-item').removeClass('product-tabs__top-item--active');
        $(this).addClass('product-tabs__top-item--active');

        $('.product-tabs__content-item').removeClass('product-tabs__content-item--active');
        $($(this).attr('href')).addClass('product-tabs__content-item--active');
    });
    


    $('.product-info__form-counter').styler();

    $(".rating").rateYo({
        starWidth: "24px",
        normalFill: "#fff",
        ratedFill: "#FECC00",
        starSvg: '<svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.91712 6.57874L10.6687 1.18803L12.4202 6.57874C12.656 7.30437 13.3322 7.79567 14.0952 7.79567H19.7633L15.1777 11.1273C14.5604 11.5758 14.3021 12.3707 14.5379 13.0964L16.2895 18.4871L11.7039 15.1554C11.0866 14.707 10.2507 14.707 9.63348 15.1554L5.04787 18.4871L6.79942 13.0964C7.03519 12.3707 6.77691 11.5758 6.15964 11.1273L1.57403 7.79567H7.24216C8.00514 7.79567 8.68134 7.30438 8.91712 6.57874Z" stroke="#FECC00" stroke-width="1.80132"/></svg>',
    });

    $('.product-slide__main').slick({
        asNavFor: '.product-slide__thumb',
        draggable: false,
        fade: true,
        arrows: false,
    });
    $('.product-slide__thumb').slick({
        asNavFor: '.product-slide__main',
        focusOnSelect: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        draggable: false,
        responsive: [
            {
              breakpoint: 693,
              settings: {
                vertical: true,
              }
            }
        ]

    });

    $('.content-filter__btn').on('click', function(){
        $('.content-filter__btn').toggleClass('content-filter__btn--active');
    });
    
    $('.content-filter__hide-list').hide().prev().on('click', function(e){
    e.preventDefault();
    $('.content-filter__hide-list').not(this).slideUp();
    $(this).next().not(':visible').slideDown();});


    $('.watched__slider').slick({
        slidesToShow: 5,

        prevArrow: '<button type="button" class="slick-prev"><svg width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.303692 8.70946L7.16526 15.6177C7.36113 15.8149 7.62218 15.9231 7.90054 15.9231C8.1792 15.9231 8.4401 15.8147 8.63597 15.6177L9.25895 14.9903C9.45466 14.7934 9.56248 14.5304 9.56248 14.25C9.56248 13.9698 9.45466 13.698 9.25895 13.5011L5.25601 9.46216L17.9735 9.46216C18.5469 9.46216 19 9.01023 19 8.43279L19 7.54588C19 6.96845 18.5469 6.47095 17.9735 6.47095L5.21059 6.47095L9.2588 2.40948C9.45451 2.21228 9.56233 1.95646 9.56233 1.67606C9.56233 1.39598 9.45451 1.13642 9.2588 0.939379L8.63582 0.314048C8.43995 0.116852 8.17905 0.00938983 7.90039 0.0093898C7.62203 0.00938978 7.36098 0.118251 7.16511 0.315446L0.303538 7.22349C0.107205 7.42131 -0.000767983 7.68538 4.47038e-06 7.96609C-0.000613534 8.24773 0.107205 8.51195 0.303692 8.70946Z" fill="#0083C3"/></svg></button>',
        
        nextArrow: '<button type="button" class="slick-next"><svg width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.6963 7.28322L11.8347 0.375015C11.6389 0.17782 11.3778 0.0695801 11.0995 0.0695801C10.8208 0.0695801 10.5599 0.177975 10.364 0.375015L9.74105 1.00237C9.54534 1.19925 9.43752 1.46223 9.43752 1.74263C9.43752 2.02287 9.54534 2.29471 9.74105 2.4916L13.744 6.53052H1.02645C0.453061 6.53052 0 6.98245 0 7.55988V8.44679C0 9.02423 0.453061 9.52172 1.02645 9.52172H13.7894L9.7412 13.5832C9.54549 13.7804 9.43767 14.0362 9.43767 14.3166C9.43767 14.5967 9.54549 14.8563 9.7412 15.0533L10.3642 15.6786C10.5601 15.8758 10.821 15.9833 11.0996 15.9833C11.378 15.9833 11.639 15.8744 11.8349 15.6772L18.6965 8.76918C18.8928 8.57136 19.0008 8.3073 19 8.02659C19.0006 7.74495 18.8928 7.48073 18.6963 7.28322Z" fill="#0083C3"/></svg></button>',
        responsive: [
            {
              breakpoint: 1201,
              settings: {
                slidesToShow: 4,
              }
            },
            {
                breakpoint: 973,
                settings: {
                  slidesToShow: 3,
                }
            },
            {
                breakpoint: 759,
                settings: {
                  slidesToShow: 2,
                }
            },
            {
                breakpoint: 556,
                settings: {
                  slidesToShow: 1,
                }
            }
        ]
        
    });


    $('.shop-cataloge__select').styler();

    $('.filter__item-box').on('click', function(){
        $(this).parent().toggleClass('filter__item--active');
    });


    $('.filter__price-input').ionRangeSlider({
        onStart: function (data) {
            $('.filter__price-from').text(data.from);
            $('.filter__price-to').text(data.to);
        },
        onChange: function (data) {
            $('.filter__price-from').text(data.from);
            $('.filter__price-to').text(data.to);
        },
    });




    $('.review__slider').slick({
        slidesToShow: 4,
        prevArrow: '<button type="button" class="slick-prev"><svg width="12" height="19" viewBox="0 0 12 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.820657 9.06664C0.820657 8.74165 0.94764 8.4167 1.20107 8.16893L9.18007 0.37199C9.68763 -0.123997 10.5106 -0.123997 11.0179 0.37199C11.5253 0.867777 11.5253 1.67177 11.0179 2.1678L3.95766 9.06664L11.0177 15.9655C11.525 16.4615 11.525 17.2654 11.0177 17.7612C10.5103 18.2574 9.68739 18.2574 9.17982 17.7612L1.20083 9.96434C0.947353 9.71645 0.820657 9.3915 0.820657 9.06664Z" fill="#0083C3"/></svg></button>',
        nextArrow: '<button type="button" class="slick-next"><svg width="12" height="19" viewBox="0 0 12 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.1793 9.93336C11.1793 10.2583 11.0524 10.5833 10.7989 10.8311L2.81993 18.628C2.31237 19.124 1.48944 19.124 0.982081 18.628C0.474723 18.1322 0.474723 17.3282 0.982081 16.8322L8.04234 9.93336L0.982327 3.03449C0.474969 2.5385 0.474969 1.73458 0.982327 1.23884C1.48968 0.742611 2.31261 0.742611 2.82017 1.23884L10.7992 9.03566C11.0526 9.28355 11.1793 9.6085 11.1793 9.93336Z" fill="#0083C3"/></svg></button>',
        dots: true,
        responsive: [
            {
              breakpoint: 1201,
              settings: {
                slidesToShow: 3,
              }
            },
            {
            breakpoint: 853,
            settings: {
                slidesToShow: 2,
                }
            },
            {
            breakpoint: 608,
            settings: {
                slidesToShow: 1,
                }
            },
        ]
    });
    
    $('.video__slider').slick({
        prevArrow: '<button type="button" class="slick-prev"><svg width="12" height="19" viewBox="0 0 12 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.820657 9.06664C0.820657 8.74165 0.94764 8.4167 1.20107 8.16893L9.18007 0.37199C9.68763 -0.123997 10.5106 -0.123997 11.0179 0.37199C11.5253 0.867777 11.5253 1.67177 11.0179 2.1678L3.95766 9.06664L11.0177 15.9655C11.525 16.4615 11.525 17.2654 11.0177 17.7612C10.5103 18.2574 9.68739 18.2574 9.17982 17.7612L1.20083 9.96434C0.947353 9.71645 0.820657 9.3915 0.820657 9.06664Z" fill="#0083C3"/></svg></button>',
        
        nextArrow: '<button type="button" class="slick-next"><svg width="12" height="19" viewBox="0 0 12 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.1793 9.93336C11.1793 10.2583 11.0524 10.5833 10.7989 10.8311L2.81993 18.628C2.31237 19.124 1.48944 19.124 0.982081 18.628C0.474723 18.1322 0.474723 17.3282 0.982081 16.8322L8.04234 9.93336L0.982327 3.03449C0.474969 2.5385 0.474969 1.73458 0.982327 1.23884C1.48968 0.742611 2.31261 0.742611 2.82017 1.23884L10.7992 9.03566C11.0526 9.28355 11.1793 9.6085 11.1793 9.93336Z" fill="#0083C3"/></svg></button>',
        dots: true,
    });

    $('.partners__slider').slick({
        prevArrow: '<button type="button" class="slick-prev"><svg width="12" height="19" viewBox="0 0 12 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.820657 9.06664C0.820657 8.74165 0.94764 8.4167 1.20107 8.16893L9.18007 0.37199C9.68763 -0.123997 10.5106 -0.123997 11.0179 0.37199C11.5253 0.867777 11.5253 1.67177 11.0179 2.1678L3.95766 9.06664L11.0177 15.9655C11.525 16.4615 11.525 17.2654 11.0177 17.7612C10.5103 18.2574 9.68739 18.2574 9.17982 17.7612L1.20083 9.96434C0.947353 9.71645 0.820657 9.3915 0.820657 9.06664Z" fill="#0083C3"/></svg></button>',
        
        nextArrow: '<button type="button" class="slick-next"><svg width="12" height="19" viewBox="0 0 12 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.1793 9.93336C11.1793 10.2583 11.0524 10.5833 10.7989 10.8311L2.81993 18.628C2.31237 19.124 1.48944 19.124 0.982081 18.628C0.474723 18.1322 0.474723 17.3282 0.982081 16.8322L8.04234 9.93336L0.982327 3.03449C0.474969 2.5385 0.474969 1.73458 0.982327 1.23884C1.48968 0.742611 2.31261 0.742611 2.82017 1.23884L10.7992 9.03566C11.0526 9.28355 11.1793 9.6085 11.1793 9.93336Z" fill="#0083C3"/></svg></button>',
        dots: true,
    });

    $('.news__slider-items').slick({
        slidesToShow: 3,
        prevArrow: '<button type="button" class="slick-prev"><svg width="12" height="19" viewBox="0 0 12 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.820657 9.06664C0.820657 8.74165 0.94764 8.4167 1.20107 8.16893L9.18007 0.37199C9.68763 -0.123997 10.5106 -0.123997 11.0179 0.37199C11.5253 0.867777 11.5253 1.67177 11.0179 2.1678L3.95766 9.06664L11.0177 15.9655C11.525 16.4615 11.525 17.2654 11.0177 17.7612C10.5103 18.2574 9.68739 18.2574 9.17982 17.7612L1.20083 9.96434C0.947353 9.71645 0.820657 9.3915 0.820657 9.06664Z" fill="#0083C3"/></svg></button>',
        
        nextArrow: '<button type="button" class="slick-next"><svg width="12" height="19" viewBox="0 0 12 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.1793 9.93336C11.1793 10.2583 11.0524 10.5833 10.7989 10.8311L2.81993 18.628C2.31237 19.124 1.48944 19.124 0.982081 18.628C0.474723 18.1322 0.474723 17.3282 0.982081 16.8322L8.04234 9.93336L0.982327 3.03449C0.474969 2.5385 0.474969 1.73458 0.982327 1.23884C1.48968 0.742611 2.31261 0.742611 2.82017 1.23884L10.7992 9.03566C11.0526 9.28355 11.1793 9.6085 11.1793 9.93336Z" fill="#0083C3"/></svg></button>',
        responsive: [
            {
              breakpoint: 761,
              settings: {
                slidesToShow: 2,
              }
            },
            {
                breakpoint: 692,
                settings: {
                  slidesToShow: 1,
                }
            },
        ]
    });
    

    $('.tabs__item-button').on('click', function(e){
        e.preventDefault();
        if($(this)[0]===$('#js-slider')[0]){
            if(!$(this).hasClass('active')){
                $('.tabs__slider').slick({
                    slidesToShow: 3,
                    dots: true,
                    prevArrow: '<button type="button" class="slick-prev"><svg width="12" height="19" viewBox="0 0 12 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.820657 9.06664C0.820657 8.74165 0.94764 8.4167 1.20107 8.16893L9.18007 0.37199C9.68763 -0.123997 10.5106 -0.123997 11.0179 0.37199C11.5253 0.867777 11.5253 1.67177 11.0179 2.1678L3.95766 9.06664L11.0177 15.9655C11.525 16.4615 11.525 17.2654 11.0177 17.7612C10.5103 18.2574 9.68739 18.2574 9.17982 17.7612L1.20083 9.96434C0.947353 9.71645 0.820657 9.3915 0.820657 9.06664Z" fill="#0083C3"/></svg></button>',
                    nextArrow: '<button type="button" class="slick-next"><svg width="12" height="19" viewBox="0 0 12 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.1793 9.93336C11.1793 10.2583 11.0524 10.5833 10.7989 10.8311L2.81993 18.628C2.31237 19.124 1.48944 19.124 0.982081 18.628C0.474723 18.1322 0.474723 17.3282 0.982081 16.8322L8.04234 9.93336L0.982327 3.03449C0.474969 2.5385 0.474969 1.73458 0.982327 1.23884C1.48968 0.742611 2.31261 0.742611 2.82017 1.23884L10.7992 9.03566C11.0526 9.28355 11.1793 9.6085 11.1793 9.93336Z" fill="#0083C3"/></svg></button>',
                    responsive: [
                        {
                          breakpoint: 1287,
                          settings: {
                            arrows: false,
                          }
                        },
                    ]
                    
                });
                $(this).addClass('active');
            };
            
        }
        $('.tabs__item-button').removeClass('tabs__item-button--active');
        $(this).addClass('tabs__item-button--active');

        $('.tabs__item').removeClass('tabs__item--active');
        $($(this).attr('href')).addClass('tabs__item--active');
    });
    $('.slider__items').slick({
        dots: true,
        prevArrow: '<button type="button" class="slick-prev"><svg width="24" height="14" viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 -8.58279e-07C12.4302 -8.95882e-07 12.8602 0.168065 13.1882 0.50349L23.5077 11.0639C24.1641 11.7357 24.1641 12.8249 23.5077 13.4964C22.8515 14.1679 21.7874 14.1679 21.1309 13.4964L12 4.15191L2.86918 13.496C2.21273 14.1676 1.14872 14.1676 0.492582 13.496C-0.164188 12.8245 -0.164189 11.7354 0.492582 11.0636L10.8119 0.503164C11.14 0.167684 11.5701 -8.2069e-07 12 -8.58279e-07Z" fill="#0083C3"/></svg></button>',
        fade: true,
        nextArrow: '<button type="button" class="slick-next"><svg width="24" height="14" viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 14C11.5698 14 11.1398 13.8319 10.8118 13.4965L0.49234 2.93607C-0.164113 2.2643 -0.164113 1.17513 0.49234 0.503627C1.14853 -0.167876 2.21264 -0.167876 2.86915 0.503627L12 9.84809L21.1308 0.503954C21.7873 -0.167549 22.8513 -0.167549 23.5074 0.503954C24.1642 1.17546 24.1642 2.26462 23.5074 2.9364L13.1881 13.4968C12.86 13.8323 12.4299 14 12 14Z" fill="#0083C3"/></svg></button>',
        responsive: [
            {
              breakpoint: 1362,
              settings: 'unslick',
            },
        ]
    });

    $('.nav__form-select').styler();
});