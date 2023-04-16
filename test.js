// const dob = new Date(`2001-04-${15 + 1}`);

// function calculateAge() {
//   const dobDateYear = dob.getYear();
//   const dobDateMonth = dob.getMonth();
//   const dobDateDay = dob.getDate();

//   // Current Date - Year, Month, Day
//   const nowDate = new Date();
//   const nowDateYear = nowDate.getYear();
//   const nowDateMonth = nowDate.getMonth();
//   const nowDateDay = nowDate.getDate();

//   // Age in years
//   let yearsAge = nowDateYear - dobDateYear;
//   let monthsAge = 0;

//   // Age in months
//   if (nowDateMonth >= dobDateMonth)
//     // Get months when current month is greater
//     monthsAge = nowDateMonth - dobDateMonth;
//   else {
//     yearsAge--;
//     monthsAge = 12 + nowDateMonth - dobDateMonth;
//   }

//   // Age in days
//   let daysAge = 0;
//   if (nowDateDay >= dobDateDay)
//     // Get days when the current date is greater
//     daysAge = nowDateDay - dobDateDay;
//   else {
//     monthsAge--;
//     daysAge = 31 + nowDateDay - dobDateDay;

//     if (monthsAge < 0) {
//       monthsAge = 11;
//       yearsAge--;
//     }
//   }
//   console.log(yearsAge);
//   console.log(monthsAge);
//   console.log(daysAge);
// }

// calculateAge();

const day = 1;
const month = 1;
const year = 2001;
