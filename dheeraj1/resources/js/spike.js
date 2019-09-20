	function loadYears()
	{
	  for(var i=2014;i>1995;i--)
	  {
	   $("#goToYearStatute,#year").append('<option value="'+i+'">'+i+'</option>');
	  }
	}
	
	$(document).ready(function(){
	   loadYears();
	   $("#goToYearStatute").change(function(){
	    var url = './'+$('select[name="goToYearStatute"]').val()+'.html';
		window.location.replace(url);
	   });
	 });