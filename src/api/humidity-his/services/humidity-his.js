'use strict';

/**
 * humidity-his service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::humidity-his.humidity-his');
