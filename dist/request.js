import axios from 'axios';

const BASE_URL = 'https://api.baselinker.com/connector.php';

export const getParams = (request) => request.params;

export const sendRequest = async (req) => {
    const data = new FormData();
    data.append('method', req.method);
    if (req.params) data.append('parameters', JSON.stringify(req.params));

    const configs = {
        headers: {
            'X-BLToken': req.token,
            'Content-Type' : 'text/plain'
        }
    }

    const response = await axios.post(BASE_URL, data, configs).then(response => response.data)
    
    return response;
}