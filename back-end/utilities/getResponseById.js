const getResponseById = (message, data, id) => {
  result = data.filter((elem) => elem._id === id);
  exist = result.length > 0 ? true : false;
  message = result.length > 0 ? message : "Erreur ! Contenu introuvable";
  return {
    status: exist,
    message: message,
    count: result.length,
    data: result,
  };
};

module.exports = getResponseById;
