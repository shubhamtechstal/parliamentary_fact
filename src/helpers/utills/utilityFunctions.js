export const getDateInMonthNameFormate = (dateStr) => {
  // Regular expression to match valid date formats (YYYY-MM-DD)
  const datePattern = /^\d{4}-\d{2}-\d{2}$/;

  // Check if input matches the correct date format
  if (!datePattern.test(dateStr)) {
    return dateStr; // Return original string if it's not a valid date format
  }

  const dateObj = new Date(dateStr);

  // Validate if the date object is correctly created
  if (isNaN(dateObj.getTime())) {
    return dateStr; // Return original string if Date conversion fails
  }

  return dateObj.toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });
};
export const extractPercentage = (value = '') => {
  const [a, b] = value?.split('.');
  return {
    a: a + '.', // Integer part
    b: b ? b : '0%', // Decimal part with "%"
  };
};
