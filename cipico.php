<?php

function cipico_civicrm_themes(&$themes) {
  $themes['cipico'] = [
    'ext' => 'com.fpsvisionary.cipicotheme',
    'title' => 'CIPICO',
    'help' => ts('Bulma-based theme for CiviCRM Standalone'),
  ];
}

function cipico_civicrm_alterBundle(CRM_Core_Resources_Bundle $bundle) {
  $theme = Civi::service('themes')->getActiveThemeKey();
  $myExt = 'com.fpsvisionary.cipicotheme';

  switch ($theme . ':' . $bundle->name) {
    case 'cipico:bootstrap3':
      $bundle->clear();
      $bundle->addStyleFile('greenwich', 'dist/bootstrap3.css');
      $bundle->addScriptFile('greenwich', 'extern/bootstrap3/assets/javascripts/bootstrap.min.js', [
        'translate' => FALSE,
      ]);
      $bundle->addScriptFile('greenwich', 'js/noConflict.js', [
        'translate' => FALSE,
      ]);
      break;

    case 'cipico:coreStyles':
    case 'cipico:coreResources':
      $bundle->addStyleFile($myExt, 'assets/mystyles.css', ['weight' => 100]);
      $bundle->addStyleFile($myExt, 'assets/overrides.css', ['weight' => 101]);
      $bundle->addStyleFile($myExt, 'js/fpsHelper.min.css', ['weight' => 102]);
      $bundle->addStyleFile($myExt, 'js/helper.css', ['weight' => 103]);
      break;
  }
}

function cipico_civicrm_alterTemplateDir(&$templateDir, &$context) {
  $templateDir[] = dirname(__FILE__) . DIRECTORY_SEPARATOR . 'templates';
}
