const {body} = document
const logoEls = document.querySelectorAll('.brand-img .logo-title')

function changeLogoColor(ischanged) {
    if (!ischanged) {
        logoEls.forEach(logoEl => {
            logoEl.setAttribute('fill', '#54575A')
        });
    } else {
        logoEls.forEach(logoEl => {
            logoEl.setAttribute('fill', 'whitesmoke')
        });
    }
}

function changeBackground(number) {    
    // Check if background already showing
    if (body.classList.contains(`background-${number}`)) {
        body.classList.remove(`background-${number}`)
        changeLogoColor(false)
        return
    }
    
    // Reset CSS Class for body
    body.classList = ''
    switch (number) {
        case '1':
            body.classList.add('background-1')
            changeLogoColor(false)
            break;

        case '2':
            body.classList.add('background-2')
            changeLogoColor(true)
            break;

        case '3':
            body.classList.add('background-3')
            changeLogoColor(true)
            break;

        default:
            break;
    }
}