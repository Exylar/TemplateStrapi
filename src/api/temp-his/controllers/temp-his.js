'use strict';


/**
 *  temp-his controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::temp-his.temp-his', ({ strapi }) => ({
    async graph(ctx) {
        const { id } = ctx.params;
        const entities = await strapi.service('api::temp-his.temp-his').find({
            populate: {
                sensor: true,
            },
            sort: {
                datetime: 'desc'
            }
        });

        
        let time = [];
        let temp = [];
        entities.results.map(entity => {
            if (entity.sensor.id == id) {
                time.push(entity.datetime.format("dd/mm/yy"));
                temp.push(entity.value);
            }
        });

        time = time.reverse();
        temp = temp.reverse();

        let data = {
            value: temp,
            time: time
        }

        return data
    }
}));

