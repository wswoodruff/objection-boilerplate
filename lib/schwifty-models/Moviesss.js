'use strict';

const Joi = require('joi');
const Model = require('schwifty').Model;

const internals = {};

module.exports = (srv, options) => {

    return class Moviesss extends Model {

        static get tableName() {

            return 'Moviesss';
        }

        static get schema() {

            return Joi.object({

                // Note: in these schemas, whatever is required() is also required when
                // querying for it FROM the database as well.

                title: Joi.string()
            });
        }
    };
};
