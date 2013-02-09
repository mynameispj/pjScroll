pjScroll
========

pjScroll is a jQuery plugin that keeps an element in view when a user scrolls. Based on William Duffy's jScroll (http://www.wduffy.co.uk/jScroll), this version of it drops the animation and adds a few other options to the mix.

I apologize for the shit-ass documentation at this point. If you'd like to use this and have questions, hit me up in the Issues Queue or email.


Usage
======

$('.sticky-element').pjScroll({
    top: 10,
    stay: true,
    container: '#sticky-container'
});


Options
=======

top			:	0, 
stay		:	false,
forever		: 	false, 
stickyClass :	'sticky', 
container	:	'default'
