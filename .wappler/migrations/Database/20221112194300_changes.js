
exports.up = function(knex) {
  return knex.schema
    .table('Request an Appointment', async function (table) {
      table.string('Contact By Phone', 255).defaultTo(knex.fn.now()).alter();
      table.string('Contact By Email', 255).defaultTo(knex.fn.now()).alter();
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('Request an Appointment', async function (table) {
      table.boolean('Contact By Phone', 255).defaultTo().alter();
      table.boolean('Contact By Email', 255).defaultTo().alter();
    })
};
