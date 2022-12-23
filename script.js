function validate() {
    let name = document.getElementById("name").value;
    if (name.length < 6) 
        alert("Invalid Name");
    
    let pass = document.getElementById("password").value;
    if (pass.length < 6) 
        alert("Invalid password");
    
    let email = document.getElementById("emailid").value;
    if (name.value.length = '') 
        alert("Invalid Name");
    
    let phone = document.getElementById("phoneno").value;
    if (phone.value > 10 || phone.value < 10) 
        if (!phone.match(/[1-9][0-9]{9}$/))
            alert("Invalid Name");
    
}