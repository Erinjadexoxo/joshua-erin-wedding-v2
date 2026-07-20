// ==========================================================
// Joshua & Erin
// Wedding Invitation V2
// Hero Scene
// ==========================================================

const seal = document.getElementById("seal");

const envelope = document.querySelector(".envelope");

let opened = false;

seal.addEventListener("click", () => {

    if(opened) return;

    opened = true;

    seal.style.transform =
        "translate(-50%,-42%) scale(0.88) rotate(-8deg)";

    seal.style.opacity = ".92";

    envelope.style.transform =
        "translateY(-12px) scale(1.015)";

    setTimeout(()=>{

        document.body.classList.add("opening");

    },500);

});
