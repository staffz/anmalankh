
var boxesToCheck = {
	'#intaglioCheckbox' : 'IntaglioTerm',
	'#lithographyCheckbox' : 'LithographyTerm',
	'#ScreenPrintCheckbox' : 'ScreenPrintTerm'
};

$(document).ready(function() {
   
    $('input[name=direction]').change(function(rb) {
   		if($('#printCheckbox').is(':checked')){
   			$('.ansokan-detail-row').slideDown();
   		} else {
				$('.ansokan-detail-row').slideUp();
   		}
    });

    $.each(boxesToCheck, function(key, value){
			$(key).change(function(rb) {
				if(! checkIfCheckAllowed()){
					$(this).prop('checked', false);
				}
	   		if($(this).is(':checked')){
	   			$('input[name=' + value + ']').prop('disabled', false);
				} else {
	   			$('input[name=' + value + ']').prop('disabled', true);
	   			$('input[name=' + value + ']').prop('checked', false);
				}
			});
    });

});

function checkIfCheckAllowed(){
	var count = 0;
  $.each(boxesToCheck, function(key, value){
		if($(key).is(':checked')){
			count += 1;
		}
	});
	if(count > 2){
		return false;
	} else {
		return true;
	}
}
