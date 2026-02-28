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
Możemy wyłączyć przetwarzanie Liquid, umieszczając dowolny przykład kodu między tagami &#123;% raw %&#125; i &#123;% endraw %&#125;:

`&#123;% raw %&#125;
{% raw %} 
{%- if page.tags -%}
    {% for tag in page.tags %}
        <a href="{{site.baseurl}}/archive.html#{{tag | slugize}}">
            #{{ tag }}
        </a>
    {% endfor %}
{%- endif -%}
{% endraw %}
&#123;% endraw %&#125;`

Wszystko, co znajduje się pomiędzy tagami `raw` a `endraw`, zostanie wyświetlone na stronie jako tekst, a nie przetworzone. 

Wyświetlanie pojedynczego tagu

Możesz użyć `raw` dla pojedynczych linii, jeśli chcesz zachować czytelność kodu w pliku:

````
{% raw %} &#123;% raw %&#125; {% for tag in page.tags %} &#123;% endraw %&#125;{% endraw %}
````
Zastosowanie tagów HTML ```<pre>```i```<code>```
Aby kod był czytelny (wyróżniony czcionką o stałej szerokości i sformatowany), zazwyczaj łączy się tagi raw z tagami HTML:


```html
<pre>
<code>
{% raw %}
&#123;% raw %&#125;
{%- if page.tags -%}
    {% for tag in page.tags %}
        <a href="{{site.baseurl}}/archive.html#{{tag | slugize}}">
            #{{ tag }}
        </a>
    {% endfor %}
{%- endif -%}
&#123;% endraw %&#125;
{% endraw %}
</code>
</pre>
```

Kiedy ```raw``` jest przydatne?
- Dokumentacja: Tworzenie instrukcji na stronie.<br>
- Konflikty składni: Gdy używasz zewnętrznych bibliotek JavaScript, które używają podwójnych nawiasów klamrowych {{ }}. 