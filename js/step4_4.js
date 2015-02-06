$(document).ready(function() {
   
    $('input[name=direction]').change(function(rb) {
   		if($('#printCheckbox').is(':checked')){
   			$('.ansokan-detail-row').slideDown();
   		} else {
				$('.ansokan-detail-row').slideUp();
   		}
    });
});