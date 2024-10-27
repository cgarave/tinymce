document.getElementById('whats-new').addEventListener('click', () => {
    document.getElementById('update-card').classList.toggle('hidden')
})

const update = {
    text: `
            <p class="p-2 bg-[#4816C3] text-xs rounded-sm text-white">Removed import checkbox</p>
            <p class="p-2 bg-[#4816C3] text-xs rounded-sm text-white">Added the ability to resize images</p>
            <p class="p-2 bg-[#4816C3] text-xs rounded-sm text-white">Texts can now be italicized</p>
            <p class="p-2 bg-[#4816C3] text-xs rounded-sm text-white">Added bullets</p>
            `
}
const updateCard = document.getElementById('update-card').innerHTML = update.text;

const keyboardGuides = {
    key: `<p class="p-2 bg-[#4816C3] text-xs rounded-sm text-white">Shift + Enter = Add new line </p>`
}
