---
layout: post
title: Ostrzenie o cookies dla Jekyll
tags:
  - jekyll
  - cookies
  - html
categories:
- jekyll
---

Używam na stronie plików cookie i skryptów javascript, głównie do śledzenia ruchu i usprawnienia działania strony. Zgodnie z wymogami UE konieczne jest wyświetlenie informacji o tym. Zdecydowałem się wdrożyć najprościej jak się da. 
Z pomocą cookieconsent:

https://www.jsdelivr.com/package/npm/cookieconsent?path=.github%2FISSUE_TEMPLATE

Instalacja
Krok 1. Stwórz plik cookie-consent.html w katalogu „_includes” swojego projektu:
```
<!-- Add cookie consent css & js -->
<link rel="stylesheet"
    type="text/css"
    href="https://cdn.jsdelivr.net/npm/cookieconsent@3/build/cookieconsent.min.css"/>
<script src="https://cdn.jsdelivr.net/npm/cookieconsent@3/build/cookieconsent.min.js"
    data-cfasync="false"></script>

```

Krok 2. Upewnij się, że dolna część dokumentu układu wygląda następująco:

```

...
{% include cookie-consent.html %}
</body>
</html>
```