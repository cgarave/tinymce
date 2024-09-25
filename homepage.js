const automationDropdown = document.getElementById('automation-dropdown')
automationDropdown.addEventListener('change', () => {

    const selection = automationDropdown.value;

    switch(selection){
        case 'promotion':
            document.getElementById('promotion').classList.add('block');
            console.log('k');
        case 'newsletter': 
            document.getElementById('promotion').classList.add('hidden');
            document.getElementById('newsletter').classList.add('block');
            console.log('j');
    }
})