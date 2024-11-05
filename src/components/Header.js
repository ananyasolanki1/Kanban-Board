// src/components/Header.js  
import React, { useState } from 'react';  

const Header = ({ groupBy, setGroupBy, sortBy, setSortBy }) => {  
    const [isDropdownOpen, setDropdownOpen] = useState(false);  

    const toggleDropdown = () => {  
        setDropdownOpen(!isDropdownOpen);  
    };  

    const handleGroupChange = (e) => {  
        setGroupBy(e.target.value);  
    };  

    const handleSortChange = (e) => {  
        setSortBy(e.target.value);  
    };  

    return (  
        <header className="header">  
            <div className="menu">  
                <div className="display-button" onClick={toggleDropdown}>  
                    Display <span>▼</span>  
                </div>  
                {isDropdownOpen && (  
                    <div className="dropdown">  
                        <div className="grouping">  
                            <label>Grouping</label>  
                            <select onChange={handleGroupChange} value={groupBy}>  
                                <option value="status">Status</option>  
                                <option value="user">User</option>  
                                <option value="priority">Priority</option>  
                            </select>  
                        </div>  
                        <div className="ordering">  
                            <label>Ordering</label>  
                            <select onChange={handleSortChange} value={sortBy}>  
                                <option value="priority">Priority</option>  
                                <option value="title">Title</option>  
                            </select>  
                        </div>  
                    </div>  
                )}  
            </div>  
        </header>  
    );  
};  

export default Header;