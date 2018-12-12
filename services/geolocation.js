const { Geolocation } = require('../models');
const Promise = require('bluebird');

const service = {};

service.SearchRadius = (data) => {
    return new Promise(async (resolve, reject) => {
        await Geolocation
            .find({
                coordinates: {
                    $near: data.coordinates,
                    $maxDistance: data.distance / 69
                }
            })
            .exec()
            .catch(err => reject(err))
            .then(docs => resolve(docs));
    });
}

service.Insert = (data) => {
    return new Promise(async (resolve, reject) => {
        const geolocation = new Geolocation(data);
        const doc = await geolocation.save()
            .catch(err => reject(err))
            .then(doc => resolve(doc));
    });
};

module.exports = service;
