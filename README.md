p h o t o r a m a 
====================

![photorama](https://raw.githubusercontent.com/sunbliss/photorama/gh-pages/photorama_thumb.gif)


![Speed Test](https://raw.githubusercontent.com/sunbliss/photorama/gh-pages/Website%20Speed%20Test.png)

----------

---> [DEMO](http://sunbliss.github.io/photorama/ "DEMO")  <---

----------

A theme for **jekyll**. 

Created for gh-pages (project page).

This template was created having in mind the photobloggers.

It uses [Clean Blog](https://github.com/BlackrockDigital/startbootstrap-clean-blog-jekyll "Clean Blog") as its basis.

----------

 **IMPORTANT!!!**
================

Before you begin: Change the **url** and the **baseurl** in the _config.yml

----------



- The homepage welcomes the visitors with 3 animated photos of your choice. It is recommended that all three are landscape orientated for best view.

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

I hope you will find it useful for your projects, photographic or not.