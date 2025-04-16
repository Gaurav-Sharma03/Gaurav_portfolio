
  document.getElementById('downloadBtn').addEventListener('click', () => {
    const resume = document.querySelector('.resume-container');

    const opt = {
      margin:       0.5,
      filename:     'Gaurav_Sharma_Resume.pdf',
      image:        { type: 'jpeg', quality: 0.98 },
      html2canvas:  { scale: 2 },
      jsPDF:        { unit: 'in', format: 'a4', orientation: 'portrait' }
    };

    html2pdf().from(resume).set(opt).save();
  });

