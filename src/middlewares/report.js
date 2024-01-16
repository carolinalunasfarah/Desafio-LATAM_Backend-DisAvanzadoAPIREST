export const report = async (req, res, next) => {
    const parameters = req.params;
    const url = req.url;
    console.log(
        `
    Hoy ${new Date()}
    Se ha recibido una consulta en la ruta ${url}
    con los parámetros:
    `,
        parameters
    );
    next();
};
