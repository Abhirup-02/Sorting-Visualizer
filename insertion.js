async function insertion() {
    console.log('In Insertion Sort')
    const ele = document.querySelectorAll('.bar')
    ele[0].style.background = 'green'
    for (let i = 0; i < ele.length; i++){
        let j = i - 1
        let key = ele[i].style.height 
        ele[i].style.background = 'blue'

        await wait(delay)

        while (j >= 0 && (parseInt(ele[j].style.height) > parseInt(key))) {
            ele[j].style.background = 'blue'
            ele[j + 1].style.height = ele[j].style.height
            j--;

            await wait(delay)

            //color
            for (let k = i; k >= 0; k--){
                ele[k].style.background = 'green'
            }
                
        }
        ele[j + 1].style.height = key 
        
        //color the last bar to green
        ele[i].style.background = 'green'
    }
}

const insertionSortbtn = document.querySelector('.insertionSort')
insertionSortbtn.addEventListener('click', async function () {
    disableSortingBtn()
    disableSizeSlider()
    disableNewArrayButton()
    await insertion()
    enableSortingBtn()
    enableSizeSlider()
    enableNewArrayButton()
})