<p align="center">
  <img src="public/boolean-logo.png" alt="Boolean logo" width="35">
</p>

<h1 align="center">EX – TypeScript Snacks</h1>

Snack sviluppati in **TypeScript** per esercitarsi con i concetti fondamentali del linguaggio.

L’obiettivo è consolidare elementi base della tipizzazione statica come:

* Utilizzo del tipo `unknown`
* Controllo del tipo con `typeof`
* Creazione di **type alias**
* Utilizzo delle **union types**
* Estensione dei tipi tramite **intersection types (`&`)**
* Gestione di proprietà opzionali e valori `null`

---

## SNACK IMPLEMENTATI

### 🏆 Snack 1 – Controllo Tipo Dato

Hai ricevuto un dato generico da un'API e devi controllarne il tipo per gestirlo correttamente.

* Se è una **stringa** → stampata in **maiuscolo**
* Se è un **numero** → moltiplicato per **due**
* Se è un **booleano** → stampa **“Sì”** oppure **“No”**
* In tutti gli altri casi → stampa **“Tipo non supportato”**

Questo esercizio utilizza il tipo `unknown` e il controllo del tipo tramite `typeof`.

---

### 🏆 Snack 2 – Type Alias Dipendente

Creazione di un **type alias** `Dipendente` che rappresenta un lavoratore con le seguenti proprietà:

* `nome` → stringa
* `cognome` → stringa
* `annoNascita` → numero
* `sesso` → `"m"` oppure `"f"`
* `anniDiServizio` → array di numeri

Questo snack introduce la definizione di **tipi personalizzati** in TypeScript.

---

### 🏆 Snack 3 – Estensione dei Tipi

Estensione del tipo `Dipendente` per definire due ruoli aziendali specifici.

#### 👨‍💻 Developer

* `livelloEsperienza` → `"Junior" | "Mid" | "Senior"`
* `linguaggi` → array di stringhe **opzionale**
* `certificazioni` → array di stringhe

#### 📊 ProjectManager

* `teamSize` → numero oppure `null`
* `budgetGestito` → numero **opzionale**
* `stakeholderPrincipali` → array di stringhe

Questo esercizio utilizza le **intersection types (`&`)** per estendere un tipo esistente.

---

## 🛠 Tecnologie Utilizzate

* TypeScript
* Node.js
