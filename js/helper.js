/*
jQuery.fn.extend({
    scrollWithSite: function(el) {
        var toPos;
        if(el) {
            toPos = jQuery(el).offset().top;
        } else {
            toPos = "";
        }
        scrollWithSite.scrollElements.push({ "element" : jQuery(this)[0], "originalPos" : jQuery(jQuery(this)[0]).offset().top, "toPos" : toPos});        
    },  
});
*/

var FPS = {
    Spinner : {
        enabled : false,
        el : null,
        start : function(type, text) {
            if(typeof type === "undefined") {   
                type = "default";  

                if(typeof text === "undefined") {                   
                    text = "";
                }
            } else {
                if(typeof text === "undefined") {
                    if(type != "ripple" && type != "ring" && type != "spinner" && type != "ellipsis" && type != "cipico") {
                        console.log("Yes");
                        text = type;
                    } else {
                        console.log("No");
                        text = "";
                    }
                }
            }     
            
            text = "<div class='spinner-text'>"+type+"</div>";   
            
            if(FPS.Spinner.enabled) {
                FPS.Spinner.stop();
            }

            var spinnerDiv;

            switch(type) {
                case "ripple":
                    spinnerDiv = "<div class='uil-ripple-css' style='transform:scale(0.42);'><div></div><div></div></div>";
                break;

                case "ring":
                    spinnerDiv = "<div class='uil-ring-css' style='transform:scale(0.42);'><div></div></div>";
                break;
                
                case "spinner":
                    spinnerDiv = "<div class='uil-default-css' style='transform:scale(0.6);'><div style='top:80px;left:93px;width:14px;height:40px;background:#00b2ff;-webkit-transform:rotate(0deg) translate(0,-60px);transform:rotate(0deg) translate(0,-60px);border-radius:10px;position:absolute;'></div><div style='top:80px;left:93px;width:14px;height:40px;background:#00b2ff;-webkit-transform:rotate(30deg) translate(0,-60px);transform:rotate(30deg) translate(0,-60px);border-radius:10px;position:absolute;'></div><div style='top:80px;left:93px;width:14px;height:40px;background:#00b2ff;-webkit-transform:rotate(60deg) translate(0,-60px);transform:rotate(60deg) translate(0,-60px);border-radius:10px;position:absolute;'></div><div style='top:80px;left:93px;width:14px;height:40px;background:#00b2ff;-webkit-transform:rotate(90deg) translate(0,-60px);transform:rotate(90deg) translate(0,-60px);border-radius:10px;position:absolute;'></div><div style='top:80px;left:93px;width:14px;height:40px;background:#00b2ff;-webkit-transform:rotate(120deg) translate(0,-60px);transform:rotate(120deg) translate(0,-60px);border-radius:10px;position:absolute;'></div><div style='top:80px;left:93px;width:14px;height:40px;background:#00b2ff;-webkit-transform:rotate(150deg) translate(0,-60px);transform:rotate(150deg) translate(0,-60px);border-radius:10px;position:absolute;'></div><div style='top:80px;left:93px;width:14px;height:40px;background:#00b2ff;-webkit-transform:rotate(180deg) translate(0,-60px);transform:rotate(180deg) translate(0,-60px);border-radius:10px;position:absolute;'></div><div style='top:80px;left:93px;width:14px;height:40px;background:#00b2ff;-webkit-transform:rotate(210deg) translate(0,-60px);transform:rotate(210deg) translate(0,-60px);border-radius:10px;position:absolute;'></div><div style='top:80px;left:93px;width:14px;height:40px;background:#00b2ff;-webkit-transform:rotate(240deg) translate(0,-60px);transform:rotate(240deg) translate(0,-60px);border-radius:10px;position:absolute;'></div><div style='top:80px;left:93px;width:14px;height:40px;background:#00b2ff;-webkit-transform:rotate(270deg) translate(0,-60px);transform:rotate(270deg) translate(0,-60px);border-radius:10px;position:absolute;'></div><div style='top:80px;left:93px;width:14px;height:40px;background:#00b2ff;-webkit-transform:rotate(300deg) translate(0,-60px);transform:rotate(300deg) translate(0,-60px);border-radius:10px;position:absolute;'></div><div style='top:80px;left:93px;width:14px;height:40px;background:#00b2ff;-webkit-transform:rotate(330deg) translate(0,-60px);transform:rotate(330deg) translate(0,-60px);border-radius:10px;position:absolute;'></div></div>";
                break;

                case "ellipsis":
                    spinnerDiv = "<div class='uil-ellipsis-css' style='transform:scale(0.42);'><div class=\"ib\"><div class=\"circle\"><div></div></div><div class=\"circle\"><div></div></div><div class=\"circle\"><div></div></div><div class=\"circle\"><div></div></div></div></div>"
                break;

                default:                
                case "default":  
                case "cipico":                  
                    spinnerDiv = "<div class='uil-squares-css' style='transform:scale(0.42);'><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div></div>";
                break;
            }

            
            FPS.Spinner.el = jQuery("<div class='spinner-wrapper'><div class='spinner'>"+spinnerDiv+text+"</div></div>");
            jQuery(FPS.Spinner.el).hide();
            jQuery(FPS.Spinner.el).fadeIn(1500);
            jQuery(document.body).append(FPS.Spinner.el);
            FPS.Spinner.enabled = true;
        },
        stop : function() {
            FPS.Spinner.enabled = false;
            jQuery(FPS.Spinner.el).remove();
        }
    },
    Message : {
        messages : [
        ],
        add : function(message, type, stay) {
            stay = (typeof stay === 'undefined') ? 2 : stay;     
            var color, borderColor;
            switch(type) {
                case "info":
                default:
                    color = "#BDE5F8";
                    borderColor = "#00529B";
                break;

                case "success":
                    color = "#DFF2BF";
                    borderColor = "#4F8A10";
                break;

                case "warning":
                    color = "#FEEFB3";
                    borderColor = "#9F6000";
                break;

                case "error":
                    color = "#FFBABA";
                    borderColor = "#D8000C";
                break;
            }

            var messageBox = $('<div class="fps_popup_message"><p><table><tr><td align="left">LOGO</td><td align="left">'+message+'</td><td align="right"><p onclick="FPS.Message.close(this);">x</p></td></tr></table></p></div>');
            $(messageBox).css("background", color).css("border", "1px solid " + borderColor);
            FPS.Message.messages.push(messageBox);
            var padding = 0;
            
            jQuery.each(FPS.Message.messages, function(index, el) {
                padding += parseInt($(el).height()) + 20;
            });

            $('body').append(messageBox);
            
            console.log(padding);
            $(messageBox).animate({
                top : padding+"px"
            }, {duration: 500, easing: 'easeOutCubic'});

            if(stay !== false) {
                setTimeout(function() {FPS.Message.remove(messageBox)}, stay * 1000);
            }
        },
        close : function(child) {
            var el = $(child).parent().parent().parent().parent().parent().parent().get(0);
            console.log(el);
            var bottom = $(el).offset().top + $(el).outerHeight(true);
            var height = $(el).height() + 20;
            var index = FPS.Message.messages.indexOf(el);
            FPS.Message.messages.splice(index, 1);

            $(el).animate({
                top : "-"+bottom+"px"
            }, {duration: 1000, easing: 'easeOutCubic'}, function() {
                $(el).remove();                
            });
            console.log(index);
            jQuery.each(FPS.Message.messages, function(i, el) {
                if(i <= index) {
                    $(el).animate({
                        top : "-="+height+"px"
                    }, {duration: 1000, easing: 'easeOutCubic'});
                }
            });
        },
        remove : function(el) {
            console.log(el);
            var bottom = $(el).offset().top + $(el).outerHeight(true);
            var height = $(el).height() + 20;
            var index = FPS.Message.messages.indexOf(el);
            FPS.Message.messages.splice(index, 1);
            console.log(FPS.Message.messages);   

            $(el).animate({
                top : "-"+bottom+"px"
            }, {duration: 1000, easing: 'easeOutCubic'}, function() {
                $(el).remove();                
            });
            
            jQuery.each(FPS.Message.messages, function(i, el) {
                if(i >= index) {
                    $(el).animate({
                        top : "-="+height+"px"
                    }, {duration: 1000, easing: 'easeOutCubic'});
                }
            });
        }
    }
}

