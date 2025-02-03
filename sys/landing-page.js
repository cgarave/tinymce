let type = ''
let region = ''


let landingPageInputBox = `<div class="flex flex-col gap-y-2">
                            <input type="text" id="landingTitle" class="rounded-[4px] p-2 h-10 w-80 outline-none font-medium text-xs" placeholder="Title" autocomplete="off">
                            <textarea id="landingGameCodes" class="rounded-[4px] w-full h-36 p-2 text-xs resize-none"></textarea>
                        </div>`

let qualifyGames1 = `<div class="flex flex-col gap-y-2">
                            <div class="bg-[#2C1A5A] text-white font-medium p-2 rounded-[4px] text-xs w-80">
                                <select name="" id="provider1" class="bg-transparent border-none outline-none h-full w-full hover:cursor-pointer">
                                    <option value="#">Select Provider</option>
                                    <option value="Netent">Netent</option>
                                    <option value="Big Time Gaming">Big Time Gaming</option>
                                    <option value="Nolimit City">NoLimit City</option>
                                    <option value="Red Tiger">Red Tiger</option>
                                </select>
                            </div>
                            <textarea id="qualifyGameCodes1" class="rounded-[4px] w-full h-36 p-2 text-xs resize-none"></textarea>
                     </div>`

let qualifyGames2 = `<div class="flex flex-col gap-y-2">
                            <div class="bg-[#2C1A5A] text-white font-medium p-2 rounded-[4px] text-xs w-80">
                                <select name="" id="provider1" class="bg-transparent border-none outline-none h-full w-full hover:cursor-pointer">
                                    <option value="#">Select Provider</option>
                                    <option value="Netent">Netent</option>
                                    <option value="Big Time Gaming">Big Time Gaming</option>
                                    <option value="Nolimit City">NoLimit City</option>
                                    <option value="Red Tiger">Red Tiger</option>
                                </select>
                            </div>
                            <textarea id="qualifyGameCodes1" class="rounded-[4px] mb-4 w-full h-36 p-2 text-xs resize-none"></textarea>
                     </div>
                     <div class="flex flex-col gap-y-2">
                            <div class="bg-[#2C1A5A] text-white font-medium p-2 rounded-[4px] text-xs w-80">
                                <select name="" id="provider2" class="bg-transparent border-none outline-none h-full w-full hover:cursor-pointer">
                                    <option value="#">Select Provider</option>
                                    <option value="Netent">Netent</option>
                                    <option value="Big Time Gaming">Big Time Gaming</option>
                                    <option value="Nolimit City">NoLimit City</option>
                                    <option value="Red Tiger">Red Tiger</option>
                                </select>
                            </div>
                            <textarea id="qualifyGameCodes2" class="rounded-[4px] mb-4 w-full h-36 p-2 text-xs resize-none"></textarea>
                     </div>`

let qualifyGames3 = `<div class="flex flex-col gap-y-2">
                            <div class="bg-[#2C1A5A] text-white font-medium p-2 rounded-[4px] text-xs w-80">
                                <select name="" id="provider1" class="bg-transparent border-none outline-none h-full w-full hover:cursor-pointer">
                                    <option value="#">Select Provider</option>
                                    <option value="Netent">Netent</option>
                                    <option value="Big Time Gaming">Big Time Gaming</option>
                                    <option value="Nolimit City">NoLimit City</option>
                                    <option value="Red Tiger">Red Tiger</option>
                                </select>
                            </div>
                            <textarea id="qualifyGameCodes1" class="rounded-[4px] mb-4 w-full h-36 p-2 text-xs resize-none"></textarea>
                     </div>
                     <div class="flex flex-col gap-y-2">
                            <div class="bg-[#2C1A5A] text-white font-medium p-2 rounded-[4px] text-xs w-80">
                                <select name="" id="provider2" class="bg-transparent border-none outline-none h-full w-full hover:cursor-pointer">
                                    <option value="#">Select Provider</option>
                                    <option value="Netent">Netent</option>
                                    <option value="Big Time Gaming">Big Time Gaming</option>
                                    <option value="Nolimit City">NoLimit City</option>
                                    <option value="Red Tiger">Red Tiger</option>
                                </select>
                            </div>
                            <textarea id="qualifyGameCodes2" class="rounded-[4px] mb-4 w-full h-36 p-2 text-xs resize-none"></textarea>
                     </div>
                     <div class="flex flex-col gap-y-2">
                            <div class="bg-[#2C1A5A] text-white font-medium p-2 rounded-[4px] text-xs w-80">
                                <select name="" id="provider3" class="bg-transparent border-none outline-none h-full w-full hover:cursor-pointer">
                                    <option value="#">Select Provider</option>
                                    <option value="Netent">Netent</option>
                                    <option value="Big Time Gaming">Big Time Gaming</option>
                                    <option value="Nolimit City">NoLimit City</option>
                                    <option value="Red Tiger">Red Tiger</option>
                                </select>
                            </div>
                            <textarea id="qualifyGameCodes3" class="rounded-[4px] mb-4 w-full h-36 p-2 text-xs resize-none"></textarea>
                     </div>`

