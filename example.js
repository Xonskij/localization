var targetValue; 
		
	var sel = document.getElementById("my_select");
sel.onchange = function() {
	targetValue = 'http://brinq.tv/api/v2/localization?lang=' + sel.value;
};
	
$.getJSON('http://brinq.tv/api/v2/localization?lang=ru', function(data){
	var items = [];

  items.push('<h2 id="">' + data.lang + '</h2>');
  items.push('<p id="">' + data.description + '</p>');
 
$('<ul/>', {
    'class': 'my-new-list',
    html: items.join('')
  }).appendTo("#mydiv");
});
	
	
$(function() {
    $('#my_select').on('change', function() {
		
		mydiv.innerHTML = '';
		
$.getJSON(targetValue, function(data){
	var items = [];
	items.push('<h2 id="">' + data.lang + '</h2>');
	items.push('<p id="">' + data.description + '</p>');
  
$('<ul/>', {
    'class': 'my-new-list',
    html: items.join('')
  }).appendTo("#mydiv");
});
    })
});



			
			
			
			
			
			
			
			
			
			
			
			
			
			
			