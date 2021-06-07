import https from 'https';

export default function ({$axios}, inject) {

  $axios.defaults.httpsAgent = new https.Agent({rejectUnauthorized: false}); //todo: remove for prod


  // Create a custom axios instance
  const api = $axios.create({
    headers: {}
  })

  // Set baseURL to something different
  api.setBaseURL('https://localhost:5001/api/v1/')

  // Inject to context as $api
  inject('api', api)
}
