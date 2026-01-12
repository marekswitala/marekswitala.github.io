Jak wstawić obrazy w jekyll?

Aby wstawić obrazy w Jekyllu, umieść pliki obrazów w folderze images (lub innym zdefiniowanym w konfiguracji) w swoim projekcie, a następnie użyj składni Markdown

```
![Tekst alternatywny](/assets/images/moje-zdjecie.jpg)
```

w swoich plikach.md lub .html, ewentualnie wzbogacając o Liquid do zarządzania ścieżkami lub atrybutami.

1. Przygotowanie plików brazów/zdjęć :

Umieść Obrazy: Utwórz folder images (lub inny np. assets/images) w głównym katalogu swojego projektu Jekyll i umieść tam swoje pliki graficzne (np. moj-obraz.png, logo.svg).

... 
twój-projekt/
├── assets/
│   └── images/
│       └── moje-zdjecie.jpg
├── images/
├── _posts/
│   └── 2026-01-12-wpis.md
└── index.md
... 

Ścieżka: Pamiętaj o prawidłowej ścieżce do pliku. W Jekyllu zazwyczaj będzie to coś w stylu /images/moj-obraz.png.

2. Wstawianie Obrazów w Treści (Markdown):
Aby dodać obraz/zdjęcie bezpośrednio w pliku.md(np. we wpisie na blogu), użyj standardowej skladni:

```
markdown 
```
```
![Tekst alternatywny](/assets/images/moje-zdjecie.jpg)
```


 - ! [.... ] opis zdjęcia wyświetlany gdy obraz nie może się załadować 
 - (/.... ) ścieżka do pliku względem głównego folderu strony 

3. Bezpieczne linkowanie za pomocą Liquid 
Aby uniknąć problemów ze ścieżkami przy zmianie domeny lub w podkatalogach, warto użyć filtrów Jekylla:

```
markdown 
```

```
![Opis]({{ site.baseurl }}/assets/images/moje-zdjecie.jpg)

```

Lub nowocześniejszy sposób z filtrem relative_url 

```
<img src="{{ '/assets/images/moje-zdjecie.jpg' | relative_url }}" alt="Opis">

```

4. Zaawansowane formatowanie (atrybuty i podpisy) 
Dodawanie klas CSS: Jekyll używa procesora Kramdown, który pozwala dodawać klasy bezpośrednio do obrazu

```
markdown 
```
```
![Opis](/assets/images/foto.jpg){: .moja-klasa-stylu }
```

- Podpisy pod zdjęciem (HTML) : Jeśli potrzebujesz podpisu  (caption), najlepiej użyć znaczników HTML figure:

```
<figure>
  <img src="{{ '/assets/images/foto.jpg' | relative_url }}" alt="Opis">
  <figcaption>To jest podpis pod zdjęciem</figcaption>
</figure>

```