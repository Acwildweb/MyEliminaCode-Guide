/* Menu laterale della guida Supermercati — unica definizione dei capitoli. */
(function () {
  var CAPITOLI = [
    { n: '', t: 'Panoramica', f: 'index.html', g: 'Insieme' },
    { n: 'C', t: 'Guida commerciale', f: 'commerciale.html', g: 'Commerciale' },
    { n: 'T', t: 'Guida tecnica', f: 'tecnica.html', g: 'Tecnica' },
    { n: '01', t: 'Installazione Windows', f: 'tecnica-01-installazione.html', g: 'Tecnica' },
    { n: '02', t: 'Configurazione generale', f: 'tecnica-02-configurazione.html', g: 'Tecnica' },
    { n: '03', t: 'Monitor e contenuti', f: 'tecnica-03-monitor.html', g: 'Tecnica' },
    { n: '04', t: 'Stampanti', f: 'tecnica-04-stampanti.html', g: 'Tecnica' },
    { n: '05', t: 'Aggiornamenti e diagnostica', f: 'tecnica-05-diagnostica.html', g: 'Tecnica' },
    { n: 'O', t: 'Guida operatore', f: 'operatore.html', g: 'Operatore' },
    { n: '01', t: 'Aprire la postazione', f: 'operatore-01-aprire.html', g: 'Operatore' },
    { n: '02', t: 'Avanzare e richiamare', f: 'operatore-02-avanzare.html', g: 'Operatore' },
    { n: '03', t: 'Problemi frequenti', f: 'operatore-03-problemi.html', g: 'Operatore' }
  ];

  var box = document.getElementById('sidebar');
  if (!box) return;
  var attivo = document.body.getAttribute('data-capitolo') || '';
  var html = '', gruppo = '';
  for (var i = 0; i < CAPITOLI.length; i++) {
    var c = CAPITOLI[i];
    if (c.g !== gruppo) {
      gruppo = c.g;
      html += '<h2>' + gruppo + '</h2>';
    }
    var cls = (c.f === attivo) ? ' class="attivo"' : '';
    html += '<a href="' + c.f + '"' + cls + '>' +
            (c.n ? '<span class="n">' + c.n + '</span>' : '<span class="n">\u25CF</span>') +
            c.t + '</a>';
  }
  box.innerHTML = html;

  var btn = document.getElementById('menu-btn');
  if (btn) {
    btn.addEventListener('click', function () { box.classList.toggle('aperta'); });
  }
})();
