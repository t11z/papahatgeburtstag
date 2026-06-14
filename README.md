# papahatgeburtstag 🎂

Eine kleine, liebevolle Geburtstagsseite für **Papa (Dietmar)** zum 71. –
optimiert fürs iPhone, mit Hintergrundmusik, Fotogalerie und Platz für
handschriftliche Unterschriften.

Statische Seite, kein Build, kein Framework. Einfach öffnen oder über
GitHub Pages veröffentlichen.

## Lokal ansehen

```bash
python3 -m http.server 8000
# dann im Browser: http://localhost:8000
```

## Aufbau

| Datei | Zweck |
|-------|-------|
| `index.html` | Inhalt & Abschnitte |
| `styles.css` | Design (warm & nostalgisch, mobil-first) |
| `app.js` | Intro-Tipp, Musik, Galerie, Großansicht (Wischen) |
| `photos.js` | **Foto- & Unterschriften-Liste** (hier pflegt man Inhalte) |
| `assets/img/` | Fotos |
| `assets/img/signatures/` | handschriftliche Unterschriften (PNG) |
| `assets/audio/background.mp3` | Hintergrundmusik |
| `CNAME` | Domain für GitHub Pages (`papa.am-kleikamp.de`) |

## Ein Foto hinzufügen / ändern

1. Bild nach `assets/img/` legen (gern vorher verkleinern, lange Kante ~1600 px).
2. In `photos.js` einen Eintrag ergänzen:

```js
{ file: "DEIN_BILD.jpg", caption: "Eine schöne Bildunterschrift.", available: true },
```

## Unterschriften einsetzen (iPad + Apple Pencil)

1. Unterschrift als **transparentes PNG** speichern (dunkle Tinte auf transparent
   sieht am besten aus), z. B. `thomas.png`.
2. Datei nach `assets/img/signatures/` legen.
3. In `photos.js` bei der Person `available: true` setzen:

```js
{ file: "thomas.png", name: "Thomas", available: true },
```

Weitere Personen lassen sich einfach in der `SIGNATURES`-Liste ergänzen.

## Musik austauschen

Einfach `assets/audio/background.mp3` ersetzen.
Aktuell läuft „Heartwarming" von **Kevin MacLeod** (incompetech.com),
Lizenz **CC BY 4.0** – die Nennung steht im Footer der Seite und muss bei
diesem Track bestehen bleiben. Bei eigener Musik die Nennung anpassen.

## Veröffentlichen (GitHub Pages + Domain)

1. In den Repo-Einstellungen **Pages** aktivieren (Branch → `/root`).
2. Die Datei `CNAME` setzt die Domain auf `papa.am-kleikamp.de`.
3. Beim DNS-Anbieter von `am-kleikamp.de` einen **CNAME-Eintrag** anlegen:
   `papa` → `<dein-github-name>.github.io`
4. In den Pages-Einstellungen „Enforce HTTPS" aktivieren.

Bis die Domain greift, funktioniert die normale `…github.io`-Adresse.
