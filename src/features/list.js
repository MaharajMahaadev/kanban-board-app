import React from 'react';
import Card from './card';
import '../styles.css';
import P0 from '@mui/icons-material/SignalCellularNull';
import P1 from '@mui/icons-material/SignalCellularAlt1Bar';
import P2 from '@mui/icons-material/SignalCellularAlt2BarSharp';
import P3 from '@mui/icons-material/SignalCellularAltOutlined';
import P4 from '@mui/icons-material/PriorityHigh';
import Fr from '@mui/icons-material/Circle';


function list({ title, cards, sortBy }) {
  const renderPriorityIcon = (priority) => {
    switch (priority) {
      case 0:
        return <P0 />;
      case 1:
        return <P1 />;
      case 2:
        return <P2 />;
      case 3:
        return <P3 />;
      case 4:
        return <P4 />;
    }
  };

  const renderPriorityTitle = (priority) => {
    switch (priority) {
      case 0:
        return "No Priority";
      case 1:
        return "Low";
      case 2:
        return "Medium";
      case 3:
        return "High";
      case 4:
        return "Urgent";
    }
  };

  return (
    <div className="list">
    <div className="priority-icon">
      {sortBy === 'priority' && renderPriorityIcon(cards[0].priority)} <p> </p> &nbsp;
      {sortBy === 'priority' ?  renderPriorityTitle(cards[0].priority): title}
    </div>
    
    {cards.map((card, index) => (
      <div key={index} className="card">
        <div className="card-header">
          <div className="card-id">{card.id}</div>
          <div className="card-title">{card.title}</div>
        </div>
        <div className="card-footer">
          <div className="card-priority"> {sortBy === 'priority' ? '': renderPriorityIcon(cards[0].priority)}</div>
          <div className="card-tag"><Fr /> <p> </p>{card.tag}</div>
        </div>
      </div>
    ))}
  </div>
  );
}
  
  export default list;
