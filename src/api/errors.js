export const handleError = error => {
  let message;
  const defaultMessage = 'Something went wrong, try again please.';
  if (error.response) {
    if (error.response.status === 403)
      message = 'You do not have the required permission';
    else if (error.response.status >= 500 && error.response.status < 600) {
      message = defaultMessage;
    } else {
      message =
        error.response.data.error ||
        error.response.data.message ||
        error.response.data.Message ||
        defaultMessage;
    }
  } else if (error.request) {
    message = error.message;
  } else {
    message = error.message;
  }
  return message;
};
