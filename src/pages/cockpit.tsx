import React from "react";
import Offer from "../components/offer";
import offerData from "../data/offer-data";

function Cockpit() {
    const offers = offerData.map(offer => {
        return <Offer
            key={offer.id}
            {...offer}
        />
    })

    return(
        <div className="cockpit">
            <div className="cockpit_offer_section">
                <div className="welcome_cockpit">
                    <h2 className="welcome_text_cockpit">Check hier jouw aanbiedingen</h2>

                    <section className="offer_section">
                            {offers}
                    </section>
                </div>
            </div>
        </div>
    )
}
export default Cockpit;