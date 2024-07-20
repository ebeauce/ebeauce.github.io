fetch('./nav.html')
.then(res => res.text())
.then(text => {
    let oldelem = document.querySelector("script#replace_with_navbar");
    // newelem create a new element with division of class menu
    let newelem = document.createElement("div");
    newelem.setAttribute("class","menu");
    newelem.innerHTML = text;
    oldelem.parentNode.replaceChild(newelem,oldelem);
})