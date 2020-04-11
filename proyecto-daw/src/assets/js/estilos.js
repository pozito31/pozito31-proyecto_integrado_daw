//Funciones de javascript para insertar reloj en la pagina de inicio
var inicializarHora = function(){
    var fechaActual = new Date();
    var tiempoHoras = fechaActual.getHours();
    var tiempoMinutos = fechaActual.getMinutes();
    var tiempoSegundos = fechaActual.getSeconds();

    var mesActual = fechaActual.getMonth();
    var diaActual = fechaActual.getDay();
    var diaDelMes = fechaActual.getDate();
    var aActual = fechaActual.getFullYear();
    var amOpm;

    var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    var esteMes = meses[mesActual];

    var diasDeLaSemana = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
    var diaDeHoy = diasDeLaSemana[diaActual];

    amOpm = (tiempoHoras > 12) ? "pm" : "am";
    tiempoHoras = (tiempoHoras > 12) ? tiempoHoras - 12 : tiempoHoras;
    tiempoHoras = (tiempoHoras < 10) ? "0" + tiempoHoras : tiempoHoras;
    tiempoMinutos = (tiempoMinutos < 10) ? "0" + tiempoMinutos : tiempoMinutos;
    tiempoSegundos = (tiempoSegundos < 10) ? "0" + tiempoSegundos : tiempoSegundos;

    document.getElementById("laFecha").innerHTML =  diaDeHoy + " "+diaDelMes + " de "+esteMes + " del"+aActual;
    document.getElementById("info").innerHTML = tiempoHoras+":"+tiempoMinutos+":"+tiempoSegundos+ amOpm;
}
inicializarHora();
setInterval(inicializarHora , 1000);
//Funciones de javascript para insertar el calendario en la pagina de inicio
class Calendar {
    constructor(id) {
        this.cells = [];
        this.selectedDate = null;
        this.currentMonth = moment();
        this.elCalendar = document.getElementById(id);
        this.showTemplate();
        this.elGridBody = this.elCalendar.querySelector('.grid__body');
        this.elMonthName = this.elCalendar.querySelector('.month-name');
        this.showCells();
    }

    showTemplate() {
        this.elCalendar.innerHTML = this.getTemplate();
        this.addEventListenerToControls();
    }

    getTemplate() {
        let template = `
            <div class="calendar__header">
                <button type="button" class="control control--prev">&lt;</button>
                <span class="month-name">dic 2019</span>
                <button type="button" class="control control--next">&gt;</button>
            </div>
            <div class="calendar__body">
                <div class="grid">
                    <div class="grid__header">
                        <span class="grid__cell grid__cell--gh">Lun</span>
                        <span class="grid__cell grid__cell--gh">Mar</span>
                        <span class="grid__cell grid__cell--gh">Mié</span>
                        <span class="grid__cell grid__cell--gh">Jue</span>
                        <span class="grid__cell grid__cell--gh">Vie</span>
                        <span class="grid__cell grid__cell--gh">Sáb</span>
                        <span class="grid__cell grid__cell--gh">Dom</span>
                    </div>
                    <div class="grid__body">

                    </div>
                </div>
            </div>
        `;
        return template;
    }

    addEventListenerToControls() {
        let elControls = this.elCalendar.querySelectorAll('.control');
        elControls.forEach(elControl => {
            elControl.addEventListener('click', e => {
                let elTarget = e.target;
                if (elTarget.classList.contains('control--next')) {
                    this.changeMonth(true);
                } else {
                    this.changeMonth(false);
                }
                this.showCells();
            });
        });
    }

    changeMonth(next = true) {
        if (next) {
            this.currentMonth.add(1, 'months');
        } else {
            this.currentMonth.subtract(1, 'months');
        }
    }

    showCells() {
        this.cells = this.generateDates(this.currentMonth);
        if (this.cells === null) {
            console.error('No fue posible generar las fechas del calendario.');
            return;
        }

        this.elGridBody.innerHTML = '';
        let templateCells = '';
        let disabledClass = '';
        for (let i = 0; i < this.cells.length; i++) {
            disabledClass = '';
            if (!this.cells[i].isInCurrentMonth) {
                disabledClass = 'grid__cell--disabled';
            }
            // <span class="grid__cell grid__cell--gd grid__cell--selected">1</span>
            templateCells += `
                <span class="grid__cell grid__cell--gd ${disabledClass}" data-cell-id="${i}">
                    ${this.cells[i].date.date()}
                </span>
            `;
        }
        this.elMonthName.innerHTML = this.currentMonth.format('MMM YYYY');
        this.elGridBody.innerHTML = templateCells;
        this.addEventListenerToCells();
    }

    generateDates(monthToShow = moment()) {
        if (!moment.isMoment(monthToShow)) {
            return null;
        }
        let dateStart = moment(monthToShow).startOf('month');
        let dateEnd = moment(monthToShow).endOf('month');
        let cells = [];

        // Encontrar la primer fecha que se va a mostrar en el calendario
        while (dateStart.day() !== 1) {
            dateStart.subtract(1, 'days');
        }

        // Encontrar la última fecha que se va a mostrar en el calendario
        while (dateEnd.day() !== 0) {
            dateEnd.add(1, 'days');
        }

        // Genera las fechas del grid
        do {
            cells.push({
                date: moment(dateStart),
                isInCurrentMonth: dateStart.month() === monthToShow.month()
            });
            dateStart.add(1, 'days');
        } while (dateStart.isSameOrBefore(dateEnd));

        return cells;
    }

    addEventListenerToCells() {
        let elCells = this.elCalendar.querySelectorAll('.grid__cell--gd');
        elCells.forEach(elCell => {
            elCell.addEventListener('click', e => {
                let elTarget = e.target;
                if (elTarget.classList.contains('grid__cell--disabled') || elTarget.classList.contains('grid__cell--selected')) {
                    return;
                }
                // Deselecionar la celda anterior
                let selectedCell = this.elGridBody.querySelector('.grid__cell--selected');
                if (selectedCell) {
                    selectedCell.classList.remove('grid__cell--selected');
                }
                // Selecionar la nueva celda
                elTarget.classList.add('grid__cell--selected');
                this.selectedDate = this.cells[parseInt(elTarget.dataset.cellId)].date;
                // Lanzar evento change
                this.elCalendar.dispatchEvent(new Event('change'));
            });
        });
    }

    getElement() {
        return this.elCalendar;
    }

    value() {
        return this.selectedDate;
    }
}
