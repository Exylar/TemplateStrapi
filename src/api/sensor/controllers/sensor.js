'use strict';

/**
 *  sensor controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::sensor.sensor', ({ strapi }) => ({
    async list(ctx) {

        let entities = await super.find(ctx);
          
        const data = [];
        console.log(entities)
        entities.data.map(sensor => {
            data.push({
                label: sensor.attributes.name,
                value: sensor.id,
            })
        });

        return data
    }
}));


