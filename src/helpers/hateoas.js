export const prepareHATEOAS = (entity, data) => {
    const results = data
        .map((i) => {
            return {
                name: i.nombre,
                href: `/${entity}/joya/${i.id}`,
            };
        })
        .slice(0, 4);
    const totalJewels = data.length;
    const stockTotal = data.reduce((sum, item) => sum + item.stock, 0);
    const HATEOAS = {
        totalJewels,
        stockTotal,
        results,
    };
    return HATEOAS;
};
