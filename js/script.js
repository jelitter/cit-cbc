const themes = {
    "dark": {
        "name": "dark",
        "--main": "#708090",
        "--bg": "#506070",
        "--article-bg": "#607080",
        "--article-fg": "rgba(256, 256, 256, 0.75)",
        "--h1": "rgba(256, 256, 256, 0.9)"
    },
    "darkolivegreen": {
        "name": "darkolivegreen",
        "--main": "darkolivegreen",
        "--bg": "#f4f7ed",
        "--article-bg": "rgba(256, 256, 256, 0.9)",
        "--article-fg": "#444",
        "--h1": "darkolivegreen"
    },
    "dodgerblue": {
        "name": "dodgerblue",
        "--main": "dodgerblue",
        "--bg": "#e6f2ff",
        "--article-bg": "rgba(256, 256, 256, 0.9)",
        "--article-fg": "#444",
        "--h1": "dodgerblue"
    },
    "crimson": {
        "name": "crimson",
        "--main": "crimson",
        "--bg": "#fde8ec",
        "--article-bg": "rgba(256, 256, 256, 0.9)",
        "--article-fg": "#444",
        "--h1": "crimson"
    }
}

var subs = 100;


// This will run once the DOM is loaded
$(document).ready(() => {
    setupColors();
});



// Once the frame content is loaded
$('#frame').on("load", () => {
    setupColors();
    let height = $(window).height() - subs;
    $("#frame").height(height);

    $('#frame').contents().find("div").get(0).style.setProperty("height", "calc(100vh - 2.5em)");
    $('#frame').contents().find("div").get(0).style.setProperty("overflow-y", "scroll");
});

// Triggered when residing window to re-calculate iframe height
window.onresize = event => {
    var height = $(window).height() - subs;
    $("#frame").height(height);
    $('#frame').contents().find("div").get(0).style.setProperty("height", "calc(100vh - 2.5em)");
};

$("#col1").get(0).style.setProperty("background-color", themes.dark["--main"]);
$("#col2").get(0).style.setProperty("background-color", themes.darkolivegreen["--main"]);
$("#col3").get(0).style.setProperty("background-color", themes.dodgerblue["--main"]);
$("#col4").get(0).style.setProperty("background-color", themes.crimson["--main"]);

$('#col1').click(() => { setColors(themes.dark); });
$('#col2').click(() => { setColors(themes.darkolivegreen); });
$('#col3').click(() => { setColors(themes.dodgerblue); });
$('#col4').click(() => { setColors(themes.crimson); });

// Apply all colors saved in the 'theme' object
function setColors(theme) {

    for (k in theme) {
        if (k != "name") {
            $("body").get(0).style.setProperty(k, theme[k]);
            $('#frame').contents().find("div").get(0).style.setProperty(k, theme[k]);
        } else {
            localStorage.setItem("cbc_colors", theme["name"]);
        }
    }

    // Twitter feed background
    if (theme == "dark") {
        $("body").get(0).style.setProperty(k, theme[k]);
    } else {

    }

}

// Apply saved colors if they exist, or default ones ('crimson')
function setupColors() {
    let theme = localStorage.getItem("cbc_colors");
    if (theme) {
        setColors(themes[theme]);
    } else {
        setColors(themes["crimson"]);
        localStorage.setItem("cbc_colors", themes["crimson"]);
    }
}

// Mark active the clicked section
$("li.section").on("click", function() {
    $("li.section").removeClass("active");
    $(this).addClass("active");
});

// Mark active 'Home' when clicking CIT logo
$("nav a img").on("click", function() {
    $("nav li").removeClass("active");
    $("#home").addClass("active");
});