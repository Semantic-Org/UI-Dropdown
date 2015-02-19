var
  where = 'client' // Adds files only to the client
;

Package.describe({
  name    : 'semantic:ui-dropdown',
  summary : 'Semantic UI - Dropdown (official): Single component release of dropdown',
  version : '1.9.2',
  git     : 'git://github.com/Semantic-Org/UI-Dropdown.git',
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.addFiles([
    
  ], where);
});
