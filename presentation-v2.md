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
Comment: Hi!  I'm Shea Leslein, and I;m here to share the good news about design systems with you!

OPENING NOTE!:  I'd love to make this very interactive. But I am extremely mindful of there are 3 more speakers after me, and a big reason we all come here is to chat and network with others.  So I'm planning to field 0 questions until I conclude my schpeel.  But if there is time left, I can field a couple.  Regardless, I'd love meeting you all after so feel free to come see with any questions!

Comment:  Lets get Started!

-->

---

# About Me

<!-- 
Fam: Married 16 years, 4 kids, 15, 14, 12, 10
Community is important.  JS Meet-up has been wonderful, community of people at church.  
    - The title of this talk as actually inspired by something my Pastor said during a sermon.  Please don't tell him I day dream during his sermons.
Hobbies: Archery, Blood Bowl.
 -->
 
Personal Stuff:
- Meet the Fam!
- Community & Church
- Hobbies

![bg right](IMG_3296.JPG)

---

# About Me: Professional Stuff

<!--
Education: I fully recognize that most of you care where I graduated from 20 years ago.  But I;m a proud Iowan! segways to experience
Experience: I've been a full stack developer for 20 years
Current Role: with Freewheel for almost 14 years. Currently working along side design team in providing a design system to FreeWheel
-->

- **Education:** 2004 Iowa State University Grad. w/ B.A. Info. Systems 
- **Experience:** Nearly 20 Years as “Full-Stack” Developer
- **Current Role:** Lead Software Engineer @ FreeWheel

<!-- _class: lead -->
*... So yea ...*

---

<!-- 
 # I'm not a designer

Question:  Who here likes markdown?  Yup, met.  I created this whole presentation with markdown and a Node package called "marp".  Took the plain text mark up I love and converted to a nice HTML slide show.

Comment: I'm pretty much color blind.  Not literally, figuratively.  If you came thinking I could teach you good some good design tips... You are going to be disappointed!
  ? Steve Martin suit/wardrobe joke

Question:  So, if I'm not a designer.  And I am not good at design!  Why am I here?  

Narrative:  This story begins with a self aware understanding that I am not a designer.  I was working on web related side project for a church thing. I slapped the key board and started building a thing.  I got to a decent point... looked at what I had and was like.... wow.... this does not look real good.  I had recently started listening to old episodes Full Stack Radio, a podcast by Adam Wathan.  He's the creator of TailwindCSS.  I had noted that a few times he had mentioned an ebook he wrote, "Refactoring UI".  It was touted as a design book for developers.  After reading the free chapters, and dropping $150 on it.  I can say without hesitation, it delivers. 

The book outlines some many great things, and I'll cover some of the main points today. 


-->
<!-- _class: lead -->
# I am **NOT** a designer!
I am a **developer**!  

*Just like you!*

---

<!--
# Systemize everything

Comment:  Here's a main point from Refactoring UI
Read: It.

Narrative: Reading this was a formative moment for me.  When I read this disparate ideas and things I had been hearing started clicking together.  I had this revelation... wait.... design is a system?~!?!?  Then, wait!?!? We have a design system at work!  

Design systems are a thing!  I have to learn about and understand these things for me.  When I read this disparate ideas and things I had been hearing started clicking together.  I had this revalation... wait.... design is a system?~!?!?  Then, wait!?!? We have a design system at work!  

Design systems are a thing!  I have to learn about and understand these things!

So, here I stand be before you today.... with something to share!
-->

<!-- _class: lead -->
> **Systematize everything!** The more systems you have in place, the faster you’ll be able to work and the less you’ll second guess your own decisions.

*– Refactoring UI*

---

<!-- 
# What is a design system

Comment:  This definition is from my good friend Nath.  She is a designer.  She leads the design system efforts at FreeWheel.  She's awesome!  Ask Nath to wave.  If you want to learn about how to be a better designer talk to her!

Comment:  This definition includes more than just the what a design system is... it also answers the important "WHY" design systems questions.  Why? Because it leads to consistent user experiences.  

Comment:  But consistent UX isn't the only benefit.  Design systems have amazing positive impact on developers to!  As you'll see, a design system can turn allow any old schlub like me to implement good designs very quickly!  

So, let's start digging into the 3 aspects of a design system.
-->

# What is a Design System?

<!-- _class: lead -->
A design system is a box of tools used to build consistent user experiences.  The tools include well defined **foundations**, **components**, and **patterns**.


---

<!-- 
# Foundations 
Comment: These are the foundations of a design system. Color is pretty self explanatory.  Typography refers to the text elements of your UI; the font and size of your text. Spacing refers to the white space elements.  In CSS terms, thing padding, margins, flex/grid gaps etc. Any system of even a small significance is going to logos, and icons too. 

Comment:  One chief goal of the foundations is to ensure visual consistency across the whole system.  Design system and application system.  

Note: We will focus on Typography, colors, and spacing.

Comment:  Seems pretty straight forward right?  I think you'll see the picture is bigger than you might realize.
-->

