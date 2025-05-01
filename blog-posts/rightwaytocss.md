---
title: Is There a Right Way To CSS?
date: 2022-02-06
description: BEM vs Tailwind
featuredImage: /images/featured/css.jpg
---

To CSS means to give life to a webpage. As a developer, I write CSS to give html elements their color, shape, placement on the page, and even some functionality. In addition to semantic html markup, CSS is essential to give the user a great experience accessing the webpage. Because of its importance, we need to give some thought as to how exactly we will utilize CSS in a project. Especially because a lot of CSS can get messy.

Sometimes my CSS doesn't seem to be doing what I want it to. It is usually because of specificity errors due to how I referenced the html element. A reference by ID has a greater specificity than a reference by class, which is greater than a reference by type. It gets more complicated, so you can check out how specificity is calculated [here](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity).

To dodge having to deal with the cascade or specificity, we will explore two different ways to approach CSS. The first is a naming convention called BEM, which gives developers a way to organize and modularize their CSS. The second is a CSS library called Tailwind, which is made up of pre-defined utility classes. You will learn that both are useful, and one is not better than the other. It is essentially up to the developer to choose or even use [both](https://aem.news/bem-tailwind/)!

## BEM

BEM stands for Block Element Modifier. It can also be seen written out like this:

> Block\_\_Element--Modifier

This acronym is a naming convention that describes a way to organize and name html elements with class names. It encourages the developer to split their html code into **blocks**, which represent a chunk of markup that can stand alone (think: navbar, body, header, card). Within those blocks are **elements** that are tied to their parent block and cannot stand on their own. Finally, **modifiers** are classes that change a block or element's appearance or behavior. A modifier cannot stand alone and must be tied to an element or a block. To understand this hierarchy, here is an example of a block of html code using the BEM naming convention.

```html
<div class="nav nav--dark">
    <img
        class="nav__logo"
        src="file.jpg"
        alt="a sitting black cavapoo with its tongue out"
    />
    <ul class="nav__menu nav__menu--dark">
        <li class="nav__menu-item">
            <a class="nav__menu-item-link" href="#About">About</a>
        </li>
        <li class="nav__menu-item">
            <a class="nav__menu-item-link" href="#Contact">Contact</a>
        </li>
    </ul>
</div>
```

This block represents a simple navigation bar, which we give a class name of "nav". Within the nav are elements, which in this case is the logo, the menu items, and the links. When writing the class name, element names are separated by the block name with two underscores. If the block, element, or modifier is more than one word, they are separated by a single dash. The modifier is separated from the element or the block name with two dashes.

There are two modifiers in the code above, which is included for when the page is in dark mode. It applies just to the nav and nav menu, since the logo is not affected in this case. The modifier describes how the element changes, so adding "--dark" applies well here.

#### BEM Benefits

This naming convention makes it so the class name describes the html very well. It is also forces the developer to organize their code in a modular style, which lets them reuse blocks of html in other projects, since they are standalone entities. In addition, sticking to BEM means only referencing classes in the CSS, so specificity problems are never an issue. It is common for developers to split up their CSS in to separate files for each block. This works because with BEM, a block does not depend on other blocks.

#### BEM Downsides

A lot of developers consider thinking of class names as a tedious process, and BEM naming conventions do take a bit to get used to. When working with a large team and a large project, if everyone isn't solid on BEM naming conventions, then there could be issues. Stray elements without their parent blocks, class names that don't make sense, or class names from unrelated elements copied and pasted elsewhere, are some issues that can arise. It might not be worth it if the whole team isn't on the same page. This is where utility classes come in handy.

## Tailwind CSS

Tailwind is a library of utility classes that developers can use in their projects. A utility class is a pre-made class that represents a single style to apply to an element. This means an html element will have many classes on it, each contributing to the way it looks and behaves. Not a single line of CSS code needs to be written because it is pre-written for you. Here is an example of Tailwind used in some html code.

```html
<button
    class="px-6 h-12 uppercase font-semibold border-2 border-black bg-blue-300 text-black"
    type="submit"
>
    Buy now
</button>
```

It may look a little gross when you see the long line of classes. It certainly put me off a little bit. But, these class names are concise and clear in what they do. You can even have an idea of what the element looks like by skimming through the class names, but only after you've used and somewhat memorized them. Every class name and function is on Tailwind's [docs](https://tailwindcss.com/docs/), so there is no mistake on what each does.

In the above example, the first class is "px-6", which means that this button element will have 6 pixels of padding on it's x-axis, or left and right side. The next class, "h-12" means that the button is 3 rem units tall.

Tailwind follows a kind of style guide. All box sizing and font sizes are written with rem units, meaning they are sized in relation to the root font size. It is usually 16px unless otherwise specified. In addition, other CSS functionality like hover, active, and focus states, as well as media queries are included as utility classes in pretty intuitive ways.

#### Tailwind Benefits

Like BEM, only classes are used so the developer will never run into specificity issues. Tailwind's documentation is thorough and perfect for teams, since the rules are online for everyone to see and use. It also removes the need to think of class names, and it helps make sure that styles stay consistent throughout the project. Tailwind works really well with frameworks like React, since Tailwind can be written in the jsx, and apply to the component every time it is reused.

#### Tailwind Downsides

It can take a while to memorize the class names, so having the docs on an open window is required for a bit. Some developers may want more freedom when designing and think Tailwind's classes are too constrictive. In addition, Tailwind may not be able to control all CSS properties, especially very new ones. But, as utility classes are becoming more popular lately, the Tailwind developers are probably eager to keep up with the latest new CSS.

Overall, there is nothing very bad about either of these CSS methodologies. Some might prefer one over the other for team projects or for use with certain frameworks. Once again, it is all really up to the developer. There is only one way to decide if you like it or not, and that is to use it.

image attribution: Photo by [Maik Jonietz](https://unsplash.com/@der_maik_?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/s/photos/css-codeutm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)
