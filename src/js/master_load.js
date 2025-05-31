let element_observer = new IntersectionObserver((element_list) => {
    element_list.forEach((element) => {
        if (element.isIntersecting) {
            element_observer.unobserve(element.target)
            element.target.className = ""
            setTimeout(() => {
                element.target.style = ""
            }, 1000);
        }
    })
})
document.querySelectorAll(".fade_in").forEach(element => {
    element_observer.observe(element)
    element.style.transition = "1s ease-out"
});

