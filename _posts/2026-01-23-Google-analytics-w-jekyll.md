---
layout: post
title: Jak dodać tag Google Analytics? 
tags:
  - jekyll
  - analytics
  - html
categories:
- jekyll
---

Jak dodać Google Analytics do strony hostowanej na stronach Github – Cóż, to całkiem... Proste 😉

Jeśli budujesz witrynę od zera strona po stronie, skopiuj poniższy kod(oczywiście użyj własnego tagu Analytics 😊) i wklej go na każdej stronie w swojej witrynie, jak najwyżej w elemencie <head> : 
```
<!-- Google Analytics tag (gtag.js) --> 
 <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script> <script> window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-XXXXXXXXXX'); </script>
 <!-- End Google Analytics tag --> 
 ```
 Moja witryna jest generowania w formie statycznych plików html przez bibliotekę Jekyll i opiera się na nieco zmodyfikowanym motywie moonwalk. Zawiera gotowe szablony stron, w katalogu:
```
 _includes
```
Istnieje plik custom_head.html, dodanie kodu Analytics do tego pliku sprawia, że pojawia się on na wszystkich stronach generowanych przez jekyll. 