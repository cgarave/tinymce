let head = `<SExpansionPanel class="last:rounded-b-lg border-0" header-class="bg-transparent" content-class="last:rounded-b-lg">
            <template #header>
              <h2 class="m-4 font-semibold text-body-1">Full Promotion Specific Term and Conditions</h2>
            </template>
            <template #content>`
let foot = `</template>
            </SExpansionPanel>`
let show = false;

tinymce.init({
    selector: 'textarea',
    table_resize_bars: false, //disable resize bars
    object_resizing: false, //disable table resizing
    visualblocks_default_state: true, //display visual blocks by default
    end_container_on_empty_block: true,
    // fix_list_elements: true,
  
    height: '68vh',
    width: '100%',
    resize: false,
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
        title: 'VN Template',
        description: 'VN Template',
        content: ``
    }
],
  });



  function getHtmlContent() {
    var content = tinymce.get('mytextarea').getContent() // Replace 'myTextarea' with the ID of your textarea
    
    let newContent = content;
    let x = newContent.replace('<div id="replace">', head)
                      .replace('<div id="replace2">', foot)
    //Download
    let blob = new Blob([x], {type: 'text/html'});
    let htmlFile = document.createElement('a');
    htmlFile.download = 'try.html';
    htmlFile.href = window.URL.createObjectURL(blob);
    htmlFile.click();
}

  function previewContent(){
    let content = tinymce.get('mytextarea').getContent()
    //replaceAll is used to replace the default html content from tinymce.
    let y = content.replaceAll('<ol>', '<ol class="list-decimal">')
            .replaceAll('<ol style="list-style-type: lower-roman;">', '<ol class="list-lower-roman pl-8 mb-4">')
            .replaceAll('<ol style="list-style-type: upper-roman;">', '<ol class="list-upper-roman pl-8 mb-4">')
            .replaceAll('<ol style="list-style-type: lower-alpha;">', '<ol class="list-lower-alpha pl-8 mb-4">')
            .replaceAll('<ol style="list-style-type: upper-alpha;">', '<ol class="list-upper-alpha pl-8 mb-4">')
            .replaceAll('<table style="border-collapse: collapse; width: 100%;" border="1">', '<div class="border rounded mb-4 table-responsive"><table class="w-full border border-collapse border-spacing-0">')
            .replaceAll('<table style="border-collapse: collapse; width: 100%; margin-left: auto; margin-right: auto;" border="1">', '<div class="border rounded mb-4 table-responsive"><table class="w-full border border-collapse border-spacing-0">')
            .replaceAll('</table>', '</table></div>')
            .replaceAll('<tbody>', '<tbody class="divide-y">')
            //2 columns
            .replaceAll('<td style="width: 50%;">', '<td class="w-1/2">') //2 columns with no text
            .replaceAll('<td style="width: 50%; text-align: center;">', '<td class="w-1/2 text-center">') //if 2 columns with text aligned center
            .replaceAll('<td style="width: 50%; text-align: left;">', '<td class="w-1/2 text-left">') //if 2 columns with text aligned left
            .replaceAll('<td style="width: 50%; text-align: right;">', '<td class="w-1/2 text-right">') //if 2 columns with text aligned right
            .replaceAll('<td style="width: 50%; text-align: justify;">', '<td class="w-1/2 text-justify">') //if 2 columns with text aligned justify
    console.log(y);
    return y;
}

// function showWindow() {
//     if(!show){
//       document.getElementById('editor-container').classList.replace('w-full', 'w-1/2');
//       show = 1; //truthy
//     } else {
//       document.getElementById('editor-container').classList.replace('w-1/2', 'w-full');
//       show = 0; //falsey
//     }
//     document.getElementById('preview-area').classList.toggle('hidden');
//     document.getElementById('preview-btn').classList.toggle('hidden');
//     console.clear();
//   }

  function previewNew(){
    const content = previewContent();
    const previewHTML = window.open('preview.html', '_blank');
    previewHTML.document.write(`
      <!DOCTYPE html>
      <html lang="en">
          <head>
              <meta charset="UTF-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <title>Document</title>
              <link href="src/output.css" rel="stylesheet">
          </head>
          <script src="script.js"></script>
          <body>
              <nav class="w-full h-16 bg-neutral-800 flex flex-row justify-between items-center px-5">
                  <ul class="flex flex-row gap-x-8 items-center font-semibold text-neutral-400 text-xs">
                      <li><img id="light-logo" style="width: 60px;" src="https://www.sbbanner.com/newsletter/newsletter-template-2024/188-light.png"></li>
                      <li>Sports</li>
                      <li>Casino</li>
                      <li>Live Casino</li>
                      <li>Chess Game</li>
                      <li>Virtual</li>
                      <li>Lotto</li>
                      <li class="text-white">Promotions</li>
                      <li>App</li>
                  </ul>
                  <ul class="flex flex-row gap-x-2 items-center">
                      <li class="bg-neutral-700 p-2 rounded-[4px] font-semibold text-white text-xs">LOG IN</li>
                      <li><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="#FFFFFF"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-grid-dots"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><path d="M12 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><path d="M19 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><path d="M5 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><path d="M19 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><path d="M5 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><path d="M12 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><path d="M19 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /></svg></li>
                  </ul>
              </nav>
              <div class="py-4 px-40">
                  <div class="w-full h-40 bg-neutral-800 flex flex-col p-4 gap-y-3">
                      <div>
                          <svg  xmlns="http://www.w3.org/2000/svg"  width="20"  height="20"  viewBox="0 0 24 24"  fill="none"  stroke="#FFFFFF"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-left"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 12l14 0" /><path d="M5 12l6 6" /><path d="M5 12l6 -6" /></svg>
                      </div>
                      <div>
                          <h1 class="text-white font-semibold text-lg">Ezugi Live Casino Cash Back Reward</h1>
                          <p class="text-neutral-400 text-xs mb-9">Place your bets on any Ezugi Live casino table games to receive an unlimited 3% cash back bonus reward!</p>
                          <p class="text-neutral-400 text-xs">Terms and conditions apply</p>
                      </div>
                  </div>
                  <div id="container" class="w-full py-4 px-5"></div>
              </div>
          </body>
      </html>
      `)
    previewHTML.document.close()
    previewHTML.addEventListener('load', function() {
      previewHTML.document.getElementById('container').innerHTML = content;
    });
  }