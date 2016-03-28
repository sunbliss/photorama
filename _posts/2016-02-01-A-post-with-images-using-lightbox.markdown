---
layout:     post
title:      "LIGHTBOX"
subtitle:   "A post with images using lightbox"
image:
  feature: "pc007.jpg"
date:       2016-02-01 
author:     "owner_name"
header-img: "img/postcover/pc007.jpg"
tags: [tag04]
categories: [cat04]
comments: false
---

## Have multiple photos *side by side*

#### Include your photo set in `<div class="row"></div>`


<div class="row" style="margin-left: 10pt;">
<p style="float: left; font-size: 9pt; margin-right:1em;"> 
   <a href="{{ site.baseurl }}/img/journal/j-lrg/img1.jpg" data-lightbox="gallery1" data-title="The first image" style="float: left; margin-right: -10%; margin-bottom: 1em;">
     <img src="{{ site.baseurl }}/img/journal/j-sm/js01.png">Image#01</a></p>
        
<p style="float: left; font-size: 9pt; margin-right:1em;"> 
   <a href="{{ site.baseurl }}/img/journal/j-lrg/img2.jpg" data-lightbox="gallery1" data-title="The second image" style="float: left; margin-right: -10%; margin-bottom: 1em;">
     <img src="{{ site.baseurl }}/img/journal/j-sm/js02.png">Image#02</a></p>
</div>   

> If the photos are **not** included in the `div` the text will float on the right.

###### Image Source: [UNSPLASH](https://unsplash.com/photos/j0g8taxHZa0)