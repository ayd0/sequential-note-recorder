import { signal } from "@preact/signals";

const createRequestCache = () => {
    // request format should have .try(initial) and .resolve(response) functions to handle fetch requests and state input respectively
    const requestCache = [];
    const networkEncounteredError = signal(false);
    const networkStatusError = signal("");

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
            networkEncounteredError.value = false;
            networkStatusError.value = "Network Error Resolved!"
            setTimeout(() => networkStatusError.value = "", 2000)
            console.log("Request Cache Empty");
        } else {
           setTimeout(() => iterateRequestCache(), 2000);
        }
    };

    const cacheRequest = (request) => {
        requestCache.push(request);
        if (!iterating) {
            iterating = true;
            networkEncounteredError.value = true;
            networkStatusError.value = "Network Error: Attempting to resolve..."
            iterateRequestCache();
        }
    };

    return { cacheRequest, networkEncounteredError, networkStatusError };
};

export default createRequestCache;
