/***** ページ内リンクのスクロール *****/
window.addEventListener('DOMContentLoaded', () => {
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  const anchorLinksArr = Array.prototype.slice.call(anchorLinks);
  console.log(anchorLinks);

  anchorLinksArr.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const targetId = link.hash;
      const targetElement = document.querySelector(targetId);
      const targetOffsetTop = window.pageYOffset + targetElement.getBoundingClientRect().top;

      window.scrollTo({
        top: targetOffsetTop,
        behavior: "smooth"
      });
    });
  });
});


/***** 未対応 *****/

/*
$(function () {
  $(window).on('load scroll', function () {
    $('.scrollAnimation').each(function () {
      //ターゲットの位置を取得
      var target = $(this).offset().top;
      //スクロール量を取得
      var scroll = $(window).scrollTop();
      //ウィンドウの高さを取得
      var height = $(window).height();
      //ターゲットまでスクロールするとフェードインする
      if (scroll > target - height) {
        //クラスを付与
        $(this).addClass('active');
      }
    });
  });
});

const scrollAnimationElm = document.getElementById('text_container');
const scrollAnimationFunc = function () {

  const triggerMargin = 300;
  if (window.innerHeight > scrollAnimationElm.getBoundingClientRect().top + triggerMargin) {
    scrollAnimationElm.classList.add('show');
  }

}

window.addEventListener('load', scrollAnimationFunc);
window.addEventListener('scroll', scrollAnimationFunc);
*/