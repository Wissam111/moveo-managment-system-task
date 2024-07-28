const MAX_PHONE_NUMBER = 10;
export const IsValidPhone = (value) => {
  return !(value?.match(/[^0-9]/) || value?.length > MAX_PHONE_NUMBER);
};
