p h o t o r a m a 
====================

![photorama](https://raw.githubusercontent.com/sunbliss/photorama/gh-pages/photorama_thumb.gif)

----------

---> [DEMO](http://sunbliss.github.io/photorama/ "DEMO")  <---

----------

A theme for **jekyll**. .

Created for gh-pages (project page).

This template was crafted having in mind the photobloggers.

It uses [Clean Blog](https://github.com/BlackrockDigital/startbootstrap-clean-blog-jekyll "Clean Blog") as its basis.

----------

The template has been **revised** as of *July 15th, 2016*

----------

 **IMPORTANT!!!**
================

###Before you begin: Change the URL and the BASEURL as well as the internal nav links in the _config.yml

The **URL** should say `http://yourusername.github.io`

The **BASEURL** should say `/repositoryname`

**Internal nav** should say

  nav:

  - GALLERY: `"http://yourusername.github.io/repositoryname/gallery/"`
  - JOURNAL: `"http://yourusername.github.io/repositoryname/journal/"`
  - ABOUT: `"http://yourusername.github.io/repositoryname/about/`"

If there are problems with loading assets like CSS files and images, make sure that both **URL** and **BASEURL** are set correctly!!! 

----------

If you want to use your **own domain** go to the root of your project's repository, create a CNAME file and add a line with your domain name, e.g. `www.yourdomain.com`.

Go to your domain name registrar and add a CNAME record pointing your domain to GitHub Pages:
- type: CNAME
- host: www.yourdomainname.com
- answer: yourusername.github.io/repositoryname
- TTL: 300

----------

Usage
============ 

###Quick Start

1. [Fork this repository](https://github.com/sunbliss/photorama/fork) to get started. 
2. Go to `https://github.com/yourusername/photorama/settings`
3. Rename the repository to your new project, e.g. *myphotoblog*
2. Create a new branch called `gh-pages` in your repository. 
3. Go to the branches directory at `https://github.com/yourusername/repositoryname/branches` and *change* **default branch** to **gh-pages**.
4. Delete **master** branch. 
3. GitHub will build your site automatically and publish it at `http://yourusername.github.io/repositoryname/`.  

----------

- The homepage welcomes the visitors with 3 animated photos of your choice. It is recommended that all three are landscape orientated for best view.

To change the welcome content at the far left of the Home page go here: `/index.html` and fill the responding lines of the YAML with your desired text.

----------

- To enable **disqus** comments in the posts, change their front matter for comments to 'true'.

You must have a registered account in disqus, where you will also register a forum for your website.

Find the line `s.src = '//yourproject.disqus.com/embed.js';  // ` in the disqus_comments.html and REPLACE 'yourproject' with your forum shortname.

----------

- In order to send **newsletters** about your posts to your subscribers, you should register an account in [tinyletter](http://www.tinyletter.com " tinyletter").

Find the line `'https://tinyletter.com/yourproject', ` in the *newsletter.html* and replace 'yourproject' with your registered website.

You can always ommit the newsletter rendering by deleting the line `{% include newsletter.html %}
` in the *default.html* layout.

----------

If you want to use the matching **NEWSLETTER** template, you must always create a new file  by copying its respective index.html and renaming it to e.g. 2016-March-newsletter.html and then save it inside the folder and the accompanying images inside the 'images folder', so it can be accessed to your viewers through their browser. In this case the root url for the above newsletter will be ***http://yourgithubusername.github.io/yourproject/2016-March-newsletter.html***. Copy this link and replace this part of the code `http://www.yoursite.com/newsletter/year-month-newsletter` with it.

----------

**TAGS** and **CATEGORIES** of the posts 

When you add a tag or a category name in the front matter of a post, don't forget to add the responding markdown files in /journal/tag/ folder and in /journal/category folder, so they can always render when browsing the journal or searching in the respective page.

----------

All the credits and the helpers can be found at **ABOUT** page.


----------

Read <a href="http://sunbliss.github.io/photorama/journal/images-size-for-better-performance/">**this**</a> post if you want to ensure your website always loads fast.


----------

I hope you will find it useful for your projects, photographic or not.


----------


##License

The MIT License (MIT)

Copyright (c) 2014 Filippo Oretti, Dario Andrei

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

