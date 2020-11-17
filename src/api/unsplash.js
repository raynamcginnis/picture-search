import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization:
          "Client-ID cCQGoDX_aZYNUXZ6qJSWbyaGgKr18aNM1_M66WeN620",
      }
})

