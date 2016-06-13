var targetValue; 
var sel = document.getElementById("my_select");

sel.onchange = function() {
	targetValue = 'http://brinq.tv/api/v2/localization?lang=' + sel.value;
};
	
$(function() {
    $('#my_select').on('change', function() {
		
$.getJSON(targetValue, function(data){
		
	var values = [];
	
$.each(data, function(key, val){ 	
	values.push(val);
	console.log(data.lang);
});

	// // var div = document.getElementById("test");
	// // var spans = div.getElementsByTagName("span");

	var elems = $('[data-lang-translate="true"');
	$.each(elems, function(index, item){
		var keyName = $(this).attr('data-lang-name');
		var elem = $(this);
		
		$.each(data, function(key, val){
			if(key === keyName)
			{
				// TODO: check elem tag (type) and set text or val 
				
				elem.val(val);
				elem.text(val);
				//elem.innerHTML = val;
			}
		});
	});
	
	// for(i=0;i<spans.length;i++){
		
	// if(spans[i].getAttribute('data-lang-translate') == 'true')
	// {
		// var keyName = spans[i].getAttribute('data-lang-name');
		// $.each(data, function(key, val){
			// if(key==keyName)
			// {
				// spans[i].innerHTML = val;
			// }
		// });
	// }
	// }
//console.log(spans);

	

});});});



			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
						
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			