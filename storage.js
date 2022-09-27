function Storage(){
	
	Storage.prototype.addCarToStorage = function(newCar){
		let cars = this.getCarsFormStorage();
		
		cars.push(newCar);
		
		localStorage.setItem("cars",JSON.stringify(cars));
		
}
Storage.prototype.getCarsFormStorage = function(){
		
		let cars;
		
		if(localStorage.getItem("cars") === null){
			cars = []
		}
		else{
			cars = JSON.parse(localStorage.getItem("cars"));
			
		}
		return cars;
		
	}
}

