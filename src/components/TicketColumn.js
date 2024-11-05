// src/components/TicketColumn.js  
import React from 'react';  
import TicketCard from './TicketCard';  
import './TicketColumn.css';  

const TicketColumn = ({ title, tickets }) => {  
    return (  
        <div className="ticket-column">  
            <h2>{title}</h2>  
            {tickets.length === 0 ? (  
                <p>No tickets assigned</p>  
            ) : (  
                tickets.map(ticket => (  
                    <TicketCard key={ticket.id} ticket={ticket} />  
                ))  
            )}  
        </div>  
    );  
};  

export default TicketColumn;