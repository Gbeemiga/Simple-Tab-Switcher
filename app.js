
const boxes = document.querySelectorAll(`.boxes .content`)
const tabs = document.querySelectorAll(`.buttons button`)


tabs.forEach((tab,index) => {
    tab.addEventListener(`click`, () => {
        tabs.forEach((tab) =>(tab = tab.classList.remove(`active`)))
        tab.classList.add(`active`)
        boxes.forEach((box) =>((box) = box.classList.remove(`active`)))
        boxes[index].classList.add(`active`)
    })
})




















































// tabs.forEach((tab, index) => {
//     tab.addEventListener(`click`, () => {
//         tabs.forEach(tab => tab.classList.remove(`active`))
//         boxes.forEach(box => box.classList.remove(`active`))
//         tab.classList.add(`active`)
//         boxes[index].classList.add(`active`)

//     }
//     )
// })
