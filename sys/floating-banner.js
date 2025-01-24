let gameName = ''
let gameCode = ''
let gameCategory = ''
let gameProvider = ''
let advertName = ''
let requestedDate = ''

const date = new Date()
let month = date.getMonth() + 1
let year = date.getFullYear()
if(month < 10){
    month = '0' + month
}
requestedDate = month + year.toString().slice(2);



function updateInputs(){
    gameName = gameName.toLowerCase().replace('-', ' ').replace(/\s+/g, '-').trim(); //removing spaces and replacing with -

    let casino = `
    <FloatingBanner>
        <GameLauncher v-slot="{ openGame}" product="${gameCategory}" game="${gameCode}"
            data-track-content
            data-content-name="Floating banner - (PD-Casino)"
            data-content-piece="Floating banner">
            <img alt="${gameName}" src="https://doc.188contents.com/star4-content/images/${gameCategory}/${gameProvider}/${gameName}/${gameName}.gif" @click="openGame()"/>
        </GameLauncher>
    </FloatingBanner>`
    
    let livecasino = `
    <FloatingBanner>
        <GameLauncher v-slot="{ openGame}" product="${gameCategory}" game="${gameCode}"
            data-track-content
            data-content-name="Floating banner - (PD-Live Casino)"
            data-content-piece="Floating banner">
            <img alt="${gameName}" src="https://doc.188contents.com/star4-content/images/${gameCategory}/${gameProvider}/${gameName}/${gameName}.gif" @click="openGame()"/>
        </GameLauncher>
    </FloatingBanner>`

    let chess = `
    <FloatingBanner>
        <GameLauncher v-slot="{ openGame}" product="${gameCategory}" game="${gameCode}"
            data-track-content
            data-content-name="Floating banner - (PD-Chess)"
            data-content-piece="Floating banner">
            <img alt="${gameName}" src="https://doc.188contents.com/star4-content/images/${gameCategory}/en-gb/${gameProvider}/${gameName}/${gameName}.gif" @click="openGame()"/>
        </GameLauncher>
    </FloatingBanner>`

    let lotto = `
    <FloatingBanner>
        <GameLauncher v-slot="{ openGame}" product="${gameCategory}" game="${gameCode}"
            data-track-content
            data-content-name="Floating banner - (PD-Lotto)"
            data-content-piece="Floating banner">
            <img alt="${gameName}" src="https://doc.188contents.com/star4-content/images/${gameCategory}/${gameProvider}/${gameName}/${gameName}.gif" @click="openGame()"/>
        </GameLauncher>
    </FloatingBanner>`

    let casinoAL = `
    <FloatingBanner v-if="uv.sessionD.login">
        <GameLauncher v-slot="{ openGame}" product="${gameCategory}" game="${gameCode}"
            data-track-content
            data-content-name="Floating banner - (PD-Casino)"
            data-content-piece="Floating banner">
            <img alt="${gameName}" src="https://doc.188contents.com/star4-content/images/${gameCategory}/${gameProvider}/${gameName}/${gameName}.gif" @click="openGame()"/>
        </GameLauncher>
    </FloatingBanner>`

    let livecasinoAL = `
    <FloatingBanner v-if="uv.sessionD.login">
        <GameLauncher v-slot="{ openGame}" product="${gameCategory}" game="${gameCode}"
            data-track-content
            data-content-name="Floating banner - (PD-Live Casino)"
            data-content-piece="Floating banner">
            <img alt="${gameName}" src="https://doc.188contents.com/star4-content/images/${gameCategory}/${gameProvider}/${gameName}/${gameName}.gif" @click="openGame()"/>
        </GameLauncher>
    </FloatingBanner>`

    let chessAL = `
    <FloatingBanner v-if="uv.sessionD.login">
        <GameLauncher v-slot="{ openGame}" product="${gameCategory}" game="${gameCode}"
            data-track-content
            data-content-name="Floating banner - (PD-Chess)"
            data-content-piece="Floating banner">
            <img alt="${gameName}" src="https://doc.188contents.com/star4-content/images/${gameCategory}/en-gb/${gameProvider}/${gameName}/${gameName}.gif" @click="openGame()"/>
        </GameLauncher>
    </FloatingBanner>`

    let lottoAL = `
    <FloatingBanner v-if="uv.sessionD.login">
        <GameLauncher v-slot="{ openGame}" product="${gameCategory}" game="${gameCode}"
            data-track-content
            data-content-name="Floating banner - (PD-Lotto)"
            data-content-piece="Floating banner">
            <img alt="${gameName}" src="https://doc.188contents.com/star4-content/images/${gameCategory}/${gameProvider}/${gameName}/${gameName}.gif" @click="openGame()"/>
        </GameLauncher>
    </FloatingBanner>`    
    

    let preview = `<img alt="${gameName}" src="https://doc.188contents.com/star4-content/images/${gameCategory}/${gameProvider}/${gameName}/${gameName}.gif"/>`
    let previewChess = `<img alt="${gameName}" src="https://doc.188contents.com/star4-content/images/${gameCategory}/en-gb/${gameProvider}/${gameName}/${gameName}.gif"/>`

    if(gameCategory === 'casino'){
        document.getElementById('advert-name').textContent = `Advert Name: csn-fb-${gameName}-${requestedDate}`
        document.getElementById('outputArea').textContent = casino;
        document.getElementById('outputAL').textContent = casinoAL;
        document.getElementById('preview').innerHTML = preview;
    } else if(gameCategory === 'live'){
        document.getElementById('advert-name').textContent = `Advert Name: lcsn-fb-${gameName}-${requestedDate}`
        document.getElementById('outputArea').textContent = livecasino;
        document.getElementById('outputAL').textContent = livecasinoAL;
        document.getElementById('preview').innerHTML = preview;
    } else if(gameCategory === 'chess'){
        document.getElementById('advert-name').textContent = `Advert Name: chess-fb-${gameName}-${requestedDate}`
        document.getElementById('outputArea').textContent = chess;
        document.getElementById('outputAL').textContent = chessAL;
        document.getElementById('preview').innerHTML = previewChess;
    } else if(gameCategory === 'lotto'){
        document.getElementById('advert-name').textContent = `Advert Name: lotto-fb-${gameName}-${requestedDate}`
        document.getElementById('outputArea').textContent = lotto;
        document.getElementById('outputAL').textContent = lottoAL;
        document.getElementById('preview').innerHTML = preview;
    }
                    
}



//updating the value of gameName
document.getElementById('game-name').addEventListener('input', () => {
    gameName = document.getElementById('game-name').value;
    updateInputs();
})
document.getElementById('game-code').addEventListener('input', () => {
    gameCode = document.getElementById('game-code').value;
    updateInputs();
})
document.getElementById('game-category').addEventListener('change', () => {
    gameCategory = document.getElementById('game-category').value;
    updateInputs();
})
document.getElementById('game-provider').addEventListener('change', () => {
    gameProvider = document.getElementById('game-provider').value;
    updateInputs();
})
