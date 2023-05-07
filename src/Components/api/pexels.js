import axios from 'axios';

// const pexelsApiKey = 'bbM525Zuo7pkfVr0dbYI6ZIhvcCFeO3EyTjU4mfY3vhdIwVm7F5YZ69U';
// const unsplashApiKey = 'CCBatAHe3t0g3VPAqkr-Ghaim6ZxZ2H6PP58UQsIIik'

const Pexels = async () => {
  const response = await axios.get('https://api.pexels.com/v1/search', {
    headers: {
      Authorization: 'bbM525Zuo7pkfVr0dbYI6ZIhvcCFeO3EyTjU4mfY3vhdIwVm7F5YZ69U',
    },
    params: {
      per_page: 30,
      query: 'planting',
    },
  });

  return response.data.photos;
};

export default Pexels;
