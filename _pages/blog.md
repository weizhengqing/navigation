---
layout: page
title: 博客
permalink: /blog/
---

{% assign categories = site.posts | map: "category" | uniq %}

{% for category in categories %}
## {{ category }}
  {% for post in site.posts %}
    {% if post.category == category %}
* {{ post.date | date: "%Y-%m-%d" }} &raquo; [{{ post.title }}]({{ post.url | relative_url }})
    {% endif %}
  {% endfor %}
{% endfor %}