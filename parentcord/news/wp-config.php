<?php
/**
 * The base configuration for ClassicPress
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
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package ClassicPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for ClassicPress */
define('DB_NAME', 'i3252275_cp1');

/** MySQL database username */
define('DB_USER', 'i3252275_cp1');

/** MySQL database password */
define('DB_PASSWORD', 'O.6YezAgU0wprkxQvhP76');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.classicpress.net/secret-key/1.0/salt/ ClassicPress.net secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since WP-2.6.0
 */
define('AUTH_KEY',         'o9xmJJ8kKZuDSbGBIIUyBwzUbuaIVloxPZnYYKimjevPn1Ux5EfDljKMEhas22Yv');
define('SECURE_AUTH_KEY',  'OuoseQ1OUGTPumv48yi65qDWLMsbAZuv51NC4c7X5DO9fXkRvK4z6xZKalkw6jfI');
define('LOGGED_IN_KEY',    'k25ZRIuvlOl8bSRo6EeudVI7LaVbhkAFI9nfB2eVMcQAJkojfxqkonn6RK5H05YR');
define('NONCE_KEY',        'mqsR2ezCmGjmk9CMUadhvT4b5nhTHjaVHASM9q6ksccDxuFbNKKvp6VfqslgdPxw');
define('AUTH_SALT',        'rgBf6l5tmC9Mp22LkP2KyZUSzsqICt3jjOzAfpgnK17x7RrxL1ZgMTyy2msKuxs1');
define('SECURE_AUTH_SALT', 'MbuNdWDpZRZoCuotwxyXpJLqYNQkuawravlYaDw67lMS0RJiDaWNCLXJzY5vDJwg');
define('LOGGED_IN_SALT',   'qE4tZ5uFlZYN3b57wHw2FgMNhtf8J0yN139fB5rQQRWqhuG0FnOsXMs77NiAjGui');
define('NONCE_SALT',       'wn3HFABGUronwBI2joiY79WkQLS7T2jfok27EDbzyrQg4DSBgH4g4N406Dhybx3j');

/**
 * Other customizations.
 */
define('FS_METHOD','direct');
define('FS_CHMOD_DIR',0755);
define('FS_CHMOD_FILE',0644);
define('WP_TEMP_DIR',dirname(__FILE__).'/wp-content/uploads');

/**
 * Turn off automatic updates since these are managed externally by Installatron.
 * If you remove this define() to re-enable ClassicPress's automatic background updating
 * then it's advised to disable auto-updating in Installatron.
 */
define('AUTOMATIC_UPDATER_DISABLED', true);


/**#@-*/

/**
 * ClassicPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'cp_';

/**
 * For developers: ClassicPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the ClassicPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up ClassicPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
