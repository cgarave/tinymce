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
                                  //  .replace(/<ul>/g, '')
                                  //  .replace(/<\/ul>/g, '')
                                   .replace(/<a :href="(.*?)">/g, '<a :href="`$1`">')
                                   .replaceAll('<ol class="list-lower-alpha pl-8 mb-4">', '<ol class="list-lower-alpha pl-8 mb-4" style="list-style-type: lower-alpha;">')
                                   .replaceAll('<ol class="list-upper-alpha pl-8 mb-4">', '<ol class="list-upper-alpha pl-8 mb-4" style="list-style-type: upper-alpha;">')
                                   .replaceAll('<ol class="list-lower-roman pl-8 mb-4">', '<ol class="list-lower-roman pl-8 mb-4" style="list-style-type: lower-roman;">')
                                   .replaceAll('<ol class="list-upper-roman pl-8 mb-4">', '<ol class="list-upper-roman pl-8 mb-4" style="list-style-type: upper-roman;">')

      console.log('BeforeSetContent:', event.content);
    }),
    editor.on('NodeChange', function () {
      // Get the selected content
      const selectedText = editor.selection.getContent();
      
      if (selectedText) {
        console.log("Text is highlighted: ", selectedText);
        
      } else {
        console.log("No text is highlighted.");
      }
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
      title: 'MY Localized',
      content: ``
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
const FPSTCs = {
  EN: `<div id="FPSTC" class="p-2 border-b border-b-gray-300 flex flex-row justify-between items-center font-semibold my-6">
                <p>Full Promotion Specific Terms and Conditions</p>
                <svg  xmlns="http://www.w3.org/2000/svg"  width="16"  height="16"  viewBox="0 0 24 24"  fill="none"  stroke="#8C8F93"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-up"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 15l6 -6l6 6" /></svg>
              </div>`,
  CN: `<div id="FPSTC" class="p-2 border-b border-b-gray-300 flex flex-row justify-between items-center font-semibold my-6">
                <p>完整优惠标准规则</p>
                <svg  xmlns="http://www.w3.org/2000/svg"  width="16"  height="16"  viewBox="0 0 24 24"  fill="none"  stroke="#8C8F93"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-up"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 15l6 -6l6 6" /></svg>
              </div>`,
  VN: `<div id="FPSTC" class="p-2 border-b border-b-gray-300 flex flex-row justify-between items-center font-semibold my-6">
                <p>Điều Khoản và Điều Kiện Hoàn Chỉnh</p>
                <svg  xmlns="http://www.w3.org/2000/svg"  width="16"  height="16"  viewBox="0 0 24 24"  fill="none"  stroke="#8C8F93"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-up"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 15l6 -6l6 6" /></svg>
              </div>`,
  TH: `<div id="FPSTC" class="p-2 border-b border-b-gray-300 flex flex-row justify-between items-center font-semibold my-6">
                <p>ข้อกำหนดและเงื่อนไขแบบเฉพาะเจาะจง</p>
                <svg  xmlns="http://www.w3.org/2000/svg"  width="16"  height="16"  viewBox="0 0 24 24"  fill="none"  stroke="#8C8F93"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-up"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 15l6 -6l6 6" /></svg>
              </div>`,
  KR: `<div id="FPSTC" class="p-2 border-b border-b-gray-300 flex flex-row justify-between items-center font-semibold my-6">
                <p>본 프로모션 이용약관</p>
                <svg  xmlns="http://www.w3.org/2000/svg"  width="16"  height="16"  viewBox="0 0 24 24"  fill="none"  stroke="#8C8F93"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-up"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 15l6 -6l6 6" /></svg>
              </div>`,
  ID: `<div id="FPSTC" class="p-2 border-b border-b-gray-300 flex flex-row justify-between items-center font-semibold my-6">
                <p>Syarat dan Kondisi Spesifik promosi Lengkap</p>
                <svg  xmlns="http://www.w3.org/2000/svg"  width="16"  height="16"  viewBox="0 0 24 24"  fill="none"  stroke="#8C8F93"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-up"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 15l6 -6l6 6" /></svg>
              </div>`,
  KH: `<div id="FPSTC" class="p-2 border-b border-b-gray-300 flex flex-row justify-between items-center font-semibold my-6">
                <p>លក្ខខណ្ឌ និងកិច្ចព្រមព្រៀងជាក់លាក់នៃការផ្តល់រង្វាន់ទាំងអស</p>
                <svg  xmlns="http://www.w3.org/2000/svg"  width="16"  height="16"  viewBox="0 0 24 24"  fill="none"  stroke="#8C8F93"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-up"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 15l6 -6l6 6" /></svg>
              </div>`,
  JP: `<div id="FPSTC" class="p-2 border-b border-b-gray-300 flex flex-row justify-between items-center font-semibold my-6">
                <p>全てのプロモーション－特定の利用規約</p>
                <svg  xmlns="http://www.w3.org/2000/svg"  width="16"  height="16"  viewBox="0 0 24 24"  fill="none"  stroke="#8C8F93"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-up"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 15l6 -6l6 6" /></svg>
              </div>`,
  IN: `<div id="FPSTC" class="p-2 border-b border-b-gray-300 flex flex-row justify-between items-center font-semibold my-6">
                <p>पूर्ण प्रमोशन-विशिष्ट नियम और शर्तें</p>
                <svg  xmlns="http://www.w3.org/2000/svg"  width="16"  height="16"  viewBox="0 0 24 24"  fill="none"  stroke="#8C8F93"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-up"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 15l6 -6l6 6" /></svg>
              </div>`,
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
                          <p style="font-weight: 600;">Full Promotion Specific Terms and Conditions</p>
                          <p>Write/Paste Full Promotion contents here</p>
                      </div>
                  <div id="closeSExpansion" class="hidden" style="visibility: hidden;">1</div>

          <div id="content-REGION" class="tnc-content-wrap hidden" style="visibility: hidden;">1</div>
              <div class="contentwrap tnc-content-format hidden" style="visibility: hidden;">1</div>
                  <h2 class="mb-4 font-semibold text-body-1 mt-40">LOCALIZED-SC</h2>
                  <p>Write/Paste Localized Significant Contents here</p>
                  <div id="LOCALIZED-SExpansion" class="hidden" style="visibility: hidden;">1</div>
                      <div class="full-promotion-content">
                          <p style="font-weight: 600;">LOCALIZED-FP</p>
                          <p>Write/Paste Localized Full Promotion contents here</p>
                      </div>
                  <div id="closeSExpansion" class="hidden" style="visibility: hidden;">1</div>`,
}

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

                           .replaceAll('<h2 class="m-4 font-semibold text-body-1">Full Promotion Specific Terms and Conditions</h2>', '')  //EN cleanup
                           .replaceAll('<h2 class="m-4 font-semibold text-body-1">完整优惠标准规则</h2>', '') //CN cleanup
                           .replaceAll('<h2 class="m-4 font-semibold text-body-1">Điều Khoản và Điều Kiện Hoàn Chỉnh</h2>', '') //VN cleanup
                           .replaceAll('<h2 class="m-4 font-semibold text-body-1">Điều Khoản v&agrave; Điều Kiện Ho&agrave;n Chỉnh</h2>', '') //VN cleanup 2
                           .replaceAll('<h2 class="m-4 font-semibold text-body-1">ข้อกำหนดและเงื่อนไขแบบเฉพาะเจาะจง</h2>', '') //TH cleanup
                           .replaceAll('<h2 class="m-4 font-semibold text-body-1">본 프로모션 이용약관</h2>', '') //KR cleanup
                           .replaceAll('<h2 class="m-4 font-semibold text-body-1">Syarat dan Kondisi Spesifik promosi Lengkap</h2>', '') //ID cleanup
                           .replaceAll('<h2 class="m-4 font-semibold text-body-1">លក្ខខណ្ឌ និងកិច្ចព្រមព្រៀងជាក់លាក់នៃការផ្តល់រង្វាន់ទាំងអស</h2>', '') //KH cleanup
                           .replaceAll('<h2 class="m-4 font-semibold text-body-1">全てのプロモーション－特定の利用規約</h2>', '') //JP cleanup
                           .replaceAll('<h2 class="m-4 font-semibold text-body-1">पूर्ण प्रमोशन-विशिष्ट नियम और शर्तें</h2>', '') //IN cleanup

                           //links
                           .replaceAll('&#96;', '`')
                           .replaceAll('href', ':href')
                           //.replaceAll('<br />', '')

                           .replaceAll('<div id="script1" class="hidden" style="visibility: hidden; display: none;">1</div>', script1)
                           .replaceAll('<div id="script2" class="hidden" style="visibility: hidden; display: none;">1</div>', script2)
                           .replaceAll('<div id="SExpansion" class="hidden" style="visibility: hidden;">1</div>', SExpansion.EN)
                           .replaceAll('<div id="closeSExpansion" class="hidden" style="visibility: hidden;">1</div>', closeSExpansion)

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
  
        y = importedResult.replaceAll('<h2 class="m-4 font-semibold text-body-1">Full Promotion Specific Terms and Conditions</h2>', '')  //EN cleanup
                          .replaceAll('<h2 class="m-4 font-semibold text-body-1">完整优惠标准规则</h2>', '') //CN cleanup
                          .replaceAll('<h2 class="m-4 font-semibold text-body-1">Điều Khoản và Điều Kiện Hoàn Chỉnh</h2>', '') //VN cleanup
                          .replaceAll('<h2 class="m-4 font-semibold text-body-1">Điều Khoản v&agrave; Điều Kiện Ho&agrave;n Chỉnh</h2>', '') //VN cleanup 2
                          .replaceAll('<h2 class="m-4 font-semibold text-body-1">ข้อกำหนดและเงื่อนไขแบบเฉพาะเจาะจง</h2>', '') //TH cleanup
                          .replaceAll('<h2 class="m-4 font-semibold text-body-1">본 프로모션 이용약관</h2>', '') //KR cleanup
                          .replaceAll('<h2 class="m-4 font-semibold text-body-1">Syarat dan Kondisi Spesifik promosi Lengkap</h2>', '') //ID cleanup
                          .replaceAll('<h2 class="m-4 font-semibold text-body-1">លក្ខខណ្ឌ និងកិច្ចព្រមព្រៀងជាក់លាក់នៃការផ្តល់រង្វាន់ទាំងអស</h2>', '') //KH cleanup
                          .replaceAll('<h2 class="m-4 font-semibold text-body-1">全てのプロモーション－特定の利用規約</h2>', '') //JP cleanup
                          .replaceAll('<h2 class="m-4 font-semibold text-body-1">पूर्ण प्रमोशन-विशिष्ट नियम और शर्तें</h2>', '') //IN cleanup
                          .replace(/<\/div>\s*<\/div>\s*<div id="closeSExpansion" class="hidden" style="visibility: hidden;">1<\/div>/g, '<div id="closeSExpansion" class="hidden" style="visibility: hidden;">1</div>')
                          //images
                          .replace(/<img(.*?)\/>/g, '<img class="my-0 mx-auto h-auto rounded-lg" $1/>')
                          
                          .replaceAll('<ol class="list-decimal pl-8 mb-4" style="list-style-type: lower-alpha;">', '<ol class="list-lower-alpha pl-8 mb-4" style="list-style-type: lower-alpha;">')
                          .replaceAll('<ol class="list-decimal pl-8 mb-4" style="list-style-type: lower-roman;">', '<ol class="list-lower-roman pl-8 mb-4" style="list-style-type: lower-roman;">')

                          .replaceAll('<div id="SExpansion" class="hidden" style="visibility: hidden;">1</div>', SExpansion.EN)
                          .replaceAll('<div id="SExpansion-CN" class="hidden" style="visibility: hidden;">1</div>', SExpansion.CN)
                          .replaceAll('<div id="SExpansion-VN" class="hidden" style="visibility: hidden;">1</div>', SExpansion.VN)
                          .replaceAll('<div id="SExpansion-TH" class="hidden" style="visibility: hidden;">1</div>', SExpansion.TH)
                          .replaceAll('<div id="SExpansion-KR" class="hidden" style="visibility: hidden;">1</div>', SExpansion.KR)
                          .replaceAll('<div id="SExpansion-ID" class="hidden" style="visibility: hidden;">1</div>', SExpansion.ID)
                          .replaceAll('<div id="SExpansion-KH" class="hidden" style="visibility: hidden;">1</div>', SExpansion.KH)
                          .replaceAll('<div id="SExpansion-JP" class="hidden" style="visibility: hidden;">1</div>', SExpansion.JP)
                          .replaceAll('<div id="SExpansion-IN" class="hidden" style="visibility: hidden;">1</div>', SExpansion.IN)
                          .replaceAll('<div id="closeSExpansion" class="hidden" style="visibility: hidden;">1</div>', closeSExpansion)

                          //links
                          .replaceAll('&#96;', '`')
                          .replaceAll('href', ':href')
                          .replaceAll('<div id="script1" class="hidden" style="visibility: hidden; display: none;">1</div>', script1) 
                          .replaceAll('<div id="script2" class="hidden" style="visibility: hidden; display: none;">1</div>', script2)  
                          //.replaceAll('<br />', '')
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

                        .replaceAll('<div id="SExpansion" class="hidden" style="visibility: hidden;">1</div>', SExpansion.EN)
                        .replaceAll('<div id="SExpansion-CN" class="hidden" style="visibility: hidden;">1</div>', SExpansion.CN)
                        .replaceAll('<div id="SExpansion-VN" class="hidden" style="visibility: hidden;">1</div>', SExpansion.VN)
                        .replaceAll('<div id="SExpansion-TH" class="hidden" style="visibility: hidden;">1</div>', SExpansion.TH)
                        .replaceAll('<div id="SExpansion-KR" class="hidden" style="visibility: hidden;">1</div>', SExpansion.KR)
                        .replaceAll('<div id="SExpansion-ID" class="hidden" style="visibility: hidden;">1</div>', SExpansion.ID)
                        .replaceAll('<div id="SExpansion-KH" class="hidden" style="visibility: hidden;">1</div>', SExpansion.KH)
                        .replaceAll('<div id="SExpansion-JP" class="hidden" style="visibility: hidden;">1</div>', SExpansion.JP)
                        .replaceAll('<div id="SExpansion-IN" class="hidden" style="visibility: hidden;">1</div>', SExpansion.IN)
                        .replaceAll('<div id="closeSExpansion" class="hidden" style="visibility: hidden;">1</div>', closeSExpansion)
                        .replaceAll(FPSTCs.EN, "")
                        .replaceAll(FPSTCs.CN, "")
                        .replaceAll(FPSTCs.VN, "")
                        .replaceAll(FPSTCs.TH, "")
                        .replaceAll(FPSTCs.KR, "")
                        .replaceAll(FPSTCs.ID, "")
                        .replaceAll(FPSTCs.KH, "")
                        .replaceAll(FPSTCs.JP, "")
                        .replaceAll(FPSTCs.IN, "")
                        .replace('mt-40', '')
                        //.replaceAll('<br />', '')

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
        //FPSTC
        .replaceAll('<p style="font-weight: 600;">Full Promotion Specific Terms and Conditions</p>', FPSTCs.EN)
        .replaceAll('<p style="font-weight: 600;">完整优惠标准规则</p>', FPSTCs.CN)
        .replaceAll('<p style="font-weight: 600;">Điều Khoản và Điều Kiện Hoàn Chỉnh</p>', FPSTCs.VN)
        .replaceAll('<p style="font-weight: 600;">ข้อกำหนดและเงื่อนไขแบบเฉพาะเจาะจง</p>', FPSTCs.TH)
        .replaceAll('<p style="font-weight: 600;">본 프로모션 이용약관</p>', FPSTCs.KR)
        .replaceAll('<p style="font-weight: 600;">Syarat dan Kondisi Spesifik promosi Lengkap</p>', FPSTCs.ID)
        .replaceAll('<p style="font-weight: 600;">លក្ខខណ្ឌ និងកិច្ចព្រមព្រៀងជាក់លាក់នៃការផ្តល់រង្វាន់ទាំងអស</p>', FPSTCs.KH)
        .replaceAll('<p style="font-weight: 600;">全てのプロモーション－特定の利用規約</p>', FPSTCs.JP)
        .replaceAll('<p style="font-weight: 600;">पूर्ण प्रमोशन-विशिष्ट नियम और शर्तें</p>', FPSTCs.IN)

        //cleanup
        .replaceAll('<p><strong></strong></p>', '')
        .replaceAll('<p></p>', '')
        

    document.getElementById('tnc-container').innerHTML = y;
    document.getElementById('tnc-container-mobile').innerHTML = y;
    return y;
}

document.getElementById('promotionGuide-button').onclick = () => {
  document.getElementById('instruction-container').classList.toggle('hidden')
}

//Guide for new users
// setTimeout(() => {
//   if(!document.getElementById('instruction-container').classList.contains('hidden') ){
//     document.getElementById('promotionGuide-button').click();
//   }
// }, 8000)

document.getElementById('import-tnc').addEventListener('change', async(e) => {
  const tncfile = e.target.files[0]
  if(tncfile) {
    const content = await readFile(tncfile);
    tinymce.get('mytextarea').setContent(content);
    document.getElementById('import-check').checked = true;
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