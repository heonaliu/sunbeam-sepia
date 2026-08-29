# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

Organization:

sunbeam-sepia/
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── package.json
├── public/
│   └── favicon.svg
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css                 # tailwind directives
    │
    ├── pages/
    │   ├── LandingPage.jsx
    │   ├── CameraPage.jsx
    │   └── EditorPage.jsx
    │
    ├── components/
    │   ├── camera/
    │   │   ├── CameraView.jsx        # <video> + getUserMedia logic
    │   │   ├── CaptureButton.jsx
    │   │   ├── PhotoPreview.jsx       # review/retake shot
    │   │   └── CountdownTimer.jsx     # optional 3-2-1 countdown
    │   │
    │   ├── editor/
    │   │   ├── StripCanvas.jsx        # canvas where photos+stickers render
    │   │   ├── TemplateSelector.jsx   # choose strip design/layout
    │   │   ├── StickerPanel.jsx       # draggable sticker tray
    │   │   ├── DraggableSticker.jsx   # individual sticker on canvas
    │   │   └── DownloadButton.jsx     # canvas -> PNG export
    │   │
    │   └── shared/
    │       ├── Navbar.jsx
    │       ├── Button.jsx
    │       └── PageTransition.jsx     # optional
    │
    ├── assets/
    │   ├── templates/              # strip background images/SVGs
    │   │   ├── template1.png
    │   │   └── template2.png
    │   └── stickers/                # sticker PNGs/SVGs
    │       ├── heart.svg
    │       └── star.svg
    │
    ├── context/
    │   └── PhotoboothContext.jsx    # shares captured photos + chosen template across pages
    │
    ├── hooks/
    │   ├── useCamera.js              # getUserMedia setup/teardown
    │   └── useCanvasExport.js        # canvas.toBlob / toDataURL logic
    │
    ├── utils/
    │   ├── canvasHelpers.js          # drawImage, compositing math
    │   └── downloadImage.js          # trigger browser download
    │
    └── router.jsx                    # react-router routes