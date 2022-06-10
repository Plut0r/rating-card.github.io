// Submit button section 
const submitBtn = document.querySelector('#submit-btn');
const ratingDiv = document.querySelector('#rating-div');
const thankYou = document.querySelector('.thank-you-div');

submitBtn.addEventListener('click', onSubmit);

function onSubmit() {
    ratingDiv.classList.add('hide');
    thankYou.classList.remove('hide');
}


// Rating one section
const rating1 = () => {
    document.querySelector('#one').style.backgroundColor = 'hsl(213, 19%, 18%)';
    document.querySelector('#one').style.color = 'hsl(0, 0%, 100%)';
    document.querySelector('#two').style.backgroundColor = 'hsl(216, 12%, 54%)';
    document.querySelector('#three').style.backgroundColor = 'hsl(216, 12%, 54%)';
    document.querySelector('#four').style.backgroundColor = 'hsl(216, 12%, 54%)';
    document.querySelector('#five').style.backgroundColor = 'hsl(216, 12%, 54%)';
    const score = document.querySelector('.score');
    score.textContent = 1;
}

// Rating two section 
const rating2 = () => {
    document.querySelector('#two').style.backgroundColor = 'hsl(213, 19%, 18%)';
    document.querySelector('#two').style.color = 'hsl(0, 0%, 100%)';
    document.querySelector('#one').style.backgroundColor = 'hsl(216, 12%, 54%)';
    document.querySelector('#three').style.backgroundColor = 'hsl(216, 12%, 54%)';
    document.querySelector('#four').style.backgroundColor = 'hsl(216, 12%, 54%)';
    document.querySelector('#five').style.backgroundColor = 'hsl(216, 12%, 54%)';
    const score = document.querySelector('.score');
    score.textContent = 2;
}

//Rating three section
const rating3 = () => {
    document.querySelector('#three').style.backgroundColor = 'hsl(213, 19%, 18%)';
    document.querySelector('#three').style.color = 'hsl(0, 0%, 100%)';
    document.querySelector('#one').style.backgroundColor = 'hsl(216, 12%, 54%)';
    document.querySelector('#two').style.backgroundColor = 'hsl(216, 12%, 54%)';
    document.querySelector('#four').style.backgroundColor = 'hsl(216, 12%, 54%)';
    document.querySelector('#five').style.backgroundColor = 'hsl(216, 12%, 54%)';
    const score = document.querySelector('.score');
    score.textContent = 3;
}

// Rating four section
const rating4 = () => {
    document.querySelector('#four').style.backgroundColor = 'hsl(213, 19%, 18%)';
    document.querySelector('#four').style.color = 'hsl(0, 0%, 100%)';
    document.querySelector('#one').style.backgroundColor = 'hsl(216, 12%, 54%)';
    document.querySelector('#two').style.backgroundColor = 'hsl(216, 12%, 54%)';
    document.querySelector('#three').style.backgroundColor = 'hsl(216, 12%, 54%)';
    document.querySelector('#five').style.backgroundColor = 'hsl(216, 12%, 54%)';
    const score = document.querySelector('.score');
    score.textContent = 4;
}

//Rating five section
const rating5 = () => {
    document.querySelector('#five').style.backgroundColor = 'hsl(213, 19%, 18%)';
    document.querySelector('#five').style.color = 'hsl(0, 0%, 100%)';
    document.querySelector('#one').style.backgroundColor = 'hsl(216, 12%, 54%)';
    document.querySelector('#two').style.backgroundColor = 'hsl(216, 12%, 54%)';
    document.querySelector('#three').style.backgroundColor = 'hsl(216, 12%, 54%)';
    document.querySelector('#four').style.backgroundColor = 'hsl(216, 12%, 54%)';
    const score = document.querySelector('.score');
    score.textContent = 5;
}

const allRatings = [rating1, rating2, rating3, rating4, rating5];


document.querySelectorAll('.btn').forEach((btn, i) => {
  btn.addEventListener('click', allRatings[i]);
});

