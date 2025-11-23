import React from "react";

function Article({ title, date = "January 1, 1970", preview, minutesToRead }) {

  // Bonus Feature: Minutes to Read
  let timeDisplay = "";
  if (minutesToRead < 30) {
    const cups = Math.ceil(minutesToRead / 5);
    timeDisplay = "☕️".repeat(cups) + ` ${minutesToRead} min read`;
  } else {
    const bentos = Math.ceil(minutesToRead / 10);
    timeDisplay = "🍱".repeat(bentos) + ` ${minutesToRead} min read`;
  }

  return (
    <article>
      <h3>{title}</h3>
      <small>{date}</small>
      <p>{preview}</p>
      {minutesToRead && <p>{timeDisplay}</p>}
    </article>
  );
}

export default Article;
