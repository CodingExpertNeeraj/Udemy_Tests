// WRITE YOUR CODE IN HERE:

const lis = document.querySelectorAll('li');

for (let index = 0; index < lis.length; index++) {
    if (lis[index].classList.contains('highlight')) {
        lis[index].classList.remove("highlight")
    } else {
        lis[index].classList.add('highlight')
    }
}