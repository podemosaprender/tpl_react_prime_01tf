# The shortest path to learn React

The code is organized for you to start from any point and **practice** and learn **gradualy**, most important but less demanding tasks first.

However you'll be learning the same tools we will use for any professional project:

* React, hooks, functional components, etc.
* [ReduxToolKit](https://redux-toolkit.js.org)
* [PrimeReact](https://primereact.org/), [PrimeFlex](https://primeflex.org/)

## Install

~~~
git clone https://github.com:podemosaprender/tpl_react_prime_01.git react_practice_1
cd react_practice_1
npm i
~~~

Notice the number `_1` in the end, if you can't repair your code, just delete the folder or make a new clone with another number and repeat.

You'll also want to install following plugins in your browser:

* Redux DevTools for [Chrome](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd) or [Firefox](https://addons.mozilla.org/en-US/firefox/addon/reduxdevtools/)
* React DevTools for [Chrome](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihin) or [Firefox](https://addons.mozilla.org/en-US/firefox/addon/react-devtools/)

## Run

~~~
npm run dev
~~~

Click the link or paste in your browser address bar the url,
it looks like `http://localhost:5173/`

You should see a page like the one at https://viejo.podemosaprender.org/tpl_react_prime_01/

## Learn!

### Penny wise, pound foolish?

Programming languages and computers in general are plagued by silly, meaningless details: punctuation characters or commands you _have to_ type for programs to work as you want. It's wrong and **not your fault**.

To make things worse most of these meaningless details change every year, old meaningless details disappear, new meaningless details are born. Whole programming languages and tools appear and disappear quite often too! For years everybody was using DBase, or VisualBasic, both long gone!

Don't waste your time looking for a reason (unless you are an anthropologist willing to do research on the subject, then contact me!) just figure out how to circumvent the problems as you do with the bad design or poor execution in other thinks: banks, taxes, door handles, etc.

Focus on the big picture, keep business goals in mind, and use the same instincts that let you navigate modern life. Especially that you can copy a phrase you read or hear, change a word to give it the meaning you want, compose a larger text with words and phrases you found elsewhere.

### Find the bigger blocks

**Goal:** change text, add or rearrange elements on any page or _page component_.

Start by looking at [src/App.jsx](./blob/main/src/App.jsx)

1. What things repeat or look the same? What are the differences?
2. Find the texts you see on the **rendered page**, as you see it in the browser e.g. "Hola!"
    Can you change it for other text and save the file? Does it change on the rendered page?
    What happens with other texts?
3. What happens if you copy the whole line with the text and repeat it?

### Copy and compose

**Goal:** build any screen you want composing existing blocks, thus called _components_.

Now look at [src/components/micalendar.jsx](./blob/main/src/components/micalendar.jsx)
It's just the example from [PrimeReact](https://primereact.org/calendar/#basic) with a few changes.

Let's
1. create a new file `src/components/miorgchart.jsx`
2. copy another example from [PrimeReact](https://primereact.org/organizationchart/#basic)
3. copy how it's used in [src/App.jsx](./blob/main/src/App.jsx) **your program will break, errors will be shown on the console**
4. find and fix the few differences between [src/components/micalendar.jsx](./blob/main/src/components/micalendar.jsx) and `src/components/miorgchart.jsx` till it works again (it will!)


