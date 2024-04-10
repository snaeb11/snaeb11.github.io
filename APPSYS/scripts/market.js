function confirm() {
  Swal.fire({
    title: "Order item?",
    text: "How many items do you want to order?",
    icon: "warning",
    input: "number",
    inputAttributes: {
      min: "1",
      step: "1"
    },
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, order item."
  }).then((result) => {
    if (result.isConfirmed) {
      const quantity = result.value;
      if (quantity > 0) {
        Swal.fire({
          title: "Order has been made!",
          text: "Please pay your order at the University Cashier",
          icon: "success"
        });
      } else {
        Swal.fire({
          title: "Invalid Quantity",
          text: "Please enter a valid quantity.",
          icon: "error"
        });
      }
    }
  });
}
