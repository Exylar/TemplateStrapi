'use strict';

/**
 *  temp-his controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::temp-his.temp-his', ({ strapi }) => ({
    async graph(ctx) {

        let entities;

        entities = await super.find(ctx);

        console.log(entities.data)

        let temp = entities.data.map(entity => {
            return entity.attributes.value
        })

        let time = entities.data.map(entity => {
            return entity.attributes.createdAt
        })

        let data = {
            temp: temp,
            time: time
        }

        return data
    }
}));

