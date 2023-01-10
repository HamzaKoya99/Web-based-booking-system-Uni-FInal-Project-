
exports.up = function(knex) {
  return knex.schema
    .table('Request an Appointment', async function (table) {
      table.string('Area Of Pain');
      table.string('Pain information');
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('Request an Appointment', async function (table) {
      table.dropColumn('Area Of Pain');
      table.dropColumn('Pain information');
    })
};
