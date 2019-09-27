var Operaciones = 
{	
	num: 0,
	num_old: "",
	op_old:"",
	flag:"",
	caracter:"",

	inicializar: function()
	{
		this.obtenerBotones()
	},

//presionar botones
	obtenerBotones: function()
	{		

		InicializaVariables();
		var teclas = document.getElementsByClassName('tecla')
		for(i=0;i<teclas.length;i++)
		{
			teclas[i].onclick = this.PresionarTecla
			teclas[i].onmouseout = this.SoltarTecla
		}
	},

//Metodo cuando se presiona tecla
	PresionarTecla: function(event)
	{				
		event.target.style.padding = "2px";		

		if (event.target.id != "igual")
		{
			flag = "";								
			op_old = "";
		} 

		switch(event.target.id)
		{
			case "1":
			case "2":
			case "3":
			case "4":
			case "5":
			case "6":
			case "7":
			case "8":
			case "9":
			case "0":
						num = document.getElementById('display').innerHTML;

						if(num.length < 8)
						{
							if (num == "0") num = event.target.id; else num = num + event.target.id;
							document.getElementById('display').innerHTML = num;				
						}						
						break;

			case "on":
						InicializaVariables();
						document.getElementById('display').innerHTML =  "0";		
						break;

			case "sign":
						num = num * (-1);						
						document.getElementById('display').innerHTML = num;		
						break;							

			case "raiz":
						num = Math.sqrt(num);												
						FormateaNumero();
						document.getElementById('display').innerHTML =  num;		
						break;	

			case "dividido":
						caracter = '/';
						AsignarNumOld();						
						document.getElementById('display').innerHTML =  "";															 					
						break;												

			case "por":
						caracter = '*';
						AsignarNumOld();						
						document.getElementById('display').innerHTML =  "";		
						break;

			case "menos":

						caracter = '-';
						AsignarNumOld();
						document.getElementById('display').innerHTML =  "";	
						break;																								
						
			case "punto":
						if(!document.getElementById('display').innerHTML.includes('.'))
							document.getElementById('display').innerHTML =  document.getElementById('display').innerHTML+'.';		
						break;					
					
			case "igual":						
						if (flag == "")
						{
							if (caracter != "") 
							{
								num_old = num_old + document.getElementById('display').innerHTML;						
								num = eval(num_old);							
								FormateaNumero();

								op_old = caracter+document.getElementById('display').innerHTML;						
								document.getElementById('display').innerHTML =  num;															
								flag = "X";
								num_old = "";
								caracter = "";							
							}
							else
							{
								document.getElementById('display').innerHTML =  0;															
								num_old = "";
								caracter = "";							
							}	

						}
						else
						{
							num = eval(document.getElementById('display').innerHTML+op_old);
							FormateaNumero();
							document.getElementById('display').innerHTML =  num;															
						}
						break;

			case "mas":
						caracter = '+';
						AsignarNumOld();
						document.getElementById('display').innerHTML =  "";	
						break;																																												
		}	
	},

// Metodo para soltar tecla		
	SoltarTecla: function(event)
	{
		event.target.style.padding = "0px";
	}

}

function FormateaNumero()	
{	
	var strNum = num.toString();
	if ( strNum.length > 8) 
		num = num.toPrecision(4);

	strNum = num.toString();
}

function AsignarNumOld()
{
	if (num_old == "")  num_old = document.getElementById('display').innerHTML+caracter;							
	else						
	{
		num = document.getElementById('display').innerHTML;								
		num_old = num_old + num + caracter;
	}		
}

function InicializaVariables()
{  		
	num 	= 0;
  	num_old = "";
  	flag	= "";
  	caracter= "";
  	op_old  = "";	
}

Operaciones.inicializar();