# Foundations

- Typography 
- Colors
- Spacing
- Icons/Logos
- Grid System/Layouts

---

## Constraints as the Foundation

<!--
## Foundations: Constraints

Comment: This is another great truth I learned from Refactoring UI.  What this really boils down to is that we predefine all of these foundational areas.  

Comment: The foundations get defined into what can commonly be defined as "design tokens".  Basically re-usable bits/atoms of design if you will.  Sort of a dictionary/glossary of the design aspects

Comment:  For the non-designer like me... it means we can kind of start "painting by number"
-->

<!-- _class: lead -->
> When you’re designing without constraints, decision-making is torture because there’s always going to be more than one right choice. 

*– Refactoring UI*

---

## Foundations: Practical Application

<!--
## Foundations: Practical Application

Comment: As we start looking at the different foundations, you'll see that there are benefits to defining these things in these ways because they can allow us more easily maintain the design system in our code.  Also, as you become more fully aware of the design tokens.... your become much more effective.

Comment: Another chief goal of the design system, or many it;s just a natural result, is consistent developer experience when building UI's!  This isn't something to sleep on.  As I hope you'll see.  The foundations of a design system will help you move fast and build things as a developer.

Comment: As we move forward, we're going to see a VERY simple design system start coming to life.
-->

<!-- _class: lead -->
**For the developer**:  Foundational constraints/design tokens are often best expressed as CSS variables and utility classes.

---

## Foundations: Typography

<!--
Comment: No system has just one font size and style!  This very simple example we see how different font sizes might be defined.  But systems might also define font-weight, different font-families, etc.

Comment: In these simple css and html examples we start to get a taste for how the design system can be implemented via css variables and utilities classes.  Notice we have 5 variables for font-size.  Then we have can have a utility class  for each, where it simply uses the css variable.
-->

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

<!--
Comment: Here's another truth.  You're gonna need way more colors than you think!  Don't let those online color palettes fool you... You cannot build a UI using only 3-5 colors!  You need many more colors than you think.

Comment: You can probably get by with 7-9 "base" colors,  but you need varying shades of each.  You'll see what I mean.
-->

You need **MORE COLORS** than you think! 

---

## Foundations: Primary Shades

<!--
Comment:  Lets start with the primary shades.  These with be used by various controls and likely also common typography patterns.  Buttons are the obvious example.  But various shades of primary color are also needed for user interactions.  Think hover events, animations, etc.  They popup in subtle but amazing ways.

Question:  Ok... so knowing that... can you imagine you're web application with just a single primary color?  Ick!
-->

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

<!--
Comment: Grey's are the foundation of may things in your application.  It's typically the default body back ground, borders, dividers between elements, and its the basis for most text colors!

Question:  Now imagine you building a page for a new feature in your system or a new component.  You know you need a grey background, and a border, and there is some text.  Given a blank slate what do you choose?  Color is a wide spectrum.

Question:  Now imagine you have a design system in place with 9 predefined values.  Picking the colors to use becomes much easier.  You can quickly toggle between options to find the color your looking for!
-->

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

<!-- 
Comment:  Previously mentioned I was figuratively color blind.  But I can design with a colors laid out like this.  But, as we wrap up this portion on colors, you can see its pretty easy to know what to do regarding colors

Steve Martin wardrobe bit?
-->

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

<!--
Comment:  Moving on to spacing we see more of the same.  Pre-defined values for how to space things.  These are the intervals we use for padding, margins, gaps, etc. 

Example:  We'll see some tangible examples in a bit, but know these are the values you use to separate components.  For example, you might used the 32px XL spacing between input fields, or a small 8px spacing between a label and an input.
-->

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

Comment: So, as you can see, these foundations very clearly constrained. With a design system all of the basics are predefined.  You no longer need to completely guess how many pixels of spacing should be used or which shade of purple to use from a color picker, or if you should use 11px or 12px for the font size.  These choices are already made.  You just need to pick the right item from the respective scale.

Narrative:
A few years ago I was working on a fairly large project with several developers.  We had/have an amazing design team.  Super smart people with a good eye for UI/UX!

On the UI development we were doing more than our fair share of "bike shedding" – you know, arguing about seemingly small trivial things.  A pixel or two here or there, specific hex values for colors, etc.  In PR's questions would arise... "Why are you using 7px of padding here? For this feature before I used 12px." . Or, "Is this the right shade of red?  I used the following hex value last week when I implemented the order feature."

The frequent reply was, "Well this is what the designer put in the mock".  Reasonable.  However, there was wrinkle we all initially over looked.  We have a design system!  We started looking more closely at the foundations of that system.  Once you have identified the pre-defined design constraints, its very easy to spot inconsistencies.  It's also very easy to fix them!  And you know what happened?  Less bike shedding!  Faster development, faster turn around on PR's!  Fewer PR's opened by product and design with UX inconsistencies.

