export const formatDate = (e) => {
  if (e) {
    const day = e.substr(0, 2);
    const month = e.substr(3, 2);
    const year = e.substr(6, 4);
    return year + "-" + month + "-" + day;
  }
};

export const discount = (money, km) => {
  return (money - money * (km / 100)).toLocaleString();
};
