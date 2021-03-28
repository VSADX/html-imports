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
