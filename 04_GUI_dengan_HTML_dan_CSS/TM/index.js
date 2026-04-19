const editorElement = document.getElementById("editor-kecil");
const charCountElement = document.getElementById("hf");
const upperCountElement = document.getElementById("hb");
const lowerCountElement = document.getElementById("hk");

editorElement.addEventListener("input", (event) => {
    const text = event.target.value;
    charCountElement.textContent = text.length;
    
    const lowerCaseMatch = text.match(/[a-z]/g);
    lowerCountElement.textContent = lowerCaseMatch ? lowerCaseMatch.length : 0;
    
    const upperCaseMatch = text.match(/[A-Z]/g);
    upperCountElement.textContent = upperCaseMatch ? upperCaseMatch.length : 0;
});

const operasiTeks = {
    "huruf-besar": (teks) => teks.toUpperCase(),
    "huruf-kecil": (teks) => teks.toLowerCase()
};

const jalankanKonversi = (tipeOperasi) => {
    editorElement.value = operasiTeks[tipeOperasi](editorElement.value);
    editorElement.dispatchEvent(new Event('input')); 
};

document.getElementById("huruf-besar").addEventListener("click", () => jalankanKonversi("huruf-besar"));
document.getElementById("huruf-kecil").addEventListener("click", () => jalankanKonversi("huruf-kecil"));


const aturTema = (modeBaru) => {
    document.documentElement.classList.remove("light-mode", "dark-mode", "sepia-mode");
    document.documentElement.classList.add(modeBaru);
};

const stateTema = {
    "light": () => aturTema("light-mode"),
    "dark": () => aturTema("dark-mode"),
    "sepia": () => aturTema("sepia-mode")
};

document.getElementById("light").addEventListener("click", stateTema["light"]);
document.getElementById("dark").addEventListener("click", stateTema["dark"]);
document.getElementById("sepia").addEventListener("click", stateTema["sepia"]);