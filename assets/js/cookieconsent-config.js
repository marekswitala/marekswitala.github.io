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
                    description: "Możemy je zamieścić w celu analizy danych dotyczących odwiedzających, ulepszenia naszej strony internetowej, pokazania spersonalizowanych treści i zapewnienia Państwu wspaniałego doświadczenia na stronie internetowej. Aby uzyskać więcej informacji na temat plików cookie, których używamy, otwórz ustawienia.\n\nDane są gromadzone w celu personalizacji reklam i pomiaru skuteczności kampanii reklamowych. Dane mogą być udostępniane Google LLC,",
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