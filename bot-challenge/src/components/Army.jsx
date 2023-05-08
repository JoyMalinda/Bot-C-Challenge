import React from 'react';
import Bot from './Bots';
const YourBotArmy = ({ army, onRelease }) => {
  const handleDelete = (bot) => {
    onRelease(bot);
  };
  return (
    <div>
      <h1>Bot Army</h1>
      {army.map((bot) => (
        <div key={bot.id} className="bot-card">
          <Bot bot={bot} onClick={handleDelete} />
          <button onClick={() => handleDelete(bot)}>Remove from your army</button>
        </div>
      ))}
    </div>
  );
};
export default YourBotArmy;
