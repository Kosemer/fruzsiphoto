/* Ez a kód a React alkalmazás belépési pontja, ahol a fő App komponens csatlakozik a HTML oldalhoz.

A ReactDOM.createRoot funkcióval létrehoz egy új gyökeret a root ID-val rendelkező HTML elemen. Ez a gyökér jelenti azt a pontot, ahol a React alkalmazás beillesztődik a HTML oldalba.

A root.render funkcióval pedig a App komponenst rendereli a gyökérbe. A React.StrictMode komponens a gyermek komponenseit ellenőrzi, és figyelmeztet, ha potenciálisan problémás mintákat talál.

Az App komponens a BrowserRouter-ben fut, ami a navigáció kezelését teszi lehetővé a React alkalmazásban. A BrowserRouter lehetővé teszi a komponensek közti navigálást az URL változtatásával anélkül, hogy az oldalt újra kellene tölteni. */

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>
);
