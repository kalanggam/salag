---
title: Blog
layout: page.njk
permalink: /blog/index.html
override:tags: []
eleventyNavigation:
  key: Blog
---

<ul>
{%- for post in collections.blogs -%}
<li><a href="{{ post.url }}">{{ post.data.title }}</a></li>
{%- endfor -%}
</ul>
