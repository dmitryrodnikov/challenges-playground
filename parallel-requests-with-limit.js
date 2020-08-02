/**
 * Напишите функцию, получающую на вход массив ссылок и число,
 * указывающее максимальное количество одновременных запросов.
 *
 * Должен возвращаться массив результатов в той же последовательности,
 * что и адреса запросов
 *
 * Нельзя делать повторные запросы на дублирующиеся адреса,
 * при этом результат всё равно должен присутствовать в результирующем массиве
 **/

function parallelRequests(urls, limit) {
    return new Promise((resolve) => {
        const responses = {};

        function makeRequest(from, amount) {
            if (from >= urls.length) {
                const result = Object.values(responses).reduce((acc, arr) => {
                    arr.forEach(item => {
                        acc[item.index] = item.response
                    });
                    return acc;
                }, []);
                resolve(result);
                return;
            }

            const currentUrls = urls.slice(from, from + amount);

            currentUrls.forEach((url, index) => {
                const currentUrlIndex = from + index;
                if (responses[url]) {
                    const responseObject = { index: currentUrlIndex, response: responses[url][0].response };
                    responses[url] = [...responses[url], responseObject];
                    const nextUrlIndex = from + amount;
                    makeRequest(nextUrlIndex, 1);
                } else {
                    fetch(url).then((res) => {
                        const responseObject = {index: currentUrlIndex, response: res};
                        responses[url] = [responseObject];
                        const nextUrlIndex = from + amount;
                        makeRequest(nextUrlIndex, 1);
                    });
                }
            })
        }

        makeRequest(0, limit - 1);
    });
}
