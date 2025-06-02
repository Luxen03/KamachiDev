let wait_dict = {
    "include": false
}

function after_load() {
    console.log("After load")
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
    document.querySelector("#loader").style.display = "none"
    document.querySelector("#content").style.display = "block"
}

function update_wait_dict(module) {
    wait_dict[module] = true
    for (const [key, value] of Object.entries(wait_dict)) {
        console.log(`module ${key} : ${value}`)
        if (!value) return
    }
    after_load()
}

async function before_load() {
    const includes = document.querySelectorAll("include");
    await Promise.all(Array.from(includes).map(async (element) => {
        const src = element.getAttribute("src");
        if (src) {
            const res = await fetch(src);
            const text = await res.text();
            element.outerHTML = text;
        }
    }));
    update_wait_dict("include")
}

before_load()