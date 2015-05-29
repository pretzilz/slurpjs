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
			
		//this line does things
		var sickOptionsBreh = $.extend(casualModeSettings, sickOptionsBreh);
		
		//list of slurp names
		var slurps = ["wat", "velociraptor", "sanic", "ohgod", "obnoxious", "mrboneswildride", "happy", "hailsatan", "casual_tier"];
		
        return this.each(function() {
			
			/*if you want to specify slurp noise, just pass in the name of the sound you want (or random)*/
			
			var _this = $(this);
			
			/*satan loves html in javascript, so we'll do that too */
			if (sickOptionsBreh.slurpNoise == "random")
			{
				//if it's random, just load a default sound, it'll be changed (just trust me)
				var slurpHTML = '<audio id="slurpIntensifies" preload="none"><source id = "wavSound" src="slurps/casual_tier.wav" /><source id = "oggSound" src="slurps/casual_tier.ogg" /></audio>';	
			}
			
			else {
				
				//otherwise play your dumb choice
				var slurpHTML = '<audio id="slurpIntensifies" preload="auto"><source id = "wavSound" src="slurps/' + sickOptionsBreh.slurpNoise 
							+ '.wav" /><source id = "oggSound" src="slurps/' + sickOptionsBreh.slurpNoise + '.ogg" /></audio>';	
			}
			
					
			$('body').append(slurpHTML); 
			
			function init() {
			
				//ayy lmao
				function playSound() {
					if (sickOptionsBreh.slurpNoise == "random")
					{
						//choose a slurp at random
						var randomSlurp =  slurps[Math.floor(Math.random() * slurps.length)];	
						
						//change the sources
						$("#wavSound").attr("src", "slurps/" + randomSlurp + ".wav");			
						$("#oggSound").attr("src", "slurps/" + randomSlurp + ".ogg");
						
						//load that sh*t
						document.getElementById('slurpIntensifies').load();						
					}
					
					//play that sh*t
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

