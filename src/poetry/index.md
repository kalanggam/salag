---
title: Poetry
layout: page.njk
permalink: /poetry/index.html
override:tags: []
---

<ul>
{%- for poem in collections.poems -%}
<li><a href="{{ poem.url }}">{{ poem.data.title }}</a></li>
{%- endfor -%}
</ul>

[&larr; Home](/)
