import React from 'react';
import Card from './card';
import '../styles.css';
import P0 from '@mui/icons-material/SignalCellularNull';
import P1 from '@mui/icons-material/SignalCellularAlt1Bar';
import P2 from '@mui/icons-material/SignalCellularAlt2BarSharp';
import P3 from '@mui/icons-material/SignalCellularAltOutlined';
import P4 from '@mui/icons-material/PriorityHigh';


const priorityMapping = {
    0: { name: 'Easy', icon: <P0 /> },
    1: { name: 'Medium', icon: <P1 /> },
    2: { name: 'High', icon: <P2 /> },
    // Add more priorities as needed
  };
  
  function list({ title, cards, sortBy }) {
    return (
      <div className="list">
        <div className="list-header">
          {title}
          {sortBy === 'priority' && (
            <span>
              - {priorityMapping[cards[0]?.priority]?.icon}
              {priorityMapping[cards[0]?.priority]?.name}
              console.log("dfa");
            </span>
          )}
        </div>
        {cards.map((card, index) => (
          <div key={index} className="card">
            <div className="card-header">
              <div className="card-id">{card.id}</div>
              <div className="card-title">{card.title}</div>
            </div>
            <div className="card-footer">
              <div className="card-priority">Priority: {card.priority}</div>
              <div className="card-tag">Tag: {card.tag}</div>
            </div>
          </div>
        ))}
      </div>
    );
  }
  
  export default list;
