let scheduledAppointmentsDiv = document.querySelectorAll('.scheduled-appointments')
let totalPatientsDiv = document.querySelectorAll('.total-patients')
let waitingRoomDiv = document.querySelectorAll('.waiting-room')
let appointmentsDiv = document.getElementById('appointments')
let activitiesDiv = document.getElementById('activities')

const getData = async () => {
    await fetch('https://612b668c22bb490017893b1d.mockapi.io/health/v1/patients')
        .then(res => res.json())
        .then(data => {
            for (div of scheduledAppointmentsDiv) {
                div.innerHTML = data?.scheduledAppointments
            }

            for(div of totalPatientsDiv) {
                div.innerHTML = data?.totalPatients
            }

            for(div of waitingRoomDiv) {
                div.innerHTML = data?.waitinfRoom
            }

            for(appointment of data?.appointments){
                
                let time = new Date(appointment.createdAt)

                let hour, displayHour, displayMinute, period;
            
                if(time.getHours() > 11){
                hour = time.getHours() - 12;
                period = 'pm'
                if(hour <= 9){
                    displayHour = '0' + hour;
                } else {
                    displayHour = hour;
                }
                } else {
                    hour = time.getHours();
                    period = 'am'
                    if(hour <= 9){
                        displayHour = '0' + hour;
                    } else {
                        displayHour = hour;
                    }
                }
                if(time.getMinutes() <= 9){
                    displayMinute = '0' + time.getMinutes()
                } else {
                    displayMinute = time.getMinutes()
                }

                appointmentsDiv.innerHTML += `
                    <div class="appointment-details">
                        <div class="time">${displayHour}:${displayMinute}${period}</div>
                        <div class="appointment-name-img gr-bg br-8">
                            <div class="image">
                                <img src="${'../images/patient-appointment.svg'}" alt="">
                            </div>
                            <div class="name">${appointment.name}</div>
                            <div>
                                <img src="../images/three-dots.svg" alt="">
                            </div>
                        </div>
                    </div>
                `
            }
        })

    await fetch('https://612b668c22bb490017893b1d.mockapi.io/health/v1/activites')
        .then(res => res.json())
        .then(data => {
            for(item of data.activities){
                if(item.type === 'report'){
                    activitiesDiv.innerHTML += `
                    <div>
                        <img src="../images/report-img.svg" alt="">
                        <p>${item.title}</p>
                    </div>
                `
                } else if(item.type === 'interview'){
                    activitiesDiv.innerHTML += `
                    <div>
                        <img src="../images/interview-icon.svg" alt="">
                        <p>${item.title}</p>
                    </div>
                `
                }
            }
        })

}

getData()