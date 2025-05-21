const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const height = parseInt(document.querySelector('#height').value); // only accept int
    const weight = parseInt(document.querySelector('#weight').value);

    if (height === '' || height < 0 || isNaN(height)) {
        results.innerHTML = `Please Enter valid height ${height}`
        results.style.color = 'red';
    }
    else if (weight === '' || weight < 0 || isNaN(weight)) {
        results.innerHTML = `Please Enter valid weight ${weight}`
        results.style.color = 'red';
    }
    else {

        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        let c = '';
        if (bmi < 18.6) {
            c = `Under Weight`
            results.style.color = 'red';
        }
        else if (bmi >= 18.6 && bmi <= 24.9) {
            c = `Normal Range`
            results.style.color = 'green';
        }
        else if (bmi > 24.9) {
            c = `Over Weight`
            results.style.color = 'red';
        }
        results.innerHTML = `Your BMI is ${bmi} : ${c}`
    }
});