let qualifyGames4 = `<div class="flex flex-col gap-y-2">
                            <div class="bg-[#2C1A5A] text-white font-medium p-2 rounded-[4px] text-xs w-80">
                                <select name="" id="provider1" class="bg-transparent border-none outline-none h-full w-full hover:cursor-pointer">
                                    <option value="#">Select Provider</option>
                                    <option value="Netent">Netent</option>
                                    <option value="Big Time Gaming">Big Time Gaming</option>
                                    <option value="Nolimit City">NoLimit City</option>
                                    <option value="Red Tiger">Red Tiger</option>
                                </select>
                            </div>
                            <textarea id="qualifyGameCodes1" class="rounded-[4px] mb-4 w-full h-36 p-2 text-xs resize-none"></textarea>
                     </div>
                     <div class="flex flex-col gap-y-2">
                            <div class="bg-[#2C1A5A] text-white font-medium p-2 rounded-[4px] text-xs w-80">
                                <select name="" id="provider2" class="bg-transparent border-none outline-none h-full w-full hover:cursor-pointer">
                                    <option value="#">Select Provider</option>
                                    <option value="Netent">Netent</option>
                                    <option value="Big Time Gaming">Big Time Gaming</option>
                                    <option value="Nolimit City">NoLimit City</option>
                                    <option value="Red Tiger">Red Tiger</option>
                                </select>
                            </div>
                            <textarea id="qualifyGameCodes2" class="rounded-[4px] mb-4 w-full h-36 p-2 text-xs resize-none"></textarea>
                     </div>
                     <div class="flex flex-col gap-y-2">
                            <div class="bg-[#2C1A5A] text-white font-medium p-2 rounded-[4px] text-xs w-80">
                                <select name="" id="provider3" class="bg-transparent border-none outline-none h-full w-full hover:cursor-pointer">
                                    <option value="#">Select Provider</option>
                                    <option value="Netent">Netent</option>
                                    <option value="Big Time Gaming">Big Time Gaming</option>
                                    <option value="Nolimit City">NoLimit City</option>
                                    <option value="Red Tiger">Red Tiger</option>
                                </select>
                            </div>
                            <textarea id="qualifyGameCodes3" class="rounded-[4px] mb-4 w-full h-36 p-2 text-xs resize-none"></textarea>
                     </div>
                     <div class="flex flex-col gap-y-2">
                            <div class="bg-[#2C1A5A] text-white font-medium p-2 rounded-[4px] text-xs w-80">
                                <select name="" id="provider4" class="bg-transparent border-none outline-none h-full w-full hover:cursor-pointer">
                                    <option value="#">Select Provider</option>
                                    <option value="Netent">Netent</option>
                                    <option value="Big Time Gaming">Big Time Gaming</option>
                                    <option value="Nolimit City">NoLimit City</option>
                                    <option value="Red Tiger">Red Tiger</option>
                                </select>
                            </div>
                            <textarea id="qualifyGameCodes4" class="rounded-[4px] mb-4 w-full h-36 p-2 text-xs resize-none"></textarea>
                     </div>`

const regionsDropdown = document.getElementById('regions-dropdown')
regionsDropdown.addEventListener('change', () => {
    const selectedRegion = regionsDropdown.value;
    switch(selectedRegion){
        case 'zh-cn':
            document.getElementById('filename').value = 'china_';
            break;
        case 'vi-vn':
            document.getElementById('filename').value = 'Vietnam_';
            break;
        case 'th-th':
            document.getElementById('filename').value = 'Thailand_';
            break;
        case 'ko-kr':
            document.getElementById('filename').value = 'Korea_';
            break;
        case 'id-id':
            document.getElementById('filename').value = 'Indonesia_';
            break;
        case 'km-kh':
            document.getElementById('filename').value = 'Cambodia_';
            break;
        case 'ja-jp':
            document.getElementById('filename').value = 'Japan_';
            break;
        case 'hi-in':
            document.getElementById('filename').value = 'India_';
            break;
    }
})


