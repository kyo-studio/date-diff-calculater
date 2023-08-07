function calculateDifference() {
  const startDateInput = document.getElementById('startDate');
  const endDateInput = document.getElementById('endDate');
  const resultElement = document.getElementById('result');

  const startDate = new Date(startDateInput.value);
  const endDate = new Date(endDateInput.value);

  if (startDate && endDate && startDate <= endDate) {
    const difference = calculateDateDifference(startDate, endDate);
    const resultText = `${difference.years} years, ${difference.months} months, and ${difference.days} days.`;
    resultElement.textContent = resultText;
  } else {
    resultElement.textContent = 'Please enter valid dates.';
  }
}

function calculateDateDifference(start, end) {
  let years = end.getFullYear() - start.getFullYear();
  let months = end.getMonth() - start.getMonth();
  let days = end.getDate() - start.getDate();

  // Correct for negative months and days
  if (days < 0) {
    months--;
    const lastMonthEndDate = new Date(end.getFullYear(), end.getMonth(), 0).getDate();
    days += lastMonthEndDate;
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  return { years, months, days };
}
