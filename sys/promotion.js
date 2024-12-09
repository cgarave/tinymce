let scardLength = ''
//TinyMCE settings
tinymce.init({
  selector: '#mytextarea',
  table_resize_bars: false, //disable resize bars
  object_resizing: 'img', //disable table resizing
  visualblocks_default_state: false, //display visual blocks by default
  resize_img_proportional: false,

  encoding: 'xml',
  element_format: 'xhtml',
  invalid_elements: 'b, i',
  entity_encoding: 'raw',

  setup: function(editor) {
    editor.on('BeforeSetContent', function(event) {

      //Copy SCard
      const scardcontentMatches = event.content.match(/<SCard[^>]*>.*?<\/SCard>/gs);
      scardLength = scardcontentMatches //return all SCard as an array

      // Example: Replace :href with some specific handling
      event.content = event.content.replace(/:href/g, 'href')
                                   .replace(/<SCard[^>]*>.*?<\/SCard>/gs, '<h4 class="my-4 font-semibold text-red-500" style="color: red;">Dont remove as this will be replaced with SCard</h4>').trim()
                              
                                   .replace(/<a :href="(.*?)">/g, '<a :href="`$1`">')
                                   .replaceAll('<ol class="list-lower-alpha pl-8 mb-4">', '<ol class="list-lower-alpha pl-8 mb-4" style="list-style-type: lower-alpha;">')
                                   .replaceAll('<ol class="list-upper-alpha pl-8 mb-4">', '<ol class="list-upper-alpha pl-8 mb-4" style="list-style-type: upper-alpha;">')
                                   .replaceAll('<ol class="list-lower-roman pl-8 mb-4">', '<ol class="list-lower-roman pl-8 mb-4" style="list-style-type: lower-roman;">')
                                   .replaceAll('<ol class="list-upper-roman pl-8 mb-4">', '<ol class="list-upper-roman pl-8 mb-4" style="list-style-type: upper-roman;">')

      //console.log('BeforeSetContent:', event.content);
    }),
    editor.on('NodeChange', function () {
      // Get the selected content
      
      document.getElementById('redBtn').addEventListener('click', () => {
        const selectedText = editor.selection.getContent({format: 'html'});
        const selectedNode = editor.selection.getNode();
        editor.selection.setContent('<span style="color: red;">' + selectedText + '</span>')
      })
    });
  },
  
  
  
  paste_as_text: false, 
  newline_behavior: 'block',
  height: '68vh',
  width: '100%',
  resize: false,
  content_style: `
                  body {
                    padding: 20px;
                    font-size: 12px
                  }
                  h2 {
                    font-size: 14px;
                  }
                  table {
                    width: 100%;
                  }`,
  plugins: ["template paste autolink link image lists advlist charmap hr anchor",
            "searchreplace wordcount visualblocks visualchars media nonbreaking",
            "table contextmenu directionality template paste"], //insert 'code' to view source
  toolbar: 'template undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image table mergetags | align lineheight | checklist bullist numlist startAtButton',
  tinycomments_author: 'Author name',
  mergetags_list: [
    { value: 'First.Name', title: 'First Name' },
    { value: 'Email', title: 'Email' },
  ],
  templates: [{
      title: '(Experimental) Game Icons Live Casino',
      content: `<table class="live-game" style="background-color: #eeeeee;">
                  <tbody>
                    <tr>
                      <td colspan="3">Recommend Live Casino Games</td>
                    </tr>
                    <tr class="live-game-img">
                      <td>
                        <img src="https://doc-cdn.stcb18x1.com/star4-content/images/live/agiledeal/agi-zodiac-racing-4x3-sm.webp" alt="game icon" width="50px" />
                      </td>
                      <td class="live-game-title">Game Title</td>
                      <td class="live-game-link">
                        <a href="https://www.188bet.com/en-gb/casino">Play Now</a>
                      </td>
                    </tr>
                    <tr class="live-game-img">
                      <td>
                        <img src="https://doc-cdn.stcb18x1.com/star4-content/images/live/agiledeal/agi-zodiac-racing-4x3-sm.webp" alt="game icon" width="50px" />
                      </td>
                      <td class="live-game-title">Game Title 2</td>
                      <td class="live-game-link">
                        <a href="https://www.188bet.com/en-gb/casino">Play Now</a>
                      </td>
                    </tr>
                    <tr class="live-game-img">
                      <td>
                        <img src="https://doc-cdn.stcb18x1.com/star4-content/images/live/agiledeal/agi-zodiac-racing-4x3-sm.webp" alt="game icon" width="50px" />
                      </td>
                      <td class="live-game-title">Game Title 3</td>
                      <td class="live-game-link">
                        <a href="https://www.188bet.com/en-gb/casino">Play Now</a>
                      </td>
                    </tr>
                    <tr class="live-game-img">
                      <td>
                        <img src="https://doc-cdn.stcb18x1.com/star4-content/images/live/agiledeal/agi-zodiac-racing-4x3-sm.webp" alt="game icon" width="50px" />
                      </td>
                      <td class="live-game-title">Game Title 4</td>
                      <td class="live-game-link">
                        <a href="https://www.188bet.com/en-gb/casino">Play Now</a>
                      </td>
                    </tr>   
                    <tr class="live-game-img">
                      <td>
                        <img src="https://doc-cdn.stcb18x1.com/star4-content/images/live/agiledeal/agi-zodiac-racing-4x3-sm.webp" alt="game icon" width="50px" />
                      </td>
                      <td class="live-game-title">Game Title 5</td>
                      <td class="live-game-link">
                        <a href="https://www.188bet.com/en-gb/casino">Play Now</a>
                      </td>
                    </tr>      
                  </tbody>
                <tfoot class="game" style="display: none;">
                </tfoot>
              </table>`
  }],
  
});

//Sandwich method
const script1 = `<div id="script1" class="hidden" style="visibility: hidden; display: none;">1</div><script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>`;
const script2 = `<div id="script2" class="hidden" style="visibility: hidden; display: none;">1</div><script> $(function () { $("#webteam-ss").attr("href", "https://doc.188contents.com/contents/Components/webteam/webteam.css?" + $.now()); });</script>`;
const closeSExpansion = ` </template>
                          </SExpansionPanel>
                          </div>
                          <IncludeContent :url="promoDetail.termsTpl"></IncludeContent>
                          </div>
                          <div id="closeSExpansion" class="hidden" style="visibility: hidden;">1</div>`;

