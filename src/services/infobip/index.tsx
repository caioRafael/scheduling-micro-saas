import axios from 'axios'

const INFOBIP_BASE_URL = 'https://8gw8n1.api.infobip.com'
const API_INFOBIP_KEY =
  '5cdfc27680ba61a5f2d961e52992ca87-b0db8cbb-4b88-4d18-9408-354e93e4d55d'

export const infobipBaseApi = axios.create({
  baseURL: INFOBIP_BASE_URL,
  headers: {
    Authorization: `App ${API_INFOBIP_KEY}`,
    'Content-type': 'application/json',
    Accept: 'application/json',
  },
})
