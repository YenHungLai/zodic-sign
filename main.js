document.querySelector('#submit').addEventListener('click', () => {
  event.preventDefault();
  let input = document.querySelector('#userInput').value;
  //  Regular expression, use g to replace all instances of '-'.
  // input = input.replace(/-/g, '');
  // console.log(input);
  // const year = input.slice(0, 4);
  // console.log(year);
  // const month = input.slice(4, 6);
  // console.log(month);
  // const day = input.slice(6);
  // console.log(day);
  const date = input.slice(5);
  console.log(date);
  if (date >= '03-21' && date <= '04-19')
    document.querySelector('#result').innerText = 'You are Aries!!!';
  else if (date >= '04-20' && date <= '05-20')
    document.querySelector('#result').innerText = 'You are Taurus!!!';
  else if (date >= '05-21' && date <= '06-20')
    document.querySelector('#result').innerText = 'You are Gemini!!!';
  else if (date >= '06-21' && date <= '07-22')
    document.querySelector('#result').innerText = 'You are Cancer!!!';
  else if (date >= '07-23' && date <= '08-22')
    document.querySelector('#result').innerText = 'You are Leo!!!';
  else if (date >= '08-23' && date <= '09-22')
    document.querySelector('#result').innerText = 'You are Virgo!!!';
  else if (date >= '09-23' && date <= '10-22')
    document.querySelector('#result').innerText = 'You are Libra!!!';
  else if (date >= '10-23' && date <= '11-21')
    document.querySelector('#result').innerText = 'You are Scorpio!!!';
  else if (date >= '11-22' && date <= '12-21')
    document.querySelector('#result').innerText = 'You are Sagittarius!!!';
  else if (date >= '12-22' && date <= '01-19')
    document.querySelector('#result').innerText = 'You are Capricorn!!!';
  else if (date >= '01-20' && date <= '02-18')
    document.querySelector('#result').innerText = 'You are Aquarius!!!';
  else if (date >= '02-19' && date <= '03-20')
    document.querySelector('#result').innerText = 'You are Pisces!!!';
  }
)
