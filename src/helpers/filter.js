export const queryFilter = (entity, filters) => {
    // entity to lower case so it does match with the database
    const table = entity.toLowerCase();
    // this is a let because is a base query, it needs to be able to change to receive the filters
    let query = `SELECT * FROM ${table} WHERE 1 = 1`;
    // getting key value of the filters as an array
    const entriesFilter = Object.entries(filters);
    const values = [];
    // key value of filters
    for (const [key, value] of entriesFilter) {
        if (key === "precio_min") {
            query += ` AND precio >= $${values.length + 1}`;
        } else if (key === "precio_max") {
            query += ` AND precio <= $${values.length + 1}`;
        } else {
            query += ` AND ${key} = $${values.length + 1}`;
        }
        values.push(value);
    }

    return { query, values };
};
