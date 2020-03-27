<?php
/**
 * The plugin bootstrap file
 *
 * @link              https://www.dukeyin.com/corona-virus-data/
 * @since             1.0.1
 * @package           Corona_Virus_Data
 *
 * @wordpress-plugin
 * Plugin Name:       Corona Virus Data
 * Plugin URI:        https://www.dukeyin.com/corona-virus-data/
 * Description:       This plugin use an api to display the "Corona virus" data in whole world and country you care through a shortcode [cov2019] or [cov2019all] in your WordPress post or page.
 * Version:           1.2.3
 * Author:            Duke Yin
 * Author URI:        https://www.dukeyin.com
 * License:           GPL-2.0+
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain:       corona-virus-data
 * Domain Path:       /languages
 */

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}
/**
 * Currently plugin version.
 * Start at version 1.0.0 and use SemVer - https://semver.org
 * Rename this for your plugin and update it as you release new versions.
 */
define( 'CORONA_VIRUS_DATA_VERSION', '1.2.3' );define( 'CORONA_VIRUS_DATA_URL', plugin_dir_url( __FILE__ ) );
/**
 * The code that runs during plugin activation.
 * This action is documented in includes/class-corona-virus-data-activator.php
 */
function activate_corona_virus_data() {
	require_once plugin_dir_path( __FILE__ ) . 'includes/class-corona-virus-data-activator.php';
	Corona_Virus_Data_Activator::activate();
}
/**
 * The code that runs during plugin deactivation.
 * This action is documented in includes/class-corona-virus-data-deactivator.php
 */
function deactivate_corona_virus_data() {
	require_once plugin_dir_path( __FILE__ ) . 'includes/class-corona-virus-data-deactivator.php';
	Corona_Virus_Data_Deactivator::deactivate();
}
register_activation_hook( __FILE__, 'activate_corona_virus_data' );
register_deactivation_hook( __FILE__, 'deactivate_corona_virus_data' );

/**
 * The core plugin class that is used to define internationalization,
 * admin-specific hooks, and public-facing site hooks.
 */
require plugin_dir_path( __FILE__ ) . 'includes/class-corona-virus-data.php';

/**
 * Begins execution of the plugin.
 *
 * Since everything within the plugin is registered via hooks,
 * then kicking off the plugin from this point in the file does
 * not affect the page life cycle.
 *
 * @since    1.0.0
 */
function run_corona_virus_data() {
	$plugin = new Corona_Virus_Data();
	$plugin->run();
}
run_corona_virus_data();