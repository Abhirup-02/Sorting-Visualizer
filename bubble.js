async function bubble() {
    console.log('In Bubble Sort')
    const ele = document.querySelectorAll('.bar')
    for (let i = 0; i < ele.length - 1; i++){
        //console.log('In ith loop')
        for (let j = 0; j < ele.length - i - 1; j++){
            //console.log('In jth loop')
            ele[j].style.background = 'blue'
            ele[j + 1].style.background = 'blue'
            if (parseInt(ele[j].style.height) > parseInt(ele[j + 1].style.height)) {
                await wait(delay)
                swap(ele[j], ele[j + 1])
            }
            ele[j].style.background = 'cyan'
            ele[j+1].style.background = 'cyan'
        }
        ele[ele.length - i - 1].style.background = 'green'
    }
    ele[0].style.background = 'green'
}

const bubbleSortbtn = document.querySelector('.bubbleSort')
bubbleSortbtn.addEventListener('click', async function () {
    disableSortingBtn()
    disableSizeSlider()
    disableNewArrayButton()
    await bubble()
    enableSortingBtn()
    enableSizeSlider()
    enableNewArrayButton()
})