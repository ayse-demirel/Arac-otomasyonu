
const form = document.getElementById("car-form");
const titleElement = document.querySelector("#title");
const priceElement = document.querySelector("#price");
const urlElement = document.querySelector("#url");
const cardbody = document.querySelectorAll(".card-body")[1];

// UI Objesini Başlatma

const ui = new UI();

const storage = new Storage();


function UI(){
	
	
}

UI.prototype.addCarToUI = function(newCar){
	/*
	<!-- <tr>
                                            <td><img src="" class="img-fluid img-thumbnail"></td>
                                            <td></td>
                                            <td></td>
                                            <td><a href="#" id = "delete-car" class = "btn btn-danger">Aracı Sil</a></td>
                                          </tr> -->
                                          <!-- <tr>
                                            <td><img src="" class="img-fluid img-thumbnail"></td>
                                            <td></td>
                                            <td></td>
                                            <td><a href="#" id = "delete-car" class = "btn btn-danger">Aracı Sil</a></td>
                                          </tr> -->*/
									
	const carList = document.getElementById("cars");
	
	carList.innerHTML += '
	    <tr>
            <td><img src="${newCar.url}" class="img-fluid img-thumbnail"></td>
            <td>${newCar.title}</td>
            <td>${newCar.price}</td>
            <td><a href="#" id = "delete-car" class = "btn btn-danger">Aracı Sil</a></td>
        </tr>
	'									  
}

UI.prototype.clearInputs = function(element1,element2,element3){
	element1.value= "";
	element2.value= "";
	element3.value= "";

}

UI.prototype.displayMessages = function(message,type){
	
	const cardBody = document.querySelector(".card-body");
	
	// ALERT DİVİNİ OLUŞTURMA
	const div = document.createElement("div");
	div.className = 'alert alert -${type}';
	div.textContent = message;
	
	cardBody.appendChild(div);
	
	setTimeout(function(){
		div.remove();
	},2000);
}


UI.prototype.loadAllCars = function(cars){
	const carList = document.getElementById("cars");
	
	cars.forEach(function(car){
		carList.innerHTML +='<tr>
            <td><img src="${car.url}" class="img-fluid img-thumbnail"></td>
            <td>${car.title}</td>
            <td>${car.price}</td>
            <td><a href="#" id = "delete-car" class = "btn btn-danger">Aracı Sil</a></td>
        </tr>
'				
	};	
}



//Tüm Eventleri Yükleme

eventListeners();

function events() {
	form.addEventListener("submit",addCar);
	
	document.addEventListener("DOMContentLoaded",function(){
		let cars = storage.getCarsFromStorage();
		ui.loadAllCars(cars);
	});
	cardbody.addEventListener("click",deleteCar);
	
}

function addCar(e){
	
	e.preventDefault();
	
	const title=titleElement.value;
	const price=priceElement.value;
	const url = urlElement.value;
	
	if ( title ==="" || price ==="" ||url ==="")
	{
		ui.displayMessages("Tüm alanları doldurun...","danger");
	}
	else{
		//yeni araç 
		const newCar = new Car(title,price,url);
		
		ui.addCarToUI(newCar);//ARAYÜZE ARAÇ EKLEME 
		
		storage.addCarToStorage(newCar);
		
		ui.displayMessages("Araç Başarıyla Eklendi...","success");
	}
	ui.clearInputs(titleElement,urlElement,priceElement);
	
	
}

 function deleteCar(e){
	 console.log(e.target);
 }

