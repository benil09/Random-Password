const passwordBox=document.getElementById("password");
const length=12;


function generateRandomPassword(length) {
    // Define the characters that can be used in the password
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=';
    let password = '';
    
    // Loop to generate each character of the password
    for (let i = 0; i < length; i++) {
        // Get a random character from the characters string
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }

    passwordBox.value=password;
    
    return password;

    
}


function copy(){
    passwordBox.select();
  //  passwordBox.setSelectionRange(0,99999);
    document.execCommand("copy");
    alert("Password copied to clipboard");

}




//console.log( generateRandomPassword(length));


