//----------------------------------
//Class/function scaffolding
controls = function(){
		var _this = this;
		//$scope
};

menus = function(){

}


//---------------------------------
//Skinny Services


controls.prototype.ctrlBar = function(){
	var _this = this
	
	moduleBtn = function(){
		return{
			restrict:'A',
			replace:true,
			template:"<div id='next'>Next Scene</div>",
			link:function(scope,elem,attrs){
				elem.bind('click',function(){
					goTo.next();
				});
			}
		}
	}
	
};

menus.prototype.modules = function(){
	var _this = this
	
	listModule = function(){
			return{
				restrict:'A',
				replace:true,
				template:"<div id='next'>Next Scene</div>",
				link:function(scope,elem,attrs){
					elem.bind('click',function(){
						goTo.next();
					});
				}
			}
		}
	}
	
}

//---------------------------------
//$watch alternative

//---------------------------------
//Prototype functions

//----------------------------------
//Global functions

refresh = function(){
	$scope.$apply(); // checks for changes in any variables in the scope. This function calls $digest
	
	//$digest
	/*
	- At a high level, $digest() runs through every watcher in the scope, 
	evaluates the expression, and checks if the value of the expression has changed. 
	If the value has changed, AngularJS calls the change callback with the new value 
	and the old value. Simple, right? Well, not quite, there are a few subtleties.
	
	- A dirty flag is fired if a watcher has detected a change through the $digest method.
	
	Source: http://thecodebarbarian.wordpress.com/2014/01/31/what-you-need-to-know-about-angularjs-data-binding/
	*/
	
	console.log($scope.$$watchers); //returns an array of things being watched by angular $scope

}
