document.querySelectorAll("a[rel='text/html']")
  .forEach(async (link) => 
     link.outerHTML = await (await fetch(link.href)).text())
