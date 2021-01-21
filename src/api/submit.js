import axios from 'axios/index';
import { feedback_url } from '../config/env';

const getHeaders = async () => {
    return {
        headers: {
          "Accept": "*/*",
          "Content-Type": "text/plain",
          'Access-Control-Allow-Origin': '*'
        },
    };
}

const post = async (body) => {
    const headers = await getHeaders();
    try {
      const response = await axios.post(feedback_url, {httpMethod: 'POST', body: body}, headers);
      return response;
    } catch (error) {
      throw error;
    }
};

export default { post };
