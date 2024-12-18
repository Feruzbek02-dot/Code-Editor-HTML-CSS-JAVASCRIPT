document.getElementById('runBtn').addEventListener('click', function() {
      // HTML, CSS, va JavaScript kodlarini olish
      var htmlCode = document.getElementById('html-code').value;
      var cssCode = document.getElementById('css-code').value;
      var jsCode = document.getElementById('js-code').value;
  
      // HTML kodini iframega yozish
      var iframe = document.getElementById('output');
      var iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
  
      iframeDoc.open();
      iframeDoc.write(`
          <html>
              <head>
                  <style>${cssCode}</style>
              </head>
              <body>
                  ${htmlCode}
                  <script>${jsCode}<\/script>
              </body>
          </html>
      `);
      iframeDoc.close();
  });
  