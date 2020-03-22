<?php

/**
 * Define the internationalization functionality
 *
 * Loads and defines the internationalization files for this plugin
 * so that it is ready for translation.
 *
 * @link       https://www.dukeyin.com/corona-virus-data/
 * @since      1.0.0
 *
 * @package    Corona_Virus_Data
 * @subpackage Corona_Virus_Data/includes
 */

/**
 * Define the internationalization functionality.
 *
 * Loads and defines the internationalization files for this plugin
 * so that it is ready for translation.
 *
 * @since      1.0.0
 * @package    Corona_Virus_Data
 * @subpackage Corona_Virus_Data/includes
 * @author     Duke Yin <duke@dukeyin.com>
 */
class Corona_Virus_Data_i18n {


	/**
	 * Load the plugin text domain for translation.
	 *
	 * @since    1.0.0
	 */
	public function load_plugin_textdomain() {

		load_plugin_textdomain(
			'corona-virus-data',
			false,
			dirname( dirname( plugin_basename( __FILE__ ) ) ) . '/languages/'
		);

	}



}
