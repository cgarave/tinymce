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
    height: '79vh',
    width: '100%',
    resize: false,
    plugins: ["template paste autolink link image lists advlist charmap print preview hr anchor pagebreak spellchecker",
              "searchreplace wordcount visualblocks visualchars code fullscreen insertdatetime media nonbreaking",
              "save table contextmenu directionality emoticons template paste textcolor",],
    toolbar: 'template undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
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
            .replaceAll('<ol style="list-style-type: lower-roman;">', '<ol class="list-lower-roman">')
            .replaceAll('<ol style="list-style-type: upper-roman;">', '<ol class="list-upper-roman">')
            .replaceAll('<ol style="list-style-type: lower-alpha;">', '<ol class="list-lower-alpha">')
            .replaceAll('<ol style="list-style-type: upper-alpha;">', '<ol class="list-upper-alpha">')
            .replaceAll('<table style="border-collapse: collapse; width: 100%;" border="1">', '<table class="w-full border-collapse border-spacing-0 text-center">')
            .replaceAll('<tbody>', '<tbody class="divide-y">')
    console.log(y);
    
    document.getElementById('preview-area').innerHTML = y;
}

function showWindow() {
    if(!show){
      document.getElementById('editor-container').classList.replace('w-full', 'w-1/2');
      show = 1; //truthy
    } else {
      document.getElementById('editor-container').classList.replace('w-1/2', 'w-full');
      show = 0; //falsey
    }
    document.getElementById('preview-area').classList.toggle('hidden');
    document.getElementById('preview-btn').classList.toggle('hidden');
    console.clear();
  }