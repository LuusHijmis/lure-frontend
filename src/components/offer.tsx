import React from "react";

function Offer(props: any){


    return(
        <div>
            <div className="offer_text">
                <h1 className="offer_text_title">{props.title}</h1>
                <h2 className="offer_text_description">{props.description}</h2>
                <img
                    className="offer_image"
                    src={props.img}
                />
                <div className="offer_states">
                    <p className="offer_price">
                        € {props.price} per stuk
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Offer