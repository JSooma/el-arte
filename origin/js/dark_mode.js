const d = document;
const ls = localStorage;
const moon = "origin/multimedia/img/darkmode.png";//Ruta del icono darkMode
const sun = "origin/multimedia/img/lightmode.png";//Ruta del icono lightMode
const $img = d.querySelector(".header-container__img");

export default function darkMode(btnDarkMode) {
    //Hace una consulta de medios, si el usuario tiene el modo claro en sus preferencias del sistema manda un
    //atributo class con el valor light, de no ser así entonces tiene el dark y manda una clase con valor dark.
    if(matchMedia("(prefers-color-scheme: light)").matches) {
        d.documentElement.setAttribute("class", "light");
        $img.setAttribute("src", moon);
    } else {
        d.documentElement.setAttribute("class", "dark");
        $img.setAttribute("src", sun);
    }

    //si el elemento que origina el evento es el indicado entonces hace una condición
    //si el elemento html tiene una clase con el valor light entonces cambia el valor de la clase light por dark
    //y guarda una variable local storage con el valor dark.
    //si el elemento html no tiene una clase light entonces tiene una dark y cambia el valor de la clase dark por light
    //y guarda una variable local storage con el valor light.
    d.addEventListener("click", e => {
        if(e.target.matches(btnDarkMode) || e.target.matches(`${btnDarkMode} *`)) {
            if(d.documentElement.getAttribute("class") === "light") {
                d.documentElement.setAttribute("class", "dark");
                $img.setAttribute("src", sun);
                ls.setItem("mode", "dark");
            }else {
                d.documentElement.setAttribute("class", "light");
                $img.setAttribute("src", moon);
                ls.setItem("mode", "light")
            }
        }
    });


    if(ls.getItem("mode") === "light") {//Si el valor de la variable local storage es light entonces manda al elemento html
        d.documentElement.setAttribute("class", "light");//la clase light.
        $img.setAttribute("src", moon);
    }else {//Si el valor de la variable local storage es dark entonces manda al elemento html la clase dark.
        d.documentElement.setAttribute("class", "dark");
        $img.setAttribute("src", sun);
    }

}

