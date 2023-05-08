import React from 'react';

const Bot = ({ bot, onClick, onDelete, isEnlisted, className }) => {
  const handleEnlist = (bot) => {
    onClick(bot);
  };
   const handleDelete = (bot) => {
     onDelete(bot);
   };
  return (
    <div className={`bot-card ${className}`} onClick={() => handleEnlist(bot)}>
      <h3><label>Name: </label>{bot.name}</h3>
      <p><label>Class: </label>{bot.bot_class}</p>
      <p><label>Catchphrase: </label>{bot.catchphrase}</p>
      <p>  {bot.health}</p>
      <p> {bot.damage}</p>
      <p> {bot.armor}</p>
      <img
        src={bot.avatar_url}
        alt={bot.name}
      />
      {isEnlisted ? (
        <button onClick={() => handleDelete(bot)}>Release</button>
      ) : (
        <button onClick={() => handleEnlist(bot)}>Enlist</button>
      )}
      {onDelete && <button onClick={() => handleDelete(bot)}>x</button>}
    </div>
  );
};
export default Bot;