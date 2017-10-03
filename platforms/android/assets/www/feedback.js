$(document).ready(function(){
			$('#submitbtn').click(function(){
				var full_name = $("#full_name").val();
				var location = $("#location").val();
				var message = $("#message").val();

				if (full_name != "" && location != "" && message != ""){
			    var varData = 'full_name=' + full_name + 'location=' + location + 'message=' + message;

				$.ajax({
					type: 'POST',
					url:  'feedback.php',
					data:  varData,
					success: function() {
						$("#full_name").val("");
						$("#location").val("");
						$("#message").val("");
						$("#successMessage").popup("open");
					}

				});

				}else{
						$("#errorMessage").popup("open");
						
					}
						


			});
		});