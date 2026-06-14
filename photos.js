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
    caption: "Unsere kleine Hochzeitsgesellschaft auf der Kirchentreppe – die liebsten Menschen im kleinen Kreis.",
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
    file: "thumb_IMG_0042_1024.jpg",
    caption: "Dein Enkel Linus auf deinem Arm – ganz nah.",
    available: true,
  },
  {
    file: "IMG_2584.jpg",
    caption: "In deinem Element: hinten am Rand, die Kamera läuft – Linus' Einschulung.",
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
  { file: "thomas.png", name: "Thomas", available: false },
  { file: "maria.png",  name: "Maria",  available: false },
  { file: "linus.png",  name: "Linus",  available: false },
  { file: "lena.png",   name: "Lena",   available: false },
];
