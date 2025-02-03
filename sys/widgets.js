let attribs = [];
let titleEN = '';
let titleLocal = '';
let product = '';
let gameCode = '';
let codeEN = document.getElementById('generatedCodeEN');
let codeLocal = document.getElementById('generatedCodeLocal');

//copy text
codeEN.addEventListener('click', () => {
    navigator.clipboard.writeText(codeEN.textContent);
    alert('EN Copied');
})
codeLocal.addEventListener('click', () => {
    navigator.clipboard.writeText(codeLocal.textContent);
    alert('Local Copied');
})

document.getElementById('widget-en-title').addEventListener('input', (e) => {
    titleEN = e.target.value;
    updateEN();
})
document.getElementById('widget-local-title').addEventListener('input', (e) => {
    titleLocal = e.target.value;
    updateLocal();
})
document.getElementById('product').addEventListener('change', (e) => {
    product = e.target.value;
    updateEN();
    updateLocal();
})
document.getElementById('game-code-input').addEventListener('input', (e) => {
    e.target.value = e.target.value.replace(/\s+/g, ',').trim();
    gameCode = e.target.value
    //gameCode = gameCode.replace(/\s+/g, ',').trim(); //removing spaces and replacing with ,

    updateEN();
    updateLocal();
})

function updateEN(){

    let casino = `<CustomGames widget-name="${titleEN} - (PD-WDGT-Casino)" title="${titleEN}" product="casino" games="${gameCode}" ${attribs}></CustomGames>`
    let live = `<CustomGames widget-name="${titleEN} - (PD-WDGT-LiveCasino)" title="${titleEN}" product="live" games="${gameCode}" ${attribs} aspect-ratio="3x4" show-game-subtitle></CustomGames>`
    let chess = `<CustomGames widget-name="${titleEN} - (PD-WDGT-Chess)" title="${titleEN}" product="chess" games="${gameCode}"> ${attribs}</CustomGames>`
    let lotto = `<CustomGames widget-name="${titleEN} - (PD-WDGT-Lotto)" title="${titleEN}" product="lotto" games="${gameCode}" ${attribs}></CustomGames>`

    if(product === 'casino'){
        codeEN.textContent = casino;
    }
    if(product === 'live'){
        codeEN.textContent = live;
    }
    if(product === 'chess'){
        codeEN.textContent = chess;
    }
    if(product === 'lotto'){
        codeEN.textContent = lotto;
    }
}
function updateLocal(){
    let casino = `<CustomGames widget-name="${titleLocal} - (PD-WDGT-Casino)" title="${titleLocal}" product="casino" games="${gameCode}" ${attribs}></CustomGames>`
    let live = `<CustomGames widget-name="${titleLocal} - (PD-WDGT-LiveCasino)" title="${titleLocal}" product="live" games="${gameCode}" ${attribs} aspect-ratio="3x4" show-game-subtitle></CustomGames>`
    let chess = `<CustomGames widget-name="${titleLocal} - (PD-WDGT-Chess)" title="${titleLocal}" product="chess" games="${gameCode}"> ${attribs}</CustomGames>`
    let lotto = `<CustomGames widget-name="${titleLocal} - (PD-WDGT-Lotto)" title="${titleLocal}" product="lotto" games="${gameCode}" ${attribs}></CustomGames>`

    if(product === 'casino'){
        codeLocal.textContent = casino;
    }
    if(product === 'live'){
        codeLocal.textContent = live;
    }
    if(product === 'chess'){
        codeLocal.textContent = chess;
    }
    if(product === 'lotto'){
        codeLocal.textContent = lotto;
    }
}