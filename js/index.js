// console.log("javascript running");
const toDivResources = document.querySelector("#resources");
const toShowResources = document.querySelector("#show-resources");

toShowResources.addEventListener("click", onShowResources);
function onShowResources(e) {
    e.preventDefault();
    toDivResources.classList.remove("d-none");
}

toDivResources.addEventListener("mouseover", onHoverResource);
function onHoverResource(e) {
    e.target.classList.add("fw-bold");    
}

toDivResources.addEventListener("mouseout", onStopHoverResource);
function onStopHoverResource(e) {    
    e.target.classList.remove("fw-bold");
}

// toDivResources.addEventListener(, onHandlerFunction);


