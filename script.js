// CHANGE THIS PARAMETER TO CHANGE QUANTITY SLIDER ITEMS WILL BE SHOW
const showsSliderItems = 1


// else slider will work incorretly
let errorRate = 0
if (showsSliderItems % 3 === 0) {
    errorRate = 10
}

const sliderItemWidth = 1130 / showsSliderItems
// query to buttons and slider block
const sliderBlock = document.querySelector('.slider-block')
const sliderButtonPrev = document.querySelector('.slider-button-prev')
const sliderButtonNext = document.querySelector('.slider-button-next')
const sliderItemCount = sliderBlock.childElementCount
const sliderBlockWidth = sliderItemCount * sliderItemWidth
const sliderContainerWIdth = document.querySelector('.slider-container').clientWidth
// change slider block width
sliderBlock.style.minWidth = `${sliderBlockWidth}px`
sliderBlock.style.maxWidth = `${sliderBlockWidth}px`
// while this var will be changing slider be sliding
let rightOffset = 0

sliderButtonPrev.addEventListener('click', function() {
    if (rightOffset < sliderItemWidth - errorRate) {
        rightOffset = sliderBlockWidth - sliderContainerWIdth
        sliderBlock.style.right = `${rightOffset}px`
    } else {
        rightOffset -= sliderItemWidth
        sliderBlock.style.right = `${rightOffset}px`
    }
})

sliderButtonNext.addEventListener('click', function() {
    if (rightOffset >= sliderBlockWidth - sliderContainerWIdth) {
        rightOffset = 0
        sliderBlock.style.right = `${rightOffset}px`
    } else {
        rightOffset += sliderItemWidth
        sliderBlock.style.right = `${rightOffset}px`
    }
})
