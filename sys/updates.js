document.getElementById('whats-new').addEventListener('click', () => {
    document.getElementById('update-card').classList.toggle('hidden')
})

const update = {
    text: `
            <p class="p-2 bg-[#4816C3] text-xs rounded-sm text-white">Hides import checkbox. Import function will be automatically triggered when a user imported/uploaded HTML file.</p>
            <p class="p-2 bg-[#4816C3] text-xs rounded-sm text-white">Added the ability to resize images directly from the editor</p>
            <p class="p-2 bg-[#4816C3] text-xs rounded-sm text-white">Texts can now be italicized</p>
            <p class="p-2 bg-[#4816C3] text-xs rounded-sm text-white">Added bullets</p>
            <p class="p-2 bg-[#4816C3] text-xs rounded-sm text-white">Added upload html function that made it easier for users to edit their existing T&C file.</p>
            <p class="p-2 bg-[#4816C3] text-xs rounded-sm text-white">Changes to UI for easier navigation.</p>
            <p class="p-2 bg-[#4816C3] text-xs rounded-sm text-white">Fixed a bug where both EN and localized version are merged into one page when deployed to production.</p>
            `
}
const updateCard = document.getElementById('update-card').innerHTML = update.text;

const keyboardGuides = {
    key: `<p class="p-2 bg-[#4816C3] text-xs rounded-sm text-white">Shift + Enter = Add new line </p>`
}
