function confirm(){
    Swal.fire({
            title: "Order item?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, order item."
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                title: "Order has been made!",
                text: "Please pay your order at the University Cashier",
                icon: "success"
              });
            }
          });
}