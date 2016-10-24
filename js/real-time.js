var usersList = document.getElementById('usersList');
var nameInput = document.getElementById('nameInput');
var ageInput = document.getElementById('ageInput');
var aniInput = document.getElementById('aniInput');
var speInput = document.getElementById('speInput');
var addButton = document.getElementById('addButton');

// Ao clicar no botão
addButton.addEventListener('click', function () {
   create(nameInput.value, ageInput.value, aniInput.value, speInput.value);

});

// Função para criar um registro no Firebase
function create(use, age, animals, species) {
    var data = {
        use: use,
        age: age,
        animals: animals,
        species: species
    };

    return firebase.database().ref().child('users').push(data);
}


firebase.database().ref('users').on('value', function (snapshot) {
    usersList.innerHTML = '';
    snapshot.forEach(function (item) {
        var li = document.createElement('li');
        li.appendChild(document.createTextNode(item.val().use + ': ' + item.val().age + ': '+ item.val().animals + ': ' + item.val().species));
        usersList.appendChild(li);
    });
});