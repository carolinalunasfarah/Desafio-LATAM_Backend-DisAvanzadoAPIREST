export const prepareHATEOAS = (entity, data) => {
    const results = data
        .map((i) => {
            return {
                name: i.nombre,
                links: [
                    { routeRef: `/${entity}/joya/${i.id}` },
                    { href: `http://localhost:3000/inventario/${entity}/${i.id}` },
                ],
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
