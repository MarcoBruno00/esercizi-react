import { useState, useEffect, useContext } from "react";
import { LanguageContext } from "./LanguageContext";


export const Clock = () => {
  const [time, setTime] = useState("");
  const language = useContext(LanguageContext)
 

  function currentTime() {
    const time = new Date().toLocaleTimeString();
    return time;
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(currentTime());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <>
      {language === "it" ? <h2>"sono le "</h2> : <h2>"it's time"</h2>}
      <h1>{time}</h1>
    </>
  );
};