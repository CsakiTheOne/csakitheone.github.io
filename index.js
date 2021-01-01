document.getElementById('btnNavigate').addEventListener('click', () => {
    var date = document.getElementById('dateNavigate').value.split('-');
    window.location = './sites/' + date[1] + '/' + date[2];
});