import axios from "axios";

axios.defaults.baseURL = "https://440f7ee6-312d-4bf3-863a-97729aa67621.mock.pstmn.io";
axios.defaults.headers.common["Accept-Language"] = "en";

export const POST = (endpoint, params = {}, body = {}, config = {}) => {
  return new Promise(async (resolve, reject) => {
    try {
      const { data } = await axios.post(endpoint, body, {
        params,
        ...config,
      });
      resolve(data);
      //console.log('data', data)
    } catch (err) {
      console.log(err)
      reject(err?.response?.data || err);
    }
  });
};

export const GET = (endpoint, params = {}, config = {}) => {
  return new Promise(async (resolve, reject) => {
    try {
      const { data } = await axios.get(endpoint, { params, ...config });
      resolve(data);
      console.log('getdata', data)
    } catch (err) {
      console.log('geterror', err)
      reject(err?.response?.data || err);
    }
  });
};

export const DELETE = (endpoint, params = {}, config = {}) => {
    return new Promise(async (resolve, reject) => {
      try {
  
        const { data } = await axios.delete(endpoint, { params, ...config });
        resolve(data);
      } catch (err) {
        reject(err?.response?.data || err);
      }
    });
  };

  export const PUT = (endpoint, params = {}, body = {}, config = {}) => {
    return new Promise(async (resolve, reject) => {
      try {
        const { data } = await axios.put(endpoint, body, {
          params,
          ...config,
        });
        resolve(data);
      } catch (err) {
        reject(err?.response?.data || err);
      }
    });
  };
  
