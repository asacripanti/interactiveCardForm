import React from "react"

export default function Form(props){
    const [formData, setFormData] = React.useState(
        {
            cardholderName: "",
            cardNumber: "",
            expMonth: "",
            expYear: "",
            cvc: ""
        }
    )

    const [submit, setSubmit] = React.useState(false)
    const [errorMsg, setErrorState] = React.useState(false)
    const [errorName, setErrorName] = React.useState(false)
    const [errorDateLength, setErrorDateLength] = React.useState(false)
    const [errorCvc, setErrorCvc] = React.useState(false)
    const [errorCvcLength, setErrorCvcLength] = React.useState(false)
    const [errorNumber, setErrorNumber] = React.useState(false)
    

    const id = React.useId()

    console.log(formData)
    
    function handleChange(event){
        const {name, value, type} = event.target
        if(name === 'expMonth'){
            if (!/^\d*$/.test(value)) {
                // If a non-numeric character is entered, do not update the state
                return;
            }
        }
        else if(name === 'expYear'){
            if (!/^\d*$/.test(value)) {
                // If a non-numeric character is entered, do not update the state
                return;
            }
        }
        else if(name === 'cvc'){
            if (!/^\d*$/.test(value)) {
                // If a non-numeric character is entered, do not update the state
                return;
            }
        }
        else if(name === 'cardNumber'){
            if (!/^\d*$/.test(value)) {
                // If a non-numeric character is entered, do not update the state
                return;
            }
        }setFormData(prevFormData => {
            return{
                ...prevFormData,
                [name]: value
            }
        })
    }

    function handleSubmit(event){
        event.preventDefault()
        console.log('Submit!')
        // validateFormData checks makes sure no input fields are empty
        const isValid = validateFormData(formData);

        if(!isValid){
            return console.log("Not valid")
        }
        setSubmit(prevData => !prevData)
    }

    function validateFormData(formData) {
        // Implement custom validation logic here
        // For example, check if any required fields are empty
    
        if (
            formData.cardholderName.trim() === '' ||
            formData.cardNumber.length < 16 ||
            formData.expMonth.trim() === '' ||
            formData.expMonth.length < 2 ||
            formData.expYear.trim() === '' ||
            formData.expYear.length < 2 ||
            formData.cvc.length < 3 ||
            formData.cvc.trim() === ''
        ) {
            // If any required fields are empty, return false
            return false;
        }
    
        // Additional validation logic can be added here
    
        return true; // Return true if all validation passes
    }

    function handleClick(){
        if(formData.cardholderName.length === 0){
            setErrorName(true);
        }
        else if(formData.cardholderName.length > 0){
            setErrorName(false)
        }
        if (formData.expMonth.trim() === '' || formData.expYear.trim() === '') {
            setErrorState(true); // Set errorMsg state to true
             // Exit early to prevent further execution
        }
        if(formData.expMonth.length < 2 && formData.expMonth.length != 0 || formData.expYear < 2 && formData.expYear.length != 0){
            setErrorDateLength(true)
            setErrorState(true)
        }
        else if(formData.expMonth.length === formData.expYear.length === 2){
            setErrorState(false)
        }
        if(formData.cvc.trim() === ''){
            setErrorCvc(true)
        }
        if(formData.cvc.length < 3 && formData.cvc.length != 0){
            setErrorCvcLength(true)
            setErrorCvc(true)
        }
        else if(formData.cvc.length === 3){
            setErrorCvc(false)
        }
        if(formData.cardNumber.length < 16){
            setErrorNumber(true)
        }
        else if(formData.cardNumber.length === 16){
            setErrorNumber(false)
        }
    }

    function handleContinue(event){
        setSubmit(prevData => !prevData)
    }

    function handleBlur(event) {
        const { name, value } = event.target;
    
        // Set custom validity message when the input field is required but left blank
        if (value.trim() === '') {
            event.target.setCustomValidity('Error, can\'t be blank');
        }
    }
    const borderStyles = {
        // borderColor: errorNumber ? "red" : "gray"
        // if(errorNumber){
        //     borderColor = "red";
        // }
        
    }
    return(
    <div>  
       {!submit && <form className="formShell" onSubmit={handleSubmit}>
        <label className="nameLabel" htmlFor={id + "-cardholderName"}>CARDHOLDER NAME</label>
        <input 
            type="text"
            name="cardholderName"
            value={formData.cardholderName}
            id={id + "-cardholderName"}
            onChange={handleChange}
            className="nameInput"
            maxLength={30}
            placeholder="e.g. Jane Appleseed"
            style={errorName ? { borderColor: "red" } : {}}
            
        />
        {errorName && <span className="nameErrorMsg">Please enter name</span>}
        <label className="numberLabel" htmlFor={id + "-cardNumber"}>CARD NUMBER</label>
        <input 
            type="text"
            name="cardNumber"
            value={formData.cardNumber}
            id={id + "-cardNumber"}
            onChange={handleChange}
            className="numberInput"
            placeholder="e.g. 1234 5678 9123 0000"
            maxLength={16}
            // style={borderStyles}
            style={errorNumber ? { borderColor: "red" } : {}}
           
        />
        
        <section className="backInfo">
        <span className="expDateText">EXP. DATE (MM/YY)</span>
            <label className="expMonthLabel" htmlFor={id + "-expMonth"}></label>
            <input 
                type="text"
                name="expMonth"
                value={formData.expMonth}
                onChange={handleChange}
                className="expMonthInput" 
                placeholder="MM"
                maxLength={2}
                style={errorMsg ? { borderColor: "red" } : {}}
                
            />
            {errorNumber && <span className="cardNumberErrorMsg">Please enter the correct card number</span>}
            {errorMsg && <span className="blankErrorMsg">{errorDateLength ? "Please enter correct date" : "Can't be blank"}</span>}
            <label className="expYearLabel" htmlFor={id + "-expYear"}></label>
            <input
                type="text"
                name="expYear"
                value={formData.expYear}
                onChange={handleChange}
                className="expYearInput"
                placeholder="YY"
                maxLength={2}
                style={errorMsg ? { borderColor: "red" } : {}}
                
            />
            <label className="cvcLabel" htmlFor={id + "-cvc"}>CVC
                <input
                    type="text"
                    name="cvc"
                    value={formData.cvc}
                    id={id + "-cvc"}
                    onChange={handleChange}
                    className="cvcInput"
                    placeholder="e.g. 123"
                    maxLength={3}
                    style={errorCvc ? { borderColor: "red" } : {}}
                    
                />
                {errorCvc && <span className="cvcErrorMsg">{errorCvcLength ? "Please enter the correct cvc" : "Can't be blank"}</span>}
            </label>    
            
       
        </section>
        <button onClick={handleClick} className="submitBtn">Confirm</button>
       </form>}
       <div className="cardFrontImg">
                <img class="creditCardLogo" src="./images/card-logo.svg" alt="credit card logo"/>
                {/* <span class="creditCardNumberImg">{formData.cardNumber.length === 0 ? "0000 0000 0000 0000" : formData.cardNumber}</span> */}
                <span className="creditCardNumberImg">
                    {formData.cardNumber.length === 0 ? "0000 0000 0000 0000" : formData.cardNumber.replace(/\D/g, '').replace(/(.{4})/g, '$1 ')}
                </span>

                <div className="cardBottomSection">
                    <span class="cardNameImg">{formData.cardholderName.length === 0 ? "Jane Appleseed" : formData.cardholderName}</span>
                    <span class="cardExpImg" >{formData.expYear.length === 0 ? "00/00" : `${formData.expMonth}/${formData.expYear}`}</span>
                </div>
        </div>
        <div className="cardBackImg">
            <span className="cvcImg">{formData.cvc.length === 0 ? "000" : formData.cvc}</span>
        </div>
       {submit && <div className="thankYouScreen">
        <img className="iconComplete" src="../images/icon-complete.svg" /> 
        <h1 className="thankYouTitle">THANK YOU!</h1>
        <h2 className="thankYouMsg">We've added your card details</h2>
        <button onClick={handleContinue} className="continueBtn">Continue</button>
       </div>}
    </div>     
    )
}