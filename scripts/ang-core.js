// > Load this script last
//---------------------------------------------------------------------------------
// Ang-core is basically a translator between prototypes and angular models

//Scope Injections
controls.$inject = ['$scope'];
menus.$Inject = ['$scope'];

// Scaffolding
// The shell is that which loads the scenes in each module. Modules are loaded not as whole units but as slides, whether or not the user is in a module is more a fact of which scenes the shell is loading.
appShell = angular.module('shell',['$scope','appSlide']);

appShell.service('ctrlBar',controls.ctrlBar);

appShell.controller('controlBar',['$scope',controls.ctrlBar]);
appShell.directive('moduleBtn',controls.ctrlBar.moduleBtn);
appShell.directive('nextBtn',controls.ctrlBar.nextBtn);
appShell.directive('previousBtn',controls.ctrlBar.previousBtn);

appShell.controller('moduleMenu',['$scope',menus.modules]);
appShell.directive('listModule',menus.modules.listModule);

appShell.controller('stage',['$scope',stageObj]);

/*appModule = angular.module('slide',['$scope','appShell']);
appModule.service('bookmarks',bookmarks);
appModule.controller('dragDrop',['$scope',dragDrop]);*/
