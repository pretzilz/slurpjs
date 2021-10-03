/*
 * slurp.js
 * Kurt Kaufman
 * 5-27-2015
 * Free to use under my own, personal DBAA (Don't be an asshole) license.
 * Hint: that's the entire text of the license
 * Talk to your doctor before using slurp.js.
 * 
 * 
 * Update slurp.html
 * Sean Mitchell
 * I updated it.
 * #Check commits for info ¯\_(ツ)_/¯
*/


(function($) {
	//list of slurps		
	var slurps = ["wat", "velociraptor", "sanic", "ohgod", "obnoxious", "mrboneswildride", "happy", "hailsatan", "casual_tier"];
	
	function doSettings(sickOptionsBreh) {
		var casualModeSettings = {
			slurpNoise: "casual_tier"
		};
			
		//this line does things
		var sickOptionsBreh = $.extend(casualModeSettings, sickOptionsBreh);
		
		if(sickOptionsBreh.slurpNoise == "random") {
			//if it's random, just load a default sound, it'll be changed (just trust me)
			//TODO: remove the above comment
			var randomSlurp = Math.floor(Math.random() * slurps.length);
			setupSlurp(slurps[randomSlurp]);
		} else {
			setupSlurp(sickOptionsBreh.slurpNoise);	
		}
	};
	
	//ayy lmao
	function playSlurp() {
		//play that sh*t
		document.getElementById('slurpIntensifies').play();
	};
	
	function setupSlurp(slurpNoise) {
		var alreadySlurpin = document.getElementById('slurpIntensifies');
		if(alreadySlurpin) {
			alreadySlurpin.src = "slurps/" + slurpNoise + ".wav";
			alreadySlurpin.load();
		} else {
			/*satan loves html in javascript, so we'll do that too */
			var slurpHTML = '<audio id="slurpIntensifies" preload="auto"><source id = "wavSound" src="slurps/' + slurpNoise 
								+ '.wav" /><source id = "oggSound" src="slurps/' + slurpNoise + '.ogg" /></audio>';
			$('body').append(slurpHTML);
		}
	};
	
	//if your browser doesn't support audio then you should get gud
    $.fn.slurp = function(sickOptionsBreh) {
		doSettings(sickOptionsBreh);
		
        return this.each(function() {
			/*if you want to specify slurp noise, just pass in the name of the sound you want (or random)*/
			$(this).bind('click', function(e) {
				if(sickOptionsBreh.slurpNoise == "random") {
					var randomSlurp = Math.floor(Math.random() * slurps.length);
					setupSlurp(slurps[randomSlurp]);
				}
				playSlurp();
			})
        });
    };
	
	$.slurp = function(sickOptionsBreh) {
		doSettings(sickOptionsBreh);
		
		playSlurp();
	};
	
})(jQuery);

