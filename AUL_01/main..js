var page = document.getElementById('page');
var buttons = document.getElementsByTagName('button');
var list = ['nike', 'hp', 'Insider','Apple'];

    buttons[0].addEventListener('click', function (event) {
       page.innerHTML = '<h1>Olá, bem vindo</h1>';
    });
    buttons[1].addEventListener('click', function (event) {
        let htmlList = '<ul>';
        list.forEach((element) =>{
          htmlList += '<h1>' + element + '</h1>';
        });
        html += '</ul>';
        page.innerHTML = htmlList;
     });












/*Object.values(title).forEach(function(elemento, index) {
    console.log(elemento, index);
});*/

//console.log(page, title);