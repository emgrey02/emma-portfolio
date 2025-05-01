---
title: Smooth Web Animations, Guaranteed.
date: 2022-03-20
description: How to create smooth web animations
featuredImage: /images/featured/nathan-anderson-zjoqmoowmgs-unsplash.jpg
---

# Smooth Web Animations, Guaranteed.

In order to include animations on a web page, one should be aware of how they will perform. If elements end up stuttering or glitching, then it will negatively impact user experience and detract from your web page. This phenomenon is called [jank](http://jankfree.org/). We don't like jank.

# What Causes Jank?

When the browser displays a page to the user, we are technically looking at an animation. Each second, sixty images flash before our eyes.

These bitmap images are also called **frames**. Browsers have a frame rate of sixty frames per second (60 fps). In addition, most have a refresh rate of sixty times per second (60 Hz).

This lets the browser react quickly to user interactions or create smooth animations.

It also places a constraint on the browser to update within a certain time limit, or else performance will suffer.

The browser only has so much time to generate a new frame. Since the browser displays sixty frames per second, we can divide a second into sixty even parts, which is 16.7 milliseconds. That's pretty quick.

If the browser cannot draw the frame fast enough and it is not finished within 16.7 ms, then frames will skipped or dropped. During that time, the browser won't be able to respond effectively to the user. It also causes janky animations.

# Rendering Waterfall

Even though the browser can produce sixty frames per second, it doesn't mean it does. If a change isn't made then the browser will not generate a new frame. The current one will stay.

When there is a change - like some kind of interaction from the user, an animation, or some javascript - the browser goes through a sequence of steps in response called the **rendering waterfall**.

1. JavaScript Function Call
2. Recalculate Style
3. Layout/Reflow
4. Paint
5. Composition

If the browser doesn't need to go through every step of the rendering waterfall, it won't.

Each step requires time, so if we are paying attention to web performance, it is important to be aware of what step in the waterfall is triggered by certain actions.

It might help to understand a little bit about what each step in the waterfall does.

## 1. JavaScript Function Call

If something in your javascript interacts with the DOM or CSSOM, like adding or removing classes when the user clicks a button, it triggers this step in the waterfall. The browser runs the javascript.

## 2. Recalculate Style

If the styles for any elements have changed, then the browser needs to recalculate them and apply the changes to the final computed styles.

## 3. Layout / Reflow

If the position or geometry of any elements have changed, according to the computed styles, then the browser figures them out. If one element impacts other elements in its movement, then those changes to other elements need to be figured out as well.

## 4. Paint

Now the browser can prepare to paint all the elements onto the web page since it has the layout and computed styles ready.

The browser's renderer ([whichever one it is](https://www.browserstack.com/guide/browser-rendering-engine)) creates an order in which to draw the elements onto the screen. Also provided is information on how the elements should be **layered**, which will then be interpreted by the **compositor**.

Each layer is turned into a separate bitmap image.

## 5. Composition

Once the compositor receives information from the browser's renderer, it can take the layers and combine them all into one image, creating a new frame.

For more information about these steps, you can check out this MDN article about the [Waterfall](https://developer.mozilla.org/en-US/docs/Tools/Performance/Waterfall).

# Dev Tools

We can see the Waterfall for a webpage in the dev tools for most browsers. There you can see what steps are triggered and when, and how long each step occurs. So, if you are ever in doubt as to what user interaction triggers what step, dev tools will tell you the answer.

If you are interested, this MDN article called [Animating CSS properties](https://developer.mozilla.org/en-US/docs/Tools/Performance/Scenarios/Animating_CSS_properties) guides you through using dev tools' performance tool to analyze the performance of an animation.

# Animations

For animations in particular, there are ways to avoid slow performance or jank. It has to do directly with what part of the rendering waterfall the animation triggers.

For starters, CSS animations don't need any javascript to work. If your animations are done only in your CSS then the browser can skip that first step of running javascript.

Some CSS property changes will affect the layout of the web page and cause a reflow. These are properties that alter an element's position or geometry, like `width`, `margin`, `top`, `justify-content`. You'll want to avoid these when you can, since the layout change may affect other elements as well.

Other CSS property changes will not affect the layout and will only need to be repainted, like with `opacity` or `color`. These properties do not change the size or position of any elements, so they are less performance-heavy. In addition, you can keep the painting that has to be done to a minimum by choosing simple colors rather than intricate gradients or shadows.

The ultimate CSS property change that will not affect layout or painting is the `transform` property. Transforms are automatically executed on a separate layer, and the compositor can handle it itself. Pretty neat, right?

A lot of what you _could_ do with performance-heavy properties like `width` can be done instead with a `transform`.

Here is an example of a performance-heavy way to scale a square. The animation changes the height and width property of the square.

<figure>

<iframe height="300" style="width: 100%;" scrolling="no" title="Untitled" src="https://codepen.io/emgrey02/embed/ExoybmZ?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/emgrey02/pen/ExoybmZ">
  Untitled</a> by Emma Grey (<a href="https://codepen.io/emgrey02">@emgrey02</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>
<figcaption>Performance-Heavy Animation</figcaption>

</figure>

Here is an example of a fast performing animation that also scales a square. Instead, the animation changes the transform property using the scale function.

<figure>

<iframe height="300" style="width: 100%;" scrolling="no" title="cheap animation" src="https://codepen.io/emgrey02/embed/xxpOpOz?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/emgrey02/pen/xxpOpOz">
  cheap animation</a> by Emma Grey (<a href="https://codepen.io/emgrey02">@emgrey02</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>
<figcaption>Fast Performing Animation</figcaption>

</figure>

You might notice how the change in width and height changes the layout of the page and actually causes it to increase its size to fit the square. Rather with the change in the transform property, the page is already set at an appropriate height and the browser does not have to spend energy increasing the size of the page.

To improve your understanding, open each codepen in a separate tab and run dev tools. By looking at the rendering waterfall, you will see the difference in performance between the two squares.

With this knowledge, you will be able to optimize the performance of your CSS animations and never cause janks again.
