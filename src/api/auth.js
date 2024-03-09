import { GET, POST, PUT } from ".";

export const userLogin = (SignInuserInfo) => {
    const endpoint = `/login`;
    const body = SignInuserInfo

    return POST(endpoint, {}, body);
};

export const userRegister = (userInfo) => {
  const endpoint = `/signup`;
  const body = userInfo;

  return POST(endpoint, {}, body);
}

export const userTaskInfo = (category) => {
  const endpoint = `/categories?token=eVIQ64i6PW6FO7Y46TVlyf48&category=`+category;
  return GET(endpoint, {});
}
