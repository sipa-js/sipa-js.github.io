---
sidebar_position: 2
---

# History and why of Sipa

## History
After I started with web development at the end of the 90s, a lot has happened since then.

One of the major changes was the introduction of CSS. Before, layouts were build using framesets, iframes and using tables. CSS made reusing styles very comfortable, but lacked at the beginning a lot of features for creating layouts, that were possible with tables. 

Another major change was the empowering JavaScript programming language, creating more and more interactive websites natively (without Flash plugin!).

People tried to put concepts from other desktop UI frameworks into the browser. So called Single Page Application (SPA) Frameworks like Angular(JS), Ember, Knockout and Backbone arised.

Many of their concepts were great, but not their actual implementation. It made so many stuff more complicated, as necessary.

They not introduced their concepts, they even introduced their own "language" jumping apart from the JavaScript Standard, introducing own concepts (like JSX) and even introducing new languages (like TypeScript, Elm, ...).

So many advantages of developing native in your browser, were replaced with complicated build chains and magic concepts. So new developers did not really learn JavaScript programming in its core anymore, when starting with the "big" frameworks - they learned the framework.

## Why
The first time I worked with one of the "big" SPAs, using Angular, i was curious about its concepts, the learning tutorials felt fluent and nice.

But then working with it and solving "real" problems became very inefficent. At first i thought, it might need more time, but the time showed, that developers often were not solving problems, they always were looking for "How can i do this with Angular?". So we did not only focus on implementing our solutions, but spending a lot of time with Angular and its documentation. And it's regular updates with breaking changes, several options to solve one problem (choosing between two different form builders).

Get used doing my job intuitively and fluent, i felt like in an insane asylum.

Why not just using good old JavaScript, of course with its current language features, and throwing away all the complexity I'm not interested to keep busy with?

Why not having some good basic structure, that helps me to organize my projects, but free from to much limitations that lead me to hack the framework in special cases again and again?

Originally the predecessor arised rather coincidentally. We needed a really quick PoC for a separate, independent project and my relationship to the f*cking "beloved" Angular was already a disaster, I started it doing the old way using just proven libraries as jQuery, lodash and more ... by adding more and more basic structure into the project.

As the original frontend developers that introduced Angular for a desktop and mobile app, more and more moved to other projects, leaving it to me as main developer, at first i reimplemented the whole mobile app, which was also based on Angular, within a few weeks, including new features without Angular from scratch, because i was sure, i would even need more time, to just add them to the existing Angular app, the first step was done. My claim, that Angular has a good concept idea, but is a piece of sh*t for development, was confirmed by that experience. So i reimplemented the layout of the desktop Angular app and implemented new features based on the PoC mentioned before. The old desktop was linked (nearly) flawless with the new one. Developer happiness end productivity came back again.

Many aspects ot the new code base were very customized to the product itself. Some structures showed up that they can be optimized.

With the desire to rework it again, make it more unspecific and generic, but also beeing able to use it in future private projects, loving OpenSource, i rewrote the base in my free time, especially in my vacations between christmas and new year in the last years and SIPA was born.

## Why is it called SIPA?
I wanted to give the framework a name that tells, that this framework is particular simple!

Playing around with these words, `Simpartic` was born. Particular Simple. Reversed. Shortened. And it sounds like `simpatico`.

It was also very important for me, to make it friendly to Google. `Simpartic` was a new word with hardly any search results.

As `simpartic` was a long name for the command line (CLI), i also offered a shortcut `sipa` at the beginning.

And i figured out, that pronouncing `sipa` was much more fun than `simpartic` ...

After thinking about loosing great search engine ability to find easily everything about `simpartic`, i decided to give it a sh*t. Who cares? Will it ever be popular? Not when pronouncing it is no fun!

`Sipa` was born. `SIPA` has entered the world.

So you still can use `simpartic` as alias on the command line and so be a part of its history. ;-)