/*
var Progress = function() {
    // Private data
    var private = {
    }

    // Expose public API
    return {

    }
};
*/
/*
var scrollWithSite = {    
    scrollElements : [],
    checkScroll : function() {
        jQuery.each(scrollWithSite.scrollElements, function(index, element) {

            if((element.originalPos - jQuery(window).scrollTop()) < 0) {
                if((element.toPos - jQuery(window).scrollTop()) < 0 && element.toPos) {
                    scrollWithSite.removeElement(element.element);
                    return true;
                }
                scrollWithSite.addElement(element.element);
            } else {
                scrollWithSite.removeElement(element.element);
            }
        });
    }, 
    addElement : function(obj) {
        if(!jQuery(obj).hasClass('scrollWithSite')) {
            jQuery(obj).addClass('scrollWithSite');  
            var width = 0;
            jQuery.each(scrollWithSite.scrollElements, function(index, element) {
                if(jQuery(element.element).hasClass('scrollWithSite')) {
                    width += parseInt(jQuery(element.element).width());
                }
            });    
            width -= jQuery(obj).width();
            jQuery(obj).animate({"left" : width});
            console.log(width);
        }
    },
    removeElement: function(obj) {
        if(jQuery(obj).hasClass('scrollWithSite')) {                    
            jQuery(obj).removeClass('scrollWithSite');            
        }
    }
}

jQuery(window).scroll(function() { //when window is scrolled
    scrollWithSite.checkScroll();
});
*/
