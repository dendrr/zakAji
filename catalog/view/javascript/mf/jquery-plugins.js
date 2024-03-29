																					
/**
 * jQuery UI Slider
 */
if( typeof MFP_RTL != 'undefined' && MFP_RTL === true ) {
	(function($,g){var h=5;$.widget("ui.slider",$.ui.mouse,{widgetEventPrefix:"slide",options:{animate:false,distance:0,max:100,min:0,orientation:"horizontal",isRTL:false,range:false,step:1,value:0,values:null},_create:function(){var f=this,o=this.options;this._keySliding=false;this._mouseSliding=false;this._animateOff=true;this._handleIndex=null;this._detectOrientation();this._mouseInit();this.element.addClass("ui-slider"+" ui-slider-"+this.orientation+(o.isRTL?" ui-slider-rtl":"")+" ui-widget"+" ui-widget-content"+" ui-corner-all");if(o.disabled){this.element.addClass("ui-slider-disabled ui-disabled")}this.range=$([]);if(o.range){if(o.range===true){this.range=$("<div></div>");if(!o.values){o.values=[this._valueMin(),this._valueMin()]}if(o.values.length&&o.values.length!==2){o.values=[o.values[0],o.values[0]]}}else{this.range=$("<div></div>")}this.range.appendTo(this.element).addClass("ui-slider-range");if(o.range==="min"||o.range==="max"){this.range.addClass("ui-slider-range-"+o.range)}this.range.addClass("ui-widget-header")}if($(".ui-slider-handle",this.element).length===0){$("<a href='#'></a>").appendTo(this.element).addClass("ui-slider-handle")}if(o.values&&o.values.length){while($(".ui-slider-handle",this.element).length<o.values.length){$("<a href='#'></a>").appendTo(this.element).addClass("ui-slider-handle")}}this.handles=$(".ui-slider-handle",this.element).addClass("ui-state-default"+" ui-corner-all");this.handle=this.handles.eq(0);this.handles.add(this.range).filter("a").click(function(a){a.preventDefault()}).hover(function(){if(!o.disabled){$(this).addClass("ui-state-hover")}},function(){$(this).removeClass("ui-state-hover")}).focus(function(){if(!o.disabled){$(".ui-slider .ui-state-focus").removeClass("ui-state-focus");$(this).addClass("ui-state-focus")}else{$(this).blur()}}).blur(function(){$(this).removeClass("ui-state-focus")});this.handles.each(function(i){$(this).data("index.ui-slider-handle",i)});this.handles.keydown(function(c){var d=true,index=$(this).data("index.ui-slider-handle"),allowed,curVal,newVal,step;if(f.options.disabled){return}switch(c.keyCode){case $.ui.keyCode.HOME:case $.ui.keyCode.END:case $.ui.keyCode.PAGE_UP:case $.ui.keyCode.PAGE_DOWN:case $.ui.keyCode.UP:case $.ui.keyCode.RIGHT:case $.ui.keyCode.DOWN:case $.ui.keyCode.LEFT:d=false;if(!f._keySliding){f._keySliding=true;$(this).addClass("ui-state-active");allowed=f._start(c,index);if(allowed===false){return}}break}step=f.options.step;if(f.options.values&&f.options.values.length){curVal=newVal=f.values(index)}else{curVal=newVal=f.value()}var e=function(a,b){if(curVal===a){return}newVal=f._trimAlignValue(curVal+b)};switch(c.keyCode){case $.ui.keyCode.HOME:newVal=f._valueMin();break;case $.ui.keyCode.END:newVal=f._valueMax();break;case $.ui.keyCode.PAGE_UP:newVal=f._trimAlignValue(curVal+((f._valueMax()-f._valueMin())/h));break;case $.ui.keyCode.PAGE_DOWN:newVal=f._trimAlignValue(curVal-((f._valueMax()-f._valueMin())/h));break;case $.ui.keyCode.UP:e(f._valueMax(),step);break;case $.ui.keyCode.RIGHT:e(f._valueMax(),f.options.isRTL?-step:step);break;case $.ui.keyCode.DOWN:e(f._valueMin(),-step);break;case $.ui.keyCode.LEFT:e(f._valueMin(),f.options.isRTL?step:-step);break}f._slide(c,index,newVal);return d}).keyup(function(a){var b=$(this).data("index.ui-slider-handle");if(f._keySliding){f._keySliding=false;f._stop(a,b);f._change(a,b);$(this).removeClass("ui-state-active")}});this._refreshValue();this._animateOff=false},destroy:function(){this.handles.remove();this.range.remove();this.element.removeClass("ui-slider"+" ui-slider-horizontal"+" ui-slider-vertical"+" ui-slider-disabled"+" ui-widget"+" ui-widget-content"+" ui-corner-all").removeData("slider").unbind(".slider");this._mouseDestroy();return this},_mouseCapture:function(b){var o=this.options,position,normValue,distance,closestHandle,self,index,allowed,offset,mouseOverHandle;if(o.disabled){return false}this.elementSize={width:this.element.outerWidth(),height:this.element.outerHeight()};this.elementOffset=this.element.offset();position={x:b.pageX,y:b.pageY};normValue=this._normValueFromMouse(position);distance=this._valueMax()-this._valueMin()+1;self=this;this.handles.each(function(i){var a=Math.abs(normValue-self.values(i));if(distance>a){distance=a;closestHandle=$(this);index=i}});if(o.range===true&&this.values(1)===o.min){index+=1;closestHandle=$(this.handles[index])}allowed=this._start(b,index);if(allowed===false){return false}this._mouseSliding=true;self._handleIndex=index;closestHandle.addClass("ui-state-active").focus();offset=closestHandle.offset();mouseOverHandle=!$(b.target).parents().andSelf().is(".ui-slider-handle");this._clickOffset=mouseOverHandle?{left:0,top:0}:{left:b.pageX-offset.left-(closestHandle.width()/2),top:b.pageY-offset.top-(closestHandle.height()/2)-(parseInt(closestHandle.css("borderTopWidth"),10)||0)-(parseInt(closestHandle.css("borderBottomWidth"),10)||0)+(parseInt(closestHandle.css("marginTop"),10)||0)};if(!this.handles.hasClass("ui-state-hover")){this._slide(b,index,normValue)}this._animateOff=true;return true},_mouseStart:function(a){return true},_mouseDrag:function(a){var b={x:a.pageX,y:a.pageY},normValue=this._normValueFromMouse(b);this._slide(a,this._handleIndex,normValue);return false},_mouseStop:function(a){this.handles.removeClass("ui-state-active");this._mouseSliding=false;this._stop(a,this._handleIndex);this._change(a,this._handleIndex);this._handleIndex=null;this._clickOffset=null;this._animateOff=false;return false},_detectOrientation:function(){this.orientation=(this.options.orientation==="vertical")?"vertical":"horizontal"},_normValueFromMouse:function(a){var b,pixelMouse,percentMouse,valueTotal,valueMouse;if(this.orientation==="horizontal"){b=this.elementSize.width;pixelMouse=a.x-this.elementOffset.left-(this._clickOffset?this._clickOffset.left:0)}else{b=this.elementSize.height;pixelMouse=a.y-this.elementOffset.top-(this._clickOffset?this._clickOffset.top:0)}percentMouse=(pixelMouse/b);if(percentMouse>1){percentMouse=1}if(percentMouse<0){percentMouse=0}if(this.orientation==="vertical"){percentMouse=1-percentMouse}if(this.options.isRTL){percentMouse=1-percentMouse}valueTotal=this._valueMax()-this._valueMin();valueMouse=this._valueMin()+percentMouse*valueTotal;return this._trimAlignValue(valueMouse)},_start:function(a,b){var c={handle:this.handles[b],value:this.value()};if(this.options.values&&this.options.values.length){c.value=this.values(b);c.values=this.values()}return this._trigger("start",a,c)},_slide:function(a,b,c){var d,newValues,allowed;if(this.options.values&&this.options.values.length){d=this.values(b?0:1);if((this.options.values.length===2&&this.options.range===true)&&((b===0&&c>d)||(b===1&&c<d))){c=d}if(c!==this.values(b)){newValues=this.values();newValues[b]=c;allowed=this._trigger("slide",a,{handle:this.handles[b],value:c,values:newValues});d=this.values(b?0:1);if(allowed!==false){this.values(b,c,true)}}}else{if(c!==this.value()){allowed=this._trigger("slide",a,{handle:this.handles[b],value:c});if(allowed!==false){this.value(c)}}}},_stop:function(a,b){var c={handle:this.handles[b],value:this.value()};if(this.options.values&&this.options.values.length){c.value=this.values(b);c.values=this.values()}this._trigger("stop",a,c)},_change:function(a,b){if(!this._keySliding&&!this._mouseSliding){var c={handle:this.handles[b],value:this.value()};if(this.options.values&&this.options.values.length){c.value=this.values(b);c.values=this.values()}this._trigger("change",a,c)}},value:function(a){if(arguments.length){this.options.value=this._trimAlignValue(a);this._refreshValue();this._change(null,0)}return this._value()},values:function(a,b){var c,newValues,i;if(arguments.length>1){this.options.values[a]=this._trimAlignValue(b);this._refreshValue();this._change(null,a)}if(arguments.length){if($.isArray(arguments[0])){c=this.options.values;newValues=arguments[0];for(i=0;i<c.length;i+=1){c[i]=this._trimAlignValue(newValues[i]);this._change(null,i)}this._refreshValue()}else{if(this.options.values&&this.options.values.length){return this._values(a)}else{return this.value()}}}else{return this._values()}},_setOption:function(a,b){var i,valsLength=0;if($.isArray(this.options.values)){valsLength=this.options.values.length}$.Widget.prototype._setOption.apply(this,arguments);switch(a){case"disabled":if(b){this.handles.filter(".ui-state-focus").blur();this.handles.removeClass("ui-state-hover");this.handles.attr("disabled","disabled");this.element.addClass("ui-disabled")}else{this.handles.removeAttr("disabled");this.element.removeClass("ui-disabled")}break;case"orientation":this._detectOrientation();this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-"+this.orientation);this._refreshValue();break;case"isRTL":this.element.toggleClass("ui-slider-rtl",b);this._refreshValue();break;case"value":this._animateOff=true;this._refreshValue();this._change(null,0);this._animateOff=false;break;case"values":this._animateOff=true;this._refreshValue();for(i=0;i<valsLength;i+=1){this._change(null,i)}this._animateOff=false;break}},_value:function(){var a=this.options.value;a=this._trimAlignValue(a);return a},_values:function(a){var b,vals,i;if(arguments.length){b=this.options.values[a];b=this._trimAlignValue(b);return b}else{vals=this.options.values.slice();for(i=0;i<vals.length;i+=1){vals[i]=this._trimAlignValue(vals[i])}return vals}},_trimAlignValue:function(a){if(a<=this._valueMin()){return this._valueMin()}if(a>=this._valueMax()){return this._valueMax()}var b=(this.options.step>0)?this.options.step:1,valModStep=(a-this._valueMin())%b;alignValue=a-valModStep;if(Math.abs(valModStep)*2>=b){alignValue+=(valModStep>0)?b:(-b)}return parseFloat(alignValue.toFixed(5))},_valueMin:function(){return this.options.min},_valueMax:function(){return this.options.max},_refreshValue:function(){var a=this.options.range,o=this.options,self=this,animate=(!this._animateOff)?o.animate:false,valPercent,_set={},lastValPercent,value,valueMin,valueMax;if(this.options.values&&this.options.values.length){this.handles.each(function(i,j){valPercent=(self.values(i)-self._valueMin())/(self._valueMax()-self._valueMin())*100;valPercent=(self.options.isRTL?100-valPercent:valPercent);_set[self.orientation==="horizontal"?"left":"bottom"]=valPercent+"%";$(this).stop(1,1)[animate?"animate":"css"](_set,o.animate);if(self.options.range===true){if(self.orientation==="horizontal"){if(i===0){self.range.stop(1,1)[animate?"animate":"css"](self.options.isRTL?{right:(100-valPercent)+"%"}:{left:valPercent+"%"},o.animate)}if(i===1){self.range[animate?"animate":"css"]({width:((self.options.isRTL?-1:+1)*(valPercent-lastValPercent))+"%"},{queue:false,duration:o.animate})}}else{if(i===0){self.range.stop(1,1)[animate?"animate":"css"](self.options.isRTL?{top:(100-valPercent)+"%"}:{bottom:(valPercent)+"%"},o.animate)}if(i===1){self.range[animate?"animate":"css"]({height:((self.options.isRTL?-1:+1)*(valPercent-lastValPercent))+"%"},{queue:false,duration:o.animate})}}}lastValPercent=valPercent})}else{value=this.value();valueMin=this._valueMin();valueMax=this._valueMax();valPercent=(valueMax!==valueMin)?(value-valueMin)/(valueMax-valueMin)*100:0;valPercent=(self.options.isRTL?100-valPercent:valPercent);_set[self.orientation==="horizontal"?"left":"bottom"]=valPercent+"%";this.handle.stop(1,1)[animate?"animate":"css"](_set,o.animate);if(a==="min"&&this.orientation==="horizontal"){this.range.stop(1,1)[animate?"animate":"css"]({width:(self.options.isRTL?100-valPercent:valPercent)+"%"},o.animate)}if(a==="max"&&this.orientation==="horizontal"){this.range[animate?"animate":"css"]({width:(self.options.isRTL?valPercent:100-valPercent)+"%"},{queue:false,duration:o.animate})}if(a==="min"&&this.orientation==="vertical"){this.range.stop(1,1)[animate?"animate":"css"]({height:(self.options.isRTL?100-valPercent:valPercent)+"%"},o.animate)}if(a==="max"&&this.orientation==="vertical"){this.range[animate?"animate":"css"]({height:(self.options.isRTL?valPercent:100-valPercent)+"%"},{queue:false,duration:o.animate})}}}});$.extend($.ui.slider,{version:"1.8.9"})}(jQuery));
}
/*!
 * jQuery UI Touch Punch 0.2.3
 *
 * Copyright 2011–2014, Dave Furfero
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 * Depends:
 *  jquery.ui.widget.js
 *  jquery.ui.mouse.js
 */
(function ($) {

  // Detect touch support
  $.support.touch = 'ontouchend' in document;

  // Ignore browsers without touch support
  if (!$.support.touch) {
    return;
  }

  var mouseProto = $.ui.mouse.prototype,
      _mouseInit = mouseProto._mouseInit,
      _mouseDestroy = mouseProto._mouseDestroy,
      touchHandled;

  /**
   * Simulate a mouse event based on a corresponding touch event
   * @param {Object} event A touch event
   * @param {String} simulatedType The corresponding mouse event
   */
  function simulateMouseEvent (event, simulatedType) {

    // Ignore multi-touch events
    if (event.originalEvent.touches.length > 1) {
      return;
    }

    event.preventDefault();

    var touch = event.originalEvent.changedTouches[0],
        simulatedEvent = document.createEvent('MouseEvents');
    
    // Initialize the simulated mouse event using the touch event's coordinates
    simulatedEvent.initMouseEvent(
      simulatedType,    // type
      true,             // bubbles                    
      true,             // cancelable                 
      window,           // view                       
      1,                // detail                     
      touch.screenX,    // screenX                    
      touch.screenY,    // screenY                    
      touch.clientX,    // clientX                    
      touch.clientY,    // clientY                    
      false,            // ctrlKey                    
      false,            // altKey                     
      false,            // shiftKey                   
      false,            // metaKey                    
      0,                // button                     
      null              // relatedTarget              
    );

    // Dispatch the simulated event to the target element
    event.target.dispatchEvent(simulatedEvent);
  }

  /**
   * Handle the jQuery UI widget's touchstart events
   * @param {Object} event The widget element's touchstart event
   */
  mouseProto._touchStart = function (event) {

    var self = this;

    // Ignore the event if another widget is already being handled
    if (touchHandled || !self._mouseCapture(event.originalEvent.changedTouches[0])) {
      return;
    }

    // Set the flag to prevent other widgets from inheriting the touch event
    touchHandled = true;

    // Track movement to determine if interaction was a click
    self._touchMoved = false;

    // Simulate the mouseover event
    simulateMouseEvent(event, 'mouseover');

    // Simulate the mousemove event
    simulateMouseEvent(event, 'mousemove');

    // Simulate the mousedown event
    simulateMouseEvent(event, 'mousedown');
  };

  /**
   * Handle the jQuery UI widget's touchmove events
   * @param {Object} event The document's touchmove event
   */
  mouseProto._touchMove = function (event) {

    // Ignore event if not handled
    if (!touchHandled) {
      return;
    }

    // Interaction was not a click
    this._touchMoved = true;

    // Simulate the mousemove event
    simulateMouseEvent(event, 'mousemove');
  };

  /**
   * Handle the jQuery UI widget's touchend events
   * @param {Object} event The document's touchend event
   */
  mouseProto._touchEnd = function (event) {

    // Ignore event if not handled
    if (!touchHandled) {
      return;
    }

    // Simulate the mouseup event
    simulateMouseEvent(event, 'mouseup');

    // Simulate the mouseout event
    simulateMouseEvent(event, 'mouseout');

    // If the touch interaction did not move, it should trigger a click
    if (!this._touchMoved) {

      // Simulate the click event
      simulateMouseEvent(event, 'click');
    }

    // Unset the flag to allow other widgets to inherit the touch event
    touchHandled = false;
  };

  /**
   * A duck punch of the $.ui.mouse _mouseInit method to support touch events.
   * This method extends the widget with bound touch event handlers that
   * translate touch events to mouse events and pass them to the widget's
   * original mouse event handling methods.
   */
  mouseProto._mouseInit = function () {
    
    var self = this;

    // Delegate the touch handlers to the widget's element
    self.element.bind({
      touchstart: $.proxy(self, '_touchStart'),
      touchmove: $.proxy(self, '_touchMove'),
      touchend: $.proxy(self, '_touchEnd')
    });

    // Call the original $.ui.mouse init method
    _mouseInit.call(self);
  };

  /**
   * Remove the touch event handlers
   */
  mouseProto._mouseDestroy = function () {
    
    var self = this;

    // Delegate the touch handlers to the widget's element
    self.element.unbind({
      touchstart: $.proxy(self, '_touchStart'),
      touchmove: $.proxy(self, '_touchMove'),
      touchend: $.proxy(self, '_touchEnd')
    });

    // Call the original $.ui.mouse destroy method
    _mouseDestroy.call(self);
  };

})(jQuery);

////////////////////////////////////////////////////////////////////////////////

/*! Copyright 2012, Ben Lin (https://dreamerslab.com/)
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Version: 1.0.16
 *
 * Requires: jQuery >= 1.2.3
 */
( function ( $ ){
  $.fn.addBack = $.fn.addBack || $.fn.andSelf;

  $.fn.extend({

    actual : function ( method, options ){
      // check if the jQuery method exist
      if( !this[ method ]){
        throw '$.actual => The jQuery method "' + method + '" you called does not exist';
      }

      var defaults = {
        absolute      : false,
        clone         : false,
        includeMargin : false
      };

      var configs = $.extend( defaults, options );

      var $target = this.eq( 0 );
      var fix, restore;

      if( configs.clone === true ){
        fix = function (){
          var style = 'position: absolute !important; top: -1000 !important; ';

          // this is useful with css3pie
          $target = $target.
            clone().
            attr( 'style', style ).
            appendTo( 'body' );
        };

        restore = function (){
          // remove DOM element after getting the width
          $target.remove();
        };
      }else{
        var tmp   = [];
        var style = '';
        var $hidden;

        fix = function (){
          // get all hidden parents
          $hidden = $target.parents().addBack().filter( ':hidden' );
          style   += 'visibility: hidden !important; display: block !important; ';

          if( configs.absolute === true ) style += 'position: absolute !important; ';

          // save the origin style props
          // set the hidden el css to be got the actual value later
          $hidden.each( function (){
            // Save original style. If no style was set, attr() returns undefined
            var $this     = $( this );
            var thisStyle = $this.attr( 'style' );

            tmp.push( thisStyle );
            // Retain as much of the original style as possible, if there is one
            $this.attr( 'style', thisStyle ? thisStyle + ';' + style : style );
          });
        };

        restore = function (){
          // restore origin style values
          $hidden.each( function ( i ){
            var $this = $( this );
            var _tmp  = tmp[ i ];

            if( _tmp === undefined ){
              $this.removeAttr( 'style' );
            }else{
              $this.attr( 'style', _tmp );
            }
          });
        };
      }

      fix();
      // get the actual value with user specific methed
      // it can be 'width', 'height', 'outerWidth', 'innerWidth'... etc
      // configs.includeMargin only works for 'outerWidth' and 'outerHeight'
      var actual = /(outer)/.test( method ) ?
        $target[ method ]( configs.includeMargin ) :
        $target[ method ]();

      restore();
      // IMPORTANT, this plugin only return the value of the first element
      return actual;
    }
  });
})( jQuery );