const getStandardResponse = (data = null) => {
  let count = data !== null ? data.length : 0;
  let message = data === null ? "Bad request" : "API Results found";
  let status = count > 0;
  return {
    status: status,
    message: message,
    count: count,
    results: data,
  };
};

module.exports = getStandardResponse;
