
exports.up = function(knex) {
  return knex.schema
    .table('Request an Appointment', async function (table) {
      table.renameColumn('input', 'Contact By Phone');
      table.boolean('Contact By Phone').alter();
      table.renameColumn('input1', 'Contact By Email');
      table.boolean('Contact By Email').alter();
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('Request an Appointment', async function (table) {
      table.renameColumn('Contact By Phone', 'input');
      table.string('input', 255).alter();
      table.renameColumn('Contact By Email', 'input1');
      table.string('input1', 255).alter();
    })
};
