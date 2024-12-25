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

<!--
修改记录：
日期：2024-01-02
作者：Claude
修改原因：添加博客分类功能
修改内容：
1. 使用 Liquid 语法获取所有分类
2. 按分类显示博客文章
3. 保持时间和标题的显示格式
目的：
1. 提供更好的博客组织结构
2. 方便读者按主题浏览
3. 改善内容导航体验
--> 