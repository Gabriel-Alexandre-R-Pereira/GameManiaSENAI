// index.html scripts

// Mobile and Tablet Menu



// login.html scripts

// Validating Login

function ValidationLogin () {
    let Email = document.getElementById('email').value;
    let Password = document.getElementById('password').value;

    if ((Email == 'meuemail@exemplo.com') && (Password == 'minhasenha123')) {
        
        const success = document.createElement ('samp');
        success.innerText = 'Login executado com sucesso!';
        document.getElementById('PasswordContainer').appendChild(success);
        success.setAttribute ('id', 'success');

        document.getElementById('success').style.color = 'hsl(120, 100%, 35%)';
    
        setTimeout(() => {
            success.style.display = 'none';
        }, 1000);

    } else {

        const failure = document.createElement ('samp');
        failure.innerText = 'Senha ou e-mail incorretos!';
        document.getElementById('PasswordContainer').appendChild(failure);
        failure.setAttribute('id', 'failure');
    
        document.getElementById('failure').style.color = 'hsl(0, 100%, 35%)';

        setTimeout(() => {
            failure.style.display = 'none';    
        }, 1000);
    }
}