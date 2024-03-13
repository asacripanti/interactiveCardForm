export default function Form(){
    return(
       <form className="formShell">
            <section className="frontInfo">
                <label className="nameLabel">CARDHOLDER NAME
                    <input className="nameInput" type="text"></input>
                </label>
                <label className="numberLabel">CARD NUMBER
                    <input type="text" className="numberInput"></input>
                </label>
            </section>
            <section className="backInfo">
                <label className="expMonthLabel">EXP.DATE 
                    <input placeholder="MM" type="text" className="expMonthInput"></input>
                </label>
                <label className="expYearLabel">(MM/YY)
                    <input placeholder="YY" type="text" className="expYearInput"></input>
                </label>
                <label className="cvcLabel">CVC
                    <input placeholder="e.g. 123" type="text" className="cvcInput" />
                </label>
            </section>
            <button type="submit">Confirm</button>
       </form>
    )
}