= Building a website in Rust
#set quote(block: true)
#quote(attribution: "https://areweguiyet.com/")[The roots aren't deep but the seeds are planted.]
#set quote(block: false)

#link("https://areweguiyet.com/")[Are we GUI yet?] is a website
that tracks how well supported building GUIs in Rust is.


The brief tl;dr about the status of GUI frameworks in Rust
hints that it is a little ways off from the SOTA when it comes to GUIs.

Luckily I know next to nothing about building user interfaces,
so I had no idea what I might be missing out with when I started out.

== Techstack
One of my mottos for life is that #quote[choices chain you].
So in many ways it's a good thing that there aren't many choices when it comes to choosing a full-stack Rust framework.

As I could tell, it seems that there are two choices:
+ #link("https://dioxuslabs.com/")[Dioxus]
+ #link("https://www.leptos.dev/")[Leptos]

I chose Dioxus, since it sounded cooler.
#footnote[I later learnt that its name was definitely _not_ inspired by a certain third gen legendary Pokemon.]

== Challenges
=== Docs
The biggest challenge by far was the lack of documentation,
and that which does exist has a fair chance of being out-of-date.

This is mostly down to the fact that Dioxus is not 1.0 yet
(the current stable version is 0.6)
so there are still breaking changes with each new update.

Given that the team working on Dioxus is very small,
and its not an extremely popular framework,
it's unsurprising that that these kinds of issues exist.
There is a Discord server though,
so if you are sufficiently stuck then there are people to turn to for help.

=== Async Rust
Dealing with a website/web app means that you will likely deal with a web server.
This means dealing with async Rust, which is a commonly cited pain-point for people new to Rust (like me).

Having worked with it a little bit now,
I would say that this biggest challenge is understanding the type that is returned by an async function,
given that they seem to often be wrapped in a couple of layers of types.

=== Serving static content
A point somewhat related to the above,
I wanted a way to write posts like this,
but without having to surround items with HTML tags,
or their Dioxus equivalents.

I confess to originally not drinking the Rust Kool-aid and using Markdown at first,
but I realised that this would be a great opportunity to use Typst for the first time.

Then it became a matter of automating the export of my Typst documents to HTML when building,
and serving these rendered pages.

Typst HTML export is not quite yet fully functional,
in particular it can't render maths just quite yet.

Whilst this isn't ideal,
it also is not the end of the world,
and I'm exploring ways to get around this until it is officially supported.
