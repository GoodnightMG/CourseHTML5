// NEXT STEPS ==============================================
// Integrate the functionality into the Angular Framework so that $http works properly
//======================================================
var app = angular.module('course',[])
	.factory('fac',function($http){
		return{
		
			root:this,
			
			stage:{},	

			modules:[
				{name:'module 1', url:'500/scenes.json', scenes:[]},
				{name:'module 2', url:'1000/scenes.json', scenes:[]},
				{name:'module 3', url:'2000/scenes.json', scenes:[]},
				{name:'module 4', url:'3000/scenes.json', scenes:[]},
				{name:'module 5', url:'4000/scenes.json', scenes:[]}
			],

			mod:{
				cur : 0
			},

			slide:{
				root:this,
				
				cur : 1,
				next : 2,
				previous : 0,
				
				load : function(){
				
					var t = this;
					var root = t.root.$get();
					
					root.slide.next = root.slide.cur+1;
					root.slide.previous = root.slide.cur-1;
					console.log(root.slide.previous)
					
					$('#stage').fadeOut(600,
						function(){
						
						var url = root.modules[root.mod.cur].url+'?R='+Math.random()*5000

						$http.get(url)
						.success(function(data,status,headers,config){
	
							if(!root.loadedBefore()){
								root.newScene(data[root.slide.cur]);
								console.log(root.slide.previous)
						
							}else{
								root.render.scene();
							}
							
						})
						.error(function(data,status,headers,config){
							console.log("Failure: "+data+' -- '+status+' -- '+headers+' -- '+config)
						});
							
						
						}
					);
				},
						
				set : function(i){
				
					var root = this.root.$get();				
					root.slide.cur = i;
					console.log(root.slide.cur);
					this.load();
				}
						
			},


			render:{

				scene:function(url){
					// append the scene to the stage
					/*if(next<scenes.length){$('#next').show();};
					if(next>scenes.length){$('#next').hide();};

					if(previous>0){$('#previous').show();};
					if(previous<0){$('#previous').hide();};*/
					
					$('#stage').fadeIn();
				},
				
				dimensions:function(){
					stage.height = $('#stage').innerHeight();
					stage.width = $('#stage').innerWidth();
				}

			},

			newScene:function(i){
				
				this.render.scene(i.url)
				
			},

			sceneData:function(){

				var id, title, score;
				
				var complete = false;
				var running = false;
				var restart = function(){};
				var pause = function(){};
				
			},

			loadedBefore:function(){

				var bol;

				$.each(this.modules, function(index){
					
					$.each(index, function(index,value){
						if(value){
							bol = true;
						}else{
							bol = false;
						}
					})
					
				});
				
				return bol
			}
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
			link:function(scope,elem,attrs,fac){
				console.log(fac);
				elem.bind('click',function(){
					scope.slide.set(scope.slide.cur++);
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
					scope.slide.set(scope.slide.curr--);
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
					$scope.mod = 1
					$scope.slide.set(0);
				});
			}
		}
	})
	.controller('stage',['$scope', 'fac', function($scope,fac){		
}]);

