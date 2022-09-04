//Swap functions for sorting algorithms 
function swap(el1, el2) {
    // console.log('In Swap()')

    let temp = el1.style.height
    el1.style.height = el2.style.height
    el2.style.height = temp
}

// Disable other sorting buttons when one sorting algo is running

function disableSortingBtn() {
    document.querySelector('.bubbleSort').disabled = true
    document.querySelector('.insertionSort').disabled = true
    document.querySelector('.mergeSort').disabled = true
    document.querySelector('.quickSort').disabled = true
    document.querySelector('.selectionSort').disabled = true
}

//Enable sorting buttons used in function
function enableSortingBtn() {
    document.querySelector('.bubbleSort').disabled = false
    document.querySelector('.insertionSort').disabled = false
    document.querySelector('.mergeSort').disabled = false
    document.querySelector('.quickSort').disabled = false
    document.querySelector('.selectionSort').disabled = false
}

// Disable size slider while a algo is running
function disableSizeSlider() {
    document.querySelector('#arr_sz').disabled = true
}

//Enable size slider
function enableSizeSlider() {
    document.querySelector('#arr_sz').disabled = false
}

//Disable new array button used in conjunction with enable, so it gets disabled during sorting and enabled after sorting is done
function disableNewArrayButton() {
    document.querySelector('.newArray').disabled = true
}

// Enable new Array button
function enableNewArrayButton() {
    document.querySelector('.newArray').disabled = false
}

// Used in async function so that we can animate the sorting 
function wait(milisec) {
    return new Promise(resolve => {
        setTimeout(() => { resolve('') }, milisec)
    })
}


//Selecting size slider from DOM
let arraySize = document.querySelector('#arr_sz')

//Event listener to update the bar size on the UI
arraySize.addEventListener('input', () => {
    createNewArray(parseInt(arraySize.value))
})

//Default input for wait function(250ms)
let delay = 260

//Selecting speed slider from DOM
let delayElement = document.querySelector('#speed_input')

//Event listener to update delay 
delayElement.addEventListener('input', () => {
    // console.log(delayElement.value, typeof (delayElement.value))
    delay = 320 - parseInt(delayElement.value)
})

//create array to store randomly generated numbers
let array = []

//Call to display bars when visiting the site
createNewArray()

function createNewArray(noOfbars = 60) {

    //Calling helper function to delete old bars
    deleteChild()

    //creating an array of random numbers
    array = []
    for (let i = 0; i < noOfbars; i++){
        array.push(Math.floor(Math.random() *250) + 1)
    }
    console.log(array)

    // Select the div bars element 
    const bars = document.querySelector('#bars')

    //create multiple element div using loop and adding class 'bar col'
    for (let i = 0; i < noOfbars; i++){
        let bar = document.createElement('div')
        bar.style.height = `${array[i] * 2}px`
        bar.classList.add('bar')
        bar.classList.add('flex-item')
        bar.classList.add(`barNo${i}`)
        bars.appendChild(bar)
    }
}

function deleteChild() {
    const bar = document.querySelector('#bars')
    bar.innerHTML = ''
}

//Selecting new array button from DOM
const newArray = document.querySelector('#newArray')
newArray.addEventListener('click', () => { 
    enableSortingBtn()
    enableSizeSlider()
    createNewArray(arraySize.value)
})
