
$(document).ready(function(){
	$('#Education.menu').hover(function(){
		$('#Education.text').css('display','inline-block');
		$('#Work.text').css('display','none');
		$('#Org.text').css('display','none');
		$('#Skills.text').css('display','none');

	});
	$('#Work.menu').hover(function(){
			$('#Education.text').css('display','none');
		$('#Work.text').css('display','inline-block');
		$('#Org.text').css('display','none');
		$('#Skills.text').css('display','none');

	});
	$('#Org.menu').hover(function(){
		$('#Education.text').css('display','none');
		$('#Work.text').css('display','none');
		$('#Org.text').css('display','inline-block');
		$('#Skills.text').css('display','none');

	});
	$('#Skills.menu').hover(function(){
		$('#Education.text').css('display','none');
		$('#Work.text').css('display','none');
		$('#Org.text').css('display','none');
		$('#Skills.text').css('display','inline-block');

	});
});