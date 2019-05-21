import React from 'react';
import "./cards.css";

const Card = props => {
    return(
        <div className="card text-center">
            <div className="card-body text-dark">
                <h2 className="card-title">{props.title}</h2>
                <p className="card-text text-secondary">
                    Dislay data chart and or search field here! 
                </p>
                <a href="#" className="btn btn-outline-warning">View All</a>
            </div>
        </div>
    );
}

export default Card;