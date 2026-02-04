---
layout: post
title: Jak dodać ikony za pomocą css do Jekyll'a?
tags:
  - jekyll
  - html
  - css
categories:
- jekyll
--- 

Jak dodać ikony za pomocą css do Jekyll'a? 

We wpisach o dodaniu ikon social mediów do strony, korzystam z wykorzystania plików svg, jednak najprostszym sposobem dodania ikony do strony HTML jest skorzystanie z biblioteki ikon, takiej jak np. Font Awesome.
Uwaga: Nie ma potrzeby pobierania ani instalowania! 

Dodaj nazwę określonej klasy ikony do dowolnego elementu HTML (np. <i> lub <span>).
Wszystkie ikony w poniższych bibliotekach ikon to skalowalne wektory, które można dostosować za pomocą CSS (rozmiar, kolor, cień itp.). 
Wszystkie trzy biblioteki mogą być stosowane obok siebie, ale mogą wpływać na css motywu (theme) jekyll, w razie konfliktu radzę zrezygnować z danej biblioteki, w moim przypadku ikony Bootstrap powodowały zmianę kolorów motywu. Aby użyć ikon z bibliotek, należy wstawić odpowiedni kod do sekcji <head> swojej strony HTML

Ikony Font Awesome:
Przejdź do <a href="https://www.fontawesome.com">fontawesome.com</a>, załóż darmowe konto, zaloguj się i pobierz kod:

```
<script src="https://kit.fontawesome.com/_twój_kod_.js" crossorigin="anonymous"></script>
```
Przyklad:
```
<html>  
<head>  
<script src="https://kit.fontawesome.com/4fe17d9093.js" crossorigin="anonymous"></script>  
</head>  
<body>  
  
<i class="fas fa-cloud"></i>  
<i class="fas fa-heart"></i>  
<i class="fas fa-car"></i>  
<i class="fas fa-file"></i>  
<i class="fas fa-bars"></i>  
  
</body>  
</html>
```

<i class="fas fa-cloud"></i>  
<i class="fas fa-heart"></i>  
<i class="fas fa-car"></i>  
<i class="fas fa-file"></i>  
<i class="fas fa-bars"></i>  
  

Ikony Bootstrap:
```
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css>

```
Przyklad:
```
<i class="glyphicon glyphicon-cloud"></i>
<i class="glyphicon glyphicon-remove"></i>
<i class="glyphicon glyphicon-user"></i>
<i class="glyphicon glyphicon-envelope"></i>
<i class="glyphicon glyphicon-thumbs-up"></i>
```
<i class="glyphicon glyphicon-cloud"></i>
<i class="glyphicon glyphicon-remove"></i>
<i class="glyphicon glyphicon-user"></i>
<i class="glyphicon glyphicon-envelope"></i>
<i class="glyphicon glyphicon-thumbs-up"></i>

Ikony Google:
```
<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
```
Przykład:
```
<i class="material-icons">cloud</i>
<i class="material-icons">favorite</i>
<i class="material-icons">attachment</i>
<i class="material-icons">computer</i>
<i class="material-icons">traffic</i>

```
<i class="material-icons">cloud</i>
<i class="material-icons">favorite</i>
<i class="material-icons">attachment</i>
<i class="material-icons">computer</i>
<i class="material-icons">traffic</i>
<p>Ikony Google (różne rozmiary i kolory):</p>
<i class="material-icons" style="font-size:24px;">cloud</i>
<i class="material-icons" style="font-size:36px;">cloud</i>
<i class="material-icons" style="font-size:48px;color:red;">cloud</i>
<i class="material-icons" style="font-size:60px;color:lightblue;">cloud</i>
```
<i class="material-icons" style="font-size:24px;">cloud</i>
<i class="material-icons" style="font-size:36px;">cloud</i>
<i class="material-icons" style="font-size:48px;color:red;">cloud</i>
<i class="material-icons" style="font-size:60px;color:lightblue;">cloud</i>
```
Za zmiany rozmiaru  odpowiada *font-size:*
Kolor zmieniamy przy pomocy *color:*