const getCurrentTime = () => {
  const date = new Date();
  const [year, month, day] = [date.getFullYear(), date.getMonth(), date.getDay()];
  const [hour, minutes, seconds] = [date.getHours(), date.getMinutes(), date.getSeconds()];
  return {
    year, month, day, hour, minutes, seconds,
  };
};
export default getCurrentTime;
