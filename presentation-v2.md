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

**About Design Systems**

<!-- 
Comment: Hi!  I'm Shea Leslein, and I'm here to share the good news about design systems with you!

OPENING NOTE!:  I'd love to make this very interactive. But I am extremely mindful of there are 3 more speakers after me, and a big reason we all come here is to chat and network with others.  So I'm planning to field ZERO questions until I conclude my schpeel.  If there is time left - MATYBE – I can field a couple.  Regardless, I'd love meeting you all after so feel free to come see with any questions!

Comment:  Lets get Started!

-->

---

# About Me

<!-- 
Fam: Married 16 years, 4 kids, 15, 14, 12, 10

Comment: I think community is SO important.  
  - Thank Heather and folks and Soloam Build for hosting
  - Thank FTL
    
Joke: The title of this talk as actually inspired by something my Pastor said during a sermon. So, if you ever meet Pastor Adam waters, from Grace Bible Church, please don't tell him I day dream during his sermons :smile:

Comment:  Now, I also like listening to podcasts when I walk the dog.  This seemingly random fact plays a key role in the story I will share today.
 -->
 
Personal Stuff:
- Meet the Fam!
- Community & Church
- Walks and Software Podcasts

![bg right](IMG_3296.JPG)

---

# About Me: Professional Stuff

<!--
Comment:  Professionally, I realize nobody probably cares where I went to school, or when.  But I am a proud Iowan, and I am old.... I mean... I'm quite experienced...

Comment: Nearly 20 years to be more precise. Mostly as a full stack developer.  Currently I'm a lead engineer at FreeWheel, and Ad-tech company. 

Comment: As we move forward, I want to make one thing VERY clear.
-->

- **Education:** 2004 Iowa State University Grad. w/ B.A. Info. Systems 
- **Experience:** Nearly 20 Years as “Full-Stack” Developer
- **Current Role:** Lead Software Engineer @ FreeWheel

<!-- _class: lead -->
_**I want thing VERY CLEAR ...**_

---

<!-- 
 # I'm not a designer

Comment: I'm pretty much color blind.  Not literally... figuratively. Some people do have a genetic condition that prevents them from seeing colors in the normal way.  That's not me.  I just have bad taste in colors. So, if you came thinking I could teach you good some good design tips... You are going to be disappointed!

Comment: Just as a brief aside and to offer more proof that I'm a developer... I created this whole presentation in markdown and used a tool called "marp" to compile it to HTML.  I really didn't want to futs around with Power Point or Google Slides!

Question:  So, if I'm not a designer.  And I am not good at design!  Why am I here?  

Comment: Well, I simply want to share with you what I've learned about design systems. To show how they not only help build quality user experiences but also how they help improve the developer experience as well!

Narrative:  This story begins with a self aware understanding that I am not a designer.  I was working on web related side project for a church thing. I slapped the key board and started building a thing.  I got to a decent point... looked at what I had and was like.... wow.... this does not look real good.  

Around that time, an ebook by Adam Wathan (the creator of TailwindCSS) had been mentioned on multiple podcasts. The book is called "Refactoring UI and promised to be a "design for developers" book. Well, in my moment of design humilitation.... I mean humility I decided to drop the $150 on the book.  I know that it seems like a lot of money.... but I can say without hesitation, it totally delievers.  If your a developer who wants to get a better sense of how to do design... buy this book!

To this day, I can remember the moment that this book said something that struck be right between the eyes!

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

Design systems are a thing!  I have to learn about and understand these things for me.  When I read this disparate ideas and things I had been hearing started clicking together.  I had this revelation... wait.... design is a system?!?!?  Then, wait!?!? We have a design system at work!  

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

So, given the time constraints today, we'll focus on the foundations.
-->

# What is a Design System?

<!-- _class: lead -->
A design system is a box of tools used to build consistent user experiences.  The tools include well defined **foundations**, **components**, and **patterns**.

---

## Constraints are the Foundation

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

<!-- 
# Foundations 
Comment: These are the foundations of a design system. Color is pretty self explanatory.  Typography refers to the text elements of your UI; the font and size of your text. Spacing refers to the white space elements.  In CSS terms, thing padding, margins, flex/grid gaps etc. Any system of even a small significance is going to logos, and icons too. 

Comment:  One chief goal of the foundations is to ensure visual consistency across the whole system.  Design system and application system.  

Note: We will focus on Typography, colors, and spacing.

Comment:  Seems pretty straight forward right?  I think you'll see the picture is bigger than you might realize.
-->

# What do we constrain?

- Typography 
- Colors
- Spacing
- Icons/Logos

---

## Foundations: Typography

<!--
Comment: No system has just one font size and style!  This very simple example we see how different font sizes might be defined.  But systems might also define font-weight, different font-families, etc.

Comment: In these simple css and html examples we start to get a taste for how the design system can be implemented via css variables and utilities classes.  Notice we have 5 variables for font-size.  Then we have can have a utility class  for each, where it simply uses the css variable.
-->

