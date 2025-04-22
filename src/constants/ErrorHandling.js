const ErrorHandling = (error) => {
  switch (error) {
    case 'USER_NOT_FOUND':
      return {
        code: 'USER_NOT_FOUND',
        message: 'usernotfound',
      };
    default:
      return {
        code: error,
        message: 'unknown',
      };
  }
};

export default ErrorHandling;
