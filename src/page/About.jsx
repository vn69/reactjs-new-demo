import { useState } from 'react';

export default function About() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    console.log(count)
    setCount(count + 1);
  }

  return (
    <button onClick={handleClick}>
      You pressed me {count} times
    </button>
  );
}