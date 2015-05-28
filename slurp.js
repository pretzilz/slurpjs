/*
 * slurp.js
 * Kurt Kaufman
 * 5-27-2015
 * Free to use under my own, personal DBAA (Don't be an asshole) license.
 * Hint: that's the entire text of the license
 * Talk to your doctor before using slurp.js.
*/


(function($) {

	//if your browser doesn't support audio then you should get gud
	
    $.fn.slurp = function(sickOptionsBreh) {
		var casualModeSettings = {
				slurpNoise: "casual_tier"
			};
			
		var sickOptionsBreh = $.extend(casualModeSettings, sickOptionsBreh);
	
        return this.each(function() {
			
			/*if you want to specify slurp noise, just pass in the name of the sound you want*/
			
			var _this = $(this);
			
			/*satan loves html in javascript, so we'll do that too */
			var slurpHTML = '<audio id="slurpIntensifies" preload="auto"><source src="slurps/' + sickOptionsBreh.slurpNoise 
							+ '.wav" /><source src="slurps/' + sickOptionsBreh.slurpNoise + '.ogg" /></audio>';	
					
			$('body').append(slurpHTML); 
			
			function init() {
			
				//ayy lmao
				function playSound() {
					document.getElementById('slurpIntensifies').play();
				}
				playSound();
				
				}
			
			_this.bind('click', function(e) {
				init();
			})
			
        });
    }
})(jQuery);

