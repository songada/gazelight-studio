/* ============================================================
   GazeLight Studio — homepage interactions
   No dependencies, no tracking, no data sent anywhere.
   1. Portfolio filter buttons
   2. Mobile nav toggle
   3. Package buttons pre-fill the booking form
   4. Booking form composes a mailto: to song@gazelight.studio
   5. Portfolio lightbox — full-frame photo viewer, no cropping
   ============================================================ */
(function () {
  'use strict';

  /* ---------- 1. Portfolio filter ---------- */
  var filterButtons = document.querySelectorAll('.filter-btn');
  var items = document.querySelectorAll('.g-item');

  filterButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      filterButtons.forEach(function (b) { b.classList.remove('is-active'); });
      btn.classList.add('is-active');
      var wanted = btn.getAttribute('data-filter');
      items.forEach(function (item) {
        var cats = (item.getAttribute('data-cat') || '').split(' ');
        var show = wanted === 'all' || cats.indexOf(wanted) !== -1;
        item.classList.toggle('is-hidden', !show);
      });
    });
  });

  /* ---------- 2. Mobile nav ---------- */
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.main-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      toggle.textContent = open ? '✕' : '☰';
    });
    nav.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.textContent = '☰';
      });
    });
  }

  /* ---------- 3. Package buttons pre-fill the booking form ---------- */
  var packageSelect = document.getElementById('bookPackage');
  document.querySelectorAll('[data-package]').forEach(function (link) {
    link.addEventListener('click', function () {
      var wanted = link.getAttribute('data-package');
      if (!packageSelect) return;
      for (var i = 0; i < packageSelect.options.length; i++) {
        if (packageSelect.options[i].text.indexOf(wanted.split(' — ')[0]) === 0) {
          packageSelect.selectedIndex = i;
          break;
        }
      }
    });
  });

  /* ---------- 4. Booking form -> mailto ---------- */
  var form = document.getElementById('bookForm');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var pkg = document.getElementById('bookPackage').value;
      var date = document.getElementById('bookDate').value.trim();
      var people = document.getElementById('bookPeople').value.trim();
      var notes = document.getElementById('bookNotes').value.trim();

      var subject = 'Booking: ' + pkg + ' — GazeLight Studio';
      var lines = [
        'Hi GazeLight Studio,',
        '',
        'I would like to book: ' + pkg,
        'Preferred date(s): ' + (date || '— flexible —'),
        'Who is coming: ' + (people || '—'),
        '',
        'Anything we should know:',
        notes || '—',
        '',
        'Thank you!'
      ];
      var url = 'mailto:song@gazelight.studio'
        + '?subject=' + encodeURIComponent(subject)
        + '&body=' + encodeURIComponent(lines.join('\n'));
      window.location.href = url;
    });
  }

  /* ---------- 5. Portfolio lightbox ---------- */
  var lightbox = document.getElementById('lightbox');
  var lbImg = document.getElementById('lbImg');
  var lbCap = document.getElementById('lbCap');
  var lbGallery = document.getElementById('lbGallery');
  var lbClose = document.getElementById('lbClose');
  var lbPrev = document.getElementById('lbPrev');
  var lbNext = document.getElementById('lbNext');
  var lbList = [];
  var lbIndex = 0;

  function visibleItems() {
    return Array.prototype.filter.call(items, function (item) {
      return !item.classList.contains('is-hidden');
    });
  }
  function showLb(i) {
    lbIndex = (i + lbList.length) % lbList.length;
    var link = lbList[lbIndex];
    var img = link.querySelector('img');
    var cap = link.querySelector('.g-cap');
    lbImg.src = img ? img.getAttribute('src') : '';
    lbImg.alt = img ? img.getAttribute('alt') : '';
    lbCap.textContent = cap ? cap.textContent.trim().replace(/\s+/g, ' ') : '';
    lbGallery.href = link.getAttribute('href');
  }
  function openLb(link) {
    lbList = visibleItems();
    var at = lbList.indexOf(link);
    if (at === -1) {
      lbList = Array.prototype.slice.call(items);
      at = lbList.indexOf(link);
    }
    lightbox.hidden = false;
    document.body.style.overflow = 'hidden';
    showLb(at);
  }
  function closeLb() {
    lightbox.hidden = true;
    document.body.style.overflow = '';
  }
  if (lightbox) {
    items.forEach(function (item) {
      item.addEventListener('click', function (e) {
        e.preventDefault();
        openLb(item);
      });
    });
    lbClose.addEventListener('click', closeLb);
    lbPrev.addEventListener('click', function () { showLb(lbIndex - 1); });
    lbNext.addEventListener('click', function () { showLb(lbIndex + 1); });
    lightbox.addEventListener('click', function (e) {
      if (e.target === lightbox) closeLb();
    });
    document.addEventListener('keydown', function (e) {
      if (lightbox.hidden) return;
      if (e.key === 'Escape') closeLb();
      if (e.key === 'ArrowLeft') showLb(lbIndex - 1);
      if (e.key === 'ArrowRight') showLb(lbIndex + 1);
    });
  }
})();
