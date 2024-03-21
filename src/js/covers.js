let isAnimationAdded = false;
    

  export  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.bottom > 0 &&
        rect.right > 0 &&
        rect.left < (window.innerWidth || document.documentElement.clientWidth) &&
        rect.top < (window.innerHeight || document.documentElement.clientHeight)
    );
}

export function addKeyframesAnimation() {
    if (!isAnimationAdded) {
        const style = document.createElement('style');
        style.innerHTML = `
            @keyframes marqueeLine {
                0% { transform: translateX(0); }
                100% { transform: translateX(-100%); }
            }
        `;
        document.head.appendChild(style);
        isAnimationAdded = true;
    }
}


