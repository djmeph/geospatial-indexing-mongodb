const { Geolocation } = require('../services');

module.exports = {
    method: 'post',
    endpoint: '/geospatial-search-radius',
    middleware: [async (req, res, next) => {

        try {

            const result = await Geolocation.SearchRadius(req.body);

            req.data = { status: 200, result };
            next();

        } catch (err) { fail(err); }

        function fail (err) {
            console.error(err);
            req.data = { status: err.statusCode || 500, result: { message: err.message } };
            next();
        }

    }]
};
