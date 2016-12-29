
(function ($) {

    var _optionsStoreName = 'options-store';

    var _getOptions = function (elem) {
        return elem.data(_optionsStoreName);
    }

    var _setOptions = function (elem, options) {
        elem.data(_optionsStoreName, options);
    }

    var methods = {

        init: function (options) {

            // Establish our default settings
            var opt = $.extend({
                option1: 2, 
                option2: 'foo'
            }, options);

            return this.each(function () {

                // get ref
                var $this = $(this);

                // store the settings on the element
                _setOptions($this, opt);

                // do stuff

            });

        }, 

        publicMethod: function () {
            // do stuff
            var options = _getOptions($(this));
        }
    };

    $.fn.<plugin name> = function (methodOrOptions) {
        
        if (methods[methodOrOptions]) {
            return methods[methodOrOptions].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof methodOrOptions === 'object' || !methodOrOptions) {
            // Default to "init"
            return methods.init.apply(this, arguments);
        } else {
            $.error('Method ' + methodOrOptions + ' does not exist on jQuery.plugin');
        }       
    }

    
}(jQuery));
