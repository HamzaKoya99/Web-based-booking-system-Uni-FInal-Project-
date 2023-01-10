
exports.up = function(knex) {
  return knex.schema
    .createTable('Staff_Registration', async function (table) {
      table.increments('Staff_id');
      table.string('Staff_Name');
      table.string('Staff_Email');
      table.string('Staff_Password');
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTable('Staff_Registration')
};
