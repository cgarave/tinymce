document.getElementById('whats-new').addEventListener('click', () => {
    document.getElementById('update-card').classList.toggle('hidden')
})
document.getElementById('guide').addEventListener('click', () => {
    document.getElementById('guide-card').classList.toggle('hidden')
})

const update = {
    text: ` <p class="p-2 bg-[#4816C3] text-xs rounded-sm text-white">Added functionality to manual type and add your own tables. How cool is that?</p>
            <p class="p-2 bg-[#4816C3] text-xs rounded-sm text-white">Added functionality to copy text from a word document.</p>
            <p class="p-2 bg-[#4816C3] text-xs rounded-sm text-white">Added Import and Download import function.</p>
            `
}
const updateCard = document.getElementById('update-card').innerHTML = update.text;

const keyboardGuides = {
    key: `<p class="p-2 bg-[#4816C3] text-xs rounded-sm text-white">Shift + Enter = Add new line </p>`
}
const updateGuide = document.getElementById('guide-card').innerHTML = keyboardGuides.key;