document.getElementById('page-type').addEventListener('change', () => {
    type = document.getElementById('page-type').value;
    if(type == '0'){
        document.getElementById('input-container').innerHTML = landingPageInputBox;
        document.getElementById('landingGameCodes').addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/\s+/g, ',').trim();
        })

        document.getElementById('download').addEventListener('click', () => {
            region = document.getElementById('regions-dropdown').value;
            let title = document.getElementById('landingTitle').value;
            let gameCodes = document.getElementById('landingGameCodes').value;

            //gameCodes = gameCodes.toLowerCase().replace(/\s+/g, ',').trim(); //removing spaces and replacing with ,

            let landingPage = `       
                <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script><script> $(function() {$("#webteam-ss").attr("href","https://doc.188contents.com/contents/Components/webteam/webteam.css?" + $.now());});</script>
                <div id="content-en-gb" class="tnc-content-wrap">
                    <div class="contentwrap tnc-content-format">
                        <div class="p-3 md:p-0">
                            <div>
                                <CustomGames product="casino"  title="${title}" games="${gameCodes}" type="table" class="tnc-multiple-games" :limit="200"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="content-${region}" class="tnc-content-wrap">
                    <div class="contentwrap tnc-content-format">
                        <div class="p-3 md:p-0">
                            <div>
                                <CustomGames product="casino"  title="${title}" games="${gameCodes}" type="table" class="tnc-multiple-games" :limit="200"/>
                            </div>
                        </div>
                        </div>
                </div>`

                let fileName = document.getElementById('filename').value;
                let blob = new Blob([landingPage], {type: 'text/html'});
                let htmlFile = document.createElement('a');
                htmlFile.download = `${fileName}.html`;
                htmlFile.href = window.URL.createObjectURL(blob);
                htmlFile.click();
        })
    } else if(type === '1'){
        document.getElementById('input-container').innerHTML = qualifyGames1;
        document.getElementById('qualifyGameCodes1').addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/\s+/g, ',').trim();
        })
        document.getElementById('download').addEventListener('click', () => {
            region = document.getElementById('regions-dropdown').value;

            let title1 = document.getElementById('provider1').value;
            let gameCodes1 = document.getElementById('qualifyGameCodes1').value;

            //gameCodes1 = gameCodes1.toLowerCase().replace(/\s+/g, ',').trim(); //removing spaces and replacing with ,

            let provider1 = `       
                <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script><script> $(function() {$("#webteam-ss").attr("href","https://doc.188contents.com/contents/Components/webteam/webteam.css?" + $.now());});</script>
                <div id="content-en-gb" class="tnc-content-wrap">
                    <div class="contentwrap tnc-content-format">
                        <div class="p-3 md:p-0">
                            <div>
                                <CustomGames product="casino"  title="${title1}" games="${gameCodes1}" type="table" class="tnc-multiple-games" :limit="200"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="content-${region}" class="tnc-content-wrap">
                    <div class="contentwrap tnc-content-format">
                        <div class="p-3 md:p-0">
                            <div>
                                <CustomGames product="casino"  title="${title1}" games="${gameCodes1}" type="table" class="tnc-multiple-games" :limit="200"/>
                            </div>
                        </div>
                        </div>
                </div>`

                let fileName = document.getElementById('filename').value;
                let blob = new Blob([provider1], {type: 'text/html'});
                let htmlFile = document.createElement('a');
                htmlFile.download = `${fileName}.html`;
                htmlFile.href = window.URL.createObjectURL(blob);
                htmlFile.click();
        })
    } else if(type === '2'){
        document.getElementById('input-container').innerHTML = qualifyGames2;

        document.getElementById('qualifyGameCodes1').addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/\s+/g, ',').trim();
        })
        document.getElementById('qualifyGameCodes2').addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/\s+/g, ',').trim();
        })

        document.getElementById('download').addEventListener('click', () => {
            region = document.getElementById('regions-dropdown').value;

            let title1 = document.getElementById('provider1').value;
            let gameCodes1 = document.getElementById('qualifyGameCodes1').value;
            let title2 = document.getElementById('provider2').value;
            let gameCodes2 = document.getElementById('qualifyGameCodes2').value;

            //gameCodes1 = gameCodes1.toLowerCase().replace(/\s+/g, ',').trim(); //removing spaces and replacing with ,
            //gameCodes2 = gameCodes2.toLowerCase().replace(/\s+/g, ',').trim(); //removing spaces and replacing with ,

            let provider2 = `       
                <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script><script> $(function() {$("#webteam-ss").attr("href","https://doc.188contents.com/contents/Components/webteam/webteam.css?" + $.now());});</script>
                <div id="content-en-gb" class="tnc-content-wrap">
                    <div class="contentwrap tnc-content-format">
                        <div class="p-3 md:p-0">
                            <div>
                                <CustomGames product="casino"  title="${title1}" games="${gameCodes1}" type="table" class="tnc-multiple-games" :limit="200"/>
                            </div>
                            <div>
                                <CustomGames product="casino"  title="${title2}" games="${gameCodes2}" type="table" class="tnc-multiple-games" :limit="200"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="content-${region}" class="tnc-content-wrap">
                    <div class="contentwrap tnc-content-format">
                        <div class="p-3 md:p-0">
                            <div>
                                <CustomGames product="casino"  title="${title1}" games="${gameCodes1}" type="table" class="tnc-multiple-games" :limit="200"/>
                            </div>
                            <div>
                                <CustomGames product="casino"  title="${title2}" games="${gameCodes2}" type="table" class="tnc-multiple-games" :limit="200"/>
                            </div>
                        </div>
                        </div>
                </div>`

                let fileName = document.getElementById('filename').value;
                let blob = new Blob([provider2], {type: 'text/html'});
                let htmlFile = document.createElement('a');
                htmlFile.download = `${fileName}.html`;
                htmlFile.href = window.URL.createObjectURL(blob);
                htmlFile.click();
        })
    } else if(type === '3'){
        document.getElementById('input-container').innerHTML = qualifyGames3;

        document.getElementById('qualifyGameCodes1').addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/\s+/g, ',').trim();
        })
        document.getElementById('qualifyGameCodes2').addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/\s+/g, ',').trim();
        })
        document.getElementById('qualifyGameCodes3').addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/\s+/g, ',').trim();
        })

        document.getElementById('download').addEventListener('click', () => {
            region = document.getElementById('regions-dropdown').value;

            let title1 = document.getElementById('provider1').value;
            let gameCodes1 = document.getElementById('qualifyGameCodes1').value;
            let title2 = document.getElementById('provider2').value;
            let gameCodes2 = document.getElementById('qualifyGameCodes2').value;
            let title3 = document.getElementById('provider3').value;
            let gameCodes3 = document.getElementById('qualifyGameCodes3').value;

            //gameCodes1 = gameCodes1.toLowerCase().replace(/\s+/g, ',').trim(); //removing spaces and replacing with ,
            //gameCodes2 = gameCodes2.toLowerCase().replace(/\s+/g, ',').trim(); //removing spaces and replacing with ,
            //gameCodes3 = gameCodes3.toLowerCase().replace(/\s+/g, ',').trim(); //removing spaces and replacing with ,

            let provider3 = `       
                <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script><script> $(function() {$("#webteam-ss").attr("href","https://doc.188contents.com/contents/Components/webteam/webteam.css?" + $.now());});</script>
                <div id="content-en-gb" class="tnc-content-wrap">
                    <div class="contentwrap tnc-content-format">
                        <div class="p-3 md:p-0">
                            <div>
                                <CustomGames product="casino"  title="${title1}" games="${gameCodes1}" type="table" class="tnc-multiple-games" :limit="200"/>
                            </div>
                            <div>
                                <CustomGames product="casino"  title="${title2}" games="${gameCodes2}" type="table" class="tnc-multiple-games" :limit="200"/>
                            </div>
                            <div>
                                <CustomGames product="casino"  title="${title3}" games="${gameCodes3}" type="table" class="tnc-multiple-games" :limit="200"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="content-${region}" class="tnc-content-wrap">
                    <div class="contentwrap tnc-content-format">
                        <div class="p-3 md:p-0">
                            <div>
                                <CustomGames product="casino"  title="${title1}" games="${gameCodes1}" type="table" class="tnc-multiple-games" :limit="200"/>
                            </div>
                            <div>
                                <CustomGames product="casino"  title="${title2}" games="${gameCodes2}" type="table" class="tnc-multiple-games" :limit="200"/>
                            </div>
                            <div>
                                <CustomGames product="casino"  title="${title3}" games="${gameCodes3}" type="table" class="tnc-multiple-games" :limit="200"/>
                            </div>
                        </div>
                        </div>
                </div>`

                let fileName = document.getElementById('filename').value;
                let blob = new Blob([provider3], {type: 'text/html'});
                let htmlFile = document.createElement('a');
                htmlFile.download = `${fileName}.html`;
                htmlFile.href = window.URL.createObjectURL(blob);
                htmlFile.click();
        })
    } else if(type === '4'){
        document.getElementById('input-container').innerHTML = qualifyGames4;

        document.getElementById('qualifyGameCodes1').addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/\s+/g, ',').trim();
        })
        document.getElementById('qualifyGameCodes2').addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/\s+/g, ',').trim();
        })
        document.getElementById('qualifyGameCodes3').addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/\s+/g, ',').trim();
        })
        document.getElementById('qualifyGameCodes4').addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/\s+/g, ',').trim();
        })

        document.getElementById('download').addEventListener('click', () => {
            region = document.getElementById('regions-dropdown').value;

            let title1 = document.getElementById('provider1').value;
            let gameCodes1 = document.getElementById('qualifyGameCodes1').value;
            let title2 = document.getElementById('provider2').value;
            let gameCodes2 = document.getElementById('qualifyGameCodes2').value;
            let title3 = document.getElementById('provider3').value;
            let gameCodes3 = document.getElementById('qualifyGameCodes3').value;
            let title4 = document.getElementById('provider4').value;
            let gameCodes4 = document.getElementById('qualifyGameCodes4').value;

            //gameCodes1 = gameCodes1.toLowerCase().replace(/\s+/g, ',').trim(); //removing spaces and replacing with ,
            //gameCodes2 = gameCodes2.toLowerCase().replace(/\s+/g, ',').trim(); //removing spaces and replacing with ,
            //gameCodes3 = gameCodes3.toLowerCase().replace(/\s+/g, ',').trim(); //removing spaces and replacing with ,
            //gameCodes4 = gameCodes4.toLowerCase().replace(/\s+/g, ',').trim(); //removing spaces and replacing with ,

            let provider4 = `       
                <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script><script> $(function() {$("#webteam-ss").attr("href","https://doc.188contents.com/contents/Components/webteam/webteam.css?" + $.now());});</script>
                <div id="content-en-gb" class="tnc-content-wrap">
                    <div class="contentwrap tnc-content-format">
                        <div class="p-3 md:p-0">
                            <div>
                                <CustomGames product="casino"  title="${title1}" games="${gameCodes1}" type="table" class="tnc-multiple-games" :limit="200"/>
                            </div>
                            <div>
                                <CustomGames product="casino"  title="${title2}" games="${gameCodes2}" type="table" class="tnc-multiple-games" :limit="200"/>
                            </div>
                            <div>
                                <CustomGames product="casino"  title="${title3}" games="${gameCodes3}" type="table" class="tnc-multiple-games" :limit="200"/>
                            </div>
                            <div>
                                <CustomGames product="casino"  title="${title4}" games="${gameCodes4}" type="table" class="tnc-multiple-games" :limit="200"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="content-${region}" class="tnc-content-wrap">
                    <div class="contentwrap tnc-content-format">
                        <div class="p-3 md:p-0">
                            <div>
                                <CustomGames product="casino"  title="${title1}" games="${gameCodes1}" type="table" class="tnc-multiple-games" :limit="200"/>
                            </div>
                            <div>
                                <CustomGames product="casino"  title="${title2}" games="${gameCodes2}" type="table" class="tnc-multiple-games" :limit="200"/>
                            </div>
                            <div>
                                <CustomGames product="casino"  title="${title3}" games="${gameCodes3}" type="table" class="tnc-multiple-games" :limit="200"/>
                            </div>
                            <div>
                                <CustomGames product="casino"  title="${title4}" games="${gameCodes4}" type="table" class="tnc-multiple-games" :limit="200"/>
                            </div>
                        </div>
                        </div>
                </div>`

                let fileName = document.getElementById('filename').value;
                let blob = new Blob([provider4], {type: 'text/html'});
                let htmlFile = document.createElement('a');
                htmlFile.download = `${fileName}.html`;
                htmlFile.href = window.URL.createObjectURL(blob);
                htmlFile.click();
        })
    }
})

//generate APS to HTML filename
let fileNameAPS = document.getElementById('filename');
const stringMonth = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
const generateFilenameBtn = document.getElementById('generateFilename')
generateFilenameBtn.addEventListener('click', () => {
  let input = document.getElementById('filename').value
  let indexOf_ = input.indexOf('_')
  //let promoType = input.slice(indexOf_ + 1, indexOf_ + 5) + '_'
  let country = input.substr(0, indexOf_ + 1)
  let promoType = input.substr(indexOf_ + 1, 4)
  let year = input.substr(indexOf_ + 5, 4)
  let day = input.substr(indexOf_ + 9, 2)
  let month = input.substr(indexOf_ + 11, 2)
  let promoNumber = input.substr(indexOf_ + 13, 3)
  
  fileNameAPS.value = country + promoType + '_' + day + '_' + stringMonth[month - 1] + '_' + year + '_' + promoNumber
  
})