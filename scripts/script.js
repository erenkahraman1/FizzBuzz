  document.getElementById('fizzColor').addEventListener('input', function(event) {
  document.getElementById('fizzColor').style.backgroundColor = event.target.value;
});
  document.getElementById('buzzColor').addEventListener('input', function(event) {
  document.getElementById('buzzColor').style.backgroundColor = event.target.value;
});
  document.getElementById('fizzBuzzColor').addEventListener('input', function(event) {
  document.getElementById('fizzBuzzColor').style.backgroundColor = event.target.value;
});
  document.getElementById('noneColor').addEventListener('input', function(event) {
  document.getElementById('noneColor').style.backgroundColor = event.target.value;
});
  document.getElementById('generateDefault').addEventListener('click', function() {
  document.getElementById('startValue').value = 1;
  document.getElementById('endValue').value = 100;
  document.getElementById('fizzValue').value = 3;
  document.getElementById('buzzValue').value = 5;
  
  const container = document.getElementById('container');
  while (container.firstChild) {
      container.removeChild(container.firstChild);
  }
  generateDivs(1, 100, 3, 5);
});

  document.getElementById('clearDivs').addEventListener('click', function() {
    const container = document.getElementById('container');
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    } 
});

  document.getElementById('generateCustom').addEventListener('click', function() {
      const start = document.getElementById('startValue').value;
      const end = document.getElementById('endValue').value;
      const fizz = document.getElementById('fizzValue').value;
      const buzz = document.getElementById('buzzValue').value;

      const fizzColor = document.getElementById('fizzColor').value;
      const buzzColor = document.getElementById('buzzColor').value;
      const fizzBuzzColor = document.getElementById('fizzBuzzColor').value;
      const noneColor = document.getElementById('noneColor').value;
      const divWidth = document.getElementById('divWidth').value;
      const divHeight = document.getElementById('divHeight').value;
  
      generateDivs(
        Number(start), 
        Number(end), 
        Number(fizz), 
        Number(buzz), 
        fizzColor, 
        buzzColor, 
        fizzBuzzColor, 
        noneColor, 
        divWidth, 
        divHeight
    );
});

  document.getElementById('fizzButton').addEventListener('click', function() {
      const allDivs = document.querySelectorAll('#container div');
      allDivs.forEach(div => div.style.display = 'none');
    
      const fizzDivs = document.querySelectorAll('.fizz');
      fizzDivs.forEach(div => div.style.display = 'block');
});

  document.getElementById('buzzButton').addEventListener('click', function() {
      const allDivs = document.querySelectorAll('#container div');
      allDivs.forEach(div => div.style.display = 'none');
    
      const buzzDivs = document.querySelectorAll('.buzz');
      buzzDivs.forEach(div => div.style.display = 'block');
});

  document.getElementById('fizzBuzzButton').addEventListener('click', function() {
      const allDivs = document.querySelectorAll('#container div');
      allDivs.forEach(div => div.style.display = 'none');
    
      const fizzBuzzDivs = document.querySelectorAll('.fizzbuzz');
      fizzBuzzDivs.forEach(div => div.style.display = 'block');
});

  function generateDivs(start, end, fizz, buzz, fizzColor, buzzColor, fizzBuzzColor, noneColor, divWidth, divHeight ) {
      const container = document.getElementById('container');
      container.innerHTML = ''; 

      for (let i = start; i <= end; i++) {
      const div = document.createElement('div');
      div.id = "myid" + i;
      div.style.width = '100px';
      div.style.height =  '100px';

      const numberSpan = document.createElement('span');
      numberSpan.innerText = i; 

      const textP = document.createElement('p');
  
    if (i % fizz === 0 && i % buzz === 0) {
      div.classList.add('fizzbuzz');
      div.style.backgroundColor = fizzBuzzColor;
      textP.innerText  = 'FizzBuzz';
      } 
    else if (i % fizz === 0) {
      div.classList.add('fizz');
      div.style.backgroundColor = fizzColor;
      textP.innerText  ='Fizz';
      }
    else if (i % buzz === 0) {
      div.classList.add('buzz');
      div.style.backgroundColor = buzzColor;
      textP.innerText  ='Buzz';
      }
    else {
      div.classList.add('none');
      div.style.backgroundColor = noneColor;
      textP.innerText = '';
      }
      div.appendChild(numberSpan);
      div.appendChild(textP);  

      container.appendChild(div);
    }
  }
  document.getElementById('divWidth').addEventListener('input', function(event) {
      const widthValue = event.target.value;
  document.getElementById('widthOutput').innerText = widthValue + 'px';
  
      const allDivs = document.querySelectorAll('#container div');
      allDivs.forEach(div => {
          div.style.width = widthValue + 'px';
      });
  });

  document.getElementById('divHeight').addEventListener('input', function(event) {
      const heightValue = event.target.value;
  document.getElementById('heightOutput').innerText = heightValue + 'px';
  
      const allDivs = document.querySelectorAll('#container div');
      allDivs.forEach(div => {
          div.style.height = heightValue + 'px';
  });
});
