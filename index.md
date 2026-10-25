---
layout: default
title: Inicio
ancho: true
---

<section class="hero">
  <div class="eyebrow">$ cat /home/francisco/README</div>
  <h1>Mi base de conocimiento de ciberseguridad.</h1>
  <p class="lead">
    Aquí organizo lo que voy aprendiendo: notas por tema, laboratorios y un glosario
    con mis propias palabras. Todo escrito por mí, y siempre en construcción.
  </p>
  <div class="btns">
    <a class="btn primary" href="{{ '/notas/' | relative_url }}">Explorar las notas</a>
    <a class="btn" href="{{ '/buscar/' | relative_url }}">Buscar</a>
  </div>
</section>

## Temas

<div class="cards">
  {% for cat in site.data.categorias %}
  {% assign grupo = site.notas | where: "categoria", cat.slug | sort: "orden" %}
  <a class="card linkcard" href="{% if grupo.size > 0 %}{{ grupo.first.url | relative_url }}{% else %}{{ '/notas/' | relative_url }}{% endif %}">
    <h3>{{ cat.nombre }}</h3>
    <p>{{ cat.descripcion }}</p>
    <span class="count">{{ grupo.size }} {% if grupo.size == 1 %}nota{% else %}notas{% endif %}</span>
  </a>
  {% endfor %}
</div>

{% assign recientes = site.notas | sort: "actualizado" | reverse %}
<div class="section-head">
  <h2>Actualizado recientemente</h2>
  <a href="{{ '/notas/' | relative_url }}">Ver todas &rarr;</a>
</div>

<ul class="entries">
  {% for n in recientes limit:6 %}
  <li>
    <time datetime="{{ n.actualizado | date_to_xmlschema }}">{{ n.actualizado | date: "%d/%m/%Y" }}</time>
    <div class="info">
      <a class="title" href="{{ n.url | relative_url }}">{{ n.title }}</a>
      {% if n.estado %}<span class="estado {{ n.estado }}">{{ n.estado | replace: "-", " " }}</span>{% endif %}
    </div>
  </li>
  {% else %}
  <li><div class="info"><p class="excerpt">Aún no hay notas.</p></div></li>
  {% endfor %}
</ul>
