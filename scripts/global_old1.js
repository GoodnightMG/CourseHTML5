// NEXT STEPS ==============================================
// Integrate the functionality into the Angular Framework so that $http works properly
//======================================================
curr = 0;

newScene=function(i){		
	this.render.scene(i.url)
};

sceneData=function(){

	var id, title, score;
				
	var complete = false;
	var running = false;
	var restart = function(){};
	var pause = function(){};
				
};


var app = angular.module('course',[])
	.factory('fac',function($http){
		return{	
			modules:[
				{name:'module 1', url:'500/scenes.json', scenes:[]},
				{name:'module 2', url:'1000/scenes.json', scenes:[]},
				{name:'module 3', url:'2000/scenes.json', scenes:[]},
				{name:'module 4', url:'3000/scenes.json', scenes:[]},
				{name:'module 5', url:'4000/scenes.json', scenes:[]}
			]
		}

	})
	.controller('controls',['$scope', 'fac', function($scope,fac){
		$scope.slide = fac.slide
		$scope.modules = fac.modules
	}])
	.directive('nextBtn',function(){
		return{
			restrict:'A',
			replace:true,
			template:"<div id='next'>Next Scene</div>",
			link:function(scope,elem,attrs){
				elem.bind('click',function(){
					if(curr<scope.modules.length){
						curr++
					}
				});
			}
		}
	})
	.directive('previousBtn',function(){
		return{
			restrict:'A',
			replace:true,
			template:"<div id='previous'>Previous Scene</div>",
			link:function(scope,elem,attrs){
				elem.bind('click',function(){
					if(curr>0){
						curr--
					}
				});
			}
		}
	})
	.directive('sceneTitle',function(){
		return{
			restrict:'A',
			template:'<h2>scene</h2>'
		}
	})
	.directive('moduleTitle',function(){
		return{
			restrict:'A',
			template:'<h2>module</h2>'
		}
	})
	.directive('progressTracker',function(){
		return{
			restrict:'A',
			template:'<h2>10/20</h2>'
		}
	})
	.directive('audioBtn',function(){
		return{
			restrict:'A',
			template:'<h2>Audio On</h2>'
		}
	})
	.directive('playBtn',function(){
		return{
			restrict:'A',
			template:'<h2>Play</h2>'
		}
	})
	.directive('restartBtn',function(){
		return{
			restrict:'A',
			template:'<h2>Replay</h2>'
		}
	})
	.controller('menu',['$scope', 'fac', function($scope,fac){
		
		var mod = [];
		
		for(var i = 0 ; i<fac.modules.length ; i++){
			mod.push( fac.modules[i].name )
		}
		console.log(mod);
		$scope.modules = mod
	}]).
	directive('menuItem',function(){
		return{
			restrict:'A',
			template:'{{value}}',
			link:function(scope,elem,attrs){
				elem.bind('click',function(){
				});
			}
		}
	})
	.controller('stage',['$scope', 'fac', function($scope,fac){		
}]);

