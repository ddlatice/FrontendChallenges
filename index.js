const sharetab = document.getElementById("sharetab");
const sharebutton = document.getElementById("sharebutton");
const path = document.getElementById("path");

sharebutton.addEventListener("click", () => {
  if (sharetab.style.visibility === "hidden") {
    sharetab.style.visibility = "visible";
    sharebutton.classList.remove("button-div");
    sharebutton.classList.add("button-recolor");
  } else {
    sharetab.style.visibility = "hidden";
    sharebutton.classList.add("button-div");
    sharebutton.classList.remove("button-recolor");
  }
});