Now, we found some inconsistencies.  Sometime within the mocks from design.  Oh my! :scream:  What's a developer to do?  Talk to the designer!  Ask them a question, "Hey I see this padding isn't conforming to the design system's spacing values.  Was that intentional?  Can we make it conform?  What I found is that designers are totally open to these conversations and willing to own if they accidentally or intentionally deviated from the design system foundations.  And more often than not, they can share their design experience and knowledge with you... Maybe some day I can be a designer!

Designers are super cool friends to have!

Be sure to mention how Kori will probably be elaborating on this topic next.

-->

---

# Components

<!--
Comment: Now, as developers in the year 2024, we all know what components are.  They're the basic building blocks of our web apps.  Buttons, textbox, dropdowns, and other inputs.  Header and side navigation, links, etc.  

Comment:  One chief goal of components is to bring consistency to the elements users interact with on a regular basis.  The buttons all look and feel the same.  They have the same user experience.  Dropdowns or date pickers offer the same interactions across all pages.

Comment: As we continue, I'll show a few examples of how components are created in the design system.  It should be no surprise that components are built using foundations we just spoke about.  

Comment:  As noted at the beginning of the talk, I plan to move very fast.  Conceptually I this is pretty straightforward, but I think you'll be able to keep up.  If not, we can talk about it in detail at the end.
-->

Lego bricks used to compose the user experience.

Are created from the design system's **foundations**. 

---

## Component Example: Button

<!--
Comment:  So, in this example, we have 3 buttons nothing fancy.  But notice in this example css how its constructed!  All of the css properties are using those css variables we defined and talked about before!  

Comment:  Notice we can define a "primary" utility class that when applied to button overrides the design tokens we use.

Question:  So imagine a future where the designer wants to change the primary color?  What is the development impact?  So long as they stick with the same "design tokens", the changes is simple.  Just update the css variables and your buttons change!

Comment: I must confess this is a contrived example.  Overly simplistic. But At least with a system in place you have a better idea of impact.  

-->

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
    font-size: var(--font-md); 
    padding: var(--spacing-md) var(--spacing-2xl);
    border: 1px solid var(--color-gray-700);
    background-color: var(--color-gray-400);
    height: var(--dimension-md);
}

button.primary {
    background-color: var(--color-primary-400);
    color: var(--color-white);
    border-color: transparent;
}
```

</div>

---

<!--
Comment:  So, very quickly.  We know our applications need inputs.  Let's make a simple textbox and checkbox.  Notice again... the css properties for our inputs are just our design system foundations/tokens
-->

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

<!--
Comment:  One final component example.  Cards.  We've all seen cards.  They are nice way to provide some layout to the page.  Typically they have a header and some content.  

Question:  What do you noticed about this implementation?  That's right you get it the picture now.  The card styles are building using the foundations we defined before. 
-->

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

<!--
Comment:  When I started I said there were 3 main areas of a design system we'd focus on today.  Foundations, Components, and now we have patterns.

Question: So, what are patterns?  

Comment: If the goal of foundations and components is to bring a pretty low-level consistency to an application.  The goal of patterns is to bring high-level consistency to an application.  The look and feel of one page to another is familiar to the user.  For example, data collection/input workflows are consistent to one another.
-->

Reusable combination of the design system's **components** that are composed using a layout that adheres to the design system's **foundations**.

---

## Pattern Example: Form

<!--
Comment:  Let's consider the typical form and compose a form using our design system.  We see the following:
1.  A card containing a relevant header.
2.  Our form inputs and buttons.
3. Notice the consistent spacing between elements

Comment:  Let's look at the implementation
-->

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

<!--
Comment:  So... pretty straight forward... We use our place our design system components within a card.  The card contains a form – Yes I know its a class on a div and not a form element – humor me. The form then can simply apply a grid layout using our foundation spacing....

Comment:  Boom.  Done deal.  We have an input form pattern.  From a ux perspective, we should use this layout every time!  We should use this for logins,  for order creation and updates, or any other data collection method.  

Comment:  Now, this yet again a contrived example.  But maybe your application has numerous workflows.  It's probably best if the visuals for those work flows are consistent across features in the application.  Not only does the user feel "at home" regardless to what page they are on... consistent patterns make development faster too!
-->

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

<!--
Comment:  So, to wrap it up. 
1. Constraints are good.
2. D

Comment: As you leave today I hope you have a better understanding and appreciation for the design system.  If you've never considered you design system before, maybe now you can see how it impacts your development work.

Comment:  Finally... designers are your friend.  The systems they work hard to create isn't only a benefit for the user, but also you as the developer.  They are cool people and can teach use developers some things and help us help users.

THANK YOU! I know I moved really fast, and you probably have questions.  Please stop by to see me later.  I'd love to meet you and answer any questions you have.  So long as you don't want me to tell you how to choose a color palette for your next big idea!  Remember, I'm figurative color blind.

-->

# Wrap Up!

- Constraints are good for users and developers!
- Design System Basics: **Foundations**, **Components**, **Patterns**
- Designers are your friend!