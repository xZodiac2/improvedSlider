const slider = document.querySelector('.slider')
const displayedSLiderItemsQuantity = 1 // CHANGE THIS VARIABLE TO CHANGE QUANTITY OF SLIDER ITEMS WHICH WILL DISPLAYED

// else slider will woek incorrectly
let errorRate = 0
if (displayedSLiderItemsQuantity % 3 === 0) {
    errorRate = 1
}

const sliderContainerWidth = document.querySelector('.slider-container').clientWidth
const sliderBlock = document.querySelector('.slider-block')
const sliderItemWidth = 1130 / displayedSLiderItemsQuantity
const sliderItems = document.querySelectorAll('.slider-item')
const sliderItemQuantity = sliderBlock.childElementCount
const sliderButtons = document.querySelectorAll('.slider-button')
const sliderWidth = sliderItemWidth * sliderItemQuantity

const designationListItemsQuantity = sliderItemQuantity
const designationList = document.querySelector('.designation-list')

// variable "showingSliderItemIndex" need for adds class "active" to marks
let showingSliderItemIndex = 0
let rightOffset = 0

// createing designation marks of slider items
let displayedSliderItems = false
let designationListItems

if (displayedSLiderItemsQuantity === 1) {
    displayedSliderItems= true
    for (i = 1; i <= designationListItemsQuantity; i++) {
        const designationListItem = document.createElement('li')
        designationList.appendChild(designationListItem)
    }

    // query to designation list items worth after the algorithm of creating designation marks because before this algorithm designation marks not exist
    designationListItems = document.querySelectorAll('.designation-list > li')

    // this HTML class adds to marks blue background
    designationList.firstChild.classList.add('active')
}

// changeing width of slider items
sliderItems.forEach(sliderItem => {
    sliderItem.style.minWidth = `${sliderItemWidth}px`
    sliderItem.style.maxWidth = `${sliderItemWidth}px`
})

// change width of slider block
sliderBlock.style.minWidth = `${sliderWidth}px`
sliderBlock.style.maxWidth = `${sliderWidth}px`

sliderButtons.forEach(button => {
    button.addEventListener('click', function() {
        // this algorithn removing all classes from designation list items
        if (displayedSliderItems) {
            designationListItems.forEach(designationListItem => {
                designationListItem.classList.remove('active')
            })
        }
        // main algorithm of offsets the slider
        if (button.classList.contains('next')) {
            if (rightOffset < sliderWidth - sliderContainerWidth - errorRate) {
                showingSliderItemIndex++
                rightOffset += sliderItemWidth
                sliderBlock.style.right = `${rightOffset}px`
            } else {
                showingSliderItemIndex = 0
                rightOffset = 0
                sliderBlock.style.right = `${rightOffset}px`
            }
        } else if (button.classList.contains('prev')) {
            if (rightOffset >= sliderItemWidth - errorRate) {
                showingSliderItemIndex--
                rightOffset -= sliderItemWidth
                sliderBlock.style.right = `${rightOffset}px`
            } else {
                if (displayedSliderItems) {
                    showingSliderItemIndex = designationListItems.length - 1
                }
                rightOffset = sliderWidth - sliderContainerWidth
                sliderBlock.style.right = `${rightOffset}px`
            }
        }
        // add class "active" to necessary mark
        if (displayedSliderItems) {
            designationList.children[showingSliderItemIndex].classList.add('active')
        }
    })
})

