const checkValidData = (email, password, name)=> {

const isEmailValid = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);

const isPasswordValid = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(password);

if(!isEmailValid) return "Email ID is not valid !";
if(!isPasswordValid) return "Password is not valid !";
if(name.length === 0) return "Please enter name";

return null;

}

export default checkValidData;