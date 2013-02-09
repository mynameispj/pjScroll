pjScroll
========

pjScroll is a jQuery plugin that keeps an element in view when a user scrolls. Based on William Duffy's jScroll (http://www.wduffy.co.uk/jScroll), this version of it drops the animation and adds a few other options to the mix.

I apologize for the shit-ass documentation at this point. If you'd like to use this and have questions, hit me up in the Issues Queue or email.


Usage
======
```javascript
$('.sticky-element').pjScroll({
    top: 10,
    stay: true,
    container: '#sticky-container'
});
```

Options
=======

* -top- : sticky element offset, defaults to 0	
* -stay- : defaults to false. Setting to true will make the element stick to the bottom of its parent container when you scroll. 
* -forever- : defaults to false. Setting to true will make the element follow you throughout the entire page, instead of just being contained to the parent element. 
* -stickyClass- : CSS class applied to sticky elements. Defaults to	'sticky'
* -container-	: HTML parent of sticky element
