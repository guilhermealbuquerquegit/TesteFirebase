var usersList = document.getElementById('usersList');
var cursoInput = document.getElementById('cursoInput');
var instInput = document.getElementById('instInput');
var pergButton = document.getElementById('pergButton');

// Ao clicar no botão
pergButton.addEventListener('click', function () {
   create(cursoInput.value, instInput.value);

});

// Função para criar um registro no Firebase
function create(curso, instituicao) {
    var data = {
        curso: curso,
        instituicao: instituicao
    };

    return firebase.database().ref().child('alunos').push(data);
}

firebase.database().ref('alunos').on('value', function (snapshot) {
    usersList.innerHTML = '';
    snapshot.forEach(function (item) {
        var li = document.createElement('li');
        li.appendChild(document.createTextNode(item.val().curso + ': ' + item.val().instituicao));
        usersList.appendChild(li);
    });
});

