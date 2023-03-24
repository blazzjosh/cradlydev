<script context="module">
  export const metadata = {
    author: 'Josh Horsfall',
    date: 'Februrary 5, 2023',
    title: '5 Creative Ways to Use CSS Grid for Modern Web Design 🎨',
    description:"",
  }
</script>

CSS Grid is a powerful layout system that allows developers to create complex and responsive designs for the web. While CSS Grid is still relatively new, it has quickly become a popular choice for modern web design. In this blog post, we will explore 5 creative ways to use CSS Grid for modern web design, complete with code snippets.

## 1. Grid-Based Navigation

One way to use CSS Grid for modern web design is to create a grid-based navigation system. This approach allows for a more dynamic and interactive user experience. Here is an example code snippet:

```css
nav {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

nav a {
  text-align: center;
  color: #333;
  font-weight: bold;
  text-transform: uppercase;
  padding: 10px;
  border-radius: 5px;
  background-color: #eee;
}

nav a:hover {
  background-color: #333;
  color: #fff;
}
```

```html
<div class="nav">
  <a href="##" class="nav-item">Home</a>
  <a href="##" class="nav-item">About</a>
  <a href="##" class="nav-item">Services</a>
  <a href="##" class="nav-item">Contact</a>
</div>
```

This code creates a navigation menu with four columns using CSS Grid. The repeat() function is used to specify the number of columns, and the gap property is used to add spacing between the menu items. The :hover pseudo-class is used to change the background color and text color of the menu item when it is hovered over.

## 2 Image Gallery

Another creative way to use CSS Grid is to create an image gallery. This approach allows for a more organized and visually appealing display of images. Here is an example code snippet:

```css
.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 20px;
}

.gallery img {
  width: 100%;
  height: auto;
}
```

This code creates a gallery with an adaptive number of columns depending on the size of the viewport. The minmax() function is used to specify the minimum and maximum size of each column. The grid-gap property is used to add spacing between the images.


## 3 Pricing Tables

CSS Grid can also be used to create pricing tables. This approach allows for a more structured and organized display of pricing information. Here is an example code snippet:

```css
.pricing-table {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 20px;
}

.pricing-table .plan {
  background-color: #eee;
  padding: 20px;
  border-radius: 5px;
  text-align: center;
}

.pricing-table .plan h3 {
  margin-top: 0;
  font-size: 24px;
}

.pricing-table .plan .price {
  font-size: 36px;
  margin-bottom: 20px;
}

.pricing-table .plan ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.pricing-table .plan ul li {
  margin-bottom: 10px;
}

This code creates a pricing table with an adaptive number of columns depending on the size of the viewport. The minmax() function is used to specify the minimum and maximum size of each column. The grid-gap property is used to add spacing between the pricing plans. The ul and li elements are used to display the features of each plan.
4. Responsive Forms

CSS Grid can also be used to create responsive forms. This approach allows for a more flexible and dynamic form layout. Here is an example code snippet:

Firstcreations First
complete the code

css

form {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
}

form label {
  display: block;
  font-weight: bold;
  margin-bottom: 10px;
}

form input {
  display: block;
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
}

form button {
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  text-transform: uppercase;
  font-weight: bold;
  cursor: pointer;
}

@media screen and (max-width: 768px) {
  form {
    grid-template-columns: 1fr;
  }
}

This code creates a responsive form with two columns using CSS Grid. The grid-gap property is used to add spacing between the form elements. The @media rule is used to change the number of columns to one when the viewport width is less than 768px.
5. Footer

Finally, CSS Grid can be used to create a dynamic and responsive footer for your website. Here is an example code snippet:

css

footer {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;
}

footer .logo {
  grid-column: 1 / span 2;
}

footer .social {
  text-align: right;
}

footer .social a {
  display: inline-block;
  margin-left: 10px;
  color: #333;
}

@media screen and (max-width: 768px) {
  footer {
    grid-template-columns: 1fr;
  }

  footer .logo {
    grid-column: auto;
  }

  footer .social {
    text-align: center;
    margin-top: 20px;
  }
}

```
This code creates a footer with three columns using CSS Grid. The grid-column property is used to span two columns for the logo element. The @media rule is used to change the number of columns to one when the viewport width is less than 768px and center the social icons.
Conclusion

CSS Grid offers a wide range of possibilities for modern web design. With these 5 creative ways to use CSS Grid, you can take advantage of its power and flexibility to create dynamic and responsive layouts for your website.


## 4. Responsive Forms
CSS Grid can also be used to create responsive forms. This approach allows for a more flexible and dynamic form layout. Here is an example code snippet:

```css
form {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
}

form label {
  display: block;
  font-weight: bold;
  margin-bottom: 10px;
}

form input {
  display: block;
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
}

form button {
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  text-transform: uppercase;
  font-weight: bold;
  cursor: pointer;
}

@media screen and (max-width: 768px) {
  form {
    grid-template-columns: 1fr;
  }
}
```

This code creates a responsive form with two columns using CSS Grid. The grid-gap property is used to add spacing between the form elements. The @media rule is used to change the number of columns to one when the viewport width is less than 768px.

## 5. Footer

Finally, CSS Grid can be used to create a dynamic and responsive footer for your website. Here is an example code snippet:

```css
footer {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;
}

footer .logo {
  grid-column: 1 / span 2;
}

footer .social {
  text-align: right;
}

footer .social a {
  display: inline-block;
  margin-left: 10px;
  color: #333;
}

@media screen and (max-width: 768px) {
  footer {
    grid-template-columns: 1fr;
  }

  footer .logo {
    grid-column: auto;
  }

  footer .social {
    text-align: center;
    margin-top: 20px;
  }
}

```


This code creates a footer with three columns using CSS Grid. The grid-column property is used to span two columns for the logo element. The @media rule is used to change the number of columns to one when the viewport width is less than 768px and center the social icons.


## Conclusion
CSS Grid offers a wide range of possibilities for modern web design. With these 5 creative ways to use CSS Grid, you can take advantage of its power and flexibility to create dynamic and responsive layouts for your website.