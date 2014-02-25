$(document).ready(function(){
	/* Nomenclature **************/
	var label= $('.label');
	var content= $('.content');
	
	/* Default values ***********/
	/* hide all contents ********/
	$(content).hide();
	
	/* Mouse click (label)****/
	$(label).on("click",
	function(){
		/* Nomenclature **************/
		var tLabel = $(this);
		var tContent = $(this).next('.content');
		
		/* Default values ***********/
		/* hide all contents ********/
		$(content).hide();
		$(label).css({
			'width':'50px'
		})
		
		/* Show content ************/
		$(tContent).show();
		
		/*if clicked on close icons, hide content*/
		$(tContent).find('a').click(function(){
			/* Hide content ************/
			$(tContent).hide();
			$(label).css({
				'width':'50px'
			})
		})
		/*Increase label width******/
		$(tLabel).css({
			'width':'60px'
		})
	});
});