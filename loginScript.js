
$(document).ready(function () {
    function Check () { 
        $('#forms').submit(function (param) { 
            param.preventDefault();
            if ($('#usernameinput').val() === 'admin123' && $('#passwordinput').val() === 'admin123') {
                alert('Welcome Admin')
            } else if ($('#usernameinput').val() === '' && $('#passwordinput').val() === '') {
                alert('Please Fill the blank')
            } else {
                alert('GET OUT')
            }
         })
    }
    Check()
});
