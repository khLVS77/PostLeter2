// Налаштування вартості листів. Глобальні константи

// -- прості листи --
const SMALL_COST_PROSTI = 9, // до 50 г
	MEDIUM_COST_PROSTI = 13.5, //51-250 г
	BIG_COST_PROSTI = 27; //більше 251 г
//---------------------------------------

// -- рекомендовані листи --
const SMALL_COST_PROCTI_RECOMENDOVANI = 17, // до 50 г
	MEDIUM_COST_PROSTI_RECOMENDOVANI = 21.5, //51-250 г
	BIG_COST_PROSTI_RECOMENDOVANI = 35; //більше 251 г
//----------------------------------------

// -- рекомендлвані з повідомленням про вручення

const SMALL_COST_RECOMENDOVANI_ZPOVADOMLENNYAM = 35, // до 50 г
	MEDIUM_COST_RECOMENDOVANI_ZPOVADOMLENNYAM = 39.5, //51-250 г
	BIG_COST_RECOMENDOVANIt_ZPOVADOMLENNYAM = 53; //більше 251 г
//----------------------------------------


let RezCol=0;
let RezSum=0;

//---------------------------------------
// .... Взято з інтернету ...
  
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
	
 let small = document.getElementById("small").value,
	medium = document.getElementById("medium").value,
	big = document.getElementById("big").value;
 let Col = Number(small) + Number(medium) + Number(big);
 let Rez = (small * SMALL_COST_PROSTI) + (medium * MEDIUM_COST_PROSTI) + (big * BIG_COST_PROSTI);
RezCol+=Col;
RezSum+=Rez;	
	document.getElementById("Cost").innerHTML="<b> Загальна кількість простих листів: </b>" + Col + "<b>; Загальна вартість простих листів: </b>" + Rez + " <b>грн.</b>";

}
//--------------------------------

function Recomendovani1()
{
 
	
 let small = document.getElementById("small1").value,
     medium = document.getElementById("medium1").value,
     big = document.getElementById("big1").value;
 let Col = Number(small) + Number(medium) + Number(big);
 let Rez = (small * SMALL_COST_PROCTI_RECOMENDOVANI) + (medium * MEDIUM_COST_PROSTI_RECOMENDOVANI) + (big * BIG_COST_PROSTI_RECOMENDOVANI);
	RezCol+=Col;
RezSum+=Rez;
	document.getElementById("Cost1").innerHTML="<b> Кількість листів: </b>" + Col + "<b>; Вартість листів: </b>" + Rez + " <b>грн.</b>";

}
//-----------------------------

function Recomendovani2()
{
 
	
 let small = document.getElementById("small2").value,
     medium = document.getElementById("medium2").value,
     big = document.getElementById("big2").value;
 let Col = Number(small) + Number(medium) + Number(big);
 let Rez = (small * SMALL_COST_RECOMENDOVANI_ZPOVADOMLENNYAM) + (medium * MEDIUM_COST_RECOMENDOVANI_ZPOVADOMLENNYAM) + (big * BIG_COST_RECOMENDOVANIt_ZPOVADOMLENNYAM);
	RezCol+=Col;
RezSum+=Rez;
	document.getElementById("Cost2").innerHTML="<b> Кількість листів: </b>" + Col + "<b>; Вартість листів: </b>" + Rez + " <b>грн.</b>";

}
//--------------------------------------------

function Cost()
{
	RezCol=0;
	RezSum=0;
	
	Prosti();
	Recomendovani1();
	Recomendovani2();

document.getElementById("Cost3").innerHTML="<b> Загальна кількість листів: </b>" + RezCol + "<b>; Загальна вартість листів: </b>" + RezSum + " <b>грн.</b>";

/* выводим текущую дату и время на сайт в блок с id "current_date_time_block" */
document.getElementById('current_date_time_block').innerHTML = date_time();
}