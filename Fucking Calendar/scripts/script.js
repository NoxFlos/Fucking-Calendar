const dom = {
    calendar: document.getElementById('calendar') // Тут что- то не так
}

console.log(dom)

const monthLength = [31,28,31,30,31,30,31,31,30,31,30,31] // Для невисокосного
const monthNames = [
'Январь', 
'Ферваль', 
'Март', 
'Апрель', 
'Май', 
'Июнь', 
'Июль', 
'Август', 
'Сентябрь',
'Октябрь',
'Ноябрь',
'Декабрь',
]
const months = [
    {
        title: 'ЕБАННЫЙ <br> НОВЫЙ ГОД',
        name: 'ЯНВАРЬ',
        days: 31,
    },
    {
        title: '',
        name: 'ФЕВРАЛЬ',
        days: 28,
    },
    {
        title: '',
        name: 'МАРТ',
        days: 31,
    },
    {
        title: '',
        name: 'АПРЕЛЬ',
        days: 30,
    },
    {
        title: '',
        name: 'МАЙ',
        days: 31,
    },
    {
        title: '',
        name: 'ИЮНЬ',
        days: 30,
    },
    {
        title: '',
        name: 'ИЮЛЬ',
        days: 31,
    },
    {
        title: '',
        name: 'АВГУСТ',
        days: 31,
    },
    {
        title: '',
        name: 'СЕНТЯБРЬ',
        days: 30,
    },
    {
        title: '',
        name: 'ОКТЯБРЬ',
        days: 31,
    },
    {
        title: '',
        name: 'НОЯБРЬ',
        days: 30,
    },
    {
        title: '',
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


function renderMonth(monthNumber, year){  //Пока year сходил нахуй, пока не следим за високосным годом
    const monthName = monthNames[monthNumber]
    const monthHeadString =  buildMonthHead('Заголовок', monthName) //Шапка
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