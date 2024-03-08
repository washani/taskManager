import { GET, POST, PUT } from ".";

export const userLogin = (SignInuserInfo) => {
    const endpoint = ``;
    const body = SignInuserInfo

    return POST(endpoint, {}, body);
};

export const userRegister = (userInfo) => {
  const endpoint = `/signup`;
  const body = userInfo;

  return POST(endpoint, {}, body);
}

export const userPersonalTaskInfo = () => {
  const endpoint = `/categories?token=eVIQ64i6PW6FO7Y46TVlyf48&category=personal`;
  return GET(endpoint, {});
}