const SExpansion = {
  EN: `<div id="SExpansion" class="hidden" style="visibility: hidden;">1</div>
        <SExpansionPanel class="last:rounded-b-lg border-0" header-class="bg-transparent" content-class="last:rounded-b-lg">
        <template #header>
          <h2 class="m-4 font-semibold text-body-1">Full Promotion Specific Terms and Conditions</h2>
        </template>
        <template #content>`,
  CN: `<div id="SExpansion-CN" class="hidden" style="visibility: hidden;">1</div>
        <SExpansionPanel class="last:rounded-b-lg border-0" header-class="bg-transparent" content-class="last:rounded-b-lg">
        <template #header>
          <h2 class="m-4 font-semibold text-body-1">完整优惠标准规则</h2>
        </template>
        <template #content>`,
  VN: `<div id="SExpansion-VN" class="hidden" style="visibility: hidden;">1</div>
        <SExpansionPanel class="last:rounded-b-lg border-0" header-class="bg-transparent" content-class="last:rounded-b-lg">
        <template #header>
          <h2 class="m-4 font-semibold text-body-1">Điều Khoản và Điều Kiện Hoàn Chỉnh</h2>
        </template>
        <template #content>`,
  TH: `<div id="SExpansion-TH" class="hidden" style="visibility: hidden;">1</div>
        <SExpansionPanel class="last:rounded-b-lg border-0" header-class="bg-transparent" content-class="last:rounded-b-lg">
        <template #header>
          <h2 class="m-4 font-semibold text-body-1">ข้อกำหนดและเงื่อนไขแบบเฉพาะเจาะจง</h2>
        </template>
        <template #content>`,
  KR: `<div id="SExpansion-KR" class="hidden" style="visibility: hidden;">1</div>
        <SExpansionPanel class="last:rounded-b-lg border-0" header-class="bg-transparent" content-class="last:rounded-b-lg">
        <template #header>
          <h2 class="m-4 font-semibold text-body-1">본 프로모션 이용약관</h2>
        </template>
        <template #content>`,
  ID: `<div id="SExpansion-ID" class="hidden" style="visibility: hidden;">1</div>
        <SExpansionPanel class="last:rounded-b-lg border-0" header-class="bg-transparent" content-class="last:rounded-b-lg">
        <template #header>
          <h2 class="m-4 font-semibold text-body-1">Syarat dan Kondisi Spesifik promosi Lengkap</h2>
        </template>
        <template #content>`,
  KH: `<div id="SExpansion-KH" class="hidden" style="visibility: hidden;">1</div>
        <SExpansionPanel class="last:rounded-b-lg border-0" header-class="bg-transparent" content-class="last:rounded-b-lg">
        <template #header>
          <h2 class="m-4 font-semibold text-body-1">លក្ខខណ្ឌ និងកិច្ចព្រមព្រៀងជាក់លាក់នៃការផ្តល់រង្វាន់ទាំងអស</h2>
        </template>
        <template #content>`,
  JP: `<div id="SExpansion-JP" class="hidden" style="visibility: hidden;">1</div>
        <SExpansionPanel class="last:rounded-b-lg border-0" header-class="bg-transparent" content-class="last:rounded-b-lg">
        <template #header>
          <h2 class="m-4 font-semibold text-body-1">全てのプロモーション－特定の利用規約</h2>
        </template>
        <template #content>`,
  IN: `<div id="SExpansion-IN" class="hidden" style="visibility: hidden;">1</div>
        <SExpansionPanel class="last:rounded-b-lg border-0" header-class="bg-transparent" content-class="last:rounded-b-lg">
        <template #header>
          <h2 class="m-4 font-semibold text-body-1">पूर्ण प्रमोशन-विशिष्ट नियम और शर्तें</h2>
        </template>
        <template #content>`,
}

//Templates object
const templates = {
  TNC: `<div id="script1" class="hidden" style="visibility: hidden; display: none;">1</div>
          <div id="script2" class="hidden" style="visibility: hidden; display: none;">1</div>
          <div id="content-en-gb" class="tnc-content-wrap hidden" style="visibility: hidden; display: none;">1</div>
              <div class="contentwrap tnc-content-format hidden" style="visibility: hidden; display: none;">1</div>
                  <h2 class="mb-4 font-semibold text-body-1">Significant Conditions</h2>
                  <p>Write/Paste Significant Contents here</p>
                  <div id="SExpansion" class="hidden" style="visibility: hidden;">1</div>
                      <div class="full-promotion-content">
                          <p id="fpstc-en" style="font-weight: 600;">Full Promotion Specific Terms and Conditions</p>
                          <p>Write/Paste Full Promotion contents here</p>
                      </div>
                  <div id="closeSExpansion" class="hidden" style="visibility: hidden;">1</div>

          <div id="content-REGION" class="tnc-content-wrap hidden" style="visibility: hidden;">1</div>
              <div class="contentwrap tnc-content-format hidden" style="visibility: hidden;">1</div>
                  <h2 class="mb-4 font-semibold text-body-1 mt-40">LOCALIZED-SC</h2>
                  <p>Write/Paste Localized Significant Contents here</p>
                  <div id="LOCALIZED-SExpansion" class="hidden" style="visibility: hidden;">1</div>
                      <div class="full-promotion-content">
                          <p id="fpstc-local" style="font-weight: 600;">LOCALIZED-FP</p>
                          <p>Write/Paste Localized Full Promotion contents here</p>
                      </div>
                  <div id="closeSExpansion" class="hidden" style="visibility: hidden;">1</div>`,
}

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

//Import Area Button
let htmlContent = ''
const showImportArea = document.getElementById('importBtn').onclick = () => {document.getElementById('importArea').classList.remove('hidden')}
const cancelImport = document.getElementById('cancelImport').onclick = () => {
  document.getElementById('htmlContent').value = ''
  document.getElementById('importArea').classList.add('hidden')
}
const importCode = document.getElementById('importCode').onclick = () => {
  htmlContent = document.getElementById('htmlContent').value
  tinymce.get('mytextarea').setContent(htmlContent)

  document.getElementById('importArea').classList.add('hidden')
  document.getElementById('import-check').checked = true;

  //console.log(scardContents);
  
}

