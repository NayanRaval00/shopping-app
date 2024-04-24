import { getSession, signOut } from 'next-auth/react';
let session = null;  // Store the session globally or in a closure
let refreshingToken = false;  // Flag to prevent concurrent token refresh attempts

async function refreshSession() {
    if (!refreshingToken) {
        refreshingToken = true;
        try {
            // Fetch a new session only if no session exists or if the current session is about to expire
            session = await getSession();
        } finally {
            refreshingToken = false;
        }
    }
}

async function request(url, options) {
    if (!session || (session.expiresAt && new Date() > new Date(session.expiresAt))) {
        // If no session exists or it's expired, refresh the session
        await refreshSession();
    }
    if (!options) {
        options = {};
    }

    options.headers = {
        ...options.headers,
        'Access-Control-Allow-Origin': '*',
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    };
    if(session?.user?.token){
        options.headers['Authorization'] = `Bearer ${session?.user?.token}`;
    }
    const response = await fetch(process.env.NEXT_PUBLIC_API_URL + url, options);
    if (response.ok) {
        const data = await response.json();
        return data;
    } else {
        const errorData = await response.json();
        return Promise.reject(errorData);
    }
}

export default {
    get(url, options) {
        return request(url, { ...options, method: 'GET' });
    },
    post(url, data, options) {
        return request(url, { ...options, method: 'POST', redirect: 'manual', body: JSON.stringify(data) });
    },
    put(url, data, options) {
        return request(url, { ...options, method: 'PUT', body: JSON.stringify(data) });
    },
    patch(url, data, options) {
        return request(url, { ...options, method: 'PATCH', body: JSON.stringify(data) });
    },
    delete(url, data, options) {
        return request(url, { ...options, method: 'DELETE', body: JSON.stringify(data) });
    },
};