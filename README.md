# SEPIA


This virtual photobooth allows users to upload three picture using a timed capture camera and formats them as a downloadable photo strip. There are four themes available to choose from, and each comes with drag-and-drop stickers to embellish the strip.


Created by Heona Liu, Jana Leung, and Emma Deeken as part of Hack Club's Sunbeam Boston event.


# PRIVACY


User photos are only used locally. They are never uploaded online and are not stored when the program is terminated, unless the user chooses to download them.


# CONTRIBUTIONS


Liu developed the basic framework for the project, handled the formatting of the photo strip, and created the drag and drop functionality.


Leung created original artwork for the photo strip themes, embellishments, and other graphics used by the program.


Deeken handled the photo capture capability and [made the download button work]




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
