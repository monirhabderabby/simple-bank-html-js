document.getElementById('login-btn').addEventListener('click', function(){
    const emailField = document.getElementById('input-email');
    const userEmail = emailField.value;
    const passwordField = document.getElementById('input-password');
    const userPassword = passwordField.value;
    if(userEmail == 'raj021159@gmail.com' && userPassword == '@1234' ){
        window.location.href = "https://www.facebook.com/monirhabderabby/"; 
    }
    
})