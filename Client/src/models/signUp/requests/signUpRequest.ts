export interface ISignUpRequest {
  firstName: string;
  lastName: string;
  mobile: string;
  email: string;
  password: string;
  optInItems?: boolean[];
  consentItems?: boolean[];
}
