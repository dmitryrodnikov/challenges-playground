function parallelRequests(urls, limit) {
    return new Promise(resolve => {
        const urlsDict = urls.reduce((acc, item, index) => {
            acc[item] = acc[item] ? acc[item].concat(index) : [index];
            return acc;
        }, {});
        const filteredUrls = Object.keys(urlsDict);
        const result = [];
        let lastFetchedIndex = 0;
        
        function makeRequest(from, amount) {
            if (from >= filteredUrls.length || amount === 0) {
                resolve(result);
                return;
            }
            
            for (let i = from; i < from + amount; i++) {
                const url = filteredUrls[i];
                lastFetchedIndex = from + amount;
                
                fetch(url).then(response => {
                    urlsDict[url].forEach(item => {
                        result[item] = response;
                    });
                    makeRequest(lastFetchedIndex, 1);
                });
            }
        }
        
        makeRequest(0, limit > filteredUrls.length ? filteredUrls.length : limit);
    });
}
