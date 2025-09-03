import React from 'react';
import visaLogo from './assets/images/visa.png';
import mastercardLogo from './assets/images/master.png';


const CreditCard = (props) => {
    const slicedNumber = props.number.slice(-4);
    const slicedYear = props.expirationYear.slice(-2);
    const textColor = props.color;
    const bgColor = props.bgColor;


    return (
        <div className="credit-card" style={{ color: textColor, backgroundColor: bgColor }}>

            <div>
                <img src={props.type === "Visa" ? visaLogo : mastercardLogo}
                    alt={`${props.type} logo`} className="card-img" /></div>
            <div className="card-number">
                <p>**** **** **** {slicedNumber}</p>
            </div>

            <div className="card-info">
                <p className="expire">Exprires {props.expirationMonth}/{slicedYear}</p>
                <p>{props.bank}</p>
                <p>{props.owner}</p>
            </div>
        </div>
    );
}

export default CreditCard