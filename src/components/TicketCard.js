// src/components/TicketCard.js  
import React from 'react';  

const TicketCard = ({ ticket }) => {  
    return (  
        <div className="ticket-card">  
            <h3>{ticket.id}</h3>  
            <p>{ticket.title}</p>  
            <span>{ticket.tag.join(', ')}</span>  
        </div>  
    );  
};  

export default TicketCard;
