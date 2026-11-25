# Jiuhao Microelectronics SSC Calibration Web App

[Kalibrierassistent öffnen](https://vadergit.github.io/Jiuhao-SSC-Calibration-Web-App/) · [SSC Calibration Studio](https://vadergit.github.io/SSC-Calibration-Studio/)

Modelle und Gruppen: JHM1101–1103, JHM1200/1203, JHM140X, JHM150X, JHM2102.

Die App folgt der gemeinsamen Schrittfolge Verbindung → AFE → Messpunkte → Berechnung und Prüfung → Programmierung und Export. Im Simulationsmodus stehen manuelle und synthetische Messpunkte, linearer Gain und Offset, ein Prüfrohwert und ein JSON-Bericht bereit. AFE-Zugriff, Herstellerprotokolle und RAM-/NVM-Schreiben benötigen einen gerätespezifischen Treiber und Hardwaretests.

## Lokal starten

`python3 -m http.server 8000 --bind 127.0.0.1` im Projektordner ausführen und `http://127.0.0.1:8000/` öffnen. Der URL-Parameter `model` wählt eine ID aus `catalog.mjs` vor.
