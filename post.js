// Налаштування вартості листів. Глобальні константи

// -- прості листи --
let prosti_cost = 
{
	small: 9, // до 50 г
	medium: 13.5, //51-250 г
	big: 27 //більше 251 г
};
 
//---------------------------------------

// -- рекомендовані листи --

let recomendovani_procti_cost =
{
        small: 17, // до 50 г
	medium: 21.5, //51-250 г
	big: 35 //більше 251 г
};
//----------------------------------------

// -- рекомендовані з повідомленням про вручення

let recomendovani_zpovidomlennyam_cost =
{
small: 35, // до 50 г
	medium: 39.5, //51-250 г
	big: 53 //більше 251 г
};
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
function Prosti(cost)
{
	

 
let small = document.getElementById("small").value,
	medium = document.getElementById("medium").value,
	big = document.getElementById("big").value;
 let Col = Number(small) + Number(medium) + Number(big);
 let Rez = (small * cost.small) + (medium * cost.medium) + (big * cost.big);
RezCol+=Col;
RezSum+=Rez;	
	document.getElementById("Cost").innerHTML="<b> Загальна кількість простих листів: </b>" + Col + "<b>; Загальна вартість простих листів: </b>" + Rez + " <b>грн.</b>";

}
//--------------------------------

function Recomendovani1(cost)
{
 

	
 let small = document.getElementById("small1").value,
     medium = document.getElementById("medium1").value,
     big = document.getElementById("big1").value;
 let Col = Number(small) + Number(medium) + Number(big);
 let Rez = (small * cost.small) + (medium * cost.medium) + (big * cost.big);
	RezCol+=Col;
RezSum+=Rez;
	document.getElementById("Cost1").innerHTML="<b> Кількість листів: </b>" + Col + "<b>; Вартість листів: </b>" + Rez + " <b>грн.</b>";

}
//-----------------------------

function Recomendovani2(cost)
{
 
//alert(cost.small.);
//alert(cost.medium);
//alert(cost.big);
	
 let small = document.getElementById("small2").value,
     medium = document.getElementById("medium2").value,
     big = document.getElementById("big2").value;
 let Col = Number(small) + Number(medium) + Number(big);
let Rez = (small * cost.small) + (medium * cost.medium) + (big * cost.big);
	RezCol+=Col;
RezSum+=Rez;
	document.getElementById("Cost2").innerHTML="<b> Кількість листів: </b>" + Col + "<b>; Вартість листів: </b>" + Rez + " <b>грн.</b>";

}
//--------------------------------------------

function Cost()
{
	RezCol=0;
	RezSum=0;
	
	Prosti(prosti_cost);
	Recomendovani1(recomendovani_procti_cost);
	Recomendovani2(recomendovani_zpovidomlennyam_cost);

document.getElementById("Cost3").innerHTML="<b> Загальна кількість листів: </b>" + RezCol + "<b>; Загальна вартість листів: </b>" + RezSum + " <b>грн.</b>";

/* выводим текущую дату и время на сайт в блок с id "current_date_time_block" */
document.getElementById('current_date_time_block').innerHTML = date_time();
}