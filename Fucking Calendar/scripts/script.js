const dom = {
    calendar: document.getElementById('calendar') // Тут что- то не так
}

console.log(dom)

 // Для невисокосного

const months = [
    {
        title: 'ЕБАНЫЙ <br> НОВЫЙ ГОД',
        name: 'ЯНВАРЬ',
        days: 31,
    },
    {
        title: 'ЕБАНЫЙ <br> ХОЛОД',
        name: 'ФЕВРАЛЬ',
        days: 28,
    },
    {
        title: 'ЕБАНАЯ <br> ГРЯЗЬ',
        name: 'МАРТ',
        days: 31,
    },
    {
        title: 'ЕБАНЫЕ <br> ШУТНИКИ',
        name: 'АПРЕЛЬ',
        days: 30,
    },
    {
        title: 'ЕБАНЫЙ <br> ДЕНЬ ТРУДА',
        name: 'МАЙ',
        days: 31,
    },
    {
        title: 'ЕБАНЫЕ <br> ШКОЛЬНИКИ',
        name: 'ИЮНЬ',
        days: 30,
    },
    {
        title: 'ЕБАНАЯ <br> ЖАРА',
        name: 'ИЮЛЬ',
        days: 31,
    },
    {
        title: 'ЕБАНЫЙ <br> ОТПУСК',
        name: 'АВГУСТ',
        days: 31,
    },
    {
        title: 'ЕБАНОЕ <br> 3 СЕНТЯБРЯ',
        name: 'СЕНТЯБРЬ',
        days: 30,
    },
    {
        title: 'ЕБАНЫЙ <br> ДОЖДЬ',
        name: 'ОКТЯБРЬ',
        days: 31,
    },
    {
        title: 'ЕБАНЫЕ <br> СКИДКИ',
        name: 'НОЯБРЬ',
        days: 30,
    },
    {
        title: 'ЕБАНЫЕ <br> ПОДАРКИ',
        name: 'ДЕКАБРЬ',
        days: 31,
    },
    
]
const weekDayNames = [  //Массив дней недели. 
    'ПН', 
    'ВТ',
    'СП', 
    'ЧТ',
    'ПТ',
    'СБ',
    'ВС',
]


function renderMonth(monthIdx, year){  //Пока year сходил нахуй, пока не следим за високосным годом
    const month = months [monthIdx]
    const monthHeadString =  buildMonthHead(month.title, month.name) //Шапка
    const monthBox = document.createElement('div')
    monthBox.className ='month'
    monthBox.innerHTML = monthHeadString
    dom.calendar.appendChild(monthBox)
}


for (let i=0 ; i < 12; i++) {
renderMonth( i , 2022) 
} 

function buildMonthHead(title, monthName){   // Ебанный новый год, Январь
    return `
    <div class="month_title"> ${title}</div>
    <div class="month_name"> ${monthName} </div>
    `
}