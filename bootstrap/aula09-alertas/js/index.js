
var alertPlaceholder = document.getElementById('liveAlertPlaceholder')
var alertTrigger = document.getElementById('liveAlertBtn')
let btnNo = document.getElementById("liveAlertBtnNo")

function alert(message, type) {
    var wrapper = document.createElement('div')
    wrapper.innerHTML = '<div class="alert alert-' + type + ' alert-dismissible" role="alert">' + message + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'

    alertPlaceholder.append(wrapper)
}

if (alertTrigger) {
    alertTrigger.addEventListener('click', function () {
        alert('Muito bom programador, você vai ter muito sucesso na carreira!', 'success')
    })
if (btnNo) {
    btnNo.addEventListener("click", 
    function() {
        alert("Mentira! Tá gostando SIM!", "warning")
    })
}
}