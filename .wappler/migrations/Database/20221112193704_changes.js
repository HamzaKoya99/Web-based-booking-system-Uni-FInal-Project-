
exports.up = function(knex) {
  return knex.schema
    .table('Request an Appointment', async function (table) {
      table.boolean('Contact By Phone').alter();
      table.boolean('Contact By Email').alter();
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('Request an Appointment', async function (table) {
      table.string('Contact By Phone', 255).alter();
      table.string('Contact By Email', 255).alter();
    })
};
