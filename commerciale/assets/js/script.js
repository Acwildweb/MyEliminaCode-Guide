/* MyEliminaCode Sanitario — interazioni della guida commerciale */
(function () {
  'use strict';

  var video = document.getElementById('promo');
  var playBtn = document.getElementById('playBtn');

  if (video && playBtn) {
    playBtn.addEventListener('click', function () {
      playBtn.hidden = true;
      video.play();
    });
    video.addEventListener('play', function () { playBtn.hidden = true; });
    video.addEventListener('pause', function () {
      if (!video.ended) playBtn.hidden = true;
    });
    video.addEventListener('ended', function () { playBtn.hidden = false; });
  }

  // reveal on scroll
  var els = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          en.target.classList.add('on');
          io.unobserve(en.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    els.forEach(function (el) { io.observe(el); });
  } else {
    els.forEach(function (el) { el.classList.add('on'); });
  }

  // lightbox sulle schermate
  var dlg = document.getElementById('lightbox');
  var lbImg = document.getElementById('lbImg');
  var lbClose = document.getElementById('lbClose');
  if (dlg && lbImg && typeof dlg.showModal === 'function') {
    document.querySelectorAll('.shot img').forEach(function (img) {
      img.style.cursor = 'zoom-in';
      img.addEventListener('click', function () {
        lbImg.src = img.currentSrc || img.src;
        lbImg.alt = img.alt;
        dlg.showModal();
      });
    });
    lbClose.addEventListener('click', function () { dlg.close(); });
    dlg.addEventListener('click', function (e) {
      if (e.target === dlg) dlg.close();
    });
  }
})();
