/**
 * @file
 * A JavaScript file for the theme.
 *
 * In order for this JavaScript to be loaded on pages, see the instructions in
 * the README.txt next to this file.
 */

// JavaScript should be made compatible with libraries other than jQuery by
// wrapping it with an "anonymous closure". See:
// - https://drupal.org/node/1446420
// - http://www.adequatelygood.com/2010/3/JavaScript-Module-Pattern-In-Depth
(function ($, Drupal, window, document, undefined) {


	Drupal.behaviors.bno_volunteer = {
    attach: function (context, settings) {
        $.backstretch([
            "/sites/all/themes/bno_volunteer/images/battleofneworleans-bg1.1.jpg",
            "/sites/all/themes/bno_volunteer/images/battleofneworleans-bg1.2.jpg",
            "/sites/all/themes/bno_volunteer/images/battleofneworleans-bg1.3.jpg"
        ], {speed: 3000, fade: 0, centeredX: false, centeredY: false});
	}
  };

})(jQuery, Drupal, this, this.document);