//Region handler
const tncRegionDropdown = document.getElementById('tnc-regions-dropdown');
tncRegionDropdown.addEventListener('change', () => {

  const selectedRegion = tncRegionDropdown.value;
  
  switch(selectedRegion){
    case 'zh-cn':
      document.getElementById('filename').value = 'china_'
      templates.TNC = templates.TNC.replace('REGION', 'zh-cn')
      templates.TNC = templates.TNC.replace('LOCALIZED-SC', '主要规则')
      templates.TNC = templates.TNC.replace('LOCALIZED-FP', '完整优惠标准规则')
      templates.TNC = templates.TNC.replace('LOCALIZED-SExpansion', 'SExpansion-CN')
      tinymce.get('mytextarea').setContent(templates.TNC);
      templates.TNC = templates.TNC.replace('zh-cn', 'REGION')
      templates.TNC = templates.TNC.replace('主要规则', 'LOCALIZED-SC')
      templates.TNC = templates.TNC.replace('完整优惠标准规则', 'LOCALIZED-FP')
      templates.TNC = templates.TNC.replace('SExpansion-CN', 'LOCALIZED-SExpansion')
      document.getElementById('import-check').checked = false;
      break;
    case 'zh-my':
      document.getElementById('filename').value = 'MY_'
      templates.TNC = templates.TNC.replace('REGION', 'zh-cn')
      templates.TNC = templates.TNC.replace('LOCALIZED-SC', '主要规则')
      templates.TNC = templates.TNC.replace('LOCALIZED-FP', '完整优惠标准规则')
      templates.TNC = templates.TNC.replace('LOCALIZED-SExpansion', 'SExpansion-CN')
      tinymce.get('mytextarea').setContent(templates.TNC);
      templates.TNC = templates.TNC.replace('zh-cn', 'REGION')
      templates.TNC = templates.TNC.replace('主要规则', 'LOCALIZED-SC')
      templates.TNC = templates.TNC.replace('完整优惠标准规则', 'LOCALIZED-FP')
      templates.TNC = templates.TNC.replace('SExpansion-CN', 'LOCALIZED-SExpansion')
      document.getElementById('import-check').checked = false;
      break;
    case 'vi-vn':
      document.getElementById('filename').value = 'Vietnam_'
      templates.TNC = templates.TNC.replace('REGION', 'vi-vn')
      templates.TNC = templates.TNC.replace('LOCALIZED-SC', 'Điều Kiện Tóm Lược')
      templates.TNC = templates.TNC.replace('LOCALIZED-FP', 'Điều Khoản và Điều Kiện Hoàn Chỉnh')
      templates.TNC = templates.TNC.replace('LOCALIZED-SExpansion', 'SExpansion-VN')
      tinymce.get('mytextarea').setContent(templates.TNC);
      templates.TNC = templates.TNC.replace('vi-vn', 'REGION')
      templates.TNC = templates.TNC.replace('Điều Kiện Tóm Lược', 'LOCALIZED-SC')
      templates.TNC = templates.TNC.replace('Điều Khoản và Điều Kiện Hoàn Chỉnh', 'LOCALIZED-FP')
      templates.TNC = templates.TNC.replace('SExpansion-VN', 'LOCALIZED-SExpansion')
      document.getElementById('import-check').checked = false;
      break;
    case 'th-th':
      document.getElementById('filename').value = 'Thailand_'
      templates.TNC = templates.TNC.replace('REGION', 'th-th')
      templates.TNC = templates.TNC.replace('LOCALIZED-SC', 'ข้อกำหนดและเงื่อนไขฉบับย่อ')
      templates.TNC = templates.TNC.replace('LOCALIZED-FP', 'ข้อกำหนดและเงื่อนไขแบบเฉพาะเจาะจง')
      templates.TNC = templates.TNC.replace('LOCALIZED-SExpansion', 'SExpansion-TH')
      tinymce.get('mytextarea').setContent(templates.TNC);
      templates.TNC = templates.TNC.replace('th-th', 'REGION')
      templates.TNC = templates.TNC.replace('ข้อกำหนดและเงื่อนไขฉบับย่อ', 'LOCALIZED-SC')
      templates.TNC = templates.TNC.replace('ข้อกำหนดและเงื่อนไขแบบเฉพาะเจาะจง', 'LOCALIZED-FP')
      templates.TNC = templates.TNC.replace('SExpansion-TH', 'LOCALIZED-SExpansion')
      document.getElementById('import-check').checked = false;
      break;
    case 'ko-kr':
      document.getElementById('filename').value = 'Korea_'
      templates.TNC = templates.TNC.replace('REGION', 'ko-kr')
      templates.TNC = templates.TNC.replace('LOCALIZED-SC', '약관 주요내용')
      templates.TNC = templates.TNC.replace('LOCALIZED-FP', '본 프로모션 이용약관')
      templates.TNC = templates.TNC.replace('LOCALIZED-SExpansion', 'SExpansion-KR')
      tinymce.get('mytextarea').setContent(templates.TNC);
      templates.TNC = templates.TNC.replace('ko-kr', 'REGION')
      templates.TNC = templates.TNC.replace('약관 주요내용', 'LOCALIZED-SC')
      templates.TNC = templates.TNC.replace('본 프로모션 이용약관', 'LOCALIZED-FP')
      templates.TNC = templates.TNC.replace('SExpansion-KR', 'LOCALIZED-SExpansion')
      document.getElementById('import-check').checked = false;
      break;
    case 'id-id':
      document.getElementById('filename').value = 'Indonesia_'
      templates.TNC = templates.TNC.replace('REGION', 'id-id')
      templates.TNC = templates.TNC.replace('LOCALIZED-SC', 'Syarat dan Kondisi Penting')
      templates.TNC = templates.TNC.replace('LOCALIZED-FP', 'Syarat dan Kondisi Spesifik promosi Lengkap')
      templates.TNC = templates.TNC.replace('LOCALIZED-SExpansion', 'SExpansion-ID')
      tinymce.get('mytextarea').setContent(templates.TNC);
      templates.TNC = templates.TNC.replace('id-id', 'REGION')
      templates.TNC = templates.TNC.replace('Syarat dan Kondisi Penting', 'LOCALIZED-SC')
      templates.TNC = templates.TNC.replace('Syarat dan Kondisi Spesifik promosi Lengkap', 'LOCALIZED-FP')
      templates.TNC = templates.TNC.replace('SExpansion-ID', 'LOCALIZED-SExpansion')
      document.getElementById('import-check').checked = false;
      break
    case 'km-kh':
      document.getElementById('filename').value = 'Cambodia_'
      templates.TNC = templates.TNC.replace('REGION', 'km-kh')
      templates.TNC = templates.TNC.replace('LOCALIZED-SC', 'លក្ខខណ្ឌសំខាន់ៗ')
      templates.TNC = templates.TNC.replace('LOCALIZED-FP', 'លក្ខខណ្ឌ និងកិច្ចព្រមព្រៀងជាក់លាក់នៃការផ្តល់រង្វាន់ទាំងអស')
      templates.TNC = templates.TNC.replace('LOCALIZED-SExpansion', 'SExpansion-KH')
      tinymce.get('mytextarea').setContent(templates.TNC);
      templates.TNC = templates.TNC.replace('km-kh', 'REGION')
      templates.TNC = templates.TNC.replace('លក្ខខណ្ឌសំខាន់ៗ', 'LOCALIZED-SC')
      templates.TNC = templates.TNC.replace('លក្ខខណ្ឌ និងកិច្ចព្រមព្រៀងជាក់លាក់នៃការផ្តល់រង្វាន់ទាំងអស', 'LOCALIZED-FP')
      templates.TNC = templates.TNC.replace('SExpansion-KH', 'LOCALIZED-SExpansion')
      document.getElementById('import-check').checked = false;
      break;
    case 'ja-jp':
      document.getElementById('filename').value = 'Japan_'
      templates.TNC = templates.TNC.replace('REGION', 'ja-jp')
      templates.TNC = templates.TNC.replace('LOCALIZED-SC', 'キャンペーン概要')
      templates.TNC = templates.TNC.replace('LOCALIZED-FP', '全てのプロモーション－特定の利用規約')
      templates.TNC = templates.TNC.replace('LOCALIZED-SExpansion', 'SExpansion-JP')
      tinymce.get('mytextarea').setContent(templates.TNC);
      templates.TNC = templates.TNC.replace('ja-jp', 'REGION')
      templates.TNC = templates.TNC.replace('キャンペーン概要', 'LOCALIZED-SC')
      templates.TNC = templates.TNC.replace('全てのプロモーション－特定の利用規約', 'LOCALIZED-FP')
      templates.TNC = templates.TNC.replace('SExpansion-JP', 'LOCALIZED-SExpansion')
      document.getElementById('import-check').checked = false;
      break;
    case 'hi-in':
      document.getElementById('filename').value = 'India_'
      templates.TNC = templates.TNC.replace('REGION', 'hi-in')
      templates.TNC = templates.TNC.replace('LOCALIZED-SC', 'टमहत्वपूर्ण स्थितियां')
      templates.TNC = templates.TNC.replace('LOCALIZED-FP', 'पूर्ण प्रमोशन-विशिष्ट नियम और शर्तें')
      templates.TNC = templates.TNC.replace('LOCALIZED-SExpansion', 'SExpansion-IN')
      tinymce.get('mytextarea').setContent(templates.TNC);
      templates.TNC = templates.TNC.replace('hi-in', 'REGION')
      templates.TNC = templates.TNC.replace('टमहत्वपूर्ण स्थितियां', 'LOCALIZED-SC')
      templates.TNC = templates.TNC.replace('पूर्ण प्रमोशन-विशिष्ट नियम और शर्तें', 'LOCALIZED-FP')
      templates.TNC = templates.TNC.replace('SExpansion-IN', 'LOCALIZED-SExpansion')
      document.getElementById('import-check').checked = false;
      break;
  }
})
  //import check function
  document.getElementById('import-check').checked = false;
  document.getElementById('download').addEventListener('click', (data) => {
    if(document.getElementById('import-check').checked === true){

      let importedContent = tinymce.get('mytextarea').getContent()
      let importedResult = ''
      let y = ''

      if(!importedContent.includes('<div id="script1" class="hidden" style="visibility: hidden; display: none;">1</div>')){
        importedContent += '<div id="closeSExpansion" class="hidden" style="visibility: hidden;">1</div>'

        let fsptcEn = ''
        let fsptcLocal = ''
        if(importedContent.match(/<h2 class="m-4 font-semibold text-body-1">(.*?)<\/h2>/g)){
          let matches = importedContent.match(/<h2 class="m-4 font-semibold text-body-1">(.*?)<\/h2>/g)
          // fsptcEn = matches[0].replace('<h2 class="m-4 font-semibold text-body-1">', '').replace('</h2>', '')
          // testfsptcLocal = matches[1].replace('<h2 class="m-4 font-semibold text-body-1">', '').replace('</h2>', '')
          fsptcEn = matches[0]
          fsptcLocal = matches[1]
        }

        y = importedContent.replaceAll('<div id="content-en-gb" class="tnc-content-wrap">', '<div id="script1" class="hidden" style="visibility: hidden; display: none;">1</div><div id="script2" class="hidden" style="visibility: hidden; display: none;">1</div><div id="content-en-gb" class="tnc-content-wrap">')
                           .replaceAll('<div class="full-promotion-content">', '<div id="SExpansion" class="hidden" style="visibility: hidden;">1</div><div class="full-promotion-content">')

                           .replaceAll('<div id="content-zh-cn" class="tnc-content-wrap">', '<div id="closeSExpansion" class="hidden" style="visibility: hidden;">1</div><div id="content-zh-cn" class="tnc-content-wrap">')
                           .replaceAll('<div id="content-vi-vn" class="tnc-content-wrap">', '<div id="closeSExpansion" class="hidden" style="visibility: hidden;">1</div><div id="content-vi-vn" class="tnc-content-wrap">')
                           .replaceAll('<div id="content-th-th" class="tnc-content-wrap">', '<div id="closeSExpansion" class="hidden" style="visibility: hidden;">1</div><div id="content-th-th" class="tnc-content-wrap">')
                           .replaceAll('<div id="content-ko-kr" class="tnc-content-wrap">', '<div id="closeSExpansion" class="hidden" style="visibility: hidden;">1</div><div id="content-ko-kr" class="tnc-content-wrap">')
                           .replaceAll('<div id="content-id-id" class="tnc-content-wrap">', '<div id="closeSExpansion" class="hidden" style="visibility: hidden;">1</div><div id="content-id-id" class="tnc-content-wrap">')
                           .replaceAll('<div id="content-km-kh" class="tnc-content-wrap">', '<div id="closeSExpansion" class="hidden" style="visibility: hidden;">1</div><div id="content-km-kh" class="tnc-content-wrap">')
                           .replaceAll('<div id="content-ja-jp" class="tnc-content-wrap">', '<div id="closeSExpansion" class="hidden" style="visibility: hidden;">1</div><div id="content-ja-jp" class="tnc-content-wrap">')
                           .replaceAll('<div id="content-hi-in" class="tnc-content-wrap">', '<div id="closeSExpansion" class="hidden" style="visibility: hidden;">1</div><div id="content-hi-in" class="tnc-content-wrap">')
                           .replace(/<\/div>\s*<\/div>\s*<div id="closeSExpansion" class="hidden" style="visibility: hidden;">1<\/div>/g, '<div id="closeSExpansion" class="hidden" style="visibility: hidden;">1</div>')

                           .replace(/<h2 class="m-4 font-semibold text-body-1">(.*?)<\/h2>/g, '') //en/local full prom cleanup

                           //links
                           .replaceAll('&#96;', '`')
                           .replaceAll('href', ':href')
                           //.replaceAll('<br />', '')

                           .replaceAll('<div id="script1" class="hidden" style="visibility: hidden; display: none;">1</div>', script1)
                           .replaceAll('<div id="script2" class="hidden" style="visibility: hidden; display: none;">1</div>', script2)
                           .replaceAll('<div id="SExpansion" class="hidden" style="visibility: hidden;">1</div>', SExpansion.EN)
                           .replaceAll('<div id="closeSExpansion" class="hidden" style="visibility: hidden;">1</div>', closeSExpansion);

        
        //Full prom
        // let fullPromMatches = y.match(/<h2 class="m-4 font-semibold text-body-1">Full Promotion Specific Terms and Conditions<\/h2>/g);
        // y = y.replace(fullPromMatches[1], 'hello')
        
        let matchScard = y.match(/<h4 class="my-4 font-semibold text-red-500" style="color: red;">Dont remove as this will be replaced with SCard<\/h4>/g)

        if(matchScard){
          for(let i = 0; i <= matchScard.length; i++){
            y = y.replace(matchScard[i], scardLength[i])
            //console.log(matchScard[i]);
          }
        }

        let replacedFullProm = y.match(/<h2 class="m-4 font-semibold text-body-1">(.*?)<\/h2>/g)
        
        if(replacedFullProm){
          //y = y.replace(replacedFullProm[0], '<h2 class="m-4 font-semibold text-body-1">' + fsptcEn + '</h2>')
          y = y.replace(replacedFullProm[0], fsptcEn).replace(replacedFullProm[1], fsptcLocal)
          
        }
        
        
      }

      else if(importedContent.includes('<div id="script1" class="hidden" style="visibility: hidden; display: none;">1</div>')){

        if (importedContent.match('content-zh-cn')) {
          importedResult = importedContent.replace('LOCALIZED-SExpansion', 'SExpansion-CN')
        }
        else if (importedContent.match('content-vi-vn')) {
          importedResult = importedContent.replace('LOCALIZED-SExpansion', 'SExpansion-VN')
        }
        else if (importedContent.match('content-th-th')) {
          importedResult = importedContent.replace('LOCALIZED-SExpansion', 'SExpansion-TH')
        }
        else if (importedContent.match('content-ko-kr')) {
          importedResult = importedContent.replace('LOCALIZED-SExpansion', 'SExpansion-KR')
        }
        else if (importedContent.match('content-id-id')) {
          importedResult = importedContent.replace('LOCALIZED-SExpansion', 'SExpansion-ID')
        }
        else if (importedContent.match('content-km-kh')) {
          importedResult = importedContent.replace('LOCALIZED-SExpansion', 'SExpansion-KH')
        }
        else if (importedContent.match('content-ja-jp')) {
          importedResult = importedContent.replace('LOCALIZED-SExpansion', 'SExpansion-JP')
        }
        else if (importedContent.match('content-hi-in')) {
          importedResult = importedContent.replace('LOCALIZED-SExpansion', 'SExpansion-IN')
        }

        let fsptcEn = ''
        let fsptcLocal = ''
        if(importedResult.match(/<h2 class="m-4 font-semibold text-body-1">(.*?)<\/h2>/g)){
          let matches = importedResult.match(/<h2 class="m-4 font-semibold text-body-1">(.*?)<\/h2>/g)
          fsptcEn = matches[0].replace('<h2 class="m-4 font-semibold text-body-1">', '').replace('</h2>', '')
          fsptcLocal = matches[1].replace('<h2 class="m-4 font-semibold text-body-1">', '').replace('</h2>', '')
        }
       
        
  
        y = importedResult.replace(/<h2 class="m-4 font-semibold text-body-1">(.*?)<\/h2>/g, '')  //en/local full prom cleanup
                          .replace(/<\/div>\s*<\/div>\s*<div id="closeSExpansion" class="hidden" style="visibility: hidden;">1<\/div>/g, '<div id="closeSExpansion" class="hidden" style="visibility: hidden;">1</div>')
                          //images
                          .replace(/<img(.*?)\/>/g, '<img class="my-0 mx-auto h-auto rounded-lg" $1/>')
                          
                          .replaceAll('<ol class="list-decimal pl-8 mb-4" style="list-style-type: lower-alpha;">', '<ol class="list-lower-alpha pl-8 mb-4" style="list-style-type: lower-alpha;">')
                          .replaceAll('<ol class="list-decimal pl-8 mb-4" style="list-style-type: lower-roman;">', '<ol class="list-lower-roman pl-8 mb-4" style="list-style-type: lower-roman;">')

                          .replaceAll('<div id="SExpansion" class="hidden" style="visibility: hidden;">1</div>', SExpansion.EN.replace('Full Promotion Specific Terms and Conditions', fsptcEn))
                          .replaceAll('<div id="SExpansion-CN" class="hidden" style="visibility: hidden;">1</div>', SExpansion.CN.replace('完整优惠标准规则', fsptcLocal))
                          .replaceAll('<div id="SExpansion-VN" class="hidden" style="visibility: hidden;">1</div>', SExpansion.VN.replace('Điều Khoản và Điều Kiện Hoàn Chỉnh', fsptcLocal))
                          .replaceAll('<div id="SExpansion-TH" class="hidden" style="visibility: hidden;">1</div>', SExpansion.TH.replace('ข้อกำหนดและเงื่อนไขแบบเฉพาะเจาะจง', fsptcLocal))
                          .replaceAll('<div id="SExpansion-KR" class="hidden" style="visibility: hidden;">1</div>', SExpansion.KR.replace('본 프로모션 이용약관', fsptcLocal))
                          .replaceAll('<div id="SExpansion-ID" class="hidden" style="visibility: hidden;">1</div>', SExpansion.ID.replace('Syarat dan Kondisi Spesifik promosi Lengkap', fsptcLocal))
                          .replaceAll('<div id="SExpansion-KH" class="hidden" style="visibility: hidden;">1</div>', SExpansion.KH.replace('លក្ខខណ្ឌ និងកិច្ចព្រមព្រៀងជាក់លាក់នៃការផ្តល់រង្វាន់ទាំងអស', fsptcLocal))
                          .replaceAll('<div id="SExpansion-JP" class="hidden" style="visibility: hidden;">1</div>', SExpansion.JP.replace('全てのプロモーション－特定の利用規約', fsptcLocal))
                          .replaceAll('<div id="SExpansion-IN" class="hidden" style="visibility: hidden;">1</div>', SExpansion.IN.replace('पूर्ण प्रमोशन-विशिष्ट नियम और शर्तें', fsptcLocal))
                          .replaceAll('<div id="closeSExpansion" class="hidden" style="visibility: hidden;">1</div>', closeSExpansion)

                          //links
                          .replaceAll('&#96;', '`')
                          .replaceAll('href', ':href')
                          .replaceAll('<div id="script1" class="hidden" style="visibility: hidden; display: none;">1</div>', script1) 
                          .replaceAll('<div id="script2" class="hidden" style="visibility: hidden; display: none;">1</div>', script2)  
                          //.replace(/<a :href="(.*?)">/g, '<a :href="`$1`">')

        //.replaceAll('<h4 class="my-4 font-semibold text-red-500" style="color: red;">Dont remove as this will be replaced with SCard</h4>', scardContents[0])
        let matchScard = y.match(/<h4 class="my-4 font-semibold text-red-500" style="color: red;">Dont remove as this will be replaced with SCard<\/h4>/g)

        if(matchScard){
          for(let i = 0; i <= matchScard.length; i++){
            y = y.replace(matchScard[i], scardLength[i])
            //console.log(matchScard[i]);
          }
        }
      }

      
      let fileName = document.getElementById('filename').value;
      let blob = new Blob([y], {type: 'text/html'});
      let htmlFile = document.createElement('a');
      htmlFile.download = `${fileName}.html`;
      htmlFile.href = window.URL.createObjectURL(blob);
      htmlFile.click();
    } 
    else if (document.getElementById('import-check').checked === false){

      let content = previewContent(data)
      let newContent = content;

      //replacing all contents, removing preview contents before download
      let x = newContent.replaceAll('<div id="script1" class="hidden" style="visibility: hidden; display: none;">1</div>', script1)
                        .replaceAll('<div id="script2" class="hidden" style="visibility: hidden; display: none;">1</div>', script2)

                        .replaceAll('<div id="content-en-gb" class="tnc-content-wrap hidden" style="visibility: hidden; display: none;">1</div>', '<div id="content-en-gb" class="tnc-content-wrap">')
                        .replaceAll('<div id="content-REGION" class="tnc-content-wrap hidden" style="visibility: hidden;">1</div>', '<div id="content-REGION" class="tnc-content-wrap">')
                        .replaceAll('<div id="content-zh-cn" class="tnc-content-wrap hidden" style="visibility: hidden;">1</div>', '<div id="content-zh-cn" class="tnc-content-wrap">')
                        .replaceAll('<div id="content-vi-vn" class="tnc-content-wrap hidden" style="visibility: hidden;">1</div>', '<div id="content-vi-vn" class="tnc-content-wrap">')
                        .replaceAll('<div id="content-th-th" class="tnc-content-wrap hidden" style="visibility: hidden;">1</div>', '<div id="content-th-th" class="tnc-content-wrap">')
                        .replaceAll('<div id="content-ko-kr" class="tnc-content-wrap hidden" style="visibility: hidden;">1</div>', '<div id="content-ko-kr" class="tnc-content-wrap">')
                        .replaceAll('<div id="content-id-id" class="tnc-content-wrap hidden" style="visibility: hidden;">1</div>', '<div id="content-id-id" class="tnc-content-wrap">')
                        .replaceAll('<div id="content-km-kh" class="tnc-content-wrap hidden" style="visibility: hidden;">1</div>', '<div id="content-km-kh" class="tnc-content-wrap">')
                        .replaceAll('<div id="content-ja-jp" class="tnc-content-wrap hidden" style="visibility: hidden;">1</div>', '<div id="content-ja-jp" class="tnc-content-wrap">')
                        .replaceAll('<div id="content-hi-in" class="tnc-content-wrap hidden" style="visibility: hidden;">1</div>', '<div id="content-hi-in" class="tnc-content-wrap">')
                        .replaceAll('<div class="contentwrap tnc-content-format hidden" style="visibility: hidden; display: none;">1</div>', '<div class="contentwrap tnc-content-format">')
                        .replaceAll('<div class="contentwrap tnc-content-format hidden" style="visibility: hidden;">1</div>', '<div class="contentwrap tnc-content-format">')

                        // LINKS
                        .replace(/:href="https:\/\/www.188asia.com\/[^/]*\/([^>]*)">/g,':href="`/${gv.lan}/$1`">')
                        .replace(/:href="https:\/\/www.188bet.com\/[^/]*\/([^>]*)">/g,':href="`/${gv.lan}/$1`">')
                        .replace(/:href="https:\/\/www.my188promo.com\/[^/]*\/([^>]*)">/g,':href="`/${gv.lan}/$1`">')
                        .replace(/:href="https:\/\/www.188family.com\/[^/]*\/([^>]*)">/g,':href="`/${gv.lan}/$1`">')
                        .replace(/:href="https:\/\/www.188sukses.com\/[^/]*\/([^>]*)">/g,':href="`/${gv.lan}/$1`">')
                        .replace(/<a href="https:\/\/www.188asia.com\/[^/]*\/([^>]*)">/g,'<a :href="`/${gv.lan}/$1`">')
                        .replace(/<a href="https:\/\/www.188bet.com\/[^/]*\/([^>]*)">/g,'<a :href="`/${gv.lan}/$1`">')
                        .replace(/<a href="https:\/\/www.my188promo.com\/[^/]*\/([^>]*)">/g,'<a :href="`/${gv.lan}/$1`">')
                        .replace(/<a href="https:\/\/www.188family.com\/[^/]*\/([^>]*)">/g,'<a :href="`/${gv.lan}/$1`">')
                        .replace(/<a href="https:\/\/www.188sukses.com\/[^/]*\/([^>]*)">/g,'<a :href="`/${gv.lan}/$1`">')

                        // .replaceAll(/<p id="fpstc-en" style="font-weight: 600;">(.*?)<\/p>/g, '') clean up
                        // .replaceAll(/<p id="fpstc-local" style="font-weight: 600;">(.*?)<\/p>/g, '') clean up

                        // .replaceAll('<div id="SExpansion" class="hidden" style="visibility: hidden;">1</div>', SExpansion.EN.replace('Full Promotion Specific Terms and Conditions', fsptcEn))
                        // .replaceAll('<div id="SExpansion-CN" class="hidden" style="visibility: hidden;">1</div>', SExpansion.CN.replace('完整优惠标准规则', fsptcLocal))
                        // .replaceAll('<div id="SExpansion-VN" class="hidden" style="visibility: hidden;">1</div>', SExpansion.VN.replace('Điều Khoản và Điều Kiện Hoàn Chỉnh', fsptcLocal))
                        // .replaceAll('<div id="SExpansion-TH" class="hidden" style="visibility: hidden;">1</div>', SExpansion.TH.replace('ข้อกำหนดและเงื่อนไขแบบเฉพาะเจาะจง', fsptcLocal))
                        // .replaceAll('<div id="SExpansion-KR" class="hidden" style="visibility: hidden;">1</div>', SExpansion.KR.replace('본 프로모션 이용약관', fsptcLocal))
                        // .replaceAll('<div id="SExpansion-ID" class="hidden" style="visibility: hidden;">1</div>', SExpansion.ID.replace('Syarat dan Kondisi Spesifik promosi Lengkap', fsptcLocal))
                        // .replaceAll('<div id="SExpansion-KH" class="hidden" style="visibility: hidden;">1</div>', SExpansion.KH.replace('លក្ខខណ្ឌ និងកិច្ចព្រមព្រៀងជាក់លាក់នៃការផ្តល់រង្វាន់ទាំងអស', fsptcLocal))
                        // .replaceAll('<div id="SExpansion-JP" class="hidden" style="visibility: hidden;">1</div>', SExpansion.JP.replace('全てのプロモーション－特定の利用規約', fsptcLocal))
                        // .replaceAll('<div id="SExpansion-IN" class="hidden" style="visibility: hidden;">1</div>', SExpansion.IN.replace('पूर्ण प्रमोशन-विशिष्ट नियम और शर्तें', fsptcLocal))
                        //.replaceAll('<div id="closeSExpansion" class="hidden" style="visibility: hidden;">1</div>', closeSExpansion)

                        .replace('mt-40', '')
                        //.replaceAll('<br />', '')


      if (x.match(/<p id="fpstc-en" style="font-weight: 600;">(.*?)<\/p>/g)){
        x = x.replaceAll('<div id="SExpansion" class="hidden" style="visibility: hidden;">1</div>', SExpansion.EN.replace('Full Promotion Specific Terms and Conditions', fsptcEn))
             .replaceAll(/<p id="fpstc-en" style="font-weight: 600;">(.*?)<\/p>/g, '')
             .replaceAll('<div id="closeSExpansion" class="hidden" style="visibility: hidden;">1</div>', closeSExpansion)
      }
      if (x.match(/<p id="fpstc-local" style="font-weight: 600;">(.*?)<\/p>/g)){
        x = x.replaceAll('<div id="SExpansion-CN" class="hidden" style="visibility: hidden;">1</div>', SExpansion.CN.replace('完整优惠标准规则', fsptcLocal))
             .replaceAll('<div id="SExpansion-VN" class="hidden" style="visibility: hidden;">1</div>', SExpansion.VN.replace('Điều Khoản và Điều Kiện Hoàn Chỉnh', fsptcLocal))
             .replaceAll('<div id="SExpansion-TH" class="hidden" style="visibility: hidden;">1</div>', SExpansion.TH.replace('ข้อกำหนดและเงื่อนไขแบบเฉพาะเจาะจง', fsptcLocal))
             .replaceAll('<div id="SExpansion-KR" class="hidden" style="visibility: hidden;">1</div>', SExpansion.KR.replace('본 프로모션 이용약관', fsptcLocal))
             .replaceAll('<div id="SExpansion-ID" class="hidden" style="visibility: hidden;">1</div>', SExpansion.ID.replace('Syarat dan Kondisi Spesifik promosi Lengkap', fsptcLocal))
             .replaceAll('<div id="SExpansion-KH" class="hidden" style="visibility: hidden;">1</div>', SExpansion.KH.replace('លក្ខខណ្ឌ និងកិច្ចព្រមព្រៀងជាក់លាក់នៃការផ្តល់រង្វាន់ទាំងអស', fsptcLocal))
             .replaceAll('<div id="SExpansion-JP" class="hidden" style="visibility: hidden;">1</div>', SExpansion.JP.replace('全てのプロモーション－特定の利用規約', fsptcLocal))
             .replaceAll('<div id="SExpansion-IN" class="hidden" style="visibility: hidden;">1</div>', SExpansion.IN.replace('पूर्ण प्रमोशन-विशिष्ट नियम और शर्तें', fsptcLocal))
             .replaceAll(/<p id="fpstc-local" style="font-weight: 600;">(.*?)<\/p>/g, '')
      }

      let fileName = document.getElementById('filename').value;
      let blob = new Blob([x], {type: 'text/html'});
      let htmlFile = document.createElement('a');
      htmlFile.download = `${fileName}.html`;
      htmlFile.href = window.URL.createObjectURL(blob);
      htmlFile.click();
    }
  }) 


  //Preview Content function
  function previewContent(data){
    let content = tinymce.get('mytextarea').getContent()
    
    //replaceAll is used to replace the default html content from tinymce.
    let y = content.replaceAll(/<ol(.*?)>/g, '<ol class="list-decimal pl-8 mb-4"$1>')
        
        .replace(/<ul(.*?)>/g, '<ul class="list-disc pl-8 mb-4"$1>')
        .replace(/<\/ol>\n<ol[^>]*>/g, "")
        
        //replacing Significant Conditions
        .replaceAll('<p>Significant Conditions</p>', '<h2 class="mb-4 font-semibold text-body-1">Significant Conditions</h2>')
        .replaceAll('<p><strong>Significant Conditions</strong></p>', '<h2 class="mb-4 font-semibold text-body-1">Significant Conditions</h2>')
        //replacing list styles
        .replaceAll('<ol style="list-style-type: lower-roman;">', '<ol class="list-lower-roman pl-8 mb-4" style="list-style-type: lower-roman;">')
        .replaceAll('<ol style="list-style-type: upper-roman;">', '<ol class="list-upper-roman pl-8 mb-4" style="list-style-type: upper-roman;">')
        .replaceAll('<ol style="list-style-type: lower-alpha;">', '<ol class="list-lower-alpha pl-8 mb-4" style="list-style-type: lower-alpha;">')
        .replaceAll('<ol style="list-style-type: upper-alpha;">', '<ol class="list-upper-alpha pl-8 mb-4" style="list-style-type: upper-alpha;">')

        .replaceAll('<ol class="list-decimal pl-8 mb-4" style="list-style-type: lower-alpha;">', '<ol class="list-lower-alpha pl-8 mb-4" style="list-style-type: lower-alpha;">')
        .replaceAll('<ol class="list-decimal pl-8 mb-4" class="list-lower-alpha pl-8 mb-4">', '<ol class="list-lower-alpha pl-8 mb-4" style="list-style-type: lower-alpha;">')
        .replaceAll('<ol class="list-decimal pl-8 mb-4" style="list-style-type: lower-roman;">', '<ol class="list-lower-roman pl-8 mb-4" style="list-style-type: lower-roman;">')

        //replacing game icons
        //.replace(/<table class="live-game" style="background-color: #eeeeee;">\s*<tbody>\s*<tr>\s*<td colspan="3">(.*?)<\/td>\s*<\/tr>/g, '<SCard class="my-4 bg-secondary"><SSectionHeading dark divider contained title-tag="h4"><span class="text-subtitle-1">$1</span></SSectionHeading><SList><SListItem dark class="md:hover:bg-secondary--darken-4"></SListItem>')
        //.replace(/<tr class="live-game-img">\s*<td>\s*<img src="(.*?)" alt="game" width="50px" \/>\s*<\/td>/g, '<template #prependAvatar><SAvatar src="$1" size="40" class="!rounded-lg ml-6" />')
        //.replace(/<td class="live-game-title">(.*?)<\/td>/g, '</template>$1<template #appendAction>')
        //.replace(/<td class="live-game-link">\s*<a href="(.*?)">Play Now<\/a>\s*<\/td>\s*<\/tr>\s*<\/tbody>\s*<tfoot class="game" style="display: none;">\s*<\/tfoot>\s*<\/table>/g, '<GameLauncher v-slot="{openGame}" product="live" game="$1"><SButton @click="openGame()" v-if="breakpoints.smAndUp" color="text-light--high" class="bg-primary--darken-5 hover:text-light--high mr-6">Play Now</SButton><SButton @click="openGame()" v-else dark icon-only flat rounded class="mr-6"><SIcon>icon-arrow-right</SIcon></SButton></GameLauncher></template></SListItem></SList></SCard>')
//scard is breaking my automationnnnnnnn
        // .replace(/<table class="live-game" style="background-color: #eeeeee;">\s*<tbody>\s*<tr>\s*<td colspan="3">Recommend Live Casino Games<\/td>\s*<\/tr>/g, '<SCard class="my-4 bg-secondary"><SSectionHeading dark divider contained title-tag="h4"><span class="text-subtitle-1">Recommend Live Casino Games</span></SSectionHeading>')
        // .replace(/<tr class="live-game-img">\s*<td>\s*<img src="(.*?)" alt="game icon" width="50px" \/>\s*<\/td>\s*<td class="live-game-title">(.*?)<\/td>\s*<td class="live-game-link">\s*<a href="(.*?)">Play Now<\/a>\s*<\/td>\s*<\/tr>/g, '<SList><SListItem dark class="md:hover:bg-secondary--darken-4"></SListItem><template #prependAvatar><SAvatar src="$1" size="40" class="!rounded-lg ml-6" /></template>$2<template #appendAction><GameLauncher v-slot="{openGame}" product="live" game="$3"><SButton @click="openGame()" v-if="breakpoints.smAndUp" color="text-light--high" class="bg-primary--darken-5 hover:text-light--high mr-6">Play Now</SButton><SButton @click="openGame()" v-else dark icon-only flat rounded class="mr-6"><SIcon>icon-arrow-right</SIcon></SButton></GameLauncher></template></SListItem></SList>')
        // .replace(/<\/tbody>\s*<tfoot class="game" style="display: none;">\s*<\/tfoot>\s*<\/table>/g, '</SCard>')
        //.replace(/<\/tbody>\s*<\/table>/g, '</SCard>')

        //replacing tables
        .replaceAll('<div class="border rounded mb-4 table-responsive">', '')
        .replaceAll(/<table(.*?)>/g, '<div class="border rounded mb-4 table-responsive"><table class="w-full border-collapse border-spacing-0 text-center">')
        .replaceAll('</table>', '</table></div>')
        .replace(/<\/table>\s*<\/div>\s*<\/div>/g, '</table></div>') //checking whitespaces and ignoring it
        .replaceAll('<tbody>', '<tbody class="divide-y">')
        //2 columns
        .replaceAll('<td style="width: 50%;">', '<td class="w-1/2">') //2 columns with no text
        .replaceAll('<td style="width: 50%; text-align: center;">', '<td class="w-1/2 text-center">') //if 2 columns with text aligned center
        .replaceAll('<td style="width: 50%; text-align: left;">', '<td class="w-1/2 text-left">') //if 2 columns with text aligned left
        .replaceAll('<td style="width: 50%; text-align: right;">', '<td class="w-1/2 text-right">') //if 2 columns with text aligned right
        .replaceAll('<td style="width: 50%; text-align: justify;">', '<td class="w-1/2 text-justify">') //if 2 columns with text aligned justify
        //images
        .replace(/<img(.*?)\/>/g, '<img class="my-2 mx-auto h-auto rounded-lg" $1/>')

        //cleanup
        .replaceAll('<p><strong></strong></p>', '')
        .replaceAll('<p></p>', '')
        
        if (document.getElementById('import-check').checked === false){ //this resolves the issue of not able to preview imported old templates
          //this is to copy and store titles when full promotion title is replaced by the user   
          //this resolves the issue of not able to preview when FSPTC is removed or not included
          if(y.match(/<p id="fpstc-en" style="font-weight: 600;">(.*?)<\/p>/g)){
            fsptcEnMatches = y.match(/<p id="fpstc-en" style="font-weight: 600;">(.*?)<\/p>/g)
            fsptcEn = fsptcEnMatches[0].replace('<p id="fpstc-en" style="font-weight: 600;">', '').replace('</p>', '')
          }
          if(y.match(/<p id="fpstc-local" style="font-weight: 600;">(.*?)<\/p>/g)){
            fsptcLocalMatches = y.match(/<p id="fpstc-local" style="font-weight: 600;">(.*?)<\/p>/g)
            fsptcLocal = fsptcLocalMatches[0].replace('<p id="fpstc-local" style="font-weight: 600;">', '').replace('</p>', '')
          }
        }
    

    document.getElementById('tnc-container').innerHTML = y;
    document.getElementById('tnc-container-mobile').innerHTML = y;
    return y;
}

