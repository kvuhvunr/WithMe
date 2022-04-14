const BASE_URL = 'http://10.58.0.182:8000';

const API = {
  Login: `${BASE_URL}/users/signin`,
  Aside: `${BASE_URL}/users/userinfo`,
  History: `${BASE_URL}/users/reservation`,
  Point: `${BASE_URL}/users/point`,
  Review: `${BASE_URL}/users/review`,
  Productlist: `${BASE_URL}/places/place`,
  Product: `${BASE_URL}/places/`,
};

export default API;
