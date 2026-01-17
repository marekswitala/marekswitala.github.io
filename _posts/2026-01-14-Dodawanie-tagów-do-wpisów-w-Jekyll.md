---
layout: post
title: Dodawanie tagów do wpisów na blogu Jekyll
tags:
  - jekyll
  - obrazy
  - html
  - liquid
categories: 
- jekyll
- markdown
---

Dodawanie tagów do wpisów na blogu Jekyll


Tagi i kategorie wpisów ułatwiają nawigację po blogu i znajdowanie odpowiednich wpisów! W tym wpisie wyjaśniam, jak łączyć wpisy na blogu Jekyll za pomocą tagów.

Czym są tagi wpisów?
Tagi Jekyll to sposób oznaczania wpisów na blogu najbardziej istotnymi tematami, których dany wpis dotyczy. Wpis może mieć listę tagów, a wszystkie mają ten sam „priorytet” – nie ma układania ani hierarchii tagów.

Tagi mogą być przydatne do łączenia wpisów, które zazwyczaj nie byłyby ze sobą powiązane. Na przykład, jeśli są dwa wpisy na blogu dotyczące różnych projektów, ale w obu mowa o pracy z HTML i CSS, tag #html_css może być dobrym sposobem na ich połączenie.

Używanie tagów
Aby użyć tagów we wpisach na blogu i umożliwić wyszukiwanie wpisów po tych tagach, musisz zastosować dwie rzeczy:

- dodawanie tagów do samego wpisu i wyświetlanie ich na stronie wpisu
- umożliwić czytelnikom znajdowanie innych wpisów z tym samym tagiem


Dodawanie tagów do wpisów

Zacznijmy od dodania tagów do danego wpisu.  Aby to zrobić, używam tagu „frontmatter keys”
```
tag 
```
- dla pojedynczego tagu lub
```
tags
```
dla listy tagów.


Oto jak może wyglądać ustawienie tagu „#przykład” dla danego wpisu:


```
---
layout: post
title: "Przykład!"
tags: przykład 
---
Cześć świecie!

To jest post z tagiem :-)
```

Następnym krokiem jest faktyczne wyświetlenie tego tagu na stronie wpisu. Aby to zrobić, musimy przejść do pliku szablonu (layout) używanego przez wpisy – np. post.html. 

W pliku post.html, w miejscu, w którym mają się wyświetlać tagi bloga, dodaj kod liquid:

```
```
<img src="{{ '/images/Screenshot_20260114-1847.png' | relative_url }}" alt="Kod liquid">
```
```
Ten kod wykonuje następujące czynności:

Wyszukuje wszystkie tagi zapisane w aktualnym wpisie, dla każdego tagu wyświetla symbol „#” oraz nazwę tagu. Dodatkowo łączy każdy tag ze stroną archive.html:

```
<your_blog_url>/archive.html#<your_tag_name>
```

W następnej sekcji pokażę Ci, jak utworzyć  stronę wyświetlającą wszystkie tagi z wpisów na blogu.
Tak wyglądają tagi wyświetlane we wpisie „Przyklad”:

<img src="{{ '/images/Screenshot_20260113-212254.jpg' | relative_url }}" alt="Tak tag #przyklad, który dodałem do wpisu, wyświetla się na stronie">


Oto jak tag #przyklad, który dodałem do wpisu, wyświetla się na stronie!

Archiwum tagów
Skoro wpisy na moim blogu mają tagi, chcę, aby czytelnicy mogli je przeszukiwać i odkrywać wpisy oznaczone tym samym tagiem.

W poprzednim kroku dodałem już link do 

```

<adres_url_twojego_bloga>/archive.html#<nazwa_twojego_tagu>

```

Ta strona na moim blogu powinna zawierać listę wszystkich tagów używanych na blogu, wyświetlać wszystkie wpisy z tym tagiem oraz umożliwiać zakotwiczenie i linkowanie do konkretnej nazwy tagu.
Wyświetlać informacje (takie jak tytuł i data wpisu) dla każdego wpisu.

Oto jak wygląda mój plik archive.html:

```
---
layout: page
title: "Posty według tagów:"
permalink: /archive.html
---
<div>
    Przeszukaj wszystkie moje posty według tagów!
</div> </br>

<div id="tags-list">
{% for tag in site.tags %}
  {% assign tag_name = tag | first %}
  {% assign tag_name_pretty = tag_name | replace: "_", " " | capitalize %}
  <div class="tag-list">
    <div id="#{{ tag_name | slugize }}"></div>
    <h3 class="post-list-heading line-bottom"> In #{{ tag_name }}: </h3>
    <a name="{{ tag_name | slugize }}"></a>
    <ul class="post-list post-list-narrow">
     {% for post in site.tags[tag_name] %}
     <li>
       {%- assign date_format = site.marekswitala.date_format | default: "%b %-d, %Y" -%}
       <b>
         <a href="{{ post.url | relative_url }}">
           {{ post.title | escape }}
         </a>
       </b> - <i>{{ post.date | date: date_format }}</i>
     </li>
     {% endfor %}
    </ul>
  </div>
{% endfor %}
</div>

```


Oto jak wygląda strona archiwum tagów w akcji:

<img src="{{ '/images/Screenshot_20260113-212314.jpg' | relative_url }}" alt="To jest archiwum postów, w którym wpisy są uporządkowane według tagów.">

To jest archiwum postów, w którym wpisy są uporządkowane według tagów.

Wniosek

Tagi mogą być przydatnym narzędziem do łączenia wpisów na blogu i ułatwiania czytelnikom nawigacji po nim. W tym poście wyjaśniłem, jak dodawać tagi do wpisów na blogu Jekyll i jak umożliwić wyszukiwanie wpisów po tych tagach.
