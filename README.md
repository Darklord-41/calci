<div align="center">

<img src="https://readme-typing-svg.demolab.com?font=Inter&weight=700&size=36&duration=3000&pause=1000&color=3B82F6&center=true&vCenter=true&width=600&lines=CALCI;The+Intelligent+Grade+Calculator" alt="CALCI" />

<br/>

<p align="center">
  <em>Stop doing grade math by hand. Upload your result card, or type it in. CALCI handles the rest.</em>
</p>

<br/>

<p align="center">
  <img src="https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black" />
  <img src="https://img.shields.io/badge/Vite-5-646CFF?style=for-the-badge&logo=vite&logoColor=white" />
  <img src="https://img.shields.io/badge/Tesseract.js-OCR-FF6B35?style=for-the-badge&logo=google&logoColor=white" />
  <img src="https://img.shields.io/badge/License-MIT-22C55E?style=for-the-badge" />
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Status-Active-brightgreen?style=flat-square" />
  <img src="https://img.shields.io/badge/PRs-Welcome-blue?style=flat-square" />
  <img src="https://img.shields.io/badge/100%25-Client--Side-purple?style=flat-square" />
</p>

</div>

---

## What is CALCI?

CALCI is a grade calculator that does two things: you type your subjects and grades in, or you take a screenshot of your result card and let OCR pull the data out for you.

No account. No server. Nothing leaves your browser.

---

## Features

| | What it does |
|---|---|
| 📝 **Manual Entry** | Type in subjects, credits, and grades row by row |
| 🔍 **Smart Upload** | Reads your result screenshot using OCR and fills the table |
| ✅ **Verify Mode** | Side-by-side image and editable table so you can catch OCR mistakes |
| 🏆 **Result Tiers** | Elite · Strong · Good · Average · Low — each with a message |
| 🎊 **Confetti** | Goes off for SGPA ≥ 8.0 |
| 🌙 **Light / Dark** | Theme toggle, persists on reload |
| ❄️ **Snow Mode** | Snowfall button, dark theme only |
| 🔒 **Private** | All computation runs in-browser, no data sent anywhere |

---

## Getting Started

```bash
git clone https://github.com/anshdhariwal/CALCI.git
cd CALCI
npm install
npm run dev
```

Then open `http://localhost:5173`.

---

## Project Structure

```
src/
├── assets/             # Logos
├── components/
│   ├── common/         # Navbar, Layout, ThemeToggle
│   └── upload/         # UploadBox, Processing, VerificationView
├── hooks/              # useSnowEffect
├── pages/              # Home, ManualEntry, UploadFlow
├── utils/              # gradeUtils.js · ocrService.js
├── App.jsx
└── index.css           # CSS variables & global styles
```

---

## Tech Stack

<p>
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
  <img src="https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E" />
  <img src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white" />
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" />
</p>

`tesseract.js` · `react-zoom-pan-pinch` · `canvas-confetti` · `react-icons`

---

## How SGPA Works

```
SGPA = Σ(Credits × Grade Points) / Σ Credits
```

| Grade | Points | Grade | Points |
|-------|--------|-------|--------|
| A+    | 10.0   | C+    | 6.0    |
| A     | 9.0    | C     | 5.0    |
| B+    | 8.0    | D     | 4.0    |
| B     | 7.0    | E / F | 0.0    |

---

## Contributing

1. Fork the repo
2. Create a branch — `git checkout -b feature/thing`
3. Commit — `git commit -m 'feat: add thing'`
4. Push — `git push origin feature/thing`
5. Open a pull request

---

## License

MIT. Do whatever you want with it.

---

<div align="center">
  <sub>Built by <a href="https://github.com/anshdhariwal">@anshdhariwal</a></sub>
</div>
