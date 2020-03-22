<?php

/**
 * The file that defines the core plugin class
 *
 * A class definition that includes attributes and functions used across both the
 * public-facing side of the site and the admin area.
 *
 * @link       https://www.dukeyin.com/corona-virus-data/
 * @since      1.0.0
 *
 * @package    Corona_Virus_Data
 * @subpackage Corona_Virus_Data/includes
 */

/**
 * The core plugin class.
 *
 * This is used to define internationalization, admin-specific hooks, and
 * public-facing site hooks.
 *
 * Also maintains the unique identifier of this plugin as well as the current
 * version of the plugin.
 *
 * @since      1.0.0
 * @package    Corona_Virus_Data
 * @subpackage Corona_Virus_Data/includes
 * @author     Duke Yin <duke@dukeyin.com>
 */
class Corona_Virus_Data {

	/**
	 * The loader that's responsible for maintaining and registering all hooks that power
	 * the plugin.
	 *
	 * @since    1.0.0
	 * @access   protected
	 * @var      Corona_Virus_Data_Loader    $loader    Maintains and registers all hooks for the plugin.
	 */
	protected $loader;

	/**
	 * The unique identifier of this plugin.
	 *
	 * @since    1.0.0
	 * @access   protected
	 * @var      string    $plugin_name    The string used to uniquely identify this plugin.
	 */
	protected $plugin_name;

	/**
	 * The current version of the plugin.
	 *
	 * @since    1.0.0
	 * @access   protected
	 * @var      string    $version    The current version of the plugin.
	 */
	protected $version;

	/**
	 * Define the core functionality of the plugin.
	 *
	 * Set the plugin name and the plugin version that can be used throughout the plugin.
	 * Load the dependencies, define the locale, and set the hooks for the admin area and
	 * the public-facing side of the site.
	 *
	 * @since    1.0.0
	 */
	public function __construct() {
		if ( defined( 'CORONA_VIRUS_DATA_VERSION' ) ) {
			$this->version = CORONA_VIRUS_DATA_VERSION;
		} else {
			$this->version = '1.1.1';
		}
		$this->plugin_name = 'corona-virus-data';

		$this->load_dependencies();
		$this->set_locale();
		$this->define_admin_hooks();
		$this->define_public_hooks();

	}

	/**
	 * Load the required dependencies for this plugin.
	 *
	 * Include the following files that make up the plugin:
	 *
	 * - Corona_Virus_Data_Loader. Orchestrates the hooks of the plugin.
	 * - Corona_Virus_Data_i18n. Defines internationalization functionality.
	 * - Corona_Virus_Data_Admin. Defines all hooks for the admin area.
	 * - Corona_Virus_Data_Public. Defines all hooks for the public side of the site.
	 *
	 * Create an instance of the loader which will be used to register the hooks
	 * with WordPress.
	 *
	 * @since    1.0.0
	 * @access   private
	 */
	private function load_dependencies() {

		/**
		 * The class responsible for orchestrating the actions and filters of the
		 * core plugin.
		 */
		require_once plugin_dir_path( dirname( __FILE__ ) ) . 'includes/class-corona-virus-data-loader.php';

		/**
		 * The class responsible for defining internationalization functionality
		 * of the plugin.
		 */
		require_once plugin_dir_path( dirname( __FILE__ ) ) . 'includes/class-corona-virus-data-i18n.php';

		/**
		 * The class responsible for defining all actions that occur in the admin area.
		 */
		require_once plugin_dir_path( dirname( __FILE__ ) ) . 'admin/class-corona-virus-data-admin.php';

		/**
		 * The class responsible for defining all actions that occur in the public-facing
		 * side of the site.
		 */
		require_once plugin_dir_path( dirname( __FILE__ ) ) . 'public/class-corona-virus-data-public.php';

		$this->loader = new Corona_Virus_Data_Loader();

	}

	/**
	 * Define the locale for this plugin for internationalization.
	 *
	 * Uses the Corona_Virus_Data_i18n class in order to set the domain and to register the hook
	 * with WordPress.
	 *
	 * @since    1.0.0
	 * @access   private
	 */
	private function set_locale() {

		$plugin_i18n = new Corona_Virus_Data_i18n();

		$this->loader->add_action( 'plugins_loaded', $plugin_i18n, 'load_plugin_textdomain' );

	}

