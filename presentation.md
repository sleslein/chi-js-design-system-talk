---
marp: true
theme: presentation-theme
_class: lead
paginate: true
backgroundColor: #fff
backgroundImage: url('https://marp.app/assets/hero-background.svg')
html: true
---

# Sharing the Good News

About Design Systems

<!-- 

OPENING NOTE!  I'd love to chat and answer questions.  I'd love to make this very interactive But I am extremely mindful of there are more speakers left, and a big reason we come here is to chat and network with others.  So, I might take a couple questions at the end if time allows, BUT please to come find me after and I can answer any questions you have and we can get to know each other.

-->

---

# About Me

Personal Stuff:
- Meet the Fam!
- Community & Church
- Archery
- Blood Bowl

![bg right](IMG_3296.JPG)

---

# About Me: Professional Stuff

- **Education:** 2004 Iowa State University Grad. w/ B.A. Info. Systems 
- **Current Role:** Lead Software Engineer @ FreeWheel
- **Experience:** Nearly 20 Years as “Full-Stack” Developer

<!-- _class: lead -->
*... So yea ...*

---

<!-- _class: lead -->
# I am **NOT** a designer!
I am a **developer**!  

*Just like you!*

<!-- 
 I even created this presentation with Markdown
 TODO: Elaborate on why I'm here:  
  - GOAL: Reveal to the lay developer the basics of design systems.  
  Narrative: Reading Refactoring 
  Share about Refactoring UI 
 -->

---

<!-- _class: lead -->
> **Systematize everything!** The more systems you have in place, the faster you’ll be able to work and the less you’ll second guess your own decisions.

*– Refactoring UI*

---

# What is a Design System?

<!-- _class: lead -->
A design system is a box of tools used to build consistent user experiences.  The tools include well defined **foundations**, **components**, and **patterns**.

---

# Foundations

- Typography 
- Colors
- Spacing
- Icons/Logos
- Grid System/Layouts

<!-- 
    Note: We will focus on Typography, colors, and spacing.
 -->

---

## Foundations: Constraints 

<!-- _class: lead -->
> When you’re designing without constraints, decision-making is torture because there’s always going to be more than one right choice. 

*– Refactoring UI*

---

## Foundations: Practical Application

<!-- _class: lead -->
Foundational constraints are often best expressed as CSS variables and utility classes.

---

## Foundations: Typography

<div class='grid-2-col'>
<div>
<br>
    <p class="font-xs">Extra Small Text</p>
    <p class="font-sm">Small Text</p>
    <p class="font-md">Medium/Default Text</p>
    <p class="font-lg">Large Text</p>
    <p class="font-xl">Extra Large Text</p>
</div>
<div>

```css
:root {
    --font-xs: .5rem;
    --font-sm: .75rem;
    --font-md: 1rem;
    --font-lg: 1.5rem;
    --font-xl: 2rem;
}

.font-lg {
    font-size: var(--font-lg);
}
```
```html
<p class="font-md">Medium/Default Text</p>
<p class="font-lg">Large Text</p>
```

</div>
</div>

---
<!-- _class: lead -->
## Foundations: Colors

You need **MORE COLORS** than you think! 

---

## Foundations: Primary Shades

<div class='grid-2-col'>
    <div>
        <div class="color-demo bg-color-primary-50">primary 50</div>
        <div class="color-demo bg-color-primary-100">primary 100</div>
        <div class="color-demo bg-color-primary-200">primary 200</div>
        <div class="color-demo bg-color-primary-300 color-white">primary 300</div>
        <div class="color-demo bg-color-primary-400 color-white">primary 400</div>
        <div class="color-demo bg-color-primary-500 color-white">primary 500</div>
    </div>
    <div>

```css
:root {
    --color-primary-50: #f0eef5;
    --color-primary-100: #c0b3d1;
    /* other colors in the scale */
    --color-primary-400: #2d0066; 
    --color-primary-500: #1c003f;
}

.bg-color-primary-400 {
    background-color: var(--color-primary-400);
}
```
```html
<div class="bg-color-primary-400 color-white">
    primary 400
</div>
```

</div>
</div>

---


## Foundations: Grey Shades

<div class='grid-2-col'>
<div>
<div class="color-demo bg-color-gray-100">gray 100</div>
<div class="color-demo bg-color-gray-200">gray 200</div>
<div class="color-demo bg-color-gray-300">gray 300</div>
<div class="color-demo bg-color-gray-400">gray 400</div>
<div class="color-demo bg-color-gray-500">gray 500</div>
<div class="color-demo bg-color-gray-600 color-white">gray 600</div>
<div class="color-demo bg-color-gray-700 color-white">gray 700</div>
<div class="color-demo bg-color-gray-800 color-white">gray 800</div>
<div class="color-demo bg-color-gray-900 color-white">gray 900</div>
</div>
<div>

```css
:root {
    --color-gray-100: #f7f7f7;
    --color-gray-200: #eee;
    --color-gray-300: #e4e4e4;
    /* other gray scale colors */
}

.bg-color-gray-400 {
    background-color: var(--color-gray-400);
}

```
```html
<div class="bg-color-gray-400">
    gray 400
</div>
```
</div>
</div>

