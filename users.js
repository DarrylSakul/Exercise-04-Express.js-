const axios = require('axios');
<<<<<<< HEAD

=======
>>>>>>> fd6b395a78063f20e83873e78070901bad610213
async function getUsers() {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
}

module.exports = getUsers;