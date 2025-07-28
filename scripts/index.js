import { getToday, getRange, getRandom, getDate } from "./data.js";

async function renderPage() {
    pickTheDate(undefined)
    picOfTheDay()
    randomPics()
    pickTheRange('', '')
}

renderPage()


//to make the pic of the day section
async function picOfTheDay() {

    //get data
    const data = await getToday()

    //generate html
    const id = '#today'
    const html = `
        <div class="pic-container">
            <div class="pic-background">

            </div>
            <div class="text quicksand hide">
                <p>Title: ${data.title}</p>
              ${data.explanation}
            </div>
          </div>

          <div class="date fredoka">
            ${data.date}
          </div>
    
    `

    //insert html
    document.querySelector(`${id} .generated-content`).innerHTML = html

    const picUrl = data.hdurl || data.url
    changeTheImage(id, picUrl)
    showText(id)

}


//pick a date section
async function pickTheDate(userDate) {
    const date = userDate || '2002-11-28'
    const data = await getDate(date)
    const id = '#date'

    const html = `
        <div class="pic-container">
            <div class="pic-background">


            </div>
            <div class="text quicksand hide">
                <p>Title: ${data.title}</p>
              ${data.explanation}
            </div>
          </div>
    `

    document.querySelector(`${id} .generated-content`).innerHTML = html

    const picUrl = data.hdurl || data.url
    changeTheImage(id, picUrl)
    showText(id)
}
//enter button for pick the date section
document.querySelector('#date .enter-btn').addEventListener('click', () => {
    const date = document.querySelector('#date .one-date-input').value
    pickTheDate(date)
})


//generate 4 random pics section
async function randomPics() {
    const data = await getRandom()
    // console.log(data)

    const html = generateCardsHtml(data)

    document.querySelector('#random .random-pics-cont').innerHTML = html

    cardsTextImage(data, 'random')

}
//for the generate button
document.querySelector('#random .gen-btn').addEventListener('click', () => {
    // console.log('click')
    randomPics()
})



//pick a range section
async function pickTheRange(start, end) {
    const startDate = start || '2025-01-01'
    const endDate = end || '2025-01-02'
    const data = await getRange(startDate, endDate)


    const html = generateCardsHtml(data)
    document.querySelector('#range .range-pics').innerHTML = html

    cardsTextImage(data, 'range')
}

//for the range btn
document.querySelector('#range .enter-btn').addEventListener('click', () => {
    const startDate = document.querySelector('#range #strt-date').value || ''
    const endDate = document.querySelector('#range #end-date').value || ''
    pickTheRange(startDate, endDate)
})


//animation
//for the explaination text
function showText(id) {

    const container = document.querySelector(`${id} .pic-container`)
    const bg = document.querySelector(`${id} .pic-background`)
    const text = document.querySelector(`${id} .text`)

    //when we hover over the card
    container.addEventListener('mouseenter', () => {
        bg.classList.add('blur')
        text.classList.remove('hide')
    })

    //when we leave the card
    container.addEventListener('mouseleave', () => {
        bg.classList.remove('blur')
        text.classList.add('hide')
    })
}

//for the background image
function changeTheImage(id, url) {
    document.querySelector(`${id} .pic-background`).style.backgroundImage = `url(${url})`
}


//random images and range images section
function generateCardsHtml(data) {
    let html = ''

    data.forEach((day, index) => {

        html += `
            <div class="card c${index + 1}">

                <div class="pic-container">
                    <div class="pic-background">

                    </div>
                    <div class="text quicksand hide">
                <p>Title: ${day.title}</p>
              ${day.explanation}
            </div>
                </div>

                <div class="date fredoka">
                    ${day.date}
                </div>
            </div>
        `

    })

    return html
}
function cardsTextImage(data, id) {


    data.forEach((day, index) => {
        const picUrl = day.hdurl || day.url

        changeTheImage(`#${id} .c${index + 1}`, picUrl)
        showText(`#${id} .c${index + 1}`)
    })
}
