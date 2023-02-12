const slider = document.querySelector('.slider')

const showsSliderItems = 1  // <----- CHANGE THIS PARAMETER TO CHANGE QUANTITY SLIDER ITEMS WILL BE DISPLAYED

// else slider will work incorretly
let errorRate = 0
if (showsSliderItems % 3 === 0) {
    errorRate = 10
}
if (showsSliderItems === 0) {
    slider.innerHTML = ''
}

// query to buttons and slider block
const sliderBlock = document.querySelector('.slider-block')
const sliderButtonPrev = document.querySelector('.slider-button-prev')
const sliderButtonNext = document.querySelector('.slider-button-next')
const sliderContainerWidth = document.querySelector('.slider-container').clientWidth

// change slider block width
const sliderItemWidth = sliderContainerWidth / showsSliderItems
const sliderItemQuantity = sliderBlock.childElementCount
const sliderBlockWidth = sliderItemQuantity * sliderItemWidth
sliderBlock.style.minWidth = `${sliderBlockWidth}px`
sliderBlock.style.maxWidth = `${sliderBlockWidth}px`

// while this var will be changing slider be sliding
let rightOffset = 0

sliderButtonPrev.addEventListener('click', function() {
    if (rightOffset < sliderItemWidth - errorRate) {
        rightOffset = sliderBlockWidth - sliderContainerWidth
        sliderBlock.style.right = `${rightOffset}px`
    } else {
        rightOffset -= sliderItemWidth
        sliderBlock.style.right = `${rightOffset}px`
    }
})

sliderButtonNext.addEventListener('click', function() {
    if (rightOffset >= sliderBlockWidth - sliderContainerWidth) {
        rightOffset = 0
        sliderBlock.style.right = `${rightOffset}px`
    } else {
        rightOffset += sliderItemWidth
        sliderBlock.style.right = `${rightOffset}px`
    }
})
