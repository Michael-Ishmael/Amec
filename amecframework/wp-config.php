<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'amecorg_framework16');

/** MySQL database username */
define('DB_USER', 'amecorg_framewk');

/** MySQL database password */
define('DB_PASSWORD', 'DLokwKU]*.[q');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'KM4}QwDD9bn&WaEySM~(P`s@^GdzRoE=/2J/KWKZ9#*~qjIeXwFW<Lfq:[{;sCF)');
define('SECURE_AUTH_KEY',  'Z9J ViP3aQSuSE/mO#;p95rVM9IT)-Fhg!nT%WHvIMwfdED5?ZXfd[t0=}sF?2xB');
define('LOGGED_IN_KEY',    ' ,b<qE)#W3~~UG>ql<;i=D4_cO~7 >482*QA=|Q4joLO`Wg*VZS*}q2M<md$7Pk]');
define('NONCE_KEY',        'EYnZEew`3tIkNN* s.nH5Z{RFB.U*O~brp2<s?Ag$uNs{;qo,:1Hg9-UF}C|M~E>');
define('AUTH_SALT',        'r-=kSEhe7Ds+V{8m 5FYk{MZ,F*^-m%vBYHyC.:j_Jd~V)XSrNQ]{OB&?-)9{V7,');
define('SECURE_AUTH_SALT', '.fD]|Kw^Df9Zx&]HK*a>HW%c0XV&B NdH/W#[cy(1?2|nvsQD|B~,LrD}qK-,E5&');
define('LOGGED_IN_SALT',   'lqy?O+7JG=Ou@zbm@<g5oD9dT$,rBAh}o,j9bHQOWhTB<Ix.6,}j &5_?=cKW7((');
define('NONCE_SALT',       '>l@zCnkX?Yj6-J:(Tqj+@qHmL)wQ6j])c.Qh(=@ GveWkA4:yOmjB45A:CfC~PLo');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wpframewk_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', true);
define( 'WP_DEBUG_DISPLAY', false );
define( 'WP_DEBUG_LOG', true );

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
