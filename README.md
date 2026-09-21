# Anleitung für die Lehrperson

## Projekt starten

1. Projektordner öffnen.
2. Terminal im Projektordner starten.
3. Abhängigkeiten installieren:

```bash
npm install
```

4. Anwendung starten:

```bash
npm run dev
```

5. Den im Terminal angezeigten Localhost-Link im Browser öffnen.

## Funktionen testen

Die Anwendung unterstützt folgende Funktionen:

- Neues Produkt eingeben
- Datum auswählen
- Produkt mit `Hinzufügen` zur Liste hinzufügen
- Produkt über die Checkbox als gekauft markieren
- Gekaufte Produkte werden durchgestrichen
- Produkte über den `Löschen`-Button entfernen
- Produkte mit gleichem Namen funktionieren, da jedes Produkt eine eindeutige ID besitzt
- Die Einkaufsliste wird im `localStorage` gespeichert
- Nach einem Neuladen der Seite bleiben die Produkte erhalten

## LocalStorage testen

1. Einige Produkte hinzufügen.
2. Ein Produkt über die Checkbox als gekauft markieren.
3. Die Seite neu laden.
4. Prüfen, ob Produkte und Status noch vorhanden sind.
5. Ein Produkt löschen.
6. Die Seite erneut neu laden und prüfen, ob das gelöschte Produkt weiterhin entfernt bleibt.

## Responsive Design testen

Das Browserfenster verkleinern oder die Entwicklerwerkzeuge des Browsers verwenden.
Auf kleineren Bildschirmgrössen passt sich das Formular an.
