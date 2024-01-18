export const pagination = (data, items, page) => {
    const pageInt = Number(page);
    const itemsInt = Number(items);
    const startIndex = (pageInt - 1) * itemsInt;
    const endIndex = pageInt * itemsInt;
    const results = {};

    if (endIndex < data.length) {
        results.next = {
            page: pageInt + 1,
            items: itemsInt,
        };
    }
    if (startIndex > 0) {
        results.previous = {
            page: pageInt - 1,
            items: itemsInt,
        };
    }
    results.results = data.slice(startIndex, endIndex);
    return results;
};
