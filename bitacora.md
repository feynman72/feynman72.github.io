---
layout: default
title: Bitácora
permalink: /bitacora/
---

# Bitácora

Mis notas de estudio, laboratorios y aprendizajes, de la más reciente a la más antigua.

<ul class="entries">
  {% for post in site.posts %}
  <li>
    <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%d/%m/%Y" }}</time>
    <div class="info">
      <a class="title" href="{{ post.url | relative_url }}">{{ post.title }}</a>
      {% for tag in post.tags %}<span class="tag">{{ tag }}</span>{% endfor %}
      {% if post.excerpt %}<p class="excerpt">{{ post.excerpt | strip_html | truncate: 140 }}</p>{% endif %}
    </div>
  </li>
  {% else %}
  <li><div class="info"><p class="excerpt">Aún no hay entradas.</p></div></li>
  {% endfor %}
</ul>
