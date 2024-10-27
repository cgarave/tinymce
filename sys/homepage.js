const automationName = document.getElementById('automation-name')
const automationDropdown = document.getElementById('automation-dropdown')
automationDropdown.addEventListener('change', () => {

    const selection = automationDropdown.value;

    switch(selection){
        case 'tnc':
            automationName.innerHTML = 'T&C Automation'
            document.getElementById('tnc').classList.add('block');
            document.getElementById('tnc').classList.remove('hidden');
            break;
        case 'newsletter': 
            automationName.innerHTML = 'Newsletter Automation'
            document.getElementById('tnc').classList.add('hidden');
            document.getElementById('newsletter').classList.add('block');
            break;
    }
})

setTimeout(() => {
    document.querySelector('.mce-close').click();
}, 1000)