// Example: Populating customer name and points dynamically
Document.addEventListener("DOMContentLoaded", function () {
    // Assuming these values are retrieved from a user session or API
    const customerName = "John Doe";
    const loyaltyPoints = 45;

    // Set customer name and loyalty points
    Document.getElementById("customer-name").textContent = customerName;
    Document.getElementById("points").textContent = `${loyaltyPoints} points`;

    // Handle reorder button click
    Document.getElementById("reorder-btn").addEventListener("click", function func() {
        Alert("Reordering your favorite coffee!");
        // Logic to handle quick reorder would go here
    });
});

function logout(){
    if(confirm("Do You Want to LOG-OUT")){
        window.location.href="index.html"
    }
}

