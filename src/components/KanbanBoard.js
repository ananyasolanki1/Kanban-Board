// src/components/KanbanBoard.js  
import React, { useEffect, useState } from 'react';  
import axios from 'axios';  
import TicketColumn from './TicketColumn';  // Importing TicketColumn  
import './KanbanBoard.css';  // Import CSS styles  

const KanbanBoard = () => {  
    const [tickets, setTickets] = useState([]);  
    const [users, setUsers] = useState([]);  
    const [groupBy, setGroupBy] = useState('status');  
    const [sortBy, setSortBy] = useState('priority');  

    useEffect(() => {  
        axios.get('https://api.quicksell.co/v1/internal/frontend-assignment')  
            .then(response => {  
                setTickets(response.data.tickets);  
                setUsers(response.data.users);  
            })  
            .catch(error => console.error(error));  
    }, []);  

    const groupTickets = () => {  
        // Grouping logic based on chosen criteria  
        if (groupBy === 'status') {  
            return tickets.reduce((groups, ticket) => {  
                (groups[ticket.status] = groups[ticket.status] || []).push(ticket);  
                return groups;  
            }, {});  
        } else if (groupBy === 'user') {  
            return tickets.reduce((groups, ticket) => {  
                const user = users.find(u => u.id === ticket.userId);  
                const userName = user ? user.name : 'Unknown';  
                (groups[userName] = groups[userName] || []).push(ticket);  
                return groups;  
            }, {});  
        } else if (groupBy === 'priority') {  
            return tickets.reduce((groups, ticket) => {  
                (groups[ticket.priority] = groups[ticket.priority] || []).push(ticket);  
                return groups;  
            }, {});  
        }  
    };  

    const sortTickets = (groupedTickets) => {  
        // Sorting logic  
        for (let group in groupedTickets) {  
            groupedTickets[group].sort((a, b) => {  
                if (sortBy === 'priority') {  
                    return a.priority - b.priority;  
                }  
                return 0; // Modify based on desired sorting (e.g., by title)  
            });  
        }  
        return groupedTickets;  
    };  

    const groupedTickets = groupTickets();  
    const sortedTickets = sortTickets(groupedTickets);  

    return (  
        <div className="kanban-board">  
            <div className="controls">  
                <select onChange={(e) => setGroupBy(e.target.value)}>  
                    <option value="status">Group by Status</option>  
                    <option value="user">Group by User</option>  
                    <option value="priority">Group by Priority</option>  
                </select>  
                <select onChange={(e) => setSortBy(e.target.value)}>  
                    <option value="priority">Sort by Priority</option>  
                    <option value="title">Sort by Title</option>  
                </select>  
            </div>  
            <div className="columns">  
                {Object.entries(sortedTickets).map(([key, tickets]) => (  
                    <TicketColumn key={key} title={key} tickets={tickets} />  
                ))}  
            </div>  
        </div>  
    );  
};  

export default KanbanBoard;