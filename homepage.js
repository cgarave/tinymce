const automationName = document.getElementById('automation-name')
const automationDropdown = document.getElementById('automation-dropdown')
automationDropdown.addEventListener('change', () => {

    const selection = automationDropdown.value;

    switch(selection){
        case 'promotion':
            automationName.innerHTML = 'Promotion Automation'
            document.getElementById('promotion').classList.add('block');
            document.getElementById('promotion').classList.remove('hidden');
            break;
        case 'newsletter': 
            automationName.innerHTML = 'Newsletter Automation'
            document.getElementById('promotion').classList.add('hidden');
            document.getElementById('newsletter').classList.add('block');
            break;
    }
})