# Jiuhao SSC Calibration Web App

[Web-App öffnen](https://vadergit.github.io/Jiuhao-SSC-Calibration-Web-App/) · [SSC Calibration Studio](https://vadergit.github.io/SSC-Calibration-Studio/)

**v0.3.0-preview** übernimmt die Original-CSS-Dateien, Kopfzeile und Aufgabenauswahl aus dem Elmos-Master. Elf geführte Schritte, Presets, 2–5 Druckpunkte × 1–3 Referenztemperaturen, lineares Modell je Temperatur, unabhängige Prüfmatrix, Ausgangsziel, JSON/CSV/Druckbericht. Acht Aufgaben inklusive manueller Messreihen, Hysterese, Hex-Inspektor, Brückenrechner und lokalem Archiv.

Alle Funktionen sind Offline-Vorschau. Die Live-Leiste bleibt leer. Keine JHM-spezifische Registermap, Firmware, RAM-/OTP-/NVM-Programmierung oder Produktionsfreigabe. Klassisch ist eine kompakte alternative Darstellung, nicht die vollständige klassische Elmos-Ansicht. Siehe [UI-Master](docs/UI-MASTER.md) und [Hardwarefreigabe](docs/HARDWARE-RELEASE.md).

Lokal: `python3 -m http.server 8000 --bind 127.0.0.1`, danach http://127.0.0.1:8000/. Rechentests: `node --test tests/*.test.mjs`.
