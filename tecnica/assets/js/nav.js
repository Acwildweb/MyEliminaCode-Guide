/* Menu laterale della guida tecnica — unica definizione dei capitoli. */
(function () {
  var CAPITOLI = [
    { n: '', t: 'Panoramica', f: 'index.html', g: 'Insieme' },
    { n: '01', t: 'Accesso e ruoli', f: '01-accesso.html', g: 'Il pannello' },
    { n: '02', t: 'Dashboard', f: '02-dashboard.html', g: 'Il pannello' },
    { n: '03', t: 'Grafica Totem', f: '03-grafica-totem.html', g: 'Il pannello' },
    { n: '04', t: 'Stampante', f: '04-stampante.html', g: 'Il pannello' },
    { n: '05', t: 'Sportelli e Click', f: '05-sportelli.html', g: 'Il pannello' },
    { n: '06', t: 'Monitor coda', f: '06-monitor.html', g: 'Il pannello' },
    { n: '07', t: 'Sistema e Sincro', f: '07-sistema-sincro.html', g: 'Gestione' },
    { n: '08', t: 'Utenti e permessi', f: '08-utenti-permessi.html', g: 'Gestione' },
    { n: '09', t: 'Versioning e aggiornamenti', f: '09-versioning.html', g: 'Gestione' },
    { n: '10', t: 'Log e diagnostica', f: '10-log-diagnostica.html', g: 'Assistenza' },
    { n: '11', t: 'Prossime versioni', f: '11-prossime-versioni.html', g: 'Evoluzione' }
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
