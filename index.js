const browserSync = require("browser-sync");

browserSync({
    server: "app",
    files: ["app/index.html", "app/styles/style.css", "app/js/script.js"]
});