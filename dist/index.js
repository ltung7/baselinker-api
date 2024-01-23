import { sendRequest, getParams } from "./request.js";
const requests = {
    exec: sendRequest,
    getParams,
}

/**
 * Initializes the Baselinker API client.
 *
 * @param {string} token - The API key for authentication.
 * @returns {import('./gates.def.js').Gateways} Gateways Baselinker connector - pick gate
 */
const baselinker = (token) => {
    const element = { token, params: {} };
    return new Proxy(element, methodProxy);
}

const methodProxy = {
    get: (object, property) => {
        object.method = property;
        return new Proxy(object, paramsProxy);
    }
}

const paramsProxy = {
    get: (object, property) => {
        return (value) => {
            if (requests[property]) {
                return requests[property](object, value);
            }
            else object.params[property] = value;
            return new Proxy(object, paramsProxy);
        }
    }
}

export default baselinker;

