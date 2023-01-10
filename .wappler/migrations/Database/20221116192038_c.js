
exports.up = function(knex) {
  return knex.schema
    .table('Staff Registration', async function (table) {
      table.dropColumn('Staff_id');
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('Staff Registration', async function (table) {
      table.increments('Staff_id').primary().notNullable();
    })
};
