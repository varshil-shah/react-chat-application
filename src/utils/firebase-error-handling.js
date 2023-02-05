const getFirebaseError = (errorCode) => {
  let message;

  switch (errorCode) {
    case "auth/email-already-in-use":
      message = "Email already exists!!";
      break;
    case "auth/user-not-found":
    case "auth/wrong-password":
      message = "Invalid email or password!!";
      break;
    case "auth/id-token-expired":
      message = "Id token has been expired!!";
      break;
    case "auth/insufficient-permission":
      message = "Insufficient permission";
      break;
    default:
      message = "Something went wrong at server side!!";
  }

  return message;
};

export default getFirebaseError;
