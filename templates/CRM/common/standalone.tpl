<!DOCTYPE html >
<html lang="{$config->lcMessages|substr:0:2}" class="crm-standalone {if !empty($urlIsPublic)}crm-standalone-frontend{/if}">
 <head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="icon" type="image/x-icon" href="{crmResURL ext='com.fpsvisionary.cipicotheme' file='favicon.ico'}">

  {crmRegion name='html-header'}
  {/crmRegion}

  <title>{if isset($docTitle)}{$docTitle}{else}CiviCRM{/if}</title>
</head>
<body>
  {if $config->debug}
  {include file="CRM/common/debug.tpl"}
  {/if}

  <div class="top-bar">
    <div class="container">
      <a class="top-bar-brand" href="/civicrm/dashboard?reset=1">
        <img src="{crmResURL ext='com.fpsvisionary.cipicotheme' file='logo.png'}" alt="CIPICO" />
        <span class="top-bar-title">CIPICO</span>
      </a>
    </div>
  </div>

  {if $pageTitle}
  <section class="hero is-primary">
    <div class="hero-body">
      <div class="container">
        <h1 class="crm-page-title hero-title">{$pageTitle}</h1>
      </div>
    </div>
  </section>
  {/if}

  {if $breadcrumb}
  <div class="breadcrumb-wrapper">
    <div class="container">
      <nav aria-label="{ts escape='htmlattribute'}Breadcrumb{/ts}" class="breadcrumb"><ol>
        <li><a href="/civicrm/dashboard?reset=1" >{ts}Home{/ts}</a></li>
        {foreach from=$breadcrumb item=crumb key=key}
          <li><a href="{$crumb.url}">{$crumb.title}</a></li>
        {/foreach}
      </ol></nav>
    </div>
  </div>
  {/if}

  <div id="crm-container" class="crm-container standalone-page-padding {if !empty($urlIsPublic)}crm-public{/if}" lang="{$config->lcMessages|substr:0:2}" xml:lang="{$config->lcMessages|substr:0:2}">

    {crmRegion name='page-header'}
    {/crmRegion}

    <div class="clear"></div>

    <div id="crm-main-content-wrapper">
      {include file="CRM/common/status.tpl"}
      {crmRegion name='page-body'}
        {if isset($isForm) and $isForm and isset($formTpl)}
          {include file="CRM/Form/$formTpl.tpl"}
        {else}
          {include file=$tplFile}
        {/if}
      {/crmRegion}
    </div>

    {crmRegion name='page-footer'}
      {if !empty($urlIsPublic)}
        {include file="CRM/common/publicFooter.tpl"}
      {else}
        {include file="CRM/common/footer.tpl"}
      {/if}
    {/crmRegion}

    {if $standaloneErrors}
      <div class="standalone-errors">
        <ul>{$standaloneErrors}</ul>
      </div>
      <script type="text/javascript">
      {if $breadcrumb}
        CRM.$("div.standalone-errors").insertAfter("nav.breadcrumb");
      {else}
        CRM.$("div.standalone-errors").prependTo("div#crm-container");
      {/if}
      </script>
    {/if}

  </div>
</body>
</html>
