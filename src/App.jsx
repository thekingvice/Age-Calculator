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

    //Check if input month is greater that 12
    if (Month > 12) {
      return false;
    }

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
      <form className="App__form" action="">
        <div className="App__input-outer-wrapper">
          <div className="App__input-wrapper">
            <label className="App__label" htmlFor="days">
              DAY
            </label>
            <input
              className="App__input"
              maxLength="2"
              type="text"
              name="days"
              placeholder="DD"
              value={dobDay}
              onChange={handledobDay}
            />
          </div>
          <div className="App__input-wrapper">
            <label className="App__label" htmlFor="months">
              MONTH
            </label>
            <input
              className="App__input"
              maxLength="2"
              type="text"
              name="months"
              placeholder="MM"
              value={dobMonth}
              onChange={handledobMonth}
            />
          </div>
          <div className="App__input-wrapper">
            <label className="App__label" htmlFor="years">
              YEAR
            </label>
            <input
              className="App__input"
              maxLength="4"
              type="text"
              name="years"
              placeholder="YY"
              value={dobYear}
              onChange={handledobYear}
            />
          </div>
        </div>
        <span className="App__error">Must be a valid date</span>
        <div className="App__submit-wrapper">
          <div className="App__divider"></div>
          <button className="App__submit" type="submit" onClick={handleSubmit}>
            <img
              className="App__submit-arrow"
              src="/icon-arrow.svg"
              alt="submit"
            />
          </button>
        </div>
      </form>
      <div className="App__output-wrapper">
        <span>
          <span className="App__output-num">{years}</span>
          year{plural.year}
        </span>
        <span>
          <span className="App__output-num">{months}</span>
          month{plural.month}
        </span>
        <span>
          <span className="App__output-num">{days}</span>
          day{plural.day}
        </span>
      </div>
    </div>
  );
}

export default App;
