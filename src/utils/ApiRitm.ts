import { BASE_URL_API_RITM, BASE_URL_TEST } from './constants';

interface IForm {
  userName: string;
  userPhone: string;
  userEmail: string;
  userMessage: string;
  policy: boolean;
}

const checkResponse = (res: Response) => {
  if (res.ok) {
    return res.json();
  }

  return res.json().then((err) => {
    err.statusCode = res.status;
    return Promise.reject(err);
  });
};

export const getTest = async () => {
  try {
    const res = await fetch(BASE_URL_TEST);
    const data = await checkResponse(res);
    return data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const sendForm = async ({ userName, userPhone, userEmail, userMessage, policy }: IForm) => {
  try {
    const res = await fetch(`${BASE_URL_API_RITM}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        userName,
        userPhone,
        userEmail,
        userMessage,
        policy: policy
      })
    });
    const data = await checkResponse(res);
    return data;
  } catch (error) {
    return Promise.reject(error);
  }
};