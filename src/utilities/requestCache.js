import { signal } from "@preact/signals";

const createRequestCache = () => {
    // request format should have .try(initial) and .resolve(response) functions to handle fetch requests and state input respectively
    const requestCache = [];
    const networkStatusError = signal();
    let iterating = false;
    const intervalLength = 50;

    const iterateRequestCache = () => {
        let requestInterval = 0;
        for (const request of requestCache) {
            setTimeout(() => {
                request.try(false).then((response) => {
                    if (response.status === 200 || response.status === 204) {
                        request.resolve(response);
                        requestCache.splice(requestCache.indexOf(request), 1);
                    }
                });
            }, requestInterval += intervalLength);
        }

        if (requestCache.length === 0) {
            iterating = false;
            console.log("Request Cache Empty");
        } else {
           setTimeout(() => iterateRequestCache(), 2000);
        }
    };

    const cacheRequest = (request) => {
        requestCache.push(request);
        if (!iterating) {
            iterating = true;
            iterateRequestCache();
        }
    };

    return { cacheRequest, networkStatusError };
};

export default createRequestCache;
