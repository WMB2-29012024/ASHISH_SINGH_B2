const imageInput = document.getElementById('imageInput');
const imagePreview = document.getElementById('preview');
const imageProfile = document.getElementById('edit-profile')

// Add event listener for when a file is selected
imageInput.addEventListener('change', function() {
  const file = this.files[0]; // Get the selected file
  if (file) {
    const reader = new FileReader(); // Initialize a FileReader object

    reader.onload = function(e) {
      // Set the source of the image element to the result of FileReader
      imagePreview.src = e.target.result;

    };
    // Read the selected file as a Data URL
    reader.readAsDataURL(file);
  } else {
    // If no file is selected, display a default image
    imagePreview.src ='https://marketplace.canva.com/EAENvp21inc/1/0/1600w/canva-simple-work-linkedin-banner-qt_TMRJF4m0.jpg';
    // Reset the progress bar
  ;
  }
});
//  prfole - image- edit
imageProfile.addEventListener('click',()=>{
  console.log('hello')
})