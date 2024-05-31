import checkValidData from "./validate";

const handleValidation =(email, password, name) => {
    return checkValidData(email,password, name);
}

  export default handleValidation;