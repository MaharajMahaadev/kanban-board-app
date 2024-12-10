import React from 'react';
import './styles.css';
import P0 from '@mui/icons-material/SignalCellularNull';
import P1 from '@mui/icons-material/SignalCellularAlt1Bar';
import P2 from '@mui/icons-material/SignalCellularAlt2BarSharp';
import P3 from '@mui/icons-material/SignalCellularAltOutlined';
import P4 from '@mui/icons-material/PriorityHigh';
import Fr from '@mui/icons-material/Circle';
import Ac from '@mui/icons-material/AccountCircle'
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import EventRepeatIcon from '@mui/icons-material/EventRepeat';
import EventBusyIcon from '@mui/icons-material/EventBusy';


function list({ cards, sortBy, orderBy }) {
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

  const renderStatusIcon = (priority) => {
    switch (priority) {
      case "Todo":
        return <FormatListBulletedIcon  />;
      case "In progress":
        return <EventRepeatIcon />;
      case "Backlog":
        return <EventBusyIcon />;
    }
  };

  return (
    Object.entries(cards).map(([key, value]) => (
        <div className="list">
        <div className="priority-icon">
          {sortBy === 'priority'? <p>{renderPriorityIcon(Number(key))}{renderPriorityTitle(Number(key))}</p>: null} 
          {sortBy === 'user'?<p> <Ac />  {key}</p>: null}
          {sortBy === 'status'?<p> {renderStatusIcon(key)}{key}</p>: null}
        </div>
        
        {value.sort((a, b) => orderBy==='priority'? b[0].priority - a[0].priority: a[0].title.localeCompare(b[0].title)).map((card, index) => (
          <div key={index} className="card">
              <div className='card-top'> 
                <div className="card-id">{card[0].id}</div>
                <div className="card-tag"><Fr /> <p> </p>{card[0].tag}</div>
              </div>
              <div className="card-title">{card[0].title}</div>          
            <div className="card-footer">
              {sortBy === 'user' ? null: <div className="card-priority"><Ac />{card[1]}</div> }
              {sortBy === 'priority' ? null: <div className="card-priority">{renderPriorityIcon(card[0].priority)}</div>}
              {sortBy === 'status' ? null: <div className="card-priority">{renderStatusIcon(card[0].status)}<p>{card[0].status}</p></div> }
            </div>
          </div>
        ))}
      </div>
    ))
  );
}
  
  export default list;
