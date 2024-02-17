const getDateDiff = (diff: String, date: Date | string) => {
    const today: any = new Date();
    const compareDate: any = new Date(date);
    const diffMs: any = today - compareDate; // milliseconds between now & date
    var diffDays = Math.floor(diffMs / 86400000); // days
    var diffHrs = Math.floor((diffMs % 86400000) / 3600000); // hours
    var diffMins = Math.round(((diffMs % 86400000) % 3600000) / 60000); // min
    if (diff.toLowerCase() === "day") {
      return diffDays;
    } else if (diff.toLowerCase() === "hour") {
      return diffHrs;
    } else if (diff.toLowerCase() === "minute") {
      return diffMins;
    } else {
      return diffMs;
    }
};
  
export default getDateDiff;