---
title: Poetry
layout: page.njk
permalink: /poetry/index.html
override:tags: []
eleventyNavigation:
  key: Poetry
---

{%- for poem in collections.poems reversed -%}
  {% if forloop.first == true %}<ul>{% endif %}
  <li><a href="{{ poem.url }}">{{ poem.data.title }}</a>
  &mdash; <i>updated {{ poem.date | postDate }}</i></li>
  {% if forloop.last == true %}</ul>{% endif %}
{%- endfor -%}
