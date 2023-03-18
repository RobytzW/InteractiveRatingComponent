const ratings = document.getElementsByClassName('rating');
const btn = document.getElementById('button');
const secondPage = document.getElementsByClassName('second');

var ratingSelected;

for(let i = 0; i < ratings.length; ++i)
    ratings[i].addEventListener('click', () => {
        ratings[i].classList.toggle('nonselected');
        ratings[i].classList.toggle('selected');
        ratingSelected = i + 1;

        for(let j = 0; j < ratings.length; ++j)
            if(i != j){
                ratings[j].classList.remove('selected');
                ratings[j].classList.add('nonselected');
            }
    })

btn.addEventListener('click', () => {
    let cnt = 0;
    for(let i = 0; i < ratings.length; ++i)
        if(ratings[i].classList.contains('selected')) cnt = 1;
    
    if(cnt == 0) alert('Please select a number!')
        else {
            document.getElementById('picture').src = "images/illustration-thank-you.svg";
            document.getElementById('title').style.display = "none";
            document.getElementById('paragraph').style.display = "none";
            document.getElementsByClassName('ratings')[0].style.display = "none";
            document.getElementById('button').style.display = "none";

            for(i = 0; i < secondPage.length; ++i)
                secondPage[i].style.display = "block";
            
            document.getElementById('picture').style.alignSelf = "center";
            document.getElementById('score').innerText = 'You selected ' + ratingSelected + ' out of 5';
            document.getElementsByTagName('main')[0].style.alignItems = "center";
            document.getElementsByTagName('main')[0].style.justifyContent = "center";
        }
})