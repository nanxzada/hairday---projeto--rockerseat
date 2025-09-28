import { schedulesDay } from './load.js'
import { scheduleCancel } from "../../services/schedule-cancel.js"
const periods = document.querySelectorAll(".period")


//Gera evento click para cada lista (manha, tarde, noite)
periods.forEach((period) => {
    // Captura o evento de clique na lista.
    period.addEventListener("click", async (event) => {
        if (event.target.classList.contains("cancel-icon")){
            //obtém o li pai do elemeto clicado.
            const item = event.target.closest("li")

            //Pega o id od agendamento para remover.
            const { id } = item.dataset

            //Confirma que o id foi selecionado.
            if(id) {
                //Confirma se o usuário quer cancelar;
                const isConfirm = confirm(
                    "Tem certeza que deseja cancelar esse agendamento?"
                )
            if(isConfirm){
                //Faz a requisição na API para cancelar.
                await scheduleCancel({id})
                
                //Recarrega os agendamentos
                schedulesDay()
            
            }
        }
    }
})
})

