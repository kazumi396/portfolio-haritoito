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
    // (function() {
    //     const fh = document.getElementById('fixed-header');
    //     const isUp = (function() {
    //       const scrollElement = document.scrollingElement;
    //       let flag, prePoint, scrollPoint;
    //       return function() {
    //         scrollPoint = scrollElement.scrollTop;
    //         flag = prePoint > scrollPoint ? true : false;
    //         prePoint = scrollPoint;
    //         return flag;
    //       }
    //     }());
        
    //     window.addEventListener('scroll', () => {
    //       if (window.pageYOffset > 20) {
    //         if (isUp()) {
    //           fh.classList.remove('is-show');
    //         } else {
    //           fh.classList.add('is-show')
    //         }
    //       } else {
    //         fh.classList.remove('is-show');
    //       }
    //     })
    // }());

    // scrollTop
    $('.topBtn').on('click', function() {
      const position = 100;
      const speed = 600;
      $('html, body').animate({
          scrollTop: position
      }, speed);
    });

    // modal
      const grid4fr = document.querySelector('.grid4fr');
      const btnClose = document.querySelector('.close');
      const item4fr = document.querySelectorAll('.item--4fr');
      const modalItem = document.querySelectorAll('.modal__item');

      for(let i = 0; i < item4fr.length; i++){

        // サムネイル画像をクリックした際の制御
        item4fr[i].addEventListener('click', function() {
          grid4fr.classList.add('open');
          btnClose.classList.add('open');
          modalItem[i].classList.add('open');
        });
  
        // 閉じるボタンをクリックした際の制御
        btnClose.addEventListener('click', function() {
            grid4fr.classList.remove('open');
            this.classList.remove('open');
            modalItem[i].classList.remove('open');
        });
  
        // 拡大した画像をクリックした際の制御
        modalItem[i].addEventListener('click', function() {
            grid4fr.classList.remove('open');
            btnClose.classList.remove('open');
            this.classList.remove('open');
        });
      };
}