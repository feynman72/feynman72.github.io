---
layout: default
title: Notas
permalink: /notas/
ancho: true
---

# Notas

Todo lo que he documentado, organizado por tema.

{% for cat in site.data.categorias %}
{% assign grupo = site.notas | where: "categoria", cat.slug | sort: "orden" %}
<section class="categoria">
  <h2>{{ cat.nombre }}</h2>
  <p class="muted">{{ cat.descripcion }}</p>
  <ul class="entries">
    {% for n in grupo %}
    <li>
      <div class="info">
        <a class="title" href="{{ n.url | relative_url }}">{{ n.title }}</a>
        {% if n.estado %}<span class="estado {{ n.estado }}">{{ n.estado | replace: "-", " " }}</span>{% endif %}
      </div>
    </li>
    {% else %}
    <li><div class="info"><p class="excerpt">Aún no hay notas en este tema.</p></div></li>
    {% endfor %}
  </ul>
</section>
{% endfor %}
