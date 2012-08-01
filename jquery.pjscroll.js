// ####################################################################################
// #######                                                                      #######
// ####### Plugin:      pjScroll   												#######
// ####### Author: 		PJ McCormick											#######
// ####### Website:		http://www.pjmccormick.com/pjscroll						#######
// ####### Version:     1.0	                                                    #######
// #######																		#######
// ####### Based on: 	jScroll													#######
// ####### Author:      William Duffy                                           #######
// ####### Website:     http://www.wduffy.co.uk/jScroll                         #######
// #######                                                                      #######
// ####### Copyright (c) 2012, PJ McCormick - www.pjmccormick.com               #######
// #######                                                                      #######
// ####### Permission is hereby granted, free of charge, to any person          #######
// ####### obtaining a copy of this software and associated documentation       #######
// ####### files (the "Software"), to deal in the Software without              #######
// ####### restriction, including without limitation the rights to use,         #######
// ####### copy, modify, merge, publish, distribute, sublicense, and/or sell    #######
// ####### copies of the Software, and to permit persons to whom the            #######
// ####### Software is furnished to do so, subject to the following             #######
// ####### conditions:                                                          #######
// #######                                                                      #######
// ####### The above copyright notice and this permission notice shall be       #######
// ####### included in all copies or substantial portions of the Software.      #######
// #######                                                                      #######
// ####### THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,      #######
// ####### EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES      #######
// ####### OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND             #######
// ####### NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT          #######
// ####### HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,         #######
// ####### WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING         #######
// ####### FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR        #######
// ####### OTHER DEALINGS IN THE SOFTWARE.                                      #######
// #######                                                                      #######
// ####################################################################################

(function($) {
    
    // Public: pjScroll Plugin
    $.fn.pjScroll = function(options) {

        var opts = $.extend({}, $.fn.pjScroll.defaults, options);
        return this.each(function() {
			var $element = $(this);
			var $window = $(window);
			var locator = new location($element);
			
			$window.scroll(function() {
				locator.getMargin($window);
			});
        });
		
		// Private 
		function location($element)
		{
			this.min = $element.offset().top;
			this.originalMargin = parseInt($element.css("margin-top"), 10) || 0;
			
			var elementWidth = $element.outerWidth(true); 
			var elementSibling = $element.next(); 
			
			this.getMargin = function ($window)
			{
								
				var max = $element.parent().height() - $element.outerHeight();
				var margin = this.originalMargin;
				
				if ($window.scrollTop() < this.min) {
					$element
						.removeAttr('style'); 
					
					elementSibling
						.removeAttr('style'); 	
				}		
			
				if ($window.scrollTop() >= this.min) {
					margin = margin + opts.top + $window.scrollTop() - this.min; 
					
					$element
						.css('position','fixed') 
						.css('top',opts.top +'px')
						.css('margin-top', '0px');	
						
					elementSibling
						.css('margin-left',elementWidth+'px'); 	
				}	
			
				if (opts.forever == false) {
					if (margin > max) {
						margin = max;
						
						if (opts.stay == true) {
							$element
								.css('position','relative')
								.css('top','0px')
								.css('margin-top',margin + 'px');	
								
							elementSibling
								.removeAttr('style'); 													
						} else {
							$element
								.removeAttr('style'); 
							elementSibling
								.removeAttr('style'); 	
						}		
					}										
				}
					
			}
		}	   
    };

    // Public: Default values
    $.fn.pjScroll.defaults = {
		top		:	0, 
		stay	:	false,
		forever	: 	false
    };

})(jQuery);