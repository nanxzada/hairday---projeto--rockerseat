import { scheduleFetchByDay } from "../../services/schedule-fetch-by-day.js"
import { hoursLoad } from "../form/hours-load.js"
import {schedulesShow} from "../schedules/show.js"

//Seleciona o input de data.
const selectedDate = document.getElementById("date")


export async function schedulesDay() {
    //Obtem o valor do input de data.
    const date = selectedDate.value
    
    //Busca na API os agendamentos
    const dailySchedules = await scheduleFetchByDay({ date })
    
    //Exibe os agendamentos.
    schedulesShow({ dailySchedules })

    // Renderiza as horas disponiuveis.
    hoursLoad({ date, dailySchedules })
    // Os horarios disponiveis (horario futuro + não agendado) do lado esquerdo (form)

   

}