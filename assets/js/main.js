'use strict';

{
    // humberger
    $(function(){
        $('.header__btn').on('click', function(){
            $('.nav').toggleClass('active');
        });

        $('.nav__btn, .nav__item a').on('click', function(){
            $('.nav').removeClass('active');
        });
    });

    // header scroll
    (function() {
        const fh = document.getElementById('fixed-header');
        const isUp = (function() {
          const scrollElement = document.scrollingElement;
          let flag, prePoint, scrollPoint;
          return function() {
            scrollPoint = scrollElement.scrollTop;
            flag = prePoint > scrollPoint ? true : false;
            prePoint = scrollPoint;
            return flag;
          }
        }());
        
        window.addEventListener('scroll', () => {
          if (window.pageYOffset > 810) {
            if (isUp()) {
              fh.classList.remove('is-show');
            } else {
              fh.classList.add('is-show')
            }
          } else {
            fh.classList.remove('is-show');
          }
        })
      }());

    // scrollTop
        $('.topBtn').on('click', function() {
            const position = 810;
            const speed = 600;
            $('html, body').animate({
                scrollTop: position
            }, speed);
        });
    
    // fade-in
    document.addEventListener("scroll", function () {
      const fadeElements = document.querySelectorAll(".fade-in");
    
      fadeElements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const windowHeight = window.innerHeight;
    
        // 要素が画面の下半分に現れたらアニメーションを開始
        if (rect.top < windowHeight - 100) {
          el.classList.add("show");
        } else {
          el.classList.remove("show");
        }
      });
    });
      
}