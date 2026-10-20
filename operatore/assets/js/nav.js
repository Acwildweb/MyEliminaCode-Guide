/* Menu laterale della guida operatore — unica definizione dei capitoli. */
(function () {
  var CAPITOLI = [
    { n: '', t: 'Il tuo sportello', f: 'index.html', g: 'Iniziare' },
    { n: '01', t: 'Aprire la postazione', f: '01-aprire.html', g: 'Iniziare' },
    { n: '02', t: 'L\u2019interfaccia', f: '02-interfaccia.html', g: 'Iniziare' },
    { n: '03', t: 'Chiamare il prossimo', f: '03-chiamare.html', g: 'Il turno' },
    { n: '04', t: 'Richiamare', f: '04-richiamare.html', g: 'Il turno' },
    { n: '05', t: 'Trasferire a un altro sportello', f: '05-trasferire.html', g: 'Il turno' },
    { n: '06', t: 'Coda e servizi', f: '06-coda.html', g: 'Il turno' },
    { n: '07', t: 'Se qualcosa non funziona', f: '07-problemi.html', g: 'Aiuto' }
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
