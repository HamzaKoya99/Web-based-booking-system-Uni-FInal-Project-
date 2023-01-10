
exports.up = function(knex) {
  return knex.schema
    .dropTable('Staff Role')
};

exports.down = function(knex) {
  return knex.schema
    .createTable('Staff Role', async function (table) {
      table.increments('Role_id').primary().notNullable();
      table.string('Staff_id', 255);
      table.string('Role', 255);
    })
};
