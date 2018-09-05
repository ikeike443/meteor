Package.describe({
  summary: "Generates the boilerplate html from program's manifest",
  version: '1.6.0-rc171.6'
});

Npm.depends({
  "combined-stream2": "1.1.2"
});

Package.onUse(api => {
  api.use('ecmascript');
  api.use('underscore', 'server');
  api.mainModule('generator.js', 'server');
  api.export('Boilerplate', 'server');
});
