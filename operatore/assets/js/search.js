/* Ricerca locale nella guida (nessun server, nessuna CDN). */
(function () {
  var input = document.getElementById('q');
  var box = document.getElementById('risultati');
  if (!input || !box) return;
  var indice = window.GUIDA_INDICE || [];

  function normalizza(s) {
    return (s || '').toLowerCase()
      .replace(/[\u00e0\u00e1\u00e4]/g, 'a')
      .replace(/[\u00e8\u00e9\u00eb]/g, 'e')
      .replace(/[\u00ec\u00ed\u00ef]/g, 'i')
      .replace(/[\u00f2\u00f3\u00f6]/g, 'o')
      .replace(/[\u00f9\u00fa\u00fc]/g, 'u');
  }

  function cerca(q) {
    var termini = normalizza(q).split(/\s+/).filter(function (w) { return w.length > 1; });
    if (!termini.length) return [];
    var out = [];
    for (var i = 0; i < indice.length; i++) {
      var e = indice[i];
      var testo = normalizza(e.t + ' ' + e.k);
      var ok = true;
      for (var j = 0; j < termini.length; j++) {
        if (testo.indexOf(termini[j]) === -1) { ok = false; break; }
      }
      if (ok) out.push(e);
      if (out.length >= 12) break;
    }
    return out;
  }

  function mostra() {
    var r = cerca(input.value);
    if (input.value.trim().length < 2) { box.classList.remove('aperto'); box.innerHTML = ''; return; }
    var html = '';
    for (var i = 0; i < r.length; i++) {
      html += '<a href="' + r[i].p + (r[i].a ? '#' + r[i].a : '') + '">' + r[i].t +
              '<span>' + r[i].p.replace('.html', '').replace(/-/g, ' ') + '</span></a>';
    }
    box.innerHTML = html || '<div class="vuoto">Nessun risultato.</div>';
    box.classList.add('aperto');
  }

  input.addEventListener('input', mostra);
  input.addEventListener('focus', mostra);
  input.addEventListener('keydown', function (ev) {
    if (ev.key === 'Escape') { box.classList.remove('aperto'); input.blur(); }
    if (ev.key === 'Enter') {
      var primo = box.querySelector('a');
      if (primo) window.location.href = primo.getAttribute('href');
    }
  });
  document.addEventListener('click', function (ev) {
    if (!box.contains(ev.target) && ev.target !== input) box.classList.remove('aperto');
  });
  document.addEventListener('keydown', function (ev) {
    if (ev.key === '/' && document.activeElement !== input) { ev.preventDefault(); input.focus(); }
  });
})();
