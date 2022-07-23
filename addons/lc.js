					$(document).ready(function(){	
						$.ajax({
						  url: "/addons/loadcontent.php?ids="+id
						}).done(function(data) { 
						  $('#tab-description').html(data); 
						});						
					});		