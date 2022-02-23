let image_array = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg']
let array_length = image_array.length
let i = 0
let set = setInterval(slider_func, 2000)
// slider_func->function call
//5000-> 5 second

function slider_func() {
    i++
    i = i % array_length
    // i=0%5=0
    // 1%5=1
    // 2%5=2
    // 5%5=4
    // 5%5=0
    document.querySelector('img').src = `Image/${image_array[i]}`
}

function next() {
    i++
    i = i % array_length
    document.querySelector('img').src = `Image/${image_array[i]}`
}

function prev() {
    i--
    if (i < 0) {
        i = array_length - 1
    }
    document.querySelector('img').src = `Image/${image_array[i]}`
}





//     j--
//     if (j > 0) {


//         document.querySelector('img').src = `images/${image_array[j]}`
//     }

//     else{
//         j = 4
//     }

// }