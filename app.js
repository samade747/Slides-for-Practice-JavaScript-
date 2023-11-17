// slide no 208 - 209
// const btns = document.querySelectorAll('.btn');

// btns.forEach(function(btn){
//     btn.addEventListener('click', function(e) {
//         console.log(e.currentTarget);
//         e.currentTarget.style.color = 'green';
//     });
// });



// slide no 210 

const btn1 = document.querySelectorAll('.btn');

btn1.forEach(function(btn){
    btn.addEventListener('click', function(e){
        console.log(e.currentTarget);
        e.currentTarget.style.color = 'red'
    })
})
