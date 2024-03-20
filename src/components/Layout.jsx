import React from "react"
import Form from "./Form"

export default function Layout(){

    return(
       <div className="bodyShell">
        <section className="backgroundBanner">
            {/* <div className="cardFrontImg">
                <img class="creditCardLogo" src="./images/card-logo.svg" alt="credit card logo"/>
                <span class="creditCardNumberImg">0000 0000  0000  0000</span>
                <div className="cardBottomSection">
                    <span class="cardNameImg">JANE APPLESEED</span>
                    <span class="cardExpImg" >00/00</span>
                </div>
            </div>
            <div className="cardBackImg">

            </div> */}
        </section>
        <section className="backgroundContent">
            <Form />
        </section> 
       </div> 
    )
}
