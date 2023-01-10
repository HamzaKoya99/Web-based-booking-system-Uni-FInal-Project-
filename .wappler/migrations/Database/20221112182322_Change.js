
exports.up = function(knex) {
  return knex.schema
    .table('Request an Appointment', async function (table) {
      table.string('DateOfAppointment');
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('Request an Appointment', async function (table) {
      table.dropColumn('DateOfAppointment');
    })
};
