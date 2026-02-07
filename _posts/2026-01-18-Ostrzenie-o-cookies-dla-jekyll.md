---
layout: post
title: Ostrzeżenie o cookies dla Jekyll
tags:
  - jekyll
  - cookies
  - html
categories:
- jekyll
---

Używam na stronie plików cookie i skryptów javascript, głównie do śledzenia ruchu i usprawnienia działania strony. Zgodnie z wymogami UE konieczne jest wyświetlenie informacji o tym. 
Metoda z   <a href="https://jekyllcodex.org/without-plugin/cookie-consent/">Jekyll Codex</a>  działała nie do końca z moim oczekiwaniem. Ta strona działa w ramach Github Pages i jest generowana bezpośrednio na github co ogranicza stosowanie wtyczek/plugins. Podstawowe założeniem było wdrożyć cookie monit w miarę prosto. 

Instalacja
Krok 1.
Wygeneruj własny plik javascript cookieconsent-config.js przy pomocy:
<a href="https://playground.cookieconsent.orestbida.com/">CookieConsent v3.1.0</a>
Skopiuj  cookieconsent-config.js do katalogu swojego projektu:
```
assets/js/
```
Możesz użyć kodu, który wygenerowałem na potrzeby tej strony:

```
import 'https://cdn.jsdelivr.net/gh/orestbida/cookieconsent@3.1.0/dist/cookieconsent.umd.js';

// Enable dark mode
document.documentElement.classList.add('cc--darkmode');

CookieConsent.run({
    guiOptions: {
        consentModal: {
            layout: "box",
            position: "bottom left",
            equalWeightButtons: true,
            flipButtons: false
        },
        preferencesModal: {
            layout: "box",
            position: "right",
            equalWeightButtons: true,
            flipButtons: false
        }
    },
    categories: {
        necessary: {
            readOnly: true
        },
        functionality: {},
        analytics: {},
        marketing: {}
    },
    language: {
        default: "en",
        autoDetect: "browser",
        translations: {
            en: {
                consentModal: {
                    title: "Używamy plików cookie! ",
                    description: "Możemy je zamieścić w celu analizy danych dotyczących odwiedzających, ulepszenia naszej strony internetowej, pokazania spersonalizowanych treści i zapewnienia Państwu wspaniałego doświadczenia na stronie internetowej. Aby uzyskać więcej informacji na temat plików cookie, których używamy, otwórz ustawienia. Pliki cookie i skrypty używane są dla poprawy funkcjonowania strony oraz analizowania ruchu na stronie.",
                    closeIconLabel: "",
                    acceptAllBtn: "Zaakceptuj wszystko ",
                    acceptNecessaryBtn: "Odrzuć wszystko",
                    showPreferencesBtn: "Zarządzaj preferencjami",
                    footer: "<a href=\"/privacy-policy.html\">Polityka prywatności</a>\n<a href=\"/cookie-policy.html\">Polityka cookies</a>"
                },
                preferencesModal: {
                    title: "Consent Preferences Center",
                    closeIconLabel: "Close modal",
                    acceptAllBtn: "Zaakceptuj wszystko",
                    acceptNecessaryBtn: "Odrzuć wszystko",
                    savePreferencesBtn: "Zapisz preferencje",
                    serviceCounterLabel: "Service|Services",
                    sections: [
                        {
                            title: "Podstawowe ciasteczka",
                            description: "Używam ciasteczek(cookies) dla skryptów w celu poprawy funkcjonowania strony. ",
                            linkedCategory: "necessary"
                        },
                        {
                            title: "Analityczne",
                            description: "Ciasteczka i skrypty służące analizowaniu ruchu na stronie.",
                            linkedCategory: "analytics"
                        }
                    ]
                }
            }
        }
    }
});
```

Mój skrypt wykorzystuje odwołania do polityki prywatności i polityki cookies:

```
<a href=\"/privacy-policy.html\">Polityka prywatności</a>\n<a href=\"/cookie-policy.html\">Polityka cookies</a>"

```
Utwórz takie pliki html lub usuń ten fragment kodu

Krok 2. 

 Dodaj link z odpowiednią ścieżką do skryptu w tagu 
`<body>`szablonu twojej strony :

```
<script type="module" src="/assets/js/cookieconsent-config.js"></script>
```
Najlepiej tuż przed `</body>` 

Następnie dodaj arkusz stylów w tagu `<head>`:

```
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/orestbida/cookieconsent@3.1.0/dist/cookieconsent.css">
```