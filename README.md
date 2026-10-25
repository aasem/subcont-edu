# Taʿlīm in the Subcontinent

An atlas of the subcontinent's arguments about schooling, from the Mughal grant to the Single National Curriculum. Ninety documents, institutions and episodes, in seven parts, are each read through one governing question:

> When the subcontinent's schools were remade, who decided what they were for, in what language they taught, who certified what was learned, who might learn, and who paid, and what became of each answer?

Each entry answers six questions: purpose, medium, warrant, scope, who paid, and fate. The Orientalist–Anglicist debate of 1835 is set out in full, and India, Bangladesh and Malaysia enter where they test, contrast with or repeat Pakistan's record.

The atlas is a companion to the [Atlas of Educational Philosophy](https://aasem.github.io/edu-atlas/), which reads the traditions through seven questions about the human being, and to the essay series *Questioning the University in Pakistan*. Where a text appears in both atlases, the entry links to the other reading.

## What is in the repository

- `index.html` — the atlas: the reader, its styles and the page shell
- `data/frame.js` — the six questions and their classifications, the seven parts and their essays, the closing pages, key words and name links
- `data/entries-*.js` — the entries, one file per part
- `data/chart.js` — the Big Picture's cells and routes, and short names for tiles
- `data/library.js` — every source in the series plan's bibliography, with the essays that use it
- `data/series.js` — the arcs and essays of the series
- `readings.js` — the reader's own reading of each entry; write in it directly, or write on the page and use **Copy readings.js**

## Editing an entry

Each entry is a JavaScript object. The fields are:

| Field | Meaning |
|---|---|
| `n`, `by`, `d`, `yr`, `t` | name, author or issuer, date as shown, year for sorting, part |
| `pu`, `me`, `wa`, `sc`, `py`, `fa` | the six classifications (codes listed in `data/frame.js`) |
| `read`, `ed` | what to read, and the edition or source |
| `w`, `a` | the setting, and what the document argued |
| `pt`, `mt`, `wt`, `st`, `yt`, `ft` | the six answers in prose; the first sentence of each appears on the question pages |
| `o` | the strongest objection |
| `es` | essays in the series that use it |
| `lib` | phrases that match its sources in the library |
| `ea` | the matching entry in the Atlas of Educational Philosophy, if any |
| `v` | what still needs checking against the primary source |

The page reads the data files directly, so an edit appears on the next reload. No build step is needed.

## Verification

Dates, counts and attributions follow the standard histories and are marked under *To verify* in each entry where they should be checked against the primary document before citing. In the library, items marked *seen* were seen in a project document, *located* items are identified with details still to check, and unmarked items are cited from memory.

© 2026 Asim D. Bakhshi. Text and readings: CC BY 4.0. Code: MIT.
