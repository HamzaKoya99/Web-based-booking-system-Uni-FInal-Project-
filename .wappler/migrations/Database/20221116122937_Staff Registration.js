
exports.up = function(knex) {
  return knex.schema
    .createTable('Staff Registration', async function (table) {
      table.increments('Staff_id');
      table.string('Name');
      table.string('Email');
      table.string('Password');
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTable('Staff Registration')
};
