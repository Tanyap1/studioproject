(function($) {

    $.fn.ljTabs = function(options) {

        $(this).each(function(){

            var settings = $.extend({
                tabsList: 'ul:first-of-type',
                tabsListItems: 'li',
                tabsContent: '.tabs-articles',
                tabsSections: 'article',
                inlineStyles: true
            }, options );

            var tabs = $(this),
                tabsList = tabs.find(settings.tabsList),
                tabsListItems = tabsList.children(settings.tabsListItems),
                tabsListItemsFirst = tabsListItems.first(),
                tabsContent = tabs.find(settings.tabsContent),
                tabsSections = tabsContent.find(settings.tabsSections),
                tabsSectionsFirst = tabsSections.first();

            // Add active class to first items
            if(!tabsList.find('.active').length) {
                tabsListItemsFirst.addClass('active');
            }

            if(!tabsContent.find('.active').length) {
                tabsSectionsFirst.addClass('active');
            }

            console.log(!tabsSections.find('.active').length);

            if(settings.inlineStyles === true) {

                tabsContent.css({
                    'position': 'relative',
                    'overflow': 'hidden',
                    'width': '100%'
                });

                tabsSections.css({
                    'position': 'absolute',
                    'top': 0,
                    'left': 0,
                    'opacity': 0
                });

                if(!tabsContent.find('.active').length) {
                    tabsSectionsFirst.css({
                        'opacity': 1
                    });
                } else {
                    tabsContent.find('.active').css({
                        'opacity': 1
                    });
                }

            }

            $(window).resize(function() {

                // Retrieve height of active section
                var activeHeight = tabsContent.find('.active').outerHeight();

                // Set height of container based on active section
                tabsContent.css({height: activeHeight});

            });

            $(window).trigger('resize');

            /**
             * Navigate through tabs on click
             */
            tabsListItems.click(function(){

                // If active tab clicked, do nothing
                if($(this).hasClass('active')){
                    return;
                };

                // Remove active class from current item
                tabsListItems.removeClass('active');
                tabsSections.removeClass('active');

                if(settings.inlineStyles === true) {
                    tabsSections.css({'opacity': 0});
                }

                // Add active class to tab item
                $(this).addClass('active');

                // Get height of new tab
                var newSection = tabsSections.eq($(this).index()),
                    newHeight = newSection.outerHeight();

                // Animate height of tab content and show new tab
                tabsContent.animate({
                    height: newHeight
                },300, function(){
                    if(settings.inlineStyles === true) {
                        newSection.animate({opacity: 1});
                    } else {
                        newSection.addClass('active');
                    }
                });

            });

        });

     }
	 
	 $(document).ready(function() {
		$('.tabs').ljTabs();
	});

})(jQuery);

