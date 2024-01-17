export const queryFilter = (entity, filters) => {
    const table = entity.toLoweCase();
    let query = `SELECT * FROM ${table} WHERE 1 = 1`;
    const entriesFilter = Object.entries(filters);
    const values = [];
    for (const [key, value] of entriesFilter) {
        query += ` AND ${key} = $${values.length + 1}`;
        values.push(value);
    }
    return { query, values };
};
