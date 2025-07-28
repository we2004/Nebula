

// const key = 'BI6G89emt5z1nqh5tkqHETaOsEbr6eXfc84aodGd'
// const key = 'iIUUTTdIZcidWZsd2dwk56hcc26u2DCnFZtYVJ9D'
const key = 'knqn5sC9nA7SrTsf0n4XqFkvmhshDlE3jIX93wPG'


const errorData = {
    stat: false,
    error: "Failed to load data",
    hdurl: 'https://media.istockphoto.com/id/1409329028/vector/no-picture-available-placeholder-thumbnail-icon-illustration-design.jpg?s=612x612&w=0&k=20&c=_zOuJu755g2eEUioiOUdz_mHKJQJn-tDgIAhQzyeKUQ=',
    title: "No Image Available",
    explanation: "NASA API failed to respond.",
    date: "Failed"
};
// to get the image of the day
export async function getToday() {
    try {
        const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${key}`)
        if (!response.ok) {
            throw new Error(`Error: ${response.status}`)
        }
        const data = await response.json()
        return data
    } catch (error) {
        console.error(`Faild to fetch image: `, error)
        return errorData
    }

}

// to get images from startDate to endDate
export async function getRange(startDate, endDate) {
    try {
        const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${key}&start_date=${startDate}&end_date=${endDate}`)
        if (!response.ok) {
            throw new Error(`Error: ${response.status}`)
        }
        const data = await response.json()
        return data
    } catch (error) {
        console.error(`Faild to fetch image: `, error)
        return errorData
    }

}

//to get four random images
export async function getRandom() {
    try {
        const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${key}&count=4`)
        if (!response.ok) {
            throw new Error(`Error: ${response.status}`)
        }
        const data = await response.json()
        return data
    } catch (error) {
        console.error(`Faild to fetch image: `, error)
        return errorData
    }

}

//to get the image on day date
export async function getDate(date) {
    try {
        const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${key}&date=${date}`)
        if (!response.ok) {
            throw new Error(`Error: ${response.status}`)
        }
        const data = await response.json()
        return data
    } catch (error) {
        console.error(`Faild to fetch image: `, error)
        return errorData
    }

}