
exports.up = function(knex) {
  return knex.schema
    .createTable('Staff Role', async function (table) {
      table.increments('Role_id');
      table.string('Staff_id');
      table.string('Role');
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTable('Staff Role')
};
