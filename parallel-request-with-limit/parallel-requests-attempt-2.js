// todo если 2 одинаковых запроса попали в один диапазон, то они не закэшируются

function parallelRequests(urls, limit) {
    return new Promise(resolve => {
        const cached = {};
        const result = [];
        let lastRequestIndex = 0;
        
        function makeRequest(from, amount) {
            if (from >= urls.length && amount === 0) {
                resolve(result);
                return;
            }

            const end = from + amount;
            lastRequestIndex = end;
            
            for (let i = from; i < end; i++) {
                const url = urls[i];
                
                if (cached[url]) {
                    result[i] = cached[url];
                    makeRequest(lastRequestIndex, 1);
                } else {
                    fetch(url).then(response => {
                        cached[url] = response;
                        result[i] = response;
                        makeRequest(lastRequestIndex, 1); 
                    });
                }
            }
        }
        
        makeRequest(0, limit < urls.length ? limit : urls.length);
    });
}
