# Jiuhao SSC Calibration Web App

[Web-App](https://vadergit.github.io/Jiuhao-SSC-Calibration-Web-App/) · [SSC Calibration Studio](https://vadergit.github.io/SSC-Calibration-Studio/)

Geführter Labor-Simulator nach dem Bedienkonzept des Elmos-Masters: Bauteil, Messkonzept, AFE-Dokumentation, 2–5 Druckmesspunkte, lineare Regression, unabhängige Verifikation, Ausgangsziel und Bericht (JSON, CSV, Browser-PDF). Light/Dark. Standardbereich 0–100 %, Messpunkte 10–90 % FS. Keine Hardwarefreigabe.

Die Modellgruppen bleiben mit bestehenden Studio-Links kompatibel. Die ADC-Grenzen sind frei gewählte Simulationswerte; keine Aussage über tatsächliche JHM-Register. Temperaturkompensation, Registerzugriff, RAM und NVM sind nicht implementiert. Siehe [Hardwarefreigabe](docs/HARDWARE-RELEASE.md).

Lokal: `python3 -m http.server 8000 --bind 127.0.0.1`, dann http://127.0.0.1:8000/ öffnen. Rechentests: `node --test tests/*.test.mjs`.
