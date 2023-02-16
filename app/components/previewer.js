import Component from '@glimmer/component';
import pdfjsLib from 'pdfjs-dist/build/pdf'


export default class Previewer extends Component {

    constructor() {
      super(...arguments);
      var url = 'https://raw.githubusercontent.com/mozilla/pdf.js/ba2edeae/examples/learning/helloworld.pdf';

      // Loaded via <script> tag, create shortcut to access PDF.js exports.
      // var pdfjsLib = pdf;

      // as pdfjs worker should be in a seperate bundle I use the one on CDN. We can use webpack or vendor import for the worker as well.
      pdfjsLib.GlobalWorkerOptions.workerSrc = '//cdnjs.cloudflare.com/ajax/libs/pdf.js/3.3.122/pdf.worker.min.js';

      // Asynchronous download of PDF
      var loadingTask = pdfjsLib.getDocument(url);
      loadingTask.promise.then(function(pdf) {
        console.log('PDF loaded');
        
        // Fetch the first page
        var pageNumber = 1;
        pdf.getPage(pageNumber).then(function(page) {
          console.log('Page loaded');
          
          var scale = 1.5;
          var viewport = page.getViewport({scale: scale});
      
          // Prepare canvas using PDF page dimensions
          var canvas = document.getElementById('the-canvas');
          var context = canvas.getContext('2d');
          canvas.height = viewport.height;
          canvas.width = viewport.width;
      
          // Render PDF page into canvas context
          var renderContext = {
            canvasContext: context,
            viewport: viewport
          };
          var renderTask = page.render(renderContext);
          renderTask.promise.then(function () {
            console.log('Page rendered');
          });
        });
      }, function (reason) {
        // PDF loading error
        console.error(reason);
      });
    }
}
