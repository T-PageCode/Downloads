const menu = document.getElementById("menu");
const info = document.getElementById("info");
function copyLink(link) {
    navigator.clipboard.writeText(link);
    info.style.visibility = "visible";
    info.style.opacity = "1";
    menu.style.opacity = "0";
    menu.style.transform = "translate(-50%,-50%) scale(0.8)";
    setTimeout(() => {
        menu.style.visibility = "hidden";
    },500)
    setTimeout(() => {
        info.style.opacity = "0";
        setTimeout(() => {
            info.style.visibility = "hidden";
        },500)
    },2000)
}
document.addEventListener("contextmenu",(e) => {
    e.preventDefault();
    let x = e.clientX;
    let y = e.clientY;
    menu.style.left = x + "px";
    menu.style.top = y + "px";
    menu.style.visibility = "visible";
    menu.style.opacity = "1";
    menu.style.transform = "translate(-50%,-50%) scale(1)";
})
document.addEventListener("click",(e) => {
    if (e.target.closest("#menu")) {
        return;
    }
    menu.style.opacity = "0";
    menu.style.transform = "translate(-50%,-50%) scale(0.8)";
    setTimeout(() => {
        menu.style.visibility = "hidden";
    },500)
})