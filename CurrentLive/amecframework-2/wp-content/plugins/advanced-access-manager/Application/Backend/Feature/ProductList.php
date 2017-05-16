<?php

/**
 * ======================================================================
 * LICENSE: This file is subject to the terms and conditions defined in *
 * file 'license.txt', which is part of this source code package.       *
 * ======================================================================
 */

return array(
    array(
        'title' => '<span class="aam-highlight">AAM Plus Package</span>',
        'id' => 'AAM Plus Package',
        'type' => 'commercial',
        'cost'  => '$30',
        'currency' => 'USD',
        'description' => __('Our best selling extension that allows you to setup access to unlimited number of posts, pages or custom post types as well as define default access to ALL posts, pages, custom post types, categories or custom taxonomies.', AAM_KEY) . ' <a href="https://vasyltech.com/blog/manage-access-to-posts-and-pages" target="_blank">Read more.</a>',
        'storeURL' => 'https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=FGAHULDEFZV4U',
        'status' => AAM_Core_Repository::getInstance()->extensionStatus('AAM Plus Package'),
        'version' => AAM_Core_Repository::getInstance()->getExtensionVersion('AAM Plus Package')
    ),
    array(
        'title' => 'AAM Redirect',
        'id' => 'AAM Redirect',
        'type' => 'commercial',
        'cost'  => '$20',
        'currency' => 'USD',
        'new' => true,
        'description' => __('With this extension you can define custom redirect or "Access Denied" message for each role, individual user or all visitors.', AAM_KEY). ' <a href="http://vasyltech.com/blog/aam-redirect-extension" target="_blank">Read more.</a>',
        'storeURL' => 'https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=QAM3P45X6PKUU',
        'status' => AAM_Core_Repository::getInstance()->extensionStatus('AAM Redirect'),
        'version' => AAM_Core_Repository::getInstance()->getExtensionVersion('AAM Redirect')
    ),
    array(
        'title' => 'AAM Role Filter',
        'id' => 'AAM Role Filter',
        'type' => 'commercial',
        'cost'  => '$5',
        'currency' => 'USD',
        'description' => __('More advanced user and role administration. Based on user capabilities level, filter list of roles that user can manage. Also prevent from editing, promoting or deleting higher level users.', AAM_KEY),
        'storeURL' => 'https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=G9V4BT3T8WJSN',
        'status' => AAM_Core_Repository::getInstance()->extensionStatus('AAM Role Filter'),
        'version' => AAM_Core_Repository::getInstance()->getExtensionVersion('AAM Role Filter')
    ),
     array(
        'title' => 'AAM Complete Package',
        'id' => 'AAM Complete Package',
        'type' => 'commercial',
        'cost'  => '$50',
        'currency' => 'USD',
        'new' => true,
        'description' => __('Get list of all available premium extensions in one package and save $5 USD.', AAM_KEY),
        'storeURL' => 'https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=KLZ85ZZEQGNWJ',
        'status' => AAM_Core_Repository::getInstance()->extensionStatus('AAM Complete Package'),
        'version' => AAM_Core_Repository::getInstance()->getExtensionVersion('AAM Complete Package')
    ),
    array(
        'title' => 'AAM Multisite',
        'id' => 'AAM Multisite',
        'type' => 'GNU',
        'license' => 'AAMMULTISITE',
        'description' => __('Convenient way to navigate between different sites in the Network Admin Panel. This extension adds additional widget to the AAM page that allows to switch between different sites.', AAM_KEY),
        'status' => AAM_Core_Repository::getInstance()->extensionStatus('AAM Multisite'),
        'version' => AAM_Core_Repository::getInstance()->getExtensionVersion('AAM Multisite')
    ),
    array(
        'title' => 'AAM Post Filter',
        'id' => 'AAM Post Filter',
        'type' => 'GNU',
        'license'  => 'AAMPOSTFILTER',
        'description' => AAM_Backend_View_Helper::preparePhrase('[WARNING!] Please use with caution. This is a supportive exension for the post access option [LIST]. It adds additional post filtering to fix the issue with large amount of posts.', 'strong', 'strong'),
        'status' => AAM_Core_Repository::getInstance()->extensionStatus('AAM Post Filter'),
        'version' => AAM_Core_Repository::getInstance()->getExtensionVersion('AAM Post Filter')
    ),
    array(
        'title' => 'CodePinch',
        'id' => 'WP Error Fix',
        'type' => 'plugin',
        'description' => '<span class="aam-highlight">Highly recommended!</span> ' .  __('Patent-pending technology that provides solutions to PHP errors within hours, preventing costly maintenance time and keeping your WordPress site error.', AAM_KEY) . ' <a href="http://codepinch.io" target="_blank">Read more.</a>',
        'status' => AAM_Core_Repository::getInstance()->pluginStatus('WP Error Fix')
    ),
    array(
        'title' => 'ConfigPress',
        'id' => 'ConfigPress',
        'type' => 'plugin',
        'description' => __('Development tool with an easy way to manage all your website custom settings. ', AAM_KEY) . ' <a href="https://vasyltech.com/config-press" target="_blank">Read more.</a>',
        'status' => AAM_Core_Repository::getInstance()->pluginStatus('ConfigPress')
    ),
    array(
        'title' => 'User Switching',
        'id' => 'User Switching',
        'type' => 'plugin',
        'description' => __('Instant switching between user accounts in WordPress.', AAM_KEY),
        'status' => AAM_Core_Repository::getInstance()->pluginStatus('User Switching')
    )
);