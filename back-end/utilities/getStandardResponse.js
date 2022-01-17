const getStandardResponse = (status, message, data) => {
  let count = data ? data.length : 0;
  return {
    status: status,
    message: message,
    count: count,
    results: data,
  };
};

module.exports = getStandardResponse;
