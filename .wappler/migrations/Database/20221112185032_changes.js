
exports.up = function(knex) {
  return knex.schema
    .table('Request an Appointment', async function (table) {
      table.string('input');
      table.string('input1');
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('Request an Appointment', async function (table) {
      table.dropColumn('input');
      table.dropColumn('input1');
    })
};
