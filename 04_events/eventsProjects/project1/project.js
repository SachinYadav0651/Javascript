const body = document.querySelector('body');
// Select all color-box elements
const colorBoxes = document.querySelectorAll('.color-box');

colorBoxes.forEach(function(colorbox){
    colorbox.addEventListener('click', function(e){
        console.log(e);
        console.log(e.target);
        if(e.target.id === 'red'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'green'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'blue'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'orange'){
            body.style.backgroundColor = e.target.id;
        }
    });
});


// Select all color-box elements
// const colorBoxes = document.querySelectorAll('.color-box');

// // Add a click event listener to each one
// colorBoxes.forEach(box => {
//   box.addEventListener('click', () => {
//     // Get the color value from data-color attribute
//     const selectedColor = box.getAttribute('data-color');

//     // Change the background color of the entire body
//     document.body.style.backgroundColor = selectedColor;
//   });
// });




