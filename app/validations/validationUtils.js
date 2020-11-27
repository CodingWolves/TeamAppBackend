const detailsReducer = (details) => {
  const messageReducer = (text, detail) =>
    text ? ", " + text + detail.message : text + detail.message;
  ;
  return details.reduce(messageReducer, "");
};

module.exports.detailsReducer = detailsReducer;
