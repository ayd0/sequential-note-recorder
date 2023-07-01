import { signal } from "@preact/signals";

const createRequestCache = () => {
    // request format should have .try() and .resolve() functions to handle fetch requests and state input respectively
    const requestCache = [];
    const networkStatusError = signal();
    let requestInterval;

    const iterateCache = () => {
        for (let i = 0; i < requestCache.length; ++i) {
            setTimeout(() => {
                requestCache[i].try().then((response) => {
                    if (response.status === 200) {
                        requestCache[i].resolve(response);
                        requestCache.splice(i, 1);
                    }
                });
            }, 100);
        }

        if (requestCache.length === 0) {
            clearInterval(requestInterval);
            requestInterval = null;
            networkStatusError.value =
                "Network error resolved, clearing request cache";
        }
    };

    const setRequestInterval = () => setInterval(() => iterateCache(), 5000);

    const cacheRequest = (request) => {
        requestCache.push(request);
        if (!requestInterval) {
            setRequestInterval();
            networkStatusError.value =
                "Network status error, initializing request cache";
        }
    };

    return { cacheRequest, networkStatusError };
};

export default createRequestCache;
