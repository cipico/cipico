# CIPICO SA Theme

A Bulma-based theme for CiviCRM Standalone.

## Features
- Bulma CSS framework with custom overrides for CiviCRM
- Custom helper JS (spinners, messages)
- Sass build pipeline with node-sass

## Installation
1. Place this extension in `CiviCRM/ext/cipicotheme`
2. Install the extension: `cv ext:install com.fpsvisionary.cipicotheme`
3. Set as active theme: `cv ev 'Civi::settings()->set("theme_backend", "cipico"); Civi::settings()->set("theme_frontend", "cipico");'`
4. Clear caches: `cv flush`

## Development
```bash
cd assets
npm install
npm run css-build
```

## Links
- Project Page: http://vallic.com

## License
GNU General Public License v2.0 or later
