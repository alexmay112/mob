{
  $(".quoteSlider").slick({
    variableWidth: !1,
    centerMode: !0,
    centerPadding: "10%",
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: !0,
    focusOnSelect: !0,
    arrows: !1,
    adaptiveHeight: true
  });

  $(".teamSlider").slick({
    centerMode: !0,
    centerPadding: "10%",
    slidesToShow: 3,
    focusOnSelect: !0,
    arrows: !1,
    infite: 3,
    responsive: [{
        breakpoint: 768,
        settings: {
          centerPadding: "20%",
          slidesToShow: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          centerPadding: "10%",
          slidesToShow: 1
        }
      }
    ]
  });

  $(".navbar-toggler").click(function (evt) {
    $(".navbar-collapse").slideToggle(300);
  });
}

{
  window.addEventListener('DOMContentLoaded', function () {

    var windowSelf = document.querySelector('.window'),
      windowBody = windowSelf.querySelector('.window__body'),
      windowReplace = windowSelf.querySelector('.window__replace'),
      windowShopping = windowSelf.querySelector('.window__shopping'),
      mobileWindow = document.querySelector('.mobile');

    mobileWindow.addEventListener('click', function (event) {
      event.preventDefault();
    });

    function scrolling(element, nextFunc) {
      element.scrollTop += 1;
      if ((element.clientHeight + element.scrollTop) < element.scrollHeight) {
        setTimeout(scrolling.bind(this), 8, this, nextFunc);
      } else {
        setTimeout(nextFunc, 1000);
      }
    }

    function mobileBox() {
      windowShopping.scrollTop = 0;
      windowSelf.classList.remove('active');
      windowShopping.classList.remove('active');
      document.querySelector(".right-text__item:nth-child(2)").classList.remove("active");
      document.querySelector(".right-text__item:nth-child(3)").classList.remove("active");
      document.querySelector(".right-text__item:nth-child(4)").classList.remove("active");
      document.querySelector(".right-text__item:nth-child(1)").classList.add("active");
      setTimeout(scrollingBody, 4000);
    }

    // function scrollingBody() {
    //   windowBody.classList.add('active');
    //   windowSelf.classList.add('active');
    //   document.querySelector(".right-text__item:nth-child(1)").classList.remove("active");
    //   document.querySelector(".right-text__item:nth-child(2)").classList.add("active");
    //   setTimeout(scrolling.bind(windowBody), 2000, windowBody, scrollingReplace);
    // }

    // function scrollingReplace() {
    //   windowBody.scrollTop = 0;
    //   windowBody.classList.remove('active');
    //   windowReplace.classList.add('active');
    //   document.querySelector(".right-text__item:nth-child(2)").classList.remove("active");
    //   document.querySelector(".right-text__item:nth-child(3)").classList.add("active");
    //   setTimeout(scrolling.bind(windowReplace), 2000, windowReplace, scrollingShopping)
    // }

    // function scrollingShopping() {
    //   windowReplace.scrollTop = 0;
    //   windowReplace.classList.remove('active');
    //   windowShopping.classList.add('active');
    //   document.querySelector(".right-text__item:nth-child(4)").classList.add("active");
    //   document.querySelector(".right-text__item:nth-child(3)").classList.remove("active");
    //   setTimeout(scrolling.bind(windowShopping), 2000, windowShopping, mobileBox)
    // }

    mobileBox();

    $(document).on('click', 'a[href^="#"]', function (event) {
      event.preventDefault();
      $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top - 80
      }, 1000);
    });

    var faqItem = document.querySelectorAll('.faq__item');
    for (var i = 0; i < faqItem.length; i++) {
      faqItem[i].addEventListener('click', function () {
        this.classList.toggle('active');
      })
    }
  })
}