---
title: "LL-tiM—Building a personal LLM"
date: "2025-01-29"
summary: "I'd like an LLM to be able to answer questions about me. How hard can it be?"
link: ""
images:
  - ""
tags:
  - "LLM"
  - "python"
  - "Ollama"
---

Even if LLMs didn't have a cutoff date for the data that they're trained on, it's unlikely that they'd ever be trained on enough (any?) data such that they'd be able to answer questions about me. But it would be cool to have a personal LLM that could do this—especially one deployed on my website so that people looking at my website could easily get information they were looking for.

## Requirements Definition
For this LLM, I wanted it to be:

- Able to answer questions about me
- Not get sidetracked by questions unrelated to me (I have an ego afterall)
- Interactable via my website
- Free

## Who is Tim Forrer?
The first hurdle I needed to jump was to give the LLM information about me to formulate its answers with. Luckily it wasn't nearly as difficult as I thought it might be. A cursory browse of the internet turned out three options for me:

1. Preface every request made to the LLM with all the information I wanted it to have in order to be able to answer a question about me.
1. Fine-tune the LLM so that it did have information about me.
1. Use Retrieval Augmented Generation (RAG).

Prefacing every request was the easiest option it seemed, I could just preprend the information to every query made to it. But I felt this could make the model more susceptible to giving poor answers, given the size of the query, or at the very least, slow it down unnecessarily.

Fine-tuning was an option that not many people seemed to advise, since if done poorly it can easily lead to bad results. As this is my first LLM project I think it wise to follow the general advice when starting out (I have learnt this lesson the hard way...).

This left RAG, which was developed with exactly this kind of task in mind. You can give it a library of documents, and the LLM will use this to build its answers. Using RAG also meant that if I wanted the cost of running this model to be free, I'd have to self-host it, so this helped give better focus to my project.

## Implementing the model
The first thing to note with RAG is that the LLM doesn't directly read all the documents you give it. It first needs to be converted into a vector database, which the model can then reference.

There's not a unique choice for this, but the guide I was following recommended using `BAAI/bge-base-en-v1.5` as the embedding model, so that's what I did. To use it, you just load it in Python, point it at a directory containing all the documents you want the LLM to have knowledge about, and let it work its magic. For now, I've just given it a bunch of CVs that I wrote in the past as a starting point.

I then picked out a model, going with `llama3.1`—no particular reason for this, I was just keen to get an MVP up and running.

All this was actually really simple—it's true when people say that the libraries for this kind of thing are so advanced that there's very little that needs to be done for getting a model up and running. The actual LLM part of my code is less than 10 lines (excluding import statements).

## Interacting with my website
Since I was self-hosting the LLM, I'd need a way for my website—or rather users of my website—to query it, and then see the response. The most obvious way that I could think of to do this was via an API that `POST`ed user-posed queries to the model, and returned the responses, which would be displayed on my website.

In the end, this turned out to be much harder than building the LLM, so I think I'll save detailing that part of the process for separate post.

## What's next?
I've got an initial prototype working now, but what can be done to make it better?

### What were we talking about?
The biggest problem I've noticed with LL-tiM is that it has *zero* memory about any previous messages a user might have sent it in the same session. This makes for some pretty poor conversation. We could store the messages in a database, and allow the model to access the messages but if there are a lot then maybe this is a bit excessive. Plus I'd have to introduce some databasing software into the stack I'm using, which I'd like to avoid if I can to keep things simple (although could be a good future project!).

Instead, it'd be easier to just send the last 10 messages or so back to the LLM. This is probably sufficient and is a simple thing to add on.

We could even have another LLM provide a running summary of all prior messages that LL-tiM can access, so that it doesn't completely forget previous questions.

### Streaming replies
One disadvantage of my simple API request implementation is that the replies come as one big chunk.
Users tend to expect that responses are streamed back to them (that they are "typed out in front of their eyes"), so to make it seem a bit less jarring implementing a similar thing might be a good idea.

I believe this could be easily done with [Open WebUI](https://docs.openwebui.com/), so perhaps that could be some low-hanging fruit to pick.

### Embedding model
I haven't really done much investigation around different embedding models, so this could be something to think about. However I think that any gains from changing the model would probably be pretty small.

### Choice of LLM
Similarly, there are some models out there that are designed for RAG I've found, so using one of them might be an idea. Again, I think the gains would not be overly impressive though.

### Fine-tuning
Now that I've learnt a bit about how LLMs work, a logical next step would be to learn how to fine-tune a model, and see if that is something worth doing.

Even if it isn't, I'll have learnt some more stuff, and that can only be a good thing.