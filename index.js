// Before setting content
function encodeVueSyntax(content) {
    return content.replace(/{{/g, '[[[').replace(/}}/g, ']]]');
  }
  
  // After getting content
  function decodeVueSyntax(content) {
    return content.replace(/\[\[\[/g, '{{').replace(/\]\]\]/g, '}}');
  }
  
  tinymce.init({
    selector: 'textarea',
    height: 300,
    width: 1200,
    plugins: 'template anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount mediaembed formatpainter linkchecker a11ychecker tinymcespellchecker powerpaste advcode mentions tinycomments',
    toolbar: 'template undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
    tinycomments_mode: 'embedded',
    tinycomments_author: 'Author name',
    mergetags_list: [
      { value: 'First.Name', title: 'First Name' },
      { value: 'Email', title: 'Email' },
    ],
    extended_valid_elements: 'component[*],vue-component[*],@*',
    valid_elements: 'component[*],vue-component[*],@*',
    setup: function (editor) {
      editor.on('init', function () {
        const initialContent = '<vue-component :prop="value">{{ Content }}</vue-component>';
        editor.setContent(encodeVueSyntax(initialContent));
      });
    }
  });
  
  // Get content with decoded Vue.js syntax
  
  function getHTMLContent(){
      const content = decodeVueSyntax(tinymce.get('mytextarea').getContent());
      console.log(content);
  }
  