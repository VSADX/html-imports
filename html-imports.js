export function html_imports(doc = document, optional_function = () => {}) {
  const links = document.querySelectorAll("a[rel='text/html'], link[rel='text/html']")
  const actions = []
  links.forEach(link => 
    actions.push(fetch(link.href)
      .then(response => response.text())
      .then(textHTML => link.outerHTML = textHTML)
      .then(() => optional_function ? optional_function(link) : null)
    )
  )
  Promise.all(actions)
}
html_imports()
