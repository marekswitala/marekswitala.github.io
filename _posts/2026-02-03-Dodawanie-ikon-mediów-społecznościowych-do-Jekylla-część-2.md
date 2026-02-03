---
layout: post
title: Dodawanie ikon mediów społecznościowych do Jekylla część 2
tags:
  - jekyll
  - html
  - css
categories:
- jekyll
--- 

Dodawanie ikon mediów społecznościowych do Jekylla część 2

W części pierwszej prezentowałem sposób na udostępnienie własnych mediów społecznościowych, podobnie można wykonać pasek ikon umożliwiający udostępnienie  danej strony/wpisu za pomocą social mediów. 
Podobnie jak w cześci pierwszej będziesz potrzebować ikon, więc jeśli jeszcze nie przygotowałeś(aś) plików ikon zrób to teraz i umieść je w odpowiednim katalogu twojej strony np. :
```
/assets/images/favicon/

```
Pamiętaj żeby zastosować właściwą ścieżkę w kodzie html:
```
<img src="/twoja ścieżka/mail.svg" alt="mail" width="32" height="32">
```
Pliki darmowych ikon znajdziesz na przykład tutaj:

Feather – Simply beautiful open source icons 

<a href="https://feathericons.com/">Feather – Simply beautiful open source icons</a>

Przygotuj pliki ikon i umieść je w odpowiednim katalogu twojej strony np. :
```
/assets/images/favicon/

```
Pamiętaj żeby zastosować właściwą ścieżkę w kodzie html:
```
<img src="/twoja ścieżka/mail.svg" alt="mail" width="32" height="32">
```
Teraz potrzebujemy kodu html i css, który umożliwia wyświetlanie ikon jako odsyłaczy w formie poziomej belki/menu. 
Kod css:

```
<style>
ul.social-media {
  display: flex;
  list-style-type: none; /* Usuwa kropki */
  padding: 0;
  margin: 0;
  justify-content: center; /* Wyśrodkowanie elementów */
}

ul.social-media li {
  margin: 0 15px; /* Odstępy między elementami */
}
  li {
    display:inline;
    margin-right: 1em;
  }

  li a {
    text-decoration: none;
    font-weight: normal
  }
</style>
```

Kod html:

```
<ul class="social-media">
<li>   
<a  href="mailto:?subject=&amp;body=Coś do przeczytania: {{ site.url}}{{ page.url }}" title="Wyślij"><img src="/assets/images/favicon/mail.svg" alt="email" width="32" height="32"></a>     
        </li>
    <li>
<a href="https://www.facebook.com/sharer/sharer.php?u={{ site.url }}{{ site.baseurl }}{{ page.url }}" onclick="window.open(this.href, 'pop-up', 'left=20,top=20,width=500,height=500,toolbar=1,resizable=0'); return false;" title="Facebook" ><img src="/assets/images/favicon/facebook.svg" alt="facebook" width="32" height="32"></a>  
    </li>
    <li>
<a  href="whatsapp://send?text={{ page.title }} ~ {{ site.url }}{{ site.baseurl }}{{ page.url }}" 
             onclick="window.open(this.href, 'pop-up', 'left=20,top=20,width=500,height=500,toolbar=1,resizable=0'); return false;"
        title="whatsApp" ><img src="/assets/images/favicon/whatsapp.svg" alt="whatsapp" width="32" height="32"></a>
    </li>    
    <li>
        <a  href="https://www.linkedin.com/shareArticle?mini=true&url={{ site.url }}{{ site.baseurl }}{{ page.url }}&title={{ page.title }}&summary={{ page.description }}&source={{ page.title }}"
            onclick="window.open(this.href, 'pop-up', 'left=20,top=20,width=500,height=500,toolbar=1,resizable=0'); return false;"
            title="Udostępnij na LinkedIn" >
      <img src="/assets/images/favicon/linkedin.svg" alt="LinkedIn" width="32" height="32">
        </a>
    <li>
                                <a  href="http://www.reddit.com/submit?url={{ site.url }}{{ site.baseurl }}{{ page.url }}"
            onclick="window.open(this.href, 'pop-up', 'left=20,top=20,width=900,height=500,toolbar=1,resizable=0'); return false;"
            title="Udostępnij na Reddit" >
            <img src="/assets/images/favicon/reddit.svg" alt="Reddit" width="32" height="32">
        </a>
        </li>
        <li>
        <a href="https://twitter.com/intent/tweet?text={{ page.title }}&url={{ site.url }}{{ site.baseurl }}{{ page.url }}"
            onclick="window.open(this.href, 'pop-up', 'left=20,top=20,width=500,height=500,toolbar=1,resizable=0'); return false;" title="Udostępnij na Twitter"><img src="/assets/images/favicon/twitter.svg" alt="Twitter" width="32" height="32">
        </a>
        </li>
        </ul>
```


Umieścić kod css i html w jednym pliku np. social-media.html w katalogu  _includes 
A następnie przy pomocy kodu umieszczonego w szablonie strony, możesz użyć go w całej witrynie:

<img src="{{ '/images/Screenshot_20260202-1.png' | relative_url }}" alt="social-media" >

