// JavaScript for Reorder Button with Alert
document.querySelectorAll(".reorder").forEach(button => {
    button.addEventListener("click", function () {
        const orderId = this.parentElement.querySelector("h3").textContent;
        alert(`Reordering items from ${orderId}!`);
    });
});


function logout(){
    if(confirm("Do You Want to LOG-OUT")){
        window.location.href="index.html"
    }
}
