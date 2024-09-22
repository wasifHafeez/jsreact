export type UserCompany = {
  name: string;
  catchPhrase: string;
  bs: string;
};
export type UserAddressGeo = {
  lat: string;
  lng: string;
};
export type UserAddress = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: UserAddressGeo;
};
export type User = {
  id: string;
  name: string;
  username: string;
  email: string;
  address: UserAddress;
  phone: string;
  website: string;
  company: UserCompany;
};
