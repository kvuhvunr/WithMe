const BASE_URL = 'http://10.58.7.79:8000';

const API = {
  Login: `${BASE_URL}/users/signin`,
  Mypage: `${BASE_URL}/users/mypage`,
  Point: `${BASE_URL}/users/mypage/point`,
  Review: `${BASE_URL}/users/mypage/review`,
  Productlist: `${BASE_URL}/places/place`,
  Product: `${BASE_URL}/places/placeinformation`,
  Placehost: `${BASE_URL}/places/placehostinformation`,
  Placereview: `${BASE_URL}/places/placereviewlist`,
  Placereservation: `${BASE_URL}/places/placereservation`,
};

export default API;
