
// const dotenv=require('dotenv');
// dotenv.config(('./Configurations/config.env'));
// const axios = require('axios');

// // Function to convert latitude and longitude to address using Geoapify
// getReverseGeocodingData=async(latitude, longitude)=>{
//     // const start=performance.now();
// //   let resultAddress;
//   const apiKey = '4aea94476af4423991ccccfb5f5c7ee3'; // Replace with your Geoapify API key
//   const url = `https://api.geoapify.com/v1/geocode/reverse?lat=${latitude}&lon=${longitude}&apiKey=${apiKey}`;

//   try {
//     const response = await axios.get(url);
//     if (response.data.features && response.data.features.length > 0) {
//       // Assuming the first feature is the most relevant
//     //   const end=performance.now();
//     //   console.log("Total Execution time: ", end-start);
//       return response.data.features[0].properties.formatted;
//     }
//     return 'Address not found';
//   } catch (error) {
//     console.error(error);
//     return 'Error fetching address';
//   }
// }


// module.exports={
//     getReverseGeocodingData
// };
// // // Example usage
// // const latitude = 12.9564672; // Replace with actual latitude
// // const longitude = 77.6404992; // Replace with actual longitude

// // getReverseGeocodingData(latitude, longitude)
// //   .then(address => console.log(address))
// //   .catch(error => console.error(error));


const axios = require('axios');

// Function to convert latitude and longitude to address using OpenStreetMap's Nominatim
const getReverseGeocodingData = async (latitude, longitude) => {
  // Replace 'userAgent' with a valid email or application identifier
//   console.log("ENV" ,process.env.OPENSTREEMAP);
  const userAgent = 'ankushraj886@gmail.com';
  const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`;

  try {
    const response = await axios.get(url, {
      headers: {
        'User-Agent': userAgent
      }
    });
    if (response.data && response.data.address) {
      // Assuming the address is the most relevant
      return response.data.display_name;
    }
    return 'Address not found';
  } catch (error) {
    console.error(error);
    return 'Error fetching address';
  }
};

module.exports = {
  getReverseGeocodingData
};

// Example usage
// const latitude = 12.9564672; // Replace with actual latitude
// const longitude = 77.6404992; // Replace with actual longitude
// const latitude=38.897675;
// const longitude=-77.036530;
// console.log(getReverseGeocodingData(latitude, longitude));
//   .then(address => console.log(address))
//   .catch(error => console.error(error));
