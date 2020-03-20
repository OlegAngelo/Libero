$(function() {

	$.validator.setDefaults({
	
		errorClass: 'help-block',
		highlight: function(element) {
			$(element)
			.closest('.form-group')
			.addClass('has-error');
		},
		unhighlight: function (element) {
			$(element)
			.closest('form-group')
			.removeClass('has-error');
		}
	
	});

	$(document).ready(function() {
		$(".submit-btn").click(function() {
			var selectedChoice = $("input[name='yesNoBtn']:checked").val();

			if(!selectedChoice){
				document.getElementById("choice").innerHTML= "Select a value.";
			}
		});
	});

	$(document).ready(function() {
		$('.search-btn').click(function() {
			$('.search-container').toggleClass('active')
		
		});
	});

	$("#submit-form").validate({
		rules: {
			postcode: {
				required: true,
				digits: true,
			},
			email: {
		 		required: true,
				email: true
			},
			mobileNumber: {
				required: true,
				digits: true
			}
		},
		messages: {
			postcode: {
				digits: 'Please enter a <em>valid</em> postal code'
			},
			email: {
				email: 'Please enter a <em>valid</em> email address'
			},
			mobileNumber: {
				digits: 'Please enter a <em>valid</em> phone number'
			}
		},
  		submitHandler: function(form) {
    			form.submit();
  		}
	});
});
