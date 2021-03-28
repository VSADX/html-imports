export function html_imports() {
const links = document.querySelectorAll("a[rel='text/html'], link[rel='text/html']")
const actions = []
links.forEach(link => 
  actions.push(fetch(link.href)
    .then(response => response.text())
    .then(textHTML => link.outerHTML = textHTML)))
Promise.all(actions)
}
html_imports()
