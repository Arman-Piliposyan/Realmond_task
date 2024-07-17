export type UserDataType = {
  address: {
    geolocation: {
      long: string;
      lat: string;
    };
    zipcode: string;
    street: string;
    number: number;
    city: string;
  };
  name: {
    firstname: string;
    lastname: string;
  };
  password: string;
  username: string;
  email: string;
  phone: string;
  id: number;
};
