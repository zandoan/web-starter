import moment from 'moment';

export const shortenText = (text, maxVisible) => {
  if(text.length <= maxVisible) {
    return text;
  }

  return text.substr(0, maxVisible) + '...';
};

export const closeTimeParser = hours => {
  if (!hours) {
      return;
  }
  const hArray = hours.split(' ');
  const day = new RegExp(`^${moment().format('ddd')}`, 'i');
  const today = hArray.find(item => day.test(item)) || '';
  if (today.length > 0) {
      const hourStr = today.slice(today.length - 4, today.length - 2);
      const minStr = today.slice(today.length - 2, today.length);
      let hour;
      let ampm;
      if(parseInt(hourStr) < 12) {
          hour = hourStr === '00' ? '12' : hourStr;
          ampm = 'am';
      } else {
          hour = hourStr === '12' ? '12' : `${parseInt(hourStr) - 12}`;
          ampm = 'pm';
      }
      return `${hour}:${minStr}${ampm}`;
  }
  return 'Closed today';
};
