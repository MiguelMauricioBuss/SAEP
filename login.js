function redirecionar() {
    if (document.getElementById('estudante').checked) {
        window.location.href ="pages_estudantes.html";
    } else if (document.getElementById('biblio').checked) {
        window.location.href ="pages_bibliotecaria.html";
    } else {
    alert("Por favor, selecione uma opção.");
    }   
}