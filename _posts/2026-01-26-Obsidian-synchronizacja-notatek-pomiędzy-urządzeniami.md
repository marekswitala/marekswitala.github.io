---
layout: post
title: Obsidian synchronizacja notatek pomiędzy urządzeniami
tags:
  - obsidian
  - synchronizacja 
categories:
- obsidian
---


Od dawna do tworzenia notatek i list wykorzystywałem Google keep, działa notatki mam na moich urządzeniach w aplikacji (telefon, tablet) lub w przeglądarce (laptop- Google nie lubi Windows i apki Keep na Win nie ma). Obsidian trafił na moje urządzenia w zasadzie jako edytor Markdown, ale żal marnować potencjał do samego edytowania/tworzenia plików md

Obsidian zapisuje notatki w folderze lokalnie i jeśli chcemy mieć do nich dostęp na innych urządzeniach musimy użyć synchronizacji. Mamy do wyboru kilka rozwiązań. 
1. Wbudowana w Obsidian opcja synchronizacji, wymaga założenia płatnego konta kosz 4$ na miesiąc. 
2. Sejf Obsidian to nic innego jak katalog, każda notatka jest plikiem markdown, wystarczy więc utworzyć sejf w katalogu 

3. Synchronizacja przy użyciu wtyczki Fit  i github (wymaga konta na github)
- Dodaj do Obsidian wtyczkę (plugin) fit:
Ustawienia >Wtyczki stworzone przez społeczność>Przegladaj>fit
https://github.com/joshuakto/fit

<img src="{{ '/images/Screenshot_20260109~1.png' | relative_url }}" alt="Wtyczka Fit" >
 
- Stwórz konto na Github (lub zaloguj się jeśli już posiadasz)
-  Utwórz nowe rezozytorium np. Obsidian, upewnij się że repozytorium jest prywatne, nie chcesz żeby twoje notatki oglądał cały internet 😉
- Musisz utworzyć osobisty token dostępu dla utworzonego repozytorium , aby wtyczka fit mogła uzyskać dostęp pamiętaj o dodaniu uprawnień odczytu/zapisu do repozytorium swojego skarbca notatek zobacz githuba:

https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens#creating-a-fine-grained-personal-access-token
- Po utworzeniu tokena dostępu możesz uwierzytelnić użytkownika. Nazwa użytkownika GitHub, lista repozytoriów i gałęzie zostaną uzupełnione automatycznie.

<img src="{{ '/images/Screenshot_20260109~2.png' | relative_url }}" alt="Konfiguracja Fit z github" >


- Wybierz repozytorium i gałąź i możesz rozpocząć synchronizację.
