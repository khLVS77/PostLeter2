let RezCol=0;
let RezSum=0;
let Prosti_OK=1;
let Recomend1_OK=1;
let Recomend2_OK=1;

function IS_ERROR(num)
/* Переірка вводу на помилку... */
{
	if (isNaN(parseInt(num,10)))
	{
		alert("Клькість Не може бути рядком чи пустим полем!!!!!");
		return "ERROR";		
	}
	else if (num < 0)
		{
			alert("Клькість Не може бути меньшою за 0 !!!!!");
 
	 		return "ERROR";
		}

	else if (Number.isInteger(num / 1)) 
	{
			alert("Все чудово!!!!");
			return 'ОК';
	
}
	else
	{
		alert("Клькість Не може бути не цілою!!!!!");
 
	 	return "ERROR";
	}	

}
//------------------------------------------------------------------------------------------------------

//------------------------------------------------------------------------------------------------------
function NOT_Negative()
{

//Перевірка на введення від'ємної кількості листів
//alert("NOT_Negative()");	
	let small = document.getElementById("small").value,
		medium = document.getElementById("medium").value,
		big = document.getElementById("big").value;
	let flag = 0;


	if (Number(small)< 0 || Number(medium)< 0 || Number(big) < 0)
	{
		window.alert("ПОМИЛКА!!!!\r\n Кількіть листів не може бути від'ємною!!!!");
		flag=1;
		Prosti_OK=0;
		document.getElementById("Cost").innerHTML="Кількіть листів не може бути від'ємною!!!!";
	};


	let small1 = document.getElementById("small1").value,
     		medium1 = document.getElementById("medium1").value,
     		big1 = document.getElementById("big1").value;
	
	if (Number(small1)< 0 || Number(medium1)< 0 || Number(big1) < 0)
	{
		if (flag == 0)
		{
			window.alert("ПОМИЛКА!!!!\r\n Кількіть листів не може бути від'ємною!!!!");
			flag=1;
		};

		Recomend1_OK=0;
		document.getElementById("Cost1").innerHTML="Кількіть листів не може бути від'ємною!!!!";
	};


	let small2 = document.getElementById("small2").value,
		medium2 = document.getElementById("medium2").value,
		big2 = document.getElementById("big2").value;
	if (Number(small2)< 0 || Number(medium2)< 0 || Number(big2) < 0)
	{
		if (flag == 0)
		{
			window.alert("ПОМИЛКА!!!!\r\n Кількіть листів не може бути від'ємною!!!!");
			flag=1;
		};
		Recomend2_OK=0;
		document.getElementById("Cost2").innerHTML="Кількіть листів не може бути від'ємною!!!!";
	};
}
//--------------------------------
function Marks()
{
const 
	V = 9,
	F = 17,
	M = 13.5,
	L = 11,
	D = 8,
	T = 3,
	X = 20;

window.alert("Номінали марок:\r\n\r\n".toUpperCase()+
	"V - "+V+ " грн\r\n"+
	"F - "+F+ " грн\r\n"+
	"M - "+M+ " грн\r\n"+
	"L - "+L+ " грн\r\n"+
	"D - "+D+ " грн\r\n"+
	"T - "+T+ " грн\r\n"+
	"Х - "+X+ " грн" );
}

//---------------------------------------
  
    /* функция добавления ведущих нулей */
    /* (если число меньше десяти, перед числом добавляем ноль) */
    function zero_first_format(value)
    {
        if (value < 10)
        {
            value='0'+value;
        }
        return value;
    }

    /* функция получения текущей даты и времени */
    function date_time()
    {
        var current_datetime = new Date();
        var day = zero_first_format(current_datetime.getDate());
        var month = zero_first_format(current_datetime.getMonth()+1);
        var year = current_datetime.getFullYear();
        var hours = zero_first_format(current_datetime.getHours());
        var minutes = zero_first_format(current_datetime.getMinutes());
        var seconds = zero_first_format(current_datetime.getSeconds());

        return day+"."+month+"."+year+" "+hours+":"+minutes+":"+seconds;
    } 

//-------------------------------------------
function Prosti()
{
 const smallCost = 9, // до 50 г
	mediumCost = 13.5, //51-250 г
	bigCost = 27; //більше 251 г
	
 let small = document.getElementById("small").value,
	medium = document.getElementById("medium").value,
	big = document.getElementById("big").value;
 

IS_ERROR(small);



 let Col = Number(small) + Number(medium) + Number(big);
 let Rez = (small * smallCost) + (medium * mediumCost) + (big * bigCost);



RezCol+=Col;
RezSum+=Rez;	
	document.getElementById("Cost").innerHTML="<b> Загальна кількість простих листів: </b>" + Col + "<b>; Загальна вартість простих листів: </b>" + Rez + " <b>грн.</b>";

}
//--------------------------------------

function Recomendovani1()
{
 const smallCost = 17, // до 50 г
	mediumCost = 21.5, //51-250 г
	bigCost = 35; //більше 251 г
	
 let small = document.getElementById("small1").value,
     medium = document.getElementById("medium1").value,
     big = document.getElementById("big1").value;
 let Col = Number(small) + Number(medium) + Number(big);
 let Rez = (small * smallCost) + (medium * mediumCost) + (big * bigCost);
	RezCol+=Col;
RezSum+=Rez;
	document.getElementById("Cost1").innerHTML="<b> Кількість листів: </b>" + Col + "<b>; Вартість листів: </b>" + Rez + " <b>грн.</b>";

}
//-----------------------------
function Recomendovani2()
{
 const smallCost = 35, // до 50 г
	mediumCost = 39.5, //51-250 г
	bigCost = 53; //більше 251 г
	
 let small = document.getElementById("small2").value,
     medium = document.getElementById("medium2").value,
     big = document.getElementById("big2").value;
 let Col = Number(small) + Number(medium) + Number(big);
 let Rez = (small * smallCost) + (medium * mediumCost) + (big * bigCost);
	RezCol+=Col;
RezSum+=Rez;
	document.getElementById("Cost2").innerHTML="<b> Кількість листів: </b>" + Col + "<b>; Вартість листів: </b>" + Rez + " <b>грн.</b>";

}
//--------------------------------------------
function Cost()
{
	RezCol=0;
	RezSum=0;
	
	Prosti_OK=1;
	Recomend1_OK=1;
	Recomend2_OK=1;

NOT_Negative();
if (Prosti_OK==1)
{
	//alert(Prosti_OK);
	Prosti();
};

if (Recomend1_OK==1)
{
	Recomendovani1();
};

if (Recomend2_OK==1)
{
	Recomendovani2();
};	

if (Prosti_OK*Recomend1_OK*Recomend2_OK != 1)
{
	document.getElementById("Cost3").innerHTML="УВАГА!!! Під час розрахунку виникла помилка !!!";
}
else
{
	document.getElementById("Cost3").innerHTML="<b> Загальна кількість листів: </b>" + RezCol + "<b>; Загальна вартість листів: </b>" + RezSum + " <b>грн.</b>";
};



/* выводим текущую дату и время на сайт в блок с id "current_date_time_block" */
document.getElementById('current_date_time_block').innerHTML = date_time();
}