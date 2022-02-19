// Print numbers from 4 to 400 on the screen
let out = document.getElementById('out');
let tmp = '';

for (let i=0; i<=400; i=i+1){
    tmp = tmp + i + ' ';
}


// Output the sequence numbers 4, 7, 10, 13 using a loop

out.innerHTML = tmp;