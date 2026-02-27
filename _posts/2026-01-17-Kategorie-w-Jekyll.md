---
layout: post
title: Kategorie w Jekyll
tags:
  - jekyll
  - kategorie
  - html
  - liquid
categories:
- jekyll
- markdown
---

Kategorie w Jekyll

Kategorie wpisu działają podobnie do tagów. 
Można je zdefiniować za pomocą front matter za pomocą kluczy: *category* lub *categories* (które działają zgodnie z tą samą logiką, co w przypadku tagów).
Wszystkie kategorie zarejestrowane w witrynie są dostępne dla szablonów Liquid za pośrednictwem *site.categories*. Można je wyszukiwać, podobieństwo między kategoriami i tagami jednak na tym się kończy.

W przeciwieństwie do tagów, kategorie wpisów można również zdefiniować za pomocą ścieżki pliku wpisu. Każdy katalog powyżej 
```
_posts
```
zostanie odczytany jako kategoria. Na przykład, jeśli wpis znajduje się w ścieżce:

```
jekyll/html/_posts/2025-05-21-blog-w-jekyll.md

```
to *jekyll* i *html* stają się kategoriami. 

Jeśli post zawiera również sekcję front matter definiującą kategorie, są one dodawane do istniejącej listy, jeśli jeszcze jej nie ma.

Główną różnicą między kategoriami a tagami jest to, że kategorie posta mogą być włączone do wygenerowanego adresu URL posta, podczas gdy tagi nie.

Dlatego, w zależności od tego, czy sekcja front matter zawiera:
```
category: markdown liquid 
```
Czy:
```
categories: markdown liquid

```

przykładowy post powyżej miałby adres URL odpowiednio: 

```
jekyll/html/markdown%liquid/2025/05/21/blog-w-jekyll.html
```
lub 
```
jekyll/html/markdown/liquid/2025/05/21/blog-w-jekyll.html
```

Aby zaimplementować kategorie we wpisach na blogu i dodać stronę która wyświetla kategorie bloga, trzeba wdrożyć następujące elementy:

- dodanie kategorii do samego wpisu i wyświetlenie ich na stronie wpisu

- dodanie stronę kategorei, która wpisy zebrane wg kategorii

Wstaw poniższy kod na stronę lub szablon strony na której ma być wyświetlana lista kategorii

<img src="{{ '/images/Screenshot_20260117-16185.png' | relative_url }}" alt="Kod wyświetla kategorie strony i odsyła do strony zawierającej listę kategorii">

Ten kod wykonuje następujące czynności:

Wyszukuje wszystkie  kategorie zapisane w aktualnym wpisie, dla każdej wyświetla nazwę. Dodatkowo łączy każdą kategorie ze stroną 
```
kategorie.html
```

Strona przeglądu kategorii
W katalogu głównym tworzę nowy plik o nazwie kategorie.html, który wyświetla wpisy na blogu wg kategorii (podobnie jak strona wyświetlajaca strony wg tagów )

Tak wygląda mój plik kategorie.html:
````
---
layout: page
title: "Posty według kategorii"
permalink: /kategorie.html
---
<div>
    Przeszukaj wszystkie moje posty według kategorii!
</div> </br>

<div id="category-list">
{% raw %}
{% for category in site.categories %}
{% assign category_name = category | first %}
{% assign category_name_pretty = category_name |    replace: "_", " " | capitalize %}
<div class="category-list">
<div id="#{{ category_name | slugize }}"></div>
<h3 class="post-list-heading line-bottom"> In {{ category_name }}: </h3>
<a name="{{ category_name | slugize }}"></a>
<ul class="post-list post-list-narrow">
{% for post in site.categories[category_name] %}
{% endraw %}
<li>
{% raw %}
{%- assign date_format = site.marekswitala.date_format | default: "%b %-d, %Y" -%}
{% endraw %}
 <b>
{% raw %}
<a href="{{ post.url | relative_url }}">
 {{ post.title | escape }}
         </a>
  </b> - <i>{{ post.date | date: date_format }}</i>
     </li>
     {% endfor %}
    </ul>
  </div>
{% endfor %}
{% endraw %}
</div>

````

Ten fragment kodu wykonuje następujące czynności:

Wyszukuje po wszystkich wpisach kategorii i wyświetla kategorie i tytuł wpisu oraz link który prowadzi do odpowiedniego wpisu.

Dodawanie kategorii do wpisów

Ostatnim krokiem jest dodanie wpisów do nowej kategorii. Istnieją dwa sposoby:
- dodawanie za pomocą katalogu i surowych plików md:

```
/kategoria/_post/2026-01-16-nazwa_pliku.md
```

- Jekyll Frontmatter: można dodawać kategorie do wpisów za pomocą kluczy *category* frontmatter w samym wpisie, w ten sposób:

```
---
layout: post
title: "Przyklad"
category: jekyll
---
Cześć świecie!

To jest post z kategorią :-)

```


Podsumowując:
- można uporządkować surowe pliki postów w osobnych katalogach, co automatycznie dodaje odpowiednie kategorie do każdego posta.
- dodając kategorie do wpisu za pomocą front matter 