---

## Foundations: Accent Shades

<div class='grid-2-col'>
<div>
    <div class="color-demo bg-color-accent-200">accent 200</div>
    <div class="color-demo bg-color-accent-400 color-white">accent 400</div>
    <div class="color-demo bg-color-accent-600 color-white">accent 600</div>
</div>
<div>

```css
:root {
    --color-accent-200: #e3eaf7;
    --color-accent-400: #1b50bb;
    --color-accent-600: #103070;
}

.bg-color-accent-400 {
    background-color: var(--color-accent-400);
}
```

```html
<div class="bg-color-accent-400 color-white">
    accent 400
</div>
``` 

</div>
</div>

---

## Foundations: Spacing

<div class='grid-2-col'>
    <div>
    <div class='spacing-demo sm'></div> Small Spacing - 8px <br> 
    <div class='spacing-demo md'></div> Medium/Default Spacing - 16px<br> 
    <div class='spacing-demo lg'></div> Large Spacing - 24px<br> 
    <div class='spacing-demo xl'></div> XL Spacing - 32px<br> 
    <div class='spacing-demo -2xl'></div> 2 XL Spacing - 64px<br> 
    <div class='spacing-demo -3xl'></div> 3 XL Spacing - 128px<br> 
    </div>

<div>

```css
:root {
    --spacing-sm: 8px;
    --spacing-md: 16px;
    --spacing-lg: 24px;
    --spacing-xl: 32px;
    --spacing-2xl: 64px;
    --spacing-3xl: 128px;
}
```

</div>
</div>

---

<!-- _class: lead -->
# Constraints and **Designers** are your friends

<!-- 

Tell story about collaborating with designers on discrepancies.  

Be sure to mention how Kori will probably be elaborating on this topic next.

-->

---

# Components

Lego bricks used to compose the user experience.

Are created from the design system's **foundations**. 

---

## Component Example: Button

<br>
<div class='grid-3-col'>
    <button class="primary">Primary</button>
    <button class="secondary">Secondary</button>
    <button class="">Default</button>
</div>

<div class='grid-2-col'>

```html
<button class="primary">
    Primary
</button>
<button class="secondary">
    Secondary
</button>
<button>
    Default
</button>
```

```css
button {
    display:flex;
    align-items: center;
    justify-content: center;
    font-size: var(--font-md); 
    padding: var(--spacing-md) var(--spacing-2xl);
    border-radius: 16px;
    border: 1px solid var(--color-gray-700);
    cursor: pointer;
    background-color: var(--color-gray-400);
    height: var(--dimension-md);
    flex: 0 0;
}
```

</div>

---

## Component Example: Inputs

<div class='grid-2-col'>
    <div>
        <br>
        <label>Text Input: <input type="text" /></label>
        <br>
        <label>Checkbox: <input type="checkbox" /></label>
    </div>
    <div>

```html
<label>Text Input: <input type="text" /></label>
<label>Checkbox: <input type="checkbox" /></label>
```
```css
label {
    display: flex;
    gap: var(--spacing-md);
    align-items: center;
}

input[type='text'] {
    height: var(--dimension-md);
    border-radius: 4px;
    border: 1px solid var(--color-gray-600);
    font-size: var(--font-sm);
    padding: 0 var(--spacing-md);
    flex: 1;
}
```

    </div>
</div>

---

## Component Example: Card

<div class='grid-2-col'>
<div>
    <br>
    <div class="card">
        <h1>Title</h1>
        Some content
    </div>
</div>
<div>

```html
<div class="card">
    <h1>Title</h1>
    Some content
</div>
```
```css
.card {
    background-color: var(--color-white);
    border-radius: 16px;
    padding: var(--spacing-xl);

.card > h1 {
    font-size: var(--font-lg);
    color: var(--color-primary-300);
    margin-bottom: var(--spacing-2xl);
}
```
</div>
</div>

---

<!-- _class: lead -->
# What are Patterns?

Reusable combination of the design system's **components** that are composed using a layout that adheres to the design system's **foundations**.

---

## Pattern Example: Form
<br>
<div class='card'>
    <h1>Sign-up Form</h1>
    <div class="form">
        <label>First Name: <input type="text" /></label>
        <label>Last Name: <input type="text" /></label>
        <label class="two-col">Email Address: <input type="text" /></label>
        <label class="two-col">Subscribe to my newsletter: <input type='checkbox' /></label>
        <button class="primary">Sign Me Up!</button>
    </div>
</div>

---

## Pattern Example: Form

```html
<style>
.form {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--spacing-lg);
}
</style>

<div class='card'>
    <h1>Sign-up Form</h1>
    <div class="form">
        <label>First Name: <input type="text" /></label>
        <label>Last Name: <input type="text" /></label>
        <label class="two-col">Email Address: <input type="text" /></label>
        <label class="two-col">Subscribe to my newsletter: <input type='checkbox' /></label>
        <button class="primary">Sign Me Up!</button>
    </div>
</div>
```

---

# Wrap Up!

- Constraints are good!
- Design System Basics: **Foundations**, **Components**, **Patterns**
- Designers are your friend!