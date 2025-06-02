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
function update_all() {
    change_role()
}