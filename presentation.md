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

---

<div class="card">

# About Me

Personal Stuff:
- Meet the Fam!
- Community & Church
- Archery
- Blood Bowl
</div>

![bg right](IMG_3296.JPG)

---

<div class="card">

# About Me: Profesional Stuff
- **Education:** 2004 Iowa State University Grad. w/ B.A. Info. Systems 
- **Current Role:** Lead Software Engineer @ FreeWheel
- **Experience:** Nearly 20 Years as “Full-Stack” Developer

<!-- _class: lead -->
*... Want to know another interesting fact?*

</div>

---

<!-- _class: lead -->

# I'm **NOT** a designer!
I'm just a **developer**!  

*Just like you!*

<!-- 
 I even created this presntation with Markdown
 TODO: Elaborate on why I'm here:  
  - GOAL: Reveal to the lay developer the basics of design systems.  
  Narative: Reading Refacotring 
  Share about Refacorinng UI 
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

<div class="card">

- Typography 
- Colors
- Spacing
- Icons/Logos
- Grid System/Layouts
</div>

<!-- 
    Note: We will focus on Typography, colors, and spacing.
 -->

---

## Foundations: Constraints 

<!-- _class: lead -->
> When you’re designing without constraints, decision-making is torture because there’s always going to be more than one right choice. 

*– Refactoring UI*

---

## Foundations: Typography

<span class="font-xs">Extra Small Text</span>
<span class="font-sm">Small Text</span>
<span class="font-md">Medium/Default Text</span>
<span class="font-lg">Large Text</span>
<span class="font-xl">Extra Large Text</span>

---
<!-- _class: lead -->
## Foundations: Colors

You need **more colors** than you think! 

---

## Foundations: Primary Shades

<div class="color-demo bg-color-primary-50">primary 50</div>
<div class="color-demo bg-color-primary-100">primary 100</div>
<div class="color-demo bg-color-primary-200">primary 200</div>
<div class="color-demo bg-color-primary-300 color-white">primary 300</div>
<div class="color-demo bg-color-primary-400 color-white">primary 400</div>
<div class="color-demo bg-color-primary-500 color-white">primary 500</div>

---


## Foundations: Grey Shades

<div class="color-demo bg-color-gray-100">gray 100</div>
<div class="color-demo bg-color-gray-200">gray 200</div>
<div class="color-demo bg-color-gray-300">gray 300</div>
<div class="color-demo bg-color-gray-400">gray 400</div>
<div class="color-demo bg-color-gray-500">gray 500</div>
<div class="color-demo bg-color-gray-600 color-white">gray 600</div>
<div class="color-demo bg-color-gray-700 color-white">gray 700</div>
<div class="color-demo bg-color-gray-800 color-white">gray 800</div>
<div class="color-demo bg-color-gray-900 color-white">gray 900</div>

---

## Foundations: Accent Shades

<br>
<div class="color-demo bg-color-accent-200">accent 200</div>
<div class="color-demo bg-color-accent-400 color-white">accent 400</div>
<div class="color-demo bg-color-accent-600 color-white">accent 600</div>

---

## Foundations: Spacing

<br>

<div class='spacing-demo sm'></div> Small Spacing - 8px <br> 
<div class='spacing-demo md'></div> Medium/Default Spacing - 16px<br> 
<div class='spacing-demo lg'></div> Large Spacing - 24px<br> 
<div class='spacing-demo xl'></div> XL Spacing - 32px<br> 
<div class='spacing-demo -2xl'></div> 2 XL Spacing - 64px<br> 
<div class='spacing-demo -3xl'></div> 3 XL Spacing - 128px<br> 

---

## Foundations: Practical Application

- CSS Variables
- Utility Classes

---

# Components

Are created from the design system's _**foundations**_. 

Lego bricks used to compose the user experience.

---

## Component Example: Button

<button class="primary">Primary Button</button><br>
<button class="secondary">Secondary Button</button> <br>
<button class="">Default Button</button>

---

## Component Example: Inputs

<label>Text Input: <input type="text" /></label>
<label>Checkbox: <input type="checkbox" /></label>

---

## Commponent Example: Card
<br>
<div class="card">
    <h1>Title</h1>
    Some content
</div>

---

<!-- _class: lead -->
# What are Patterns?

Resuable combination of the design system's _**components**_ that are composed using a layout that adheres to the design system's _**foundations**_.

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

# Conclusion

Designs systems are constraints that allow developers to build consistent user expereinces across applications.

These tools enable us to work smarter... not harder