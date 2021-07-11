// adding all ASCII characters in an array
let arrayFromLowToHigh=function (low,high){
    var array=[];
    for(i=low;i<=high;i++){
        array.push(String.fromCharCode(i));
    }
    return array;
};
//making variable for different cases
var upperCaseCharactersArray=arrayFromLowToHigh(65,90);
var lowerCaseCharectersArray=arrayFromLowToHigh(97,122);
var numbersArray=arrayFromLowToHigh(48,57);
var specialCharactersArray=arrayFromLowToHigh(33,47).concat(arrayFromLowToHigh(58,64)).concat(arrayFromLowToHigh(91,96)).concat(arrayFromLowToHigh(123,126));
//main function for password generator
function generatePassword(){
    var passwordLength=prompt("Please enter password length between 8 and 128");
    //check length of passowrd
    if(passwordLength>=8 && passwordLength<=128){
        var result=[];
        var randomPassword="";
        //select which character type you would like to add
        var upperCase=confirm("Would you like to add Upper Case character in you password?");
        var lowerCase=confirm("Would you like to add Lower Case character in your passowrd?");
        var number=confirm("Would you like to add Numbers in your password?");
        var specialCharacter=confirm("Would you like to add Special Character in your password?");
        //if any one is selected then program will run
        if(upperCase||lowerCase||number||specialCharacter){
            if(upperCase){
                result=result.concat(upperCaseCharactersArray);
            }
            if(lowerCase){
                result=result.concat(lowerCaseCharectersArray);
            }
            if(number){
                result=result.concat(numbersArray);
            }
            if(specialCharacter){
                result=result.concat(specialCharactersArray);
            }
            for(var i=0;i<passwordLength;i++){
                randomPassword=randomPassword+result[Math.floor(Math.random()*result.length)];
            }
            return randomPassword;
        }
        else{
            alert("Please select at least one Character Type.");
            generatePassword();
        }
    }
    //if input is not between 8 and 128
    else{
        alert("Kindly enter password length between 8 and 128");
        generatePassword();
    }
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);