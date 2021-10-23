/***** DOMの読み込み完了時に発火 *****/
window.addEventListener('DOMContentLoaded', () => {

  /***** スクロール位置の取得 *****/
  let scrollY = window.pageYOffset;
  window.addEventListener('scroll', function () {
    scrollY = window.pageYOffset;
  });

  /***** vhの取得 *****/
  let vh = window.innerHeight;
  window.onresize = () => {
    vh = window.innerHeight;
  }

  /***** ページ内リンクのスクロール *****/
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  const anchorLinksArr = Array.prototype.slice.call(anchorLinks);

  anchorLinksArr.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const targetId = link.hash;
      const targetElement = document.querySelector(targetId);
      const targetOffsetTop = scrollY + targetElement.getBoundingClientRect().top;

      window.scrollTo({
        top: targetOffsetTop,
        behavior: "smooth"
      });
    });
  });

  /***** スクロール位置を取得してのfadein *****/
  const fadeElems = document.querySelectorAll('.fade');
  const fadeElemsArr = Array.prototype.slice.call(fadeElems);
  let fadePosFromBottom = vh / 2;
  let fadePosFromTop = vh - fadePosFromBottom;

  fadeElemsArr.forEach(fade => {
    let fadeOffsetTop = fade.getBoundingClientRect().top - fadePosFromTop;

    let hasActiveClass = false;
    window.addEventListener('scroll', () => {

      if (!hasActiveClass && scrollY >= fadeOffsetTop) {
        fade.className += ' isActive';
        hasActiveClass = true;
      }
    })
  });
});


/***** 未対応 *****/
