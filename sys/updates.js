document.getElementById('whats-new').addEventListener('click', () => {
    document.getElementById('update-card').classList.toggle('hidden')
})

const update = {
    text: `
            <p class="p-2 bg-[#4816C3] text-xs rounded-sm text-white">Introduced an HTML upload function that makes it easier for users to edit their existing T&C files.</p>
            <p class="p-2 bg-[#4816C3] text-xs rounded-sm text-white">Made changes to the UI for easier navigation.</p>
            <p class="p-2 bg-[#4816C3] text-xs rounded-sm text-white">Added Convert APS button</p>
            <p class="p-2 bg-[#4816C3] text-xs rounded-sm text-white">Added new automation: Floating Banner Automation</p>
            <p class="p-2 bg-[#4816C3] text-xs rounded-sm text-white">Added new automation: Landing Page/Qualify Games Automation</p>
            <p class="p-2 bg-[#4816C3] text-xs rounded-sm text-white">Added Live Casino/Casino icons to TNC Automation. Users now have the ability to add icons on their TNCs.</p>
            <p class="p-2 bg-[#4816C3] text-xs rounded-sm text-white">UI changes to Landing Page automation.</p>
            <p class="p-2 bg-[#4816C3] text-xs rounded-sm text-white">Added widgets advert automation.</p>
            `
}
const updateCard = document.getElementById('update-card').innerHTML = update.text;

const keyboardGuides = {
    key: `<p class="p-2 bg-[#4816C3] text-xs rounded-sm text-white">Shift + Enter = Add new line </p>`
}
