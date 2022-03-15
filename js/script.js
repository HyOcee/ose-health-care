let scheduledAppointmentsDiv = document.querySelectorAll('.scheduled-appointments')
let totalPatientsDiv = document.querySelectorAll('.total-patients')
let waitingRoomDiv = document.querySelectorAll('.waiting-room')
let appointmentsDiv = document.getElementById('appointments')

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
            console.log(typeof(appointment.createdAt))
            appointmentsDiv.innerHTML += `
                <div class="appointment-details">
                    <div class="time">10:00 pm</div>
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
}

getData()