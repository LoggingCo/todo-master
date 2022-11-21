export const FailureData = (messaga) => {
  return {
    message: false,
    error: messaga,
  };
};

export const SuccessData = (data) => {
  if (data) {
    return {
      message: true,
      data: data,
    };
  } else {
    return {
      message: true,
    };
  }
};