	/**
	 * Register all of the hooks related to the admin area functionality
	 * of the plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 */
	private function define_admin_hooks() {

		$plugin_admin = new Corona_Virus_Data_Admin( $this->get_plugin_name(), $this->get_version() );

		$this->loader->add_action( 'admin_enqueue_scripts', $plugin_admin, 'enqueue_styles' );
		$this->loader->add_action( 'admin_enqueue_scripts', $plugin_admin, 'enqueue_scripts' );

	}

	/**
	 * Register all of the hooks related to the public-facing functionality
	 * of the plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 */
	private function define_public_hooks() {

		$plugin_public = new Corona_Virus_Data_Public( $this->get_plugin_name(), $this->get_version() );

		$this->loader->add_action( 'wp_enqueue_scripts', $plugin_public, 'enqueue_styles' );
		$this->loader->add_action( 'wp_enqueue_scripts', $plugin_public, 'enqueue_scripts' );

	}

	/**
	 * Run the loader to execute all of the hooks with WordPress.
	 *
	 * @since    1.0.0
	 */
	public function run() {
		$this->loader->run();
	}

	/**
	 * The name of the plugin used to uniquely identify it within the context of
	 * WordPress and to define internationalization functionality.
	 *
	 * @since     1.0.0
	 * @return    string    The name of the plugin.
	 */
	public function get_plugin_name() {
		return $this->plugin_name;
	}

	/**
	 * The reference to the class that orchestrates the hooks with the plugin.
	 *
	 * @since     1.0.0
	 * @return    Corona_Virus_Data_Loader    Orchestrates the hooks of the plugin.
	 */
	public function get_loader() {
		return $this->loader;
	}

	/**
	 * Retrieve the version number of the plugin.
	 *
	 * @since     1.0.0
	 * @return    string    The version number of the plugin.
	 */
	public function get_version() {
		return $this->version;
	}

}
function cov_wp_head() {
        echo '<script>var cov__contry = "'.get_option( 'cov__settings' )['cov__select_field_0'].'"</script>';
}
add_action('wp_head', 'cov_wp_head');

function cov_func($atts, $content=null, $shortcodename =""){
$return = '<div id="ncov2019"><span>'.__('Last update on (GMT) : ','corona-virus-data').'</span><p id="cov-time"></p>
<div class="title text-center">'.__('Global Total','corona-virus-data').'</div>
<div class="one_third text-center"><h5>'.__('Confirmed','corona-virus-data').'</h5><h3 id="cov-total-confirm"><i class="cov-loading1"></i></h3></div>
<div class="one_third text-center"><h5>'.__('Deaths','corona-virus-data').'</h5><h3 id="cov-total-dead"><i class="cov-loading1"></i></h3></div>
<div class="one_third text-center"><h5>'.__('Recovered','corona-virus-data').'</h5><h3 id="cov-total-recoverd"><i class="cov-loading1"></i></h3></div>
<div class="title text-center">'.__('Total in ','corona-virus-data').'<span id="cov_country_name"></div>
<div class="one_third text-center"><h5>'.__('Confirmed','corona-virus-data').'</h5><h3 id="cov-new-confirm"><i class="cov-loading2"></i></h3></div>
<div class="one_third text-center"><h5>'.__('Deaths','corona-virus-data').'</h5><h3 id="cov-new-dead"><i class="cov-loading2"></i></h3></div>
<div class="one_third text-center"><h5>'.__('Recovered','corona-virus-data').'</h5><h3 id="cov-new-recoverd"><i class="cov-loading2"></i></h3></div>
<p><small>'.__('API provided by ','corona-virus-data') .'<a target="_blank" href="'. __('https://github.com/Laeyoung/COVID-19-API', 'corona-virus-data').'">Laeyoung-COVID-19-API</a></small></p></div>';
return $return;
}
add_shortcode("cov2019", "cov_func");function cov_all_func($atts, $content=null, $shortcodename =""){	 	 if ( !is_admin() ) {		wp_enqueue_script( 'json2html', CORONA_VIRUS_DATA_URL . 'public/js/json2html.js', array(), '1.4.0', true );	 }	$return = '<p>'.__('Last update on (GMT) : ','corona-virus-data').'<span id="cov_all_time"></span></p><p>'.__('Sort by confirmed numbers.','corona-virus-data').'</p><table id="cov_all_table"><tbody><tr><th>'.__('Country or Region','corona-virus-data').'</th><th>'.__('Confirmed','corona-virus-data').'</th><th>'.__('Deaths','corona-virus-data').'</b></th><th>'.__('Recovered','corona-virus-data').'</th></tr></tbody></table>';	return $return;}add_shortcode("cov2019all","cov_all_func");


