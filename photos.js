/*
 * Foto-Manifest für Papas Geburtstagsseite.
 *
 * Neues Foto hinzufügen:
 *   1. Bilddatei nach  assets/img/<dateiname>  legen.
 *   2. Hier einen Eintrag ergänzen (oder bei einem Platzhalter "available" auf true
 *      setzen, sobald die Datei vorhanden ist).
 *
 * Felder:
 *   file      – Dateiname in assets/img/
 *   caption   – Bildunterschrift (wird unter dem Foto und in der Großansicht gezeigt)
 *   available – true = Foto liegt vor und wird angezeigt
 *               false = dezenter Platzhalter ("Foto folgt") mit der Bildunterschrift
 */
window.PHOTOS = [
  {
    file: "IMG_5987.jpg",
    caption: "Unsere kleine Hochzeitsgesellschaft auf der Rathaustreppe – die liebsten Menschen im kleinen Kreis.",
    available: true,
  },
  {
    file: "IMG_9517.jpg",
    caption: "Unsere Hochzeit beim Mälzer in Lüneburg. Seitdem ist Silvester unser Hochzeitstag.",
    available: true,
  },
  {
    file: "IMG_5974.jpg",
    caption: "Regen zu unserer Hochzeit – du mit Schirm, gelassen wie immer.",
    available: true,
  },
  {
    file: "IMG_6008.jpg",
    caption: "Vier auf einer Treppe: Schwiegerpapa, du, Thomas und Linus.",
    available: true,
  },
  {
    file: "IMG_8915.jpg",
    caption: "Auf der Hochzeit von Björn – fein gemacht, Seite an Seite.",
    available: true,
  },
  {
    file: "IMG_2361.jpg",
    caption: "Noch eine von Björns Hochzeit – du, Mama und Thomas.",
    available: true,
  },
  {
    file: "BOUH1085.jpg",
    caption: "Bei uns im Garten in Hohenlimburg – du und Maria.",
    available: true,
  },
  {
    file: "IMG_0993.jpg",
    caption: "Bei dir und Mama zu Hause – Musizieren mit Linus.",
    available: true,
  },
  {
    file: "IMG_0999.jpg",
    caption: "Noch eine vom gemeinsamen Musizieren mit Linus.",
    available: true,
  },
  {
    file: "IMG_3631.jpg",
    caption: "Du an der Gitarre, Linus an der Mundharmonika – euer kleines Konzert.",
    available: true,
  },
  {
    file: "IMG_1293.jpg",
    caption: "Deine neugeborene Enkelin Lena, das erste Mal auf deinem Arm.",
    available: true,
  },
  {
    file: "IMG_1698.jpg",
    caption: "Ein halbes Jahr später, mit Lena im Garten. Großvater und Enkelin.",
    available: true,
  },
  {
    file: "IMG_1499.jpg",
    caption: "Bei dir und Mama zu Hause, klein-Lena auf dem Schoß.",
    available: true,
  },
  {
    file: "thumb_IMG_0042_1024.jpg",
    caption: "Dein Enkel Linus auf deinem Arm – ganz nah.",
    available: true,
  },
  {
    file: "IMG_1578.jpg",
    caption: "Bei uns in Höver an Linus' Geburtstag, mit der ganzen Familie.",
    available: true,
  },
  {
    file: "IMG_5479.jpg",
    caption: "Noch eine von Linus' Geburtstag bei uns in Höver.",
    available: true,
  },
  {
    file: "IMG_1668.jpg",
    caption: "Einen Monat später an Lenas Geburtstag – zusammen mit Oma Hanne.",
    available: true,
  },
  {
    file: "IMG_2584.jpg",
    caption: "In deinem Element: hinten am Rand, die Kamera läuft – Linus' Einschulung.",
    available: true,
  },
  {
    file: "IMG_2207.jpg",
    caption: "Noch ein Moment von Linus' Einschulung.",
    available: true,
  },
  {
    file: "IMG_9533.jpg",
    caption: "Linus' Einschulung – die ganze Familie um ihn herum.",
    available: true,
  },
  {
    file: "IMG_2886.jpg",
    caption: "Unterm Zelt bei Linus' Flag-Football-Spiel. Schietwetter? Du warst trotzdem da.",
    available: true,
  },
  {
    file: "IMG_0772.jpg",
    caption: "Auf unserer Terrasse in Höver, Kaffee und Ruhe.",
    available: true,
  },
  {
    file: "IMG_2273.jpg",
    caption: "Bei uns zu Hause mit Steffi und Mama.",
    available: true,
  },
  {
    file: "487faca3.jpg",
    caption: "Weihnachtsessen bei Steffi – die ganze Familie an einem Tisch.",
    available: true,
  },
];

/*
 * Unterschriften (handschriftlich, z. B. mit iPad + Apple Pencil als transparentes PNG).
 * Datei nach assets/img/signatures/ legen und hier "available" auf true setzen.
 */
window.SIGNATURES = [
  { file: "thomas.png", name: "Thomas", available: true },
  { file: "maria.png",  name: "Maria",  available: true },
  { file: "linus.png",  name: "Linus",  available: true },
  { file: "lena.png",   name: "Lena",   available: true },
];
