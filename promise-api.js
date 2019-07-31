//const p = Promise.resolve({ id: 1 });
// const p = Promise.reject(new Error('Error message...'));
// p.then(result => console.log(result))
//     .catch(err => console.log(err));



const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Async operation 1...');
        resolve(1);
        //reject(new Error('Someting wrong...'));
    }, 3000);
});

const p2 = new Promise((resolve) => {
    setTimeout(() => {
        console.log('Async operation 2...');
        resolve(2);
    }, 1000);
});

// Promise.all([p1, p2])
//     .then(result => console.log(result))
//     .catch(err => console.log('Error', err));

Promise.race([p1, p2])
     .then(result => console.log(result))
     .catch(err => console.log('Error', err));
