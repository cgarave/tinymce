const automationDropdown = document.getElementById('automation-dropdown')
automationDropdown.addEventListener('change', () => {

    const selection = automationDropdown.value;

    switch(selection){
        case 'index.html':
            window.location.href = selection;
            break;
        case 'newsletter.html': 
            window.location.href = selection;
            break;
        case 'floating-banner.html': 
            window.location.href = selection;
            break;
        case 'landing-page.html': 
            window.location.href = selection;
            break;
    }
})

setTimeout(() => {
    document.querySelector('.mce-close').click();
}, 1000)