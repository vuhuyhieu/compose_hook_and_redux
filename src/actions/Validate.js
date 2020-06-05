const WEEK_PASSWORD_LIST = [
  '123456',
  '654321',
  '1234567',
  '7654321',
  '12345678',
  '87654321',
  '123456789',
  '987654321',
];

export function detectEmailAndPhoneNumber(input) {
  let regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  let regexPhoneNumber = /^[+]*[(]?[0-9]{1,4}[)]?[-\s\./0-9]*$/;
  if (regexEmail.test(String(input).toLowerCase())) {
    return 'email';
  } else if (
    regexPhoneNumber.test(input) &&
    input.length >= 9 &&
    input.length <= 15
  ) {
    return 'phone-number';
  } else {
    return null;
  }
}

export const isWeekPassword = password => {
  if (password) {
    return WEEK_PASSWORD_LIST.includes(password) || password.length <= 6;
  }
};
