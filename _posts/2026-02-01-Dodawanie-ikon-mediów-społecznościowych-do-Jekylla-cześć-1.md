---
layout: post
title: Dodawanie ikon mediów społecznościowych do Jekylla część 1
tags:
  - jekyll
  - html
  - css
categories:
- jekyll
--- 

Dodawanie ikon mediów społecznościowych do Jekylla część 1

 Jeśli chcesz podzielić się swoją działalnością w mediach społecznościowych lub po prostu ułatwić kontakt z tobą za ich pomocą możesz to zrobić umieszczajac na stronie ikony odsyłające do twoich profili. 
 
Wykorzystajmy wbudowaną funkcję danych Jekylla zgodnie z jej przeznaczeniem. W katalogu głównym projektu utwórz nowy folder o nazwie  _data. W tym folderze utwórz nowy plik o nazwie social-media.yml, zawierający następujące elementy:
```
email:
  id: 'your.name@yoursite.com'
  href: 'mailto:'
  title: 'Email'

facebook:
  id: 'your-facebook-username'
  href: 'https://www.facebook.com/'
  title: 'Facebook'

twitter:
  id: 'your-twitter-name'
  href: 'https://www.twitter.com/'
  title: 'Twitter'

github:
  id: 'your-github-name'
  href: 'https://github.com/'
  title: 'GitHub'
  
instagram:
  id: 'your-Instagram-name'
  href: 'https://instagram.com/'
  title: 'Instagram'  
```

Przygotuj pliki ikon i umieść je w odpowiednim katalogu twojej strony np. :
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
    <a href="{{ site.data.social-media.email.href }}{{ site.data.social-media.email.id }}" title="Napisz"><img src="/assets/images/favicon/mail.svg" alt="mail" width="32" height="32"></a>
    </li>
    <li>
<a href="{{ site.data.social-media.facebook.href }}{{ site.data.social-media.facebook.id }}" title="Facebook"><img src="/assets/images/favicon/facebook.svg" alt="facebook" width="32" height="32"></a>  
    </li>
<li>
<a href="{{ site.data.social-media.instagram.href }}{{ site.data.social-media.instagram.id }}" title="Instagram"><img src="/assets/images/favicon/instagram.svg" alt="instagram" width="32" height="32"></a>  
    </li>
<li>
<a href="{{ site.data.social-media.github.href }}{{ site.data.social-media.github.id }}" title="Github"><img src="/assets/images/favicon/github.svg" alt="github" width="32" height="32"></a>
</li>
</ul>
```

Wstaw kod html i css w miejsce gdzie chcesz wyświetlać ikony odsyłające do twoich mediów społecznościowych np. w stopce strony.
Możesz również umieścić kod css i html w jednym pliku np. social-media.html w katalogu  _includes 
A następnie przy pomocy:

<img src="{{ '/images/Screenshot_20260202-1.png' | relative_url }}" alt="social-media" >

Umieszczonego w szablonie strony, użyć w całej witrynie. 

