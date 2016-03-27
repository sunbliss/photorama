var divsSeen = [];// store the divs we've already handled
var currentlyVisible = null;// one zoomy at a time

(function($){
$.fn.fancyZoom = function(options){
  var options   = options || {};
  var directory = options && options.directory ? ;
  var zooming   = false;

  
  var zoom_id = options.zoom_id ? options.zoom_id : 'zoom';
  if ($('#' + zoom_id).length == 0) {
    var ext = $.browser.msie ? 'gif' : 'png';
    var html = '<div id="' + zoom_id + '" style="display:none;"> \
                  <div id="' + zoom_id + '_content"> \
                  </div> \
                  <a href="#" title="Close" id="' + zoom_id + '_close">Close</a> \
                </div>';

    $('body').append(html);

    $('html').click(function(e){if($(e.target).parents('#' + zoom_id + ':visible').length == 0) hide();});
    $(document).keyup(function(event){
        if (event.keyCode == 27 && $('#' + zoom_id + ':visible').length > 0) hide();
    });

    $('#' + zoom_id + '_close').click(hide);
  }
  
  var zoom = $('#' + zoom_id);
	var zoom_table = $('#' + zoom_id + '_table');
	var zoom_close = $('#' + zoom_id + '_close');
	var zoom_content = $('#' + zoom_id + '_content');
	var middle_row = $('td.ml,td.mm,td.mr');

	this.each(function(i) {
		$($(this).attr('href')).hide();
		$(this).click(show);
	});
	

	return this;

	function show(e) {
		e.preventDefault();
		if (zooming)
			return false;
		
		var hrefAttr = $(this).attr('href');
		var seenAlready = false;
		for (var i = 0; i < divsSeen.length; i++) {
			if (divsSeen[i] == hrefAttr) {
				seenAlready = true;
				break;
			}
		}
		
		if (currentlyVisible != null && currentlyVisible != zoom) {
			$(currentlyVisible).hide();
		}
		
		var render = !options.persist || !seenAlready;
		
		zooming = true;
		var content_div = $($(this).attr('href'));
		var zoom_width = options.width;
		var zoom_height = options.height;
        var iframe_height = options.iframe_height ? options.iframe_height : '200';
		var href = $(this).attr('href');
		var width = window.innerWidth
				|| (window.document.documentElement.clientWidth || window.document.body.clientWidth);
		var height = window.innerHeight
				|| (window.document.documentElement.clientHeight || window.document.body.clientHeight);
		var x = window.pageXOffset
				|| (window.document.documentElement.scrollLeft || window.document.body.scrollLeft);
		var y = window.pageYOffset
				|| (window.document.documentElement.scrollTop || window.document.body.scrollTop);
		var window_size = {
			'width' : width,
			'height' : height,
			'x' : x,
			'y' : y
		}
		var width = (zoom_width || content_div.width()) + 60;
		var height = (zoom_height || content_div.height()) + 60;
		var d = window_size;
		

		// ensure that newTop is at least 0 so it doesn't hide close button
		if (window.top!=window.self){
    		var newTop = e.currentTarget.clientX;
    		var newLeft = e.currentTarget.clientY;
		} else {
    		var newTop = Math.max((d.height / 2) - (height / 2) + y, 0);
    		var newLeft = (d.width / 2) - (width / 2);
		}
		var curTop = e.pageY ? e.pageY : 0;// IE says boo to pageY
		var curLeft = e.pageX ? e.pageX : 0;// IE says boo to pageX

		zoom_close.attr('curTop', curTop);
		zoom_close.attr('curLeft', curLeft);
		zoom_close.attr('scaleImg', options.scaleImg ? 'true' : 'false');
		
		zoom.hide().css( {
			position : 'absolute',
			top : curTop + 'px',
			left : curLeft + 'px',
			width : '1px',
			height : '1px'
		});
		
		zoom_close.hide();

		if (options.closeOnClick) {
			zoom.click(hide);
		}
		
		if ($(this).attr('href').indexOf('http') != -1) {
			var iframe = true;
		}

		if (render) {
			if (options.scaleImg) {
				if (iframe == true) {
					zoom_content
							.html('<iframe src="' + href + '" width="100%" height="' + iframe_height + '" style="overflow:hidden; width:100%; height:'+iframe_height+'px;"></iframe>');
				} else {
					zoom_content.html(content_div.html());
				}
				$('#zoom_content img').css('width', '100%');
			} else {
				if (!options.persist) {
					var content_children = zoom_content.children();
					for (var i = 0; i < content_children.length; i++) {
						$(zoom_content.attr('rel')).append(content_children[i]);
					}
				}
			}
		}
		zoom
				.animate(
						{
							top : newTop + 'px',
							left : newLeft + 'px',
							opacity : "show",
							width : width,
							height : height,
							'z-index' : '99999'
						},
						150,
						null,
						function() {
							if (options.scaleImg != true) {
								if (iframe == true) {
									zoom_content
											.html('<iframe src="' + href + '" frameborder="0" scrolling="no" allowTransparency="true" width="100%" height="'+iframe_height+'" style="overflow:hidden; width:100%; height:'+iframe_height+'px;"></iframe>');
								} else {
									if (render) {
										var content_children = content_div.children();
										for (var i = 0; i < content_children.length; i++) {
											zoom_content.append(content_children[i]);
										}
										
										if (!seenAlready) {
											if (options.firstTimeCallback) { options.firstTimeCallback(); }
											divsSeen[divsSeen.length] = hrefAttr;
										}
									}
									zoom_content.attr('rel',hrefAttr);
								}
							}
							zoom_close.show();
							zooming = false;
						});
		currentlyVisible = zoom;
		return false;
	}

	function hide() {
		if (zooming)
			return false;
		zooming = true;
		zoom.unbind('click');
		if (zoom_close.attr('scaleImg') != 'true') {
			if (!options.persist) {
				var content_children = zoom_content.children();
				for (var i = 0; i < content_children.length; i++) {
					$(zoom_content.attr('rel')).append(content_children[i]);
				}
			}
		}
		zoom_close.hide();
		zoom.animate( {
			top : zoom_close.attr('curTop') + 'px',
			left : zoom_close.attr('curLeft') + 'px',
			opacity : "hide",
			width : '1px',
			height : '1px'
		}, 150, null, function() {
			if (zoom_close.attr('scaleImg') == 'true') {
				zoom_content.html('');
			}
			zooming = false;
		});
		currentlyVisible = null;
		return false;
	}

	};
})(jQuery);