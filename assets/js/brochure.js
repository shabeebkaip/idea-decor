const downloadBtn = document.getElementById('download-btn');
downloadBtn.addEventListener('click', downloadPDF);

function downloadPDF() {
  // Get the PDF file path from your project
  const pdfFilePath = 'assets/brochure.pdf';

  // Send a GET request to fetch the PDF file
  fetch(pdfFilePath)
    .then(response => response.blob())
    .then(blob => {
      // Create a new URL object from the blob
      const url = URL.createObjectURL(blob);

      // Create a new anchor element to trigger the download
      const a = document.createElement('a');
      a.href = url;
      a.download = 'ideaDecor.pdf';

      // Append the anchor element to the DOM and click it to start the download
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);

      // Revoke the URL object to free up memory
      URL.revokeObjectURL(url);
    });
}
