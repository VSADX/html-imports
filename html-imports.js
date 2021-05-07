export function html_imports(doc = document, optional_function = () => {}) {
  const links = doc.querySelectorAll("a[rel='text/html'], link[rel='text/html']")
  const actions = []
  links.forEach(link => 
    actions.push(fetch(link.href)
      .then(response => response.text())
      .then(textHTML => {
        // must use innerHTMl + firstElementChild + replaceWith + const html 
        // to make `html` the new element not the old `<link>` element
        link.innerHTML = textHTML 
        const html = link.firstElementChild
        link.replaceWith(html)
        return [html, link.href] })
      .then(([el, url]) => optional_function ? optional_function(el, url) : null)
    )
  )
  Promise.all(actions)
}
html_imports()
