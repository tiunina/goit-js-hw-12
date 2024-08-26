import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';

export const fetchPhotos = (searchedQuery, page) => {
  const axiosOptions = {
    params: {
      key: "45491885-d594c4380fd68d18bb383d8af",
      q:searchedQuery,
      image_type: 'photo',
      orientation: "horizontal",
      per_page: 15,
      page: page,
      safesearch: true,
    },
  };
  return axios.get(``, axiosOptions);
}


//   const urlParams = new URLSearchParams({
//     key: "45491885-d594c4380fd68d18bb383d8af",
//     q:searchedQuery,
//     image_type: 'photo',
//     orientation: "horizontal",
//     safesearch: true,
//   });

//   return fetch(`${BASE_URL}?${urlParams}`).then(response => {
//     if (!response.ok){
//       throw new Error(response.status);
//     }
//     return response.json()
//   })
// }