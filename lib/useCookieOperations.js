import { useCookies } from 'react-cookie';

const useCookieOperations = (key) => {
    const [cookies, setCookie, removeCookie] = useCookies([key]);

    const getCookieValue = () => cookies[key] || null;

    const setCookieValue = (value, options) => {
        setCookie(key, value, options);
    };

    const removeCookieValue = () => {
        removeCookie(key);
    };

    return { getCookieValue, setCookieValue, removeCookieValue };
};

export default useCookieOperations;