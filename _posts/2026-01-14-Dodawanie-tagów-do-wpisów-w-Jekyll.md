---
layout: post
title: Dodawanie tagów do wpisów na blogu Jekyll
tags:
  - jekyll
  - obrazy
  - html
  - liquid
category: jekyll
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


```{%- if page.tags -%}
    {% for tag in page.tags %}
        <a href="{{site.baseurl}}/archive.html#{{tag | slugize}}">
            #{{ tag }}
        </a>
    {% endfor %}
{%- endif -%}```



