// index.html scripts

// Mobile and Tablet Menu

function MobileMenu() {
    var TopMenu = document.getElementById('TopMenu');
    
    if (!(TopMenu.hasAttribute('class'))) {
        TopMenu.setAttribute('class', 'ResponsiveTopMenu');

    } else {
        TopMenu.removeAttribute('class');
    }
}





// Banners Carousel

$(document).ready(function() {
    let interval = window.setInterval(RotateBanners, 5000);

    function RotateBanners() {
        let $FirstBanner = $('#Carousel').find('figure:first');
        let width = $FirstBanner.width();

        $FirstBanner.animate({marginLeft: -width}, 1000, function() {
            let $LastBanner = $('#Carousel').find('figure:last');
            
            $LastBanner.after($FirstBanner);
            $FirstBanner.css({marginLeft: 0});
        })
    }

    $('#LeftArrow').click(ToPreviousBanner);
    $('#RightArrow').click(ToNextBanner);

    function ToNextBanner() {
        window.clearInterval(interval);

        let $CurrentBanner = $('#Carousel').find('figure:first');
        let width = $CurrentBanner.width();

        $CurrentBanner.animate({marginLeft: -width}, 1000, function() {
            let $LastBanner = $('#Carousel').find('figure:last');

            $LastBanner.after($CurrentBanner);
            $CurrentBanner.css({marginLeft: 0});

            interval = window.setInterval(RotateBanners, 5000);
        })
    }

    function ToPreviousBanner() {
        window.clearInterval(interval);

        let $CurrentBanner = $('#Carousel').find('figure:first');
        let width = $CurrentBanner.width();
        let $PreviousBanner = $('#Carousel').find('figure:last');

        $PreviousBanner.css({marginLeft: -width});
        $CurrentBanner.before($PreviousBanner);

        $PreviousBanner.animate({marginLeft: 0}, 1000, function() {
            interval = window.setInterval(RotateBanners, 5000);
        })
    }
})





// login.html scripts

// Validating Login

function ValidationLogin() {
    let Email = document.getElementById('email').value;
    let Password = document.getElementById('password').value;

    if ((Email === 'meuemail@exemplo.com') && (Password === 'minhasenha123')) {
        const success = document.createElement('samp');

        success.innerText = 'Login executado com sucesso!';

        document.getElementById('PasswordContainer').appendChild(success);
        success.setAttribute ('id', 'success');
        document.getElementById('success').style.color = 'hsl(120, 100%, 35%)';
    
        setTimeout(() => {
            success.style.display = 'none';
        }, 1000);

    } else {
        const failure = document.createElement('samp');

        failure.innerText = 'Senha ou e-mail incorretos!';

        document.getElementById('PasswordContainer').appendChild(failure);
        failure.setAttribute('id', 'failure');
        document.getElementById('failure').style.color = 'hsl(0, 100%, 35%)';

        setTimeout(() => {
            failure.style.display = 'none';    
        }, 1000);
    }
}