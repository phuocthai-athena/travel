export const formatDate = (e) => {
  if (e) {
    const day = e.substr(0, 2);
    const month = e.substr(3, 2);
    const year = e.substr(6, 4);
    return year + "-" + month + "-" + day;
  }
};

export const formatDateV2 = (e) => {
  if (e) {
    var day = e.substr(8, 2);
    var month = e.substr(5, 2);
    var year = e.substr(0, 4);
    return day + "/" + month + "/" + year;
  }
};

export const discount = (money, km) => {
  return (money - money * (km / 100)).toLocaleString();
};

export const validateEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};
