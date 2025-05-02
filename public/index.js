
document.getElementById('enviar').addEventListener('click', (e)=>{
    let nombre = document.getElementById('nombre').value;

    if(nombre == ""){
        alert('eescribe')
    }else{
        fetch('/enviar-nombre', {
            method: 'POST',
            headers: {'Content-Type': 'application/json; charset=utf-8'},
            body: JSON.stringify({nombre})
        });
    }

    document.getElementById('nombre').value = "";
});