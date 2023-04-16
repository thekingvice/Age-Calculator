import { useState } from "react";
import "./App.css";

function App() {
  const [dobDay, setdobDay] = useState("");

  const [dobMonth, setdobMonth] = useState("");

  const [dobYear, setdobYear] = useState("");

  let dob = new Date(`${dobYear}-${dobMonth}- ${dobDay}`);

  const [days, setDays] = useState("--");

  const [months, setMonths] = useState("--");

  const [years, setYears] = useState("--");

  const [plural, setPlural] = useState({ day: "s", month: "s", year: "s" });

  const handledobDay = (event) => {
    setdobDay(String(event.target.value));
  };

  const handledobMonth = (event) => {
    setdobMonth(String(event.target.value));
  };

  const handledobYear = (event) => {
    setdobYear(String(event.target.value));
  };

  //Handle Plural
  const handlePlural = (days, months, years) => {
    let newObject = { ...plural };

    newObject.day = days === 1 ? "" : "s";

    newObject.month = months === 1 ? "" : "s";

    newObject.year = years === 1 ? "" : "s";

    setPlural(newObject);
  };

  //Calculate Age
  const calculateAge = () => {
    // event.preventDefault();

    const dobDateYear = dob.getYear();

    const dobDateMonth = dob.getMonth();

    const dobDateDay = dob.getDate();

    const nowDate = new Date();

    const nowDateYear = nowDate.getYear();

    const nowDateMonth = nowDate.getMonth();

    const nowDateDay = nowDate.getDate();
    //Age in years
    let yearsAge = nowDateYear - dobDateYear;
    // Age in months
    let monthsAge = 0;

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
  };

  //Handle Validation !Must recieve string data!
  function validateDate(Day, Month, Year) {
    const currentDate = new Date();
    const inputDate = new Date(Year, Month - 1, Day);

    // Check if the input date is not in the future
    if (inputDate > currentDate) {
      return false;
    }

    // Check if the input day existed in the input month and year
    if (inputDate.getDate() !== parseInt(Day)) {
      return false;
    }

    return true;
  }

  //Handle Submit
  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateDate(dobDay, dobMonth, dobYear) === true) {
      calculateAge();
    } else {
      console.log("error");
    }
  };

  return (
    <div className="App">
      <form action="">
        <input
          type="number"
          name="days"
          placeholder="days"
          value={dobDay}
          onChange={handledobDay}
        />
        <input
          type="number"
          name="months"
          placeholder="months"
          value={dobMonth}
          onChange={handledobMonth}
        />
        <input
          type="number"
          name="years"
          placeholder="years"
          value={dobYear}
          onChange={handledobYear}
        />
        <input type="submit" value="" onClick={handleSubmit} />
      </form>
      <div>
        {years} Year{plural.year}, {months} Month{plural.month} {days} Day
        {plural.day}
      </div>
    </div>
  );
}

export default App;
