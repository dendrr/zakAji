this.imagePreview=function(){xOffset=10;yOffset=30;$("a.preview").hover(function(e){this.t=this.title;var c=(this.t!="")?"<br/>"+this.t:"";$("body").append("<p id='preview'><img src='"+this.rel+"' alt='Image preview' />"+c+"</p>");$("#preview").css("top",(e.pageY-xOffset)+"px").css("left",(e.pageX+yOffset)+"px").fadeIn("fast");},function(){this.title=this.t;$("#preview").remove();});$("a.preview").mousemove(function(e){$("#preview").css("top",(e.pageY-xOffset)+"px").css("left",(e.pageX+yOffset)+"px");});};$(document).ready(function(){imagePreview();});