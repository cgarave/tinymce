//Sandwich method
const script1 = '<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>';
const script2 = '<script> $(function () { $("#webteam-ss").attr("href", "https://doc.188contents.com/contents/Components/webteam/webteam.css?" + $.now()); });</script>'
const SExpansion = `<SExpansionPanel class="last:rounded-b-lg border-0" header-class="bg-transparent" content-class="last:rounded-b-lg">
                      <template #header>
                        <h2 class="m-4 font-semibold text-body-1">Full Promotion Specific Terms and Conditions</h2>
                      </template>
                      <template #content>`;
const closeSExpansion = ` </template>
                          </SExpansionPanel>
                          </div>
                          <IncludeContent :url="promoDetail.termsTpl"></IncludeContent>
                          </div>`
const FPSTC = `<div id="FPSTC" class="p-2 border-b border-b-gray-300 flex flex-row justify-between items-center font-semibold my-6">
                    <p>Full Promotion Specific Terms and Conditions</p>
                    <svg  xmlns="http://www.w3.org/2000/svg"  width="16"  height="16"  viewBox="0 0 24 24"  fill="none"  stroke="#8C8F93"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-up"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 15l6 -6l6 6" /></svg>
                </div>`

let region = 'zh-cn';
//templates object
const templates = {
  TNC: `<div id="script1">
          <div id="script2">
          <div id="content-en-gb" class="tnc-content-wrap">
              <div class="contentwrap tnc-content-format">
                  <h2 class="mb-4 font-semibold text-body-1">Significant Conditions</h2>
                  <p>Insert Significant Contents here</p>
                  <div id="SExpansion">
                      <div class="full-promotion-content">
                          <p style="font-weight: 600;">Full Promotion Specific Terms and Conditions</p>
                          <p>Insert Full Promotion contents here</p>
                      </div>
                  <div id="closeSExpansion">
          <div id="content-${region}" class="tnc-content-wrap">
              <div class="contentwrap tnc-content-format">
                  <h2 class="mb-4 font-semibold text-body-1">Significant Conditions</h2>
                  <p>Insert Significant Contents here</p>
                  <div id="SExpansion">
                      <div class="full-promotion-content">
                          <p style="font-weight: 600;">Full Promotion Specific Terms and Conditions</p>
                          <p>Insert Full Promotion contents here</p>
                      </div>
                  <div id="closeSExpansion">`,
  QG: "",
}
//TinyMCE settings
tinymce.init({
    selector: 'textarea',
    table_resize_bars: false, //disable resize bars
    object_resizing: false, //disable table resizing
    visualblocks_default_state: false, //display visual blocks by default
    paste_as_text: false, 
    end_container_on_empty_block: false, //not working as of now?
    //forced_root_block: 'div',
    //newline_behavior: 'block',
    // fix_list_elements: true,
    height: '68vh',
    width: '100%',
    resize: false,
    content_style: `
                    body {
                      padding: 5px;
                    }
                    h2 {
                      font-size: 14px;
                    }`,
    plugins: ["template paste autolink link image lists advlist charmap preview hr anchor",
              "searchreplace wordcount visualblocks visualchars code fullscreen insertdatetime media nonbreaking",
              "save table contextmenu directionality template paste textcolor",],
    toolbar: 'template undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image table mergetags | align lineheight | checklist numlist bullist indent outdent',
    tinycomments_mode: 'embedded',
    tinycomments_author: 'Author name',
    mergetags_list: [
      { value: 'First.Name', title: 'First Name' },
      { value: 'Email', title: 'Email' },
    ],
    templates: [{
        title: 'dropdown',
        content: `hello`
    }
],
  });

  
  //Download HTML function
  function getHtmlContent(data) {
    //var content = tinymce.get('mytextarea').getContent() // Replace 'myTextarea' with the ID of your textarea

    let content = previewContent(data)
    
    let newContent = content;
    let x = newContent.replaceAll('<div id="script1">', script1)
                      .replaceAll('<div id="script2">', script2)
                      .replaceAll('<div id="SExpansion">', SExpansion)
                      .replaceAll('<div id="closeSExpansion">', closeSExpansion)
                      .replaceAll(FPSTC, "")
    //Download
    let fileName = document.getElementById('filename').value;
    let blob = new Blob([x], {type: 'text/html'});
    let htmlFile = document.createElement('a');
    //htmlFile.download = 'try.html';
    htmlFile.download = `${fileName}.html`;
    htmlFile.href = window.URL.createObjectURL(blob);
    htmlFile.click();
}
  //Preview Content function
  function previewContent(data){
    let content = tinymce.get('mytextarea').getContent()
    //replaceAll is used to replace the default html content from tinymce.
    let y = content.replaceAll('<ol>', '<ol class="list-decimal pl-8 mb-4">')
            //replacing list (this is for copying from a document preventing numbers from breaking)
            .replaceAll('<ol start="2">', '<ol start="2" class="list-decimal pl-8 mb-4">')
            .replaceAll('<ol start="3">', '<ol start="3" class="list-decimal pl-8 mb-4">')
            .replaceAll('<ol start="4">', '<ol start="4" class="list-decimal pl-8 mb-4">')
            .replaceAll('<ol start="5">', '<ol start="5" class="list-decimal pl-8 mb-4">')
            .replaceAll('<ol start="6">', '<ol start="6" class="list-decimal pl-8 mb-4">')
            .replaceAll('<ol start="7">', '<ol start="7" class="list-decimal pl-8 mb-4">')
            .replaceAll('<ol start="8">', '<ol start="8" class="list-decimal pl-8 mb-4">')
            .replaceAll('<ol start="9">', '<ol start="9" class="list-decimal pl-8 mb-4">')
            .replaceAll('<ol start="10">', '<ol start="10" class="list-decimal pl-8 mb-4">')
            .replaceAll('<ol start="11">', '<ol start="11" class="list-decimal pl-8 mb-4">')
            .replaceAll('<ol start="12">', '<ol start="12" class="list-decimal pl-8 mb-4">')
            .replaceAll('<ol start="13">', '<ol start="13" class="list-decimal pl-8 mb-4">')
            .replaceAll('<ol start="14">', '<ol start="14" class="list-decimal pl-8 mb-4">')
            .replaceAll('<ol start="15">', '<ol start="15" class="list-decimal pl-8 mb-4">')
            .replaceAll('<ol start="16">', '<ol start="16" class="list-decimal pl-8 mb-4">')
            .replaceAll('<ol start="17">', '<ol start="17" class="list-decimal pl-8 mb-4">')
            .replaceAll('<ol start="18">', '<ol start="18" class="list-decimal pl-8 mb-4">')
            .replaceAll('<ol start="19">', '<ol start="19" class="list-decimal pl-8 mb-4">')
            .replaceAll('<ol start="20">', '<ol start="20" class="list-decimal pl-8 mb-4">')
            .replaceAll('<ol start="21">', '<ol start="21" class="list-decimal pl-8 mb-4">')
            .replaceAll('<ol start="22">', '<ol start="22" class="list-decimal pl-8 mb-4">')
            .replaceAll('<ol start="23">', '<ol start="23" class="list-decimal pl-8 mb-4">')
            .replaceAll('<ol start="24">', '<ol start="24" class="list-decimal pl-8 mb-4">')
            .replaceAll('<ol start="25">', '<ol start="25" class="list-decimal pl-8 mb-4">')
            .replaceAll('<ol start="26">', '<ol start="26" class="list-decimal pl-8 mb-4">')
            .replaceAll('<ol start="27">', '<ol start="27" class="list-decimal pl-8 mb-4">')
            .replaceAll('<ol start="28">', '<ol start="28" class="list-decimal pl-8 mb-4">')
            .replaceAll('<ol start="29">', '<ol start="29" class="list-decimal pl-8 mb-4">')
            .replaceAll('<ol start="30">', '<ol start="30" class="list-decimal pl-8 mb-4">')
            //replacing Significant Conditions
            .replaceAll('<p>Significant Conditions</p>', '<h2 class="mb-4 font-semibold text-body-1">Significant Conditions</h2>')
            .replaceAll('<p><strong>Significant Conditions</strong></p>', '<h2 class="mb-4 font-semibold text-body-1">Significant Conditions</h2>')
            //replacing list styles
            .replaceAll('<ol style="list-style-type: lower-roman;">', '<ol class="list-lower-roman pl-8 mb-4">')
            .replaceAll('<ol style="list-style-type: upper-roman;">', '<ol class="list-upper-roman pl-8 mb-4">')
            .replaceAll('<ol style="list-style-type: lower-alpha;">', '<ol class="list-lower-alpha pl-8 mb-4">')
            .replaceAll('<ol style="list-style-type: upper-alpha;">', '<ol class="list-upper-alpha pl-8 mb-4">')
            //replacing tables
            .replaceAll('<table>', '<div class="border rounded mb-4 table-responsive"><table class="w-full border-collapse border-spacing-0">')
            .replaceAll('<table width="618">', '<div class="border rounded mb-4 table-responsive"><table class="w-full border-collapse border-spacing-0">')
            .replaceAll('<table width="600">', '<div class="border rounded mb-4 table-responsive"><table class="w-full border-collapse border-spacing-0">')
            .replaceAll('<table style="border-collapse: collapse; width: 100%;" border="1">', '<div class="border rounded mb-4 table-responsive"><table class="w-full border-collapse border-spacing-0">')
            .replaceAll('<table style="border-collapse: collapse; width: 100%; margin-left: auto; margin-right: auto;" border="1">', '<div class="border rounded mb-4 table-responsive"><table class="w-full border-collapse border-spacing-0">')
            .replaceAll('</table>', '</table></div>')
            .replaceAll('<tbody>', '<tbody class="divide-y">')
            //2 columns
            .replaceAll('<td style="width: 50%;">', '<td class="w-1/2">') //2 columns with no text
            .replaceAll('<td style="width: 50%; text-align: center;">', '<td class="w-1/2 text-center">') //if 2 columns with text aligned center
            .replaceAll('<td style="width: 50%; text-align: left;">', '<td class="w-1/2 text-left">') //if 2 columns with text aligned left
            .replaceAll('<td style="width: 50%; text-align: right;">', '<td class="w-1/2 text-right">') //if 2 columns with text aligned right
            .replaceAll('<td style="width: 50%; text-align: justify;">', '<td class="w-1/2 text-justify">') //if 2 columns with text aligned justify
            //FPSTC
            .replaceAll('<p style="font-weight: 600;">Full Promotion Specific Terms and Conditions</p>', FPSTC)
    console.log(y);
    document.getElementById('tnc-container').innerHTML = y;
    return y;
}


//Templates handler
let templateDropdown = document.getElementById('templates-dropdown');
templateDropdown.addEventListener('change', ()=> {

  const selectedTemplates = templateDropdown.value;

  switch(selectedTemplates){
    case 'TNC':
      tinymce.get('mytextarea').setContent(templates.TNC);
      break;
    case 'QG':
      tinymce.get('mytextarea').setContent("");
      break;
  }
})