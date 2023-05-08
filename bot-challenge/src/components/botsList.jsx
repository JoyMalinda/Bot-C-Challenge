import React, { useState, useEffect } from 'react';
import Bot from './Bots';
const BotCollection = ({ army, setArmy }) => {
  const [bots, setBots] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3000/bots')
      .then(response => response.json())
      .then(data => setBots(data))
      .catch(error => console.log(error));
  }, []);
  const handleEnlist = bot => {
    if (!army.some(b => b.id === bot.id)) {
      setArmy([...army, bot]);
    } else {
      setArmy(army.filter(b => b.id !== bot.id));
    }
  };
  return (
    <div className="bot-collection">
      <h1>Bot collection</h1>
      {bots.map(bot => (
        <div key={bot.id} className="bot-card">
 <Bot bot={bot} onClick={handleEnlist}  setArmy={setArmy} />
        </div>
      ))}
    </div>
  );
};
export default BotCollection;