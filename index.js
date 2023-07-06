//=================HW18.2==================
//На сторінці є дві кнопки. При натисканні на першу кнопку просимо користувача ввести в prompt посилання, при натисканні на другу - переадресовується на інший сайт (за раніше введеним посиланням). Реалізувати перевірку на http/https. Якщо протокол не вказано - додаємо
const inputButton = document.getElementById('inputButton');
const redirectButton = document.getElementById('redirectButton');

inputButton.addEventListener('click', function() {
  const link = prompt('Введіть посилання:');
  if (link !== null && link.trim() !== '') {
    const protocol = link.startsWith('http') ? '' : 'http://';
    const fullLink = protocol + link;
    
    sessionStorage.setItem('redirectLink', fullLink);
  }
  console.log(link)
});

redirectButton.addEventListener('click', function() {
  const redirectLink = sessionStorage.getItem('redirectLink');
  if (redirectLink) {
    window.location.href = redirectLink;
  }
});