document.getElementById('promotionGuide-button').onclick = () => {
  document.getElementById('instruction-container').classList.toggle('hidden')
}

//import HTML file

document.getElementById('import-tnc').addEventListener('change', async(e) => {
  const tncfile = e.target.files[0]
  if(tncfile) {
    const content = await readFile(tncfile);
    tinymce.get('mytextarea').setContent(content);
    document.getElementById('import-check').checked = true;
    document.getElementById('filename').value = tncfile.name.replace('.html', '');
  } else {
    document.getElementById('output').innerHTML = 'No file selected';
  }
})

const readFile = async (file) => {
  return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (event) => {
          resolve(event.target.result);
      };
      reader.onerror = (error) => {
          reject(error);
      };
      reader.readAsText(file);
  });
};

//Import DOCX file
document.getElementById('import-docx').addEventListener('change', (e) => {
  const fileInput = document.getElementById('import-docx');
  const file = fileInput.files[0];
  
  if (file && file.name.endsWith('.docx')) {
    const reader = new FileReader();
    
    reader.onload = function(event) {
      const arrayBuffer = reader.result;
      
      // Use mammoth.js to convert the DOCX file to HTML
      mammoth.convertToHtml({arrayBuffer: arrayBuffer})
        .then(function(result) {
          // Insert the converted content into the TinyMCE editor
          tinymce.activeEditor.setContent(result.value);
        })
        .catch(function(err) {
          console.error('Error reading DOCX file:', err);
        });
    };
    
    reader.readAsArrayBuffer(file);
  }
})


//left control panel
document.getElementById('resetBtn').addEventListener('click', () => {
  document.getElementById('import-tnc').value = ''
  tinymce.get('mytextarea').setContent('')
  tncRegionDropdown.value = '#'
  document.getElementById('import-check').checked = false;
  document.getElementById('filename').value = '';
})