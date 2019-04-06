
	 function btn(){
			var teste1 = document.querySelectorAll("#teste span"); // accés au éléments
			var teste2 = document.querySelectorAll("#teste em");
			var teste3 = document.querySelectorAll("#teste p");
			
			for(var i = 0; i<teste1.length; i++){
				teste1[i].style="background-color:green; color:white";
			 teste2[i].style="color:red; font-size:2em;";
			 teste3[i].style=" font-size:30px;";
			
			}
		}
	