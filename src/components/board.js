import React from 'react';
import List from './list';
import { useState, useEffect } from 'react';

function Board({ data }) {
    const [sortBy, setSortBy] = useState(localStorage.getItem('sortBy') || 'user'); 
    const [orderBy, setOrderBy] = useState(localStorage.getItem('orderBy') || 'priority'); 
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const userOrder = {}, priorities = {}, status = {};
  
    if (sortBy ==='user' ) {

      data.map(ticket => {
        if(!userOrder[ticket[1]]){
          userOrder[ticket[1]] = [];
        }

        userOrder[ticket[1]].push(ticket);
      })
    }
    else if(sortBy==='priority'){

      data.map(ticket => {
        if(!priorities[ticket[0].priority]){
          priorities[ticket[0].priority] = [];
        }

        priorities[ticket[0].priority].push(ticket);
      })
    }
    else if(sortBy==='status'){

      data.map(ticket => {
        if(!status[ticket[0].status]){
          status[ticket[0].status] = [];
        }

        status[ticket[0].status].push(ticket);
      })
    }

    function showList(){
      if(sortBy==='user'){
        return <List cards={userOrder} sortBy={sortBy} orderBy={orderBy}/>
      }
      else if(sortBy==='priority'){
        return <List cards={priorities} sortBy={sortBy} orderBy={orderBy}/>
      }
      else if(sortBy==='status'){
        return <List cards={status} sortBy={sortBy} orderBy={orderBy}/>
      }
    }
  
    const toggleDropdown = () => {
      setIsDropdownOpen(!isDropdownOpen);
    };

    useEffect(() => {
      localStorage.setItem('sortBy', sortBy);
      localStorage.setItem('orderBy', orderBy);
    }, [sortBy, orderBy]);
  
    return (
      <>
      <div className="dropdown-container">
        <button onClick={toggleDropdown} className="dropdown-button">
            Display
          </button>
          {isDropdownOpen && (
            <div className="dropdown-menu">
              <div className="dropdown1">
                <label htmlFor="sorting">Grouping</label>
                <select id="sorting" onChange={(e) => setSortBy(e.target.value)} value={sortBy}>
                  <option value="user">User</option>
                  <option value="priority">Priority</option>
                  <option value="status">Status</option>
                </select>
              </div>
              <div className="dropdown2">
                <label htmlFor="ordering">Ordering</label>
                <select id="ordering" onChange={(e) => setOrderBy(e.target.value)} value={orderBy}>
                  <option value="priority">Priority</option>
                  <option value="title">Title</option>
                </select>
              </div>
            </div>
          )}
        </div>
      <div className="board">
        { showList() }
      </div>
      </>
    );
  }
  
  export default Board;
