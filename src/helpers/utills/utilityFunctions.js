export const getDateInMonthNameFormate = (dateStr) => {
  const datePattern = /^\d{4}-\d{2}-\d{2}$/;

  if (!datePattern.test(dateStr)) {
    return dateStr;
  }

  const dateObj = new Date(dateStr);

  if (isNaN(dateObj.getTime())) {
    return dateStr;
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

// utils/groupByParty.js
export const groupMpsByParty = (mpsList = []) => {
  return mpsList.reduce((acc, mp) => {
    const party = mp.party_short_name || 'Independent';
    if (!acc[party]) acc[party] = [];
    acc[party].push(mp);
    return acc;
  }, {});
};
export const extractMpList = (mpsList) => {
  return mpsList.map((mp) => ({
    mp_id: mp.mp_id,
    full_name: mp.full_name,
    image: mp.image,
  }));
};