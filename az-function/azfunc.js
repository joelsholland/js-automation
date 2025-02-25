
nameVal = document.querySelector('.inputName').value;
ageVal = document.querySelector('.inputAge').value;
btn = document.querySelector('button');
btn.addEventListener("click", getAzFunc);

function getAzFunc() {
    console.log(`${nameVal} ${ageVal}`)
}