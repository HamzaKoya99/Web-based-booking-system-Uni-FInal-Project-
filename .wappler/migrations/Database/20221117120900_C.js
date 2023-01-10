
exports.up = function(knex) {
  return knex.schema
    .dropTable('Staff Registration')
};

exports.down = function(knex) {
  return knex.schema
    .createTable('Staff Registration', async function (table) {
      table.string('Staff_Name', 255);
      table.string('Staff_Email', 255);
      table.string('Staff_Password', 255);
    })
};
