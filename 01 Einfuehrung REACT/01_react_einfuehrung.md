## **1. Bibliothek vs. Framework**

-   **Bibliothek**: Du rufst ihre Funktionen auf, wann und wie du willst.
    Beispiel: **React**.
-   **Framework**: Es gibt dir Regeln und ruft deinen Code an bestimmten Stellen auf.
    Beispiel: **Angular**.

---

## **2. Was ist React?**

-   **Eine JavaScript-Bibliothek** zum Erstellen von Benutzeroberflächen.
-   Entwickelt von **Meta (Facebook)**.
-   **Wichtige Merkmale**:

    -   **Komponenten**: Bausteine deiner UI, wiederverwendbar.
    -   **Deklarativ**: Du sagst _was_ du willst, React kümmert sich um das _wie_.
    -   **Virtuelles DOM**: Schneller, weil nur Änderungen neu gerendert werden.
    -   **Einseitige Datenbindung**: Daten fließen nur von „oben nach unten“.
    -   **JSX**: HTML-ähnliche Syntax in JavaScript.
    -   **Hooks**: Funktionen wie `useState` oder `useEffect`, um State und Logik zu nutzen.

---

## **3. Tools zum Erstellen eines React-Projekts**

-   **Create React App (CRA)**: Einfach, aber langsamer.
-   **Vite**: Moderner, viel schneller, kleine Dateigröße.

---

## **4. JavaScript ES6 – wichtige neue Funktionen**

-   **`let` & `const`**: Neue Möglichkeiten Variablen zu deklarieren.
-   **Arrow Functions**: Kürzere Funktionsschreibweise.
-   **Promise**: Einfachere Arbeit mit asynchronem Code.
-   **class**: Objektorientierte Programmierung in JavaScript.

---

## **5. JSX**

-   Mischung aus HTML und JavaScript.
-   Muss mit einem Compiler (z. B. Babel) in normales JavaScript umgewandelt werden.
-   Vorteile: Leicht zu lesen, Fehler früh erkennen, sicherer Code.

---

## **6. Komponentenarten**

-   **Funktionskomponenten**: Einfach, heute Standard.
-   **Klassenkomponenten**: Älter, komplexer, mit Lebenszyklusmethoden.
-   **Höherwertige Komponenten (HOC)**: Komponente, die eine andere „umwickelt“.

---

## **7. State & Props**

-   **State**: Daten, die sich ändern können und innerhalb einer Komponente leben.
-   **Props**: Daten, die von einer übergeordneten an eine untergeordnete Komponente weitergegeben werden (schreibgeschützt).

---

## **8. Lebenszyklus von Klassenkomponenten**

-   **Mounting**: Komponente wird erstellt und ins DOM eingefügt.
-   **Updating**: State oder Props ändern sich → neu rendern.
-   **Unmounting**: Komponente wird entfernt.

---

## **9. Datenweitergabe**

-   **Eltern → Kind**: Mit Props.
-   **Kind → Eltern**: Mit einer Callback-Funktion.
-   **Zwischen Geschwistern**: Über z. B. Redux.

```
┌─────────────────────────────┐
│      JavaScript Grundlagen  │
│ (ES6: let, const, arrow fn, │
│  Promise, class)            │
└──────────────┬──────────────┘
               │
               ▼
┌───────────────────────────────────┐
│           React                   │
│  Bibliothek für UI-Entwicklung    │
└───────┬─────────┬─────────────────┘
        │         │
        │         │
   Komponenten   Tools
        │         │
        ▼         ▼
┌─────────────────────────────┐   ┌──────────────────────────────┐
│ Arten von Komponenten:      │   │ Create React App (CRA)       │
│  - Funktionskomponenten     │   │ + Einfache Einrichtung       │
│  - Klassenkomponenten       │   │ - Langsamer                  │
│  - HOC (Höherwertige)       │   ├──────────────────────────────┤
└─────────┬───────────────────┘   │ Vite                         │
          │                       │ + Sehr schnell, modern       │
          │                       │ + Kleine Projektgröße        │
          ▼                       └──────────────────────────────┘
┌───────────────────────────────┐
│   React Kernkonzepte          │
│  - JSX (HTML + JS)            │
│  - Virtuelles DOM             │
│  - Einseitige Datenbindung    │
│  - Hooks (useState, useEffect)│
└─────────┬─────────────────────┘
          │
          ▼
┌───────────────────────────────┐
│   State & Props               │
│  State = interne Daten        │
│  Props = von Eltern übergeben │
└─────────┬─────────────────────┘
          │
          ▼
┌───────────────────────────────┐
│   Lebenszyklus                │
│  Mount → Update → Unmount     │
│  (nur in Klassenkomponenten)  │
└───────────────────────────────┘
```

## **Übersicht**

```
FRONTEND (im Browser)
├─ HTML → Struktur
├─ CSS → Aussehen
├─ JavaScript → Logik
│ └─ React (Bibliothek für UI)
│ ├─ Komponenten
│ ├─ JSX
│ └─ State & Props
│
BACKEND (auf dem Server)
├─ Node.js → JavaScript auf dem Server
└─ Express → liefert Daten/Antworten

NPM (Paketbote) → bringt dir Bibliotheken & Frameworks für Frontend & Backend
```
