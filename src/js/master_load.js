let wait_dict = {
    "include": false
}
let role_element = document.querySelector("#roles")
let role_list = [
    "machine learning engineer",
    "full stack developer",
    "unity developer",
    "3d artist"
]
let role_i = 0
function change_role() {
    role_element.innerHTML = `A ${role_list[role_i]}`
    role_i = (role_i + 1) % role_list.length
    setTimeout(() => {
        change_role()
    }, 1000);
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
    change_role()
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