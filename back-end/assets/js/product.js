  // Function to send product data via FormData
function addProductWithFormData() {
    // Replace 'YOUR_API_ENDPOINT' with the actual API endpoint URL
    const apiUrl = 'http://localhost/public/ideation/FashionEcom/api/addproductApi.php';
  
    // Create a new FormData object
    const formData = new FormData();
    const name  = document.getElementById('name').value ;
    const qty  = document.getElementById('qty').value ;
    const price  = document.getElementById('price').value ;
    const category  = document.getElementById('category').value ;
    const imageFile  = document.getElementById('imageFile').files[0] ;
    const description  = document.getElementById('editor1').value  ="test dsc" ;

    formData.append('name', name);
    formData.append('quantity', qty);
    formData.append('price', price);
    formData.append('category', category);
    formData.append('description', description);
    formData.append('image', imageFile);
  
    // Make a POST request with FormData
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
      // Handle the response data after successfully adding the product
      console.log('Product added successfully:', data);
      // You can perform further actions here based on the API response
    })
    .catch(error => {
      // Handle any errors that occurred during the fetch operation
      console.error('There was a problem adding the product:', error);
    });
  }
  
  // Example product data to be added
 
  // Call the function to add the product using FormData
  document.getElementById('add-product').onclick = function(e) {
    e.preventDefault(); // Prevent the default form submit action
    addProductWithFormData();
  };    
  