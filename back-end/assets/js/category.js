// Function to add a category
function addCategory(categoryName, categoryImage) {
  // Replace 'add_category.php' with the actual URL of your PHP endpoint
  // const apiUrl = 'add_category.php';
  const apiUrl = 'http://localhost/public/ideation/FashionEcom/api/addcategoryApi.php';

  // Create a FormData object
  const formData = new FormData();
  formData.append('categoryName', categoryName);
  formData.append('categoryImage', categoryImage);

  // Make a POST request using fetch
  fetch(apiUrl, {
    method: 'POST',
    body: formData
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json(); // Parse the JSON response
  })
  .then(data => {
    // Handle the response data after adding the category
    console.log('Category added successfully:', data);
    // Perform further actions based on the API response
  })
  .catch(error => {
    // Handle any errors that occurred during the fetch operation
    console.error('There was a problem adding the category:', error);
  });
}

// Function to handle the click event on the "Add Category" button
document.getElementById('add-category').addEventListener('click', function() {
  const categoryName = document.getElementById('categoryName').value;
  const categoryImageInput = document.getElementById('categoryImg'); // Assuming this is an input element of type 'file'
  const categoryImage = categoryImageInput.files[0]; // Get the selected file

  // Call the addCategory function with the name and image
  addCategory(categoryName, categoryImage);
});
