'use strict';

const Joi = require('joi');
const Model = require('schwifty').Model;

const internals = {};

module.exports = (srv, options) => {

    return class Doggy extends Model {

        static get tableName() {

            return 'Doggy';
        }

        static customFunc() {

            return 'Custom func called!';
        }

        static get schema() {

            return Joi.object({

                // Note: in these schemas, whatever is required() is also required when
                // querying for it FROM the database as well.

                favoriteToy: Joi.string(),
                superFavoriteToy: Joi.number(),
                doggyName: Joi.number(),
                // age: Joi.number().integer(),
                ownerId: Joi.number().integer()
            });
        }
    };
};
