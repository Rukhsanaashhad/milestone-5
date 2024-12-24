const resumeForm = document.getElementById('resumeForm') as HTMLInputElement|null;
const resumeOutput = document.getElementById('resumeOutput') as HTMLInputElement|null;

// function to generate the resume
if (resumeForm && resumeOutput) {
resumeForm.addEventListener('submit',(event)=>{

event.preventDefault();

const name =(document.getElementById('name')as HTMLInputElement).value
const email= (document.getElementById('email')as HTMLInputElement).value
const phone= (document.getElementById('phone')as HTMLInputElement).value
const education= (document.getElementById('education')as HTMLInputElement).value
const experience = (document.getElementById('experience')as HTMLInputElement).value
const skills = (document.getElementById('skills')as HTMLInputElement).value
const description =(document.getElementById('description')as HTMLInputElement).value


//Generate HTML for the resume
const resumeHTML =`

      <h2>Generated Resume</h2>
      <p><Strong>Name:</strong> ${name}</p>
      <p><Strong>Email:</strong> ${email}</p>
      <p><Strong>Phone:</strong> ${phone}</p>
      <p><Strong>Education:</strong> ${education}</p>
      <p><Strong>Experience:</strong> ${experience}</p>
      <p><Strong>Skills:</strong> ${skills}</p>
      <p><Strong>Description:</strong> ${description}</p>
      
  `;
   resumeOutput.innerHTML=resumeHTML
});
}else{
    console.error('form or output div not found in the DOM');

}

const shareablelLink=document.getElementById("shareable-link") as HTMLAreaElement
shareablelLink?.addEventListener("click", ()=>{

})


const downloadPdf = document.getElementById("downloadpdf") as HTMLElement
downloadPdf?.addEventListener("click", ()=>{
     window.print()
})



