function convertTime(duration) {
  const seconds = Math.floor((duration / 1000) % 60) || 0;
  const minutes = Math.floor((duration / (1000 * 60)) % 60) || 0;
  const hours = Math.floor((duration / (1000 * 60 * 60)) % 24) || 0;

  return {
    hours,
    minutes,
    seconds,
  };
}

export default {
  convertTime,
};
