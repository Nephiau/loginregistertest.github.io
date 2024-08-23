$(document).ready(function () {
    
    const form = $('#forms')
    const emailUser = $('#user-email')
    const userName = $('#user-name')
    const userPassword = $('#user-password')
    const confirmPassword = $('#confirm-password')

    const button = $('#button')

    button.on('click', function (param) {

        if (userPassword.val() === confirmPassword.val()) {
            form.submit(function (param) {
                param.preventDefault();
                
            console.log(emailUser.val())
            console.log(userName.val())
            console.log(userPassword.val())
            console.log(confirmPassword.val())
              });
        } else {
            alert('Password and Confirm Password Dont Match')
        }
     })

});