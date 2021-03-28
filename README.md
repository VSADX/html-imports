# Include HTML from other HTML files
🌌 **What is an HTML import?**  
It's a `<link rel="text/html" href="some_url">` element.  
  
🌄 **What does it do**  
Your `<link>` will get replaced by the HTML (CSS too) at the url inside `href=""`  
  
🌆 **How does it work?**  
The JavaScript library will grab all `<link>` element that include `rel="text/html"`. 
Then it downloads the content from the page at the link. Finally, it replaces your 
`<link>` using the HTML or CSS downloaded.  
  
## Examples
### The basics
1. Here's how you use HTML imports, there are just two files here (`header.html`, `about-us.html`).
2. `header.html` is going to get imported into `about-us.html`
3. Your main page needs a normal `<body>` element, but don't put one in your mini-pages.
> header.html
```html
<header>
  <h1> Wow brand! </h1>
</header>
```
> about-us.html
```html
<body>
  <link rel="text/html" href="./header.html">
  <div>
    Welcome to our page, see our brand above! <br>
    We are so professional
  </div>
</body>
```
