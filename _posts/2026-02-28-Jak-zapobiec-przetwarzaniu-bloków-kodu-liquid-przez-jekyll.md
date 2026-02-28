---
layout: post
title: Jak zapobiec przetwarzaniu bloków kodu liquid przez jekyll
tags:
  - jekyll
  - html
  - liquid
category: jekyll
---

Czasami chcemy udostępnić blok kodu zawierający składnię Liquid (lub innego kodu) w Jekyll. 
Możemy wyłączyć przetwarzanie Liquid, umieszczając dowolny przykład kodu między tagami raw i endraw:
```
{% raw %}
{%- if page.tags -%}
    {% for tag in page.tags %}
        <a href="{{site.baseurl}}/archive.html#{{tag | slugize}}">
            #{{ tag }}
        </a>
    {% endfor %}
{%- endif -%}
{% endraw %}
```
Wszystko, co znajduje się pomiędzy {% raw %} a {% endraw %}, zostanie wyświetlone na stronie jako tekst, a nie przetworzone. 

Wyświetlanie pojedynczego tagu

Możesz użyć `raw` dla pojedynczych linii, jeśli chcesz zachować czytelność kodu w pliku:

````
{% raw %}{% for tag in page.tags %}{% endraw %}
````

Kiedy ```{% raw %}``` jest przydatne?
- Dokumentacja: Tworzenie instrukcji na stronie.
- Konflikty składni: Gdy używasz zewnętrznych bibliotek JavaScript, które używają podwójnych nawiasów klamrowych {{ }}. 