/**
 * Created by carlen on 4/16/17.
 */
const knex = require('../../../utils/db')
const table = 'categories'

const get = () => knex.select('*').from(table)

module.exports = { get }