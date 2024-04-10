document.addEventListener('DOMContentLoaded', function(){

    function conf(){
        Swal.fire({
            title: "Do you want to save the changes?",
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: "Save",
            denyButtonText: `Don't save`
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire("Saved!", "", "success");
            } else if (result.isDenied) {
              Swal.fire("Changes are not saved", "", "info");
            }
          });
    }

    var saveButton = document.getElementById('save');
    saveButton.addEventListener('click', conf);

    var addButton = document.getElementById('add');
    addButton.addEventListener('click', function() {
      Swal.fire({
        title: 'Add <span style="color: #9A0000">New</span> Commodities',
        html:
          '<div class="popup-container">' +
             '<div class="popup-input">Add photo: <input type="file" id="photo" onchange="previewImage(event)"></div>' +
             '<div class="popup-input" id="itemid">Item ID: 1015</div>' +
             '<div class="popup-input">Commodity: <input type="text" id="test"></div>' +
             '<div class="popup-input">Variety: <input type="text" id="test"></div>' +
             '<div class="popup-input">Quantity: <input type="number" id="test"></div>' +
             '<div class="popup-input">Price: <input type="number" id="test"></div>' +
             '<div class="popup-input"><img id="preview" src="#" alt="Preview Image" style="max-width: 100%; display: none;"></div>' +
          '</div>',
        showCancelButton: true,
        showConfirmButton: true,
        confirmButtonText: 'Save',
        cancelButtonText: 'Cancel'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: 'Saved and Added!',
            icon: 'success',
            showConfirmButton: false,
            timer: 1500
          });
        }
      });
    });

    /**/
    var editButtons = document.querySelectorAll('#edit'); // Use querySelectorAll to select all elements with id "edit"
editButtons.forEach(function(editButton) {
    editButton.addEventListener('click', function() {
        var productId = this.closest('.product').getAttribute('data-item-id');
        var productName = this.closest('.product').querySelector('#prod-name').innerText;
        var productVariety = this.closest('.product').querySelector('#prod-carr').innerText;
        var productQuantity = this.closest('.product').querySelector('#prod-quan').innerText;
        var productPrice = this.closest('.product').querySelector('#prod-price').innerText.replace('Php ', '');

        Swal.fire({
            title: 'Edit <span style="color: #9A0000">Product</span>',
            html:
                '<div class="popup-container">' +
                    '<div class="popup-input">Product Name: <input type="text" id="edited-name" value="' + productName + '"></div>' +
                    '<div class="popup-input">Variety: <input type="text" id="edited-variety" value="' + productVariety + '"></div>' +
                    '<div class="popup-input">Quantity: <input type="text" id="edited-quantity" value="' + productQuantity + '"></div>' +
                    '<div class="popup-input">Price: <input type="number" id="edited-price" value="' + productPrice + '"></div>' +
                    '<div class="popup-input">Change Image: <input type="file" id="edited-image"></div>' +
                '</div>',
            showCancelButton: true,
            showConfirmButton: true,
            confirmButtonText: 'Save',
            cancelButtonText: 'Cancel'
        }).then((result) => {
            if (result.isConfirmed) {
                var editedName = document.getElementById('edited-name').value;
                var editedVariety = document.getElementById('edited-variety').value;
                var editedQuantity = document.getElementById('edited-quantity').value;
                var editedPrice = document.getElementById('edited-price').value;
                var editedImage = document.getElementById('edited-image').files[0];
                
                Swal.fire({
                    title: 'Product Updated!',
                    icon: 'success',
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        });
    });
});

    /**/
});

function previewImage(event) {
    var input = event.target;
    var preview = document.getElementById('preview');

    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            preview.src = e.target.result;
            preview.style.display = 'block';
        }

        reader.readAsDataURL(input.files[0]);
    }
}
