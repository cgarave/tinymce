document.getElementById('whats-new').addEventListener('click', () => {
    document.getElementById('update-card').classList.toggle('hidden')
})

const update = {
    text: `
            <p class="p-2 bg-[#4816C3] text-xs rounded-sm text-white">Hides the import checkbox. The import function will be automatically triggered when a user imports or uploads an HTML file.</p>
            <p class="p-2 bg-[#4816C3] text-xs rounded-sm text-white">Added the ability to resize images directly from the editor.</p>
            <p class="p-2 bg-[#4816C3] text-xs rounded-sm text-white">Texts can now be italicized.</p>
            <p class="p-2 bg-[#4816C3] text-xs rounded-sm text-white">Added bullet points.</p>
            <p class="p-2 bg-[#4816C3] text-xs rounded-sm text-white">Introduced an HTML upload function that makes it easier for users to edit their existing T&C files.</p>
            <p class="p-2 bg-[#4816C3] text-xs rounded-sm text-white">Made changes to the UI for easier navigation.</p>
            <p class="p-2 bg-[#4816C3] text-xs rounded-sm text-white">Fixed a bug where both the English and localized versions were merged into one page when deployed to production.</p>
            <p class="p-2 bg-[#4816C3] text-xs rounded-sm text-white">Added the ability to edit Full Promotion Specific Terms and Conditions text title</p>
            `
}
const updateCard = document.getElementById('update-card').innerHTML = update.text;

const keyboardGuides = {
    key: `<p class="p-2 bg-[#4816C3] text-xs rounded-sm text-white">Shift + Enter = Add new line </p>`
}
