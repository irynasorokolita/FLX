let login = prompt('Please enter your login', '');
let currentTime = new Date().getHours();
if (login === '' || login === null) {
    alert('Canceled');
} else if (login.length < 4) {
    alert('I don\'t know any users having name length less than 4 symbols');
} else if (login === 'User') {
    let password = prompt('Please enter your password', '');
    if (password === '' || password === null) {
        alert('Canceled');
    } else if (password !== 'UserPass') {
        alert('Wrong password');
    } else if (currentTime < 20) {
        alert ('Good day, dear ' + login + '!');
    } else {
        alert ('Good evening, dear ' + login + '!');
    }
} else if (login === 'Admin') {
    let password = prompt('Please enter your password', '');
    if (password === '' || password === null) {
        alert('Canceled');
    } else if (password !== 'RootPass') {
        alert('Wrong password');
    } else if (currentTime < 20) {
        alert ('Good day, dear ' + login + '!');
    } else {
        alert ('Good evening, dear ' + login + '!');
    }
} else {
    alert('I don\'t know you');
}
