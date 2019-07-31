/*** 1 ***/
// console.log('Before');
// const user = getUser(1);
// console.log(user);
// console.log('After');

// function getUser(id) {
//     setTimeout(() => {
//         console.log('Reading a user from database...');
//         return { id: id, userName: 'Prueba' };
//     }, 2000);
// }


/*** 2 ***/
// console.log('Before');
// getUser(1, (user) => {
//     console.log(user);
//     getRepositories(user.userName, (repos) => {
//         console.log(repos);
//         getCommits(repos[0], (commits) => {
//             console.log(commits);
//         });
//     });
// });
// console.log('After');

// function getUser(id, callback) {
//     setTimeout(() => {
//         console.log('Reading a user from database...');
//         callback({ id: id, userName: 'Prueba' });
//     }, 2000);
// }

// function getRepositories(username, callback) {
//     setTimeout(() => {
//         callback([ 'Repo1', 'Repo2', 'Repo3' ]);
//     }, 2000);
// }

// function getCommits(repo, callback) {
//     setTimeout(() => {
//         callback([ 'Commits1', 'Commits2', 'Commits3' ]);
//     }, 2000);
// }


/*** 3 ***/
// console.log('Before');
// getUser(1, getRepositories2);
// console.log('After');

// function getUser(id, callback) {
//     setTimeout(() => {
//         console.log('Reading a user from database...');
//         callback({ id: id, userName: 'Prueba' });
//     }, 2000);
// }

// function getRepositories2(user) {
//     console.log(user);
//     getRepositories(user.userName, getCommits2);
// }

// function getCommits2(repos) {
//     console.log(repos);
//     getCommits(repos[0], displayCommits);
// }

// function displayCommits(commits) {
//     console.log(commits);
// }

// function getRepositories(username, callback) {
//     setTimeout(() => {
//         callback([ 'Repo1', 'Repo2', 'Repo3' ]);
//     }, 2000);
// }

// function getCommits(repo, callback) {
//     setTimeout(() => {
//         callback([ 'Commits1', 'Commits2', 'Commits3' ]);
//     }, 2000);
// }


/*** 4 ***/
// console.log('Before');

// getUser(1)
//     .then(user => getRepositories(user.userName))
//     .then(repos => getCommits(repos[0]))
//     .then(commits => console.log(commits))
//     .catch(err => console.log('Error ', err.message));

// console.log('After');

// function getUser(id) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('Reading a user from database...');
//             resolve({ id: id, userName: 'Prueba' });
//         }, 2000);
//     });
// }

// function getRepositories(username) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve([ 'Repo1', 'Repo2', 'Repo3' ]);
//         }, 2000);
//     });
// }

// function getCommits(repo) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve([ 'Commits1', 'Commits2', 'Commits3' ]);
//         }, 2000);
//     });
// }


/*** 5 ***/
console.log('Before');

async function displayCommits() {
    try {
        const user = await getUser(1);
        const repos = await getRepositories(user.userName);
        const commits = await getCommits(repos[0]);
        console.log(commits);
    }
    catch (err) {
        console.log('Error', err);
    }
}
displayCommits();

console.log('After');

function getUser(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Reading a user from database...');
            resolve({ id: id, userName: 'Prueba' });
        }, 2000);
    });
}

function getRepositories(username) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            //resolve([ 'Repo1', 'Repo2', 'Repo3' ]);
            reject(new Error('Could not get the repos...'))
        }, 2000);
    });
}

function getCommits(repo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([ 'Commits1', 'Commits2', 'Commits3' ]);
        }, 2000);
    });
}
