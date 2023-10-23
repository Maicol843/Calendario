document.addEventListener("DOMContentLoaded", function () {
    const currentMonthYearElement = document.getElementById("currentMonthYear");
    const calendarBody = document.getElementById("calendarBody");

    function generateCalendar() {
        const currentDate = new Date();
        const currentMonth = currentDate.getMonth();
        const currentYear = currentDate.getFullYear();

        currentMonthYearElement.textContent = `${getMonthName(currentMonth)} ${currentYear}`;

        const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
        const lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0);
        const daysInMonth = lastDayOfMonth.getDate();
        const firstDayOfWeek = firstDayOfMonth.getDay();

        let calendarHTML = "";

        for (let i = 0; i < firstDayOfWeek; i++) {
            calendarHTML += "<td></td>";
        }

        for (let day = 1; day <= daysInMonth; day++) {
            const isToday = day === currentDate.getDate() && currentMonth === currentDate.getMonth();
            const dayClass = isToday ? "today" : "";
            calendarHTML += `<td class="${dayClass}">${day}</td>`;
            if ((day + firstDayOfWeek) % 7 === 0) {
                calendarHTML += "<tr></tr>";
            }
        }

        calendarBody.innerHTML = calendarHTML;
    }

    function getMonthName(monthIndex) {
        const months = [
            "Enero",
            "Febrero",
            "Marzo",
            "Abril",
            "Mayo",
            "Junio",
            "Julio",
            "Agosto",
            "Septiembre",
            "Octubre",
            "Noviembre",
            "Diciembre",
        ];
        return months[monthIndex];
    }

    generateCalendar();
});
