import React from "react";
import "./getMonth.css"

export default function GetMonth() {
    const date = new Date();
    let day = date.getDate();
    let year = date.getFullYear();
    var giorno;
    var Month;
    switch (date.getMonth()) {
        default:
        Month = "";
        break;
        case 0:
        Month = "Gennaio";
        break;
        case 1:
        Month = "Febbraio";
        break;
        case 2:
        Month = "Marzo";
        break;
        case 3:
        Month = "Aprile";
        break;
        case 4:
        Month = "Maggio";
        break;
        case 5:
        Month = "Giugno";
        break;
        case 6:
        Month = "Luglio";
        break;
        case 7:
        Month = "Agosto";
        break;
        case 8:
        Month = "Settembre";
        break;
        case 9:
        Month = "Ottobre";
        break;
        case 10: 
        Month = "Novembre";
        break;
        case 11:
        Month = "Dicembre";
        break;
        }

   switch (date.getDay()) {
   default:
   giorno = "";
   break;
   case 0:
   giorno = "domenica";
   break;
   case 1:
   giorno = "lunedì";
   break;
   case 2:
   giorno = "martedì";
   break;
   case 3:
   giorno = "mercoledì";
   break;
   case 4:
   giorno = "giovedì";
   break;
   case 5:
   giorno = "venerdì";
   break;
   case 6:
   giorno = "sabato";
   break;
   }

return(
    <h3 className="date-container">{giorno} , {day} {Month} , {year}</h3>
)
}