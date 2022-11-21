export const HandlerError = (err, next) => {
  console.log(err);
  next(err);
};
