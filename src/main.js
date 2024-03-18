const covers = document.querySelector(".section.covers")
window.visualViewport.addEventListener("scroll",(event)=> {
    // console.log(event)
    // console.log(covers.getBoundingClientRect())
    isElementInViewport(covers)
});

function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    console.log(visualViewport)
    console.log(rect.top)
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || covers.clientHeight) &&
        rect.right <= (window.innerWidth || covers.clientWidth)
    );
}

