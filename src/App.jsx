import { useState } from "react";
import "./App.css";

function App() {
  const [days, setDays] = useState("--");

  const [months, setMonths] = useState("--");

  const [years, setYears] = useState("--");

  const [dobDays, setDobDays] = useState("");

  const [dobMonths, setDobMonths] = useState("");

  const [dobYears, setDobYears] = useState("");

  const [plural, setPlural] = useState({ day: "s", month: "s", year: "s" });

  let dob = new Date(`${dobYears}-${dobMonths}- ${dobDays}`);

  const handleDobDays = (event) => {
    setDobDays(event.target.value);
  };

  const handleDobMonths = (event) => {
    setDobMonths(event.target.value);
  };

  const handleDobYears = (event) => {
    setDobYears(event.target.value);
  };

  const handlePlural = (days, months, years) => {
    let newObject = { ...plural };

    newObject.day = days === 1 ? "" : "s";

    newObject.month = months === 1 ? "" : "s";

    newObject.year = years === 1 ? "" : "s";

    setPlural(newObject);
  };

  function calculateAge(event) {
    event.preventDefault();

    const dobDateYear = dob.getYear();

    const dobDateMonth = dob.getMonth();

    const dobDateDay = dob.getDate();

    const nowDate = new Date();

    const nowDateYear = nowDate.getYear();

    const nowDateMonth = nowDate.getMonth();

    const nowDateDay = nowDate.getDate();

    let yearsAge = nowDateYear - dobDateYear;

    let monthsAge = 0;

    // Age in months
    if (nowDateMonth >= dobDateMonth) monthsAge = nowDateMonth - dobDateMonth;
    else {
      yearsAge--;
      monthsAge = 12 + nowDateMonth - dobDateMonth;
    }

    // Age in days
    let daysAge = 0;
    if (nowDateDay >= dobDateDay) daysAge = nowDateDay - dobDateDay;
    else {
      monthsAge--;
      daysAge = 31 + nowDateDay - dobDateDay;

      if (monthsAge < 0) {
        monthsAge = 11;
        yearsAge--;
      }
    }
    console.log(yearsAge);
    console.log(monthsAge);
    console.log(daysAge);

    setDays(daysAge);
    setMonths(monthsAge);
    setYears(yearsAge);
    handlePlural(daysAge, monthsAge, yearsAge);
  }

  return (
    <div className="App">
      <form action="">
        <input
          type="number"
          name=""
          placeholder="days"
          value={dobDays}
          onChange={handleDobDays}
        />
        <input
          type="number"
          name=""
          placeholder="months"
          value={dobMonths}
          onChange={handleDobMonths}
        />
        <input
          type="number"
          name=""
          placeholder="years"
          value={dobYears}
          onChange={handleDobYears}
        />
        <input type="submit" value="" onClick={calculateAge} />
      </form>
      <div>
        {years}year{plural.year}, {months}month{plural.month} {days}day
        {plural.day}
      </div>
    </div>
  );
}

export default App;