<div>
<br>
    <p class="font-xs">Extra Small Text</p>
    <p class="font-sm">Small Text</p>
    <p class="font-md">Medium/Default Text</p>
    <p class="font-lg">Large Text</p>
    <p class="font-xl">Extra Large Text</p>
</div>
<div>

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

## Foundations: Many Shades

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
        <br>
        <div class="color-demo bg-color-accent-200">accent 200</div>
        <div class="color-demo bg-color-accent-400 color-white">accent 400</div>
        <div class="color-demo bg-color-accent-600 color-white">accent 600</div>
    </div>
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
</div>

---

## Foundations: Spacing

<!--
Comment:  Moving on to spacing we see more of the same.  Pre-defined values for how to space things.  These are the intervals we use for padding, margins, gaps, etc. 

Example:  We'll see some tangible examples in a bit, but know these are the values you use to separate components.  For example, you might used the 32px XL spacing between input fields, or a small 8px spacing between a label and an input.

Comment:  So, we've just highlighted 3 key area's of a design systems foundation: Typography, Colors, and spacing.  The examples I've given are in fact a very simple design system.  

Question:  So what can you do with these?  Quite a lot in fact.
-->

<div>
    <div class='spacing-demo sm'></div> Small Spacing - 8px <br> 
    <div class='spacing-demo md'></div> Medium/Default Spacing - 16px<br> 
    <div class='spacing-demo lg'></div> Large Spacing - 24px<br> 
    <div class='spacing-demo xl'></div> XL Spacing - 32px<br> 
    <div class='spacing-demo -2xl'></div> 2 XL Spacing - 64px<br> 
    <div class='spacing-demo -3xl'></div> 3 XL Spacing - 128px<br> 
</div>

---


<!-- _class: lead -->

**Bike Sheds** are a bad place to be :bike: ... 

**Designers** are cool friends! :sunglasses: ...

and sound **foundations** make life better!

<!--

Narrative: 

Time for another quick story!

Around the same time I was reading "Refactoring UI", I was working on a fairly large project with several developers, and some really awesome designers!

On the UI development we were doing more than our fair share of "bike shedding" – you know, arguing about seemingly small trivial things.  A pixel or two here or there, specific hex values for colors, etc.  In PR's questions would arise... "Why are you using 7px of padding here? For this feature before I used 12px." . Or, "Is this the right shade of red?  I used the following hex value last week when I implemented the order feature." 

Yes, you've all know what I'm talking about.  As developers we "bike shed" all the time. And it reduces our productivity.

In these discussions, we had lost sight of a very important thing!  We had a design system!.  It defined all of these things for us!  

Once identified what the right foundations were.  Life just got better.  UX was more consistent. We had a shared nomenclature for our design discussions.  PR's got merged faster. Product and design folks opened fewer tickets to fix design related things.

Now, we'd still find inconsistencies, but more often than not they's appear in Figma or other designs tools.  Now that we were equipped with a better understanding of the design system, we were empowered to start discussions with the designers. During with time, they were able to share their knowledge with us.... well with me. They shared key knowledge with us, and it's helped us build good relationships with them.

Be sure to mention how Kori will probably be elaborating on this topic next.

Comment:  So, let me go back to the foundations we looked at before and start land this plane... So far we've actually defined some fairly simple design constraints.... what can you do with these?

-->

---

<!--
Comment:  Quite a bit actually!

Comment: So, lets look at this example! Here's we have a fair standard, but attractive and functional data collection form!  All built using ONLY the foundations we just spoken about.  

Comment:  Notice,
- The Sign up form heading, is using our large font size and a shade of the primary colors
- The spacing between all of the input fields is consistent, using the medium spacing
- The button also uses a pre-defined color.
- Finally... the user interactions, hover, also using the foundation colors we defined above.

-->

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

<!-- _class: lead -->
*Built with Foundations*

---

<!--
Comment:  So, to wrap it up. 
1. Constraints are good.
2. D

Comment: As you leave today I hope you have a better understanding and appreciation for the design system.  If you've never considered you design system before, maybe now you can see how it impacts your development work.

Comment:  Finally... designers are your friend.  The systems they work hard to create isn't only a benefit for the user, but also you as the developer.  They are cool people and can teach use developers some things and help us help users.

THANK YOU! I know I moved really fast, and you probably have questions.  Please stop by to see me later.  I'd love to meet you and answer any questions you have.  So long as you don't want me to tell you how to choose a color palette for your next big idea!  Remember, I'm figurative color blind.

-->
# To Summarize...

First, **as a developers,** design systems offer:
- a set of constraints that improves both UX and DX
- the ability create effective UX – efficiently

Second, high five a **designer** and make them a friend

---

<!-- _class: lead -->
# Thanks!

I'd **love to meet you,** answer questions, and share more **after the other talks!**