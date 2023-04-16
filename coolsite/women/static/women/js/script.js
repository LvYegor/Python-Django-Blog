let switchMode = document.getElementById("switchMode");

switchMode.onclick = function () {
    let theme = document.getElementById("theme");
    if (theme.getAttribute("href") == "/static/women/css/styless.css") {
        theme.href = "/static/women/css/styles_dark.css";

    } else {
        theme.href = "/static/women/css/styless.css";
    }
}