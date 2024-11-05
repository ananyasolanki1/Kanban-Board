// src/App.js  
import React from 'react';  
import KanbanBoard from './components/KanbanBoard';  
import './App.css';  

const App = () => {  
    return (  
        <div className="App">  
            <KanbanBoard />  
        </div>  
    );  
};  

// src/App.js  
const tickets = [  
    { id: 'CAM-2', description: 'Add Multi-Language Support', assignee: 'Yogesh', status: 'Feature Request', priority: 4 },  
    { id: 'CAM-4', description: 'Implement Email Notification System', assignee: 'Yogesh', status: 'Feature Request', priority: 3 },  
    { id: 'CAM-9', description: 'Upgrade Server Infrastructure', assignee: 'Suresh', status: 'Bug Fix', priority: 2 },  
    { id: 'CAM-5', description: 'Enhance Search Functionality', assignee: 'Suresh', status: 'Feature Request', priority: 1 },  
    { id: 'CAM-8', description: 'Implement Role-Based Access Control', assignee: 'Shankar Kumar', status: 'Feature Request', priority: 0 },  
    { id: 'CAM-10', description: 'Conduct Security Vulnerability Assessment', assignee: 'Ramesh', status: 'Bug Fix', priority: 3 },  
];

export default App;


 
