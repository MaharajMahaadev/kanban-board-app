import React from 'react';
import List from './list';
import { useState } from 'react';

function Board({ data }) {
    const [sortBy, setSortBy] = useState('user'); 
    const [orderBy, setOrderBy] = useState('priority'); 
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
    let sortedData;
  
    if (sortBy === 'user') {
      sortedData = data.map(user => ({
        title: user.user,
        cards: user.cards,
      }));
    } else {
      sortedData = data.reduce((accumulator, user) => {
        user.cards.forEach(card => {
          const groupKey = sortBy === 'status' ? card.status : card.priority;
          if (!accumulator[groupKey]) {
            accumulator[groupKey] = { title: sortBy === 'status' ? card.status : `Priority ${card.priority}`, cards: [] };
          }
          accumulator[groupKey].cards.push(card);
        });
        return accumulator;
      }, {});
  
      sortedData = Object.values(sortedData);
    }
  
    const toggleDropdown = () => {
      setIsDropdownOpen(!isDropdownOpen);
    };
  
    return (
      <div className="board">
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
        {sortedData.map((group, index) => {
          let orderedCards = [...group.cards];
  
          if (orderBy === 'priority') {
            orderedCards.sort((a, b) => a.priority - b.priority);
          } else if (orderBy === 'title') {
            orderedCards.sort((a, b) => a.title.localeCompare(b.title));
          }
  
          return (
            <List title={group.title} cards={orderedCards} sortBy={sortBy}/>
          );
        })}
      </div>
    );
  }
  
  export default Board;
