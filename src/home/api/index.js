
import fetch from '../../utils/FetchAuth';
import {GetAPIRoutes} from  '../../utils/APIUtils';
const { REACT_APP_BASE_SERVICE_URL, REACT_APP_API_ROUTES } = process.env;
const SERVICEAPI = GetAPIRoutes(REACT_APP_API_ROUTES);

export const getGenres = (payload) => {
  // fetch(`../../mock-data/genres.json`, {
  //     method: "GET",
  // }).then (response => response.json()).then(json => {
  //   console.log('**** data ', json)
  // })
  return fetch(`https://api.myjson.com/bins/1h2gcg`, {
    method: "GET"
  })
}