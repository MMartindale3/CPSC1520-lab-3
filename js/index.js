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

toDivResources.addEventListener("click", onClickResource);
function onClickResource(e) {
    e.target.classList.add("fst-italic"); 
}

toDivResources.addEventListener("mouseout", onLeaveResource);
function onLeaveResource(e) {
    e.target.classList.remove("fst-italic"); 
}
