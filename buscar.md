---
layout: default
title: Buscar
permalink: /buscar/
ancho: true
---

# Buscar

<form class="search big" action="{{ '/buscar/' | relative_url }}" method="get" role="search">
  <input id="q" type="search" name="q" placeholder="Escribe un término, por ejemplo: cifrado" aria-label="Buscar en mis notas" autofocus>
</form>

<p id="estado-busqueda" class="muted" aria-live="polite"></p>
<ul id="resultados" class="entries" data-index="{{ '/search.json' | relative_url }}"></ul>

<script src="{{ '/assets/js/search.js' | relative_url }}"></script>
