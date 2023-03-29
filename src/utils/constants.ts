export const { REACT_APP_API_URL: BASE_URL_API_RITM = 'https://ritm.studio/api/callback' } =
  process.env;
export const BASE_URL_TEST = 'https://api.publicapis.org/entries';
export const PATTERN_EMAIL: string =
  '^(?=.{1,64}@)[A-Za-z0-9_-]+(\\.[A-Za-z0-9_-]+)*@' +
  '[^-][A-Za-z0-9-]+(\\.[A-Za-z0-9-]+)*(\\.[A-Za-z]{2,})$';

export const DESKTOP_WIDTH = 1440;
export const MOBILE_WIDTH = 320;
export const PAD_WIDTH = 768;
export const PAD_WIDTH_WITHOUT = PAD_WIDTH - 1;
export const KEYBOARD_KEYS = { ESCAPE: 'Escape' };
export const MESSAGE_SUCCESS = {
  title: 'Спасибо!',
  message: 'Ваша заявка принята. Мы свяжемся с вами в ближайшее время.'
};

export const MESSAGE_ERROR = {
  title: 'Oшибка!',
  message:
    'К сожалению Ваша заявка не отправлена. Пожалуйста, проверьте поля формы отбратной связи и попробуйте позже.'
};

export const SPACE_KEY = ' ';
export const ENTER_KEY = 'Enter';
