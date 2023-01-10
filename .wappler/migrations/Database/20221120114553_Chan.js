
exports.up = function(knex) {
  return knex.schema
    .table('Staff_Registration', async function (table) {
      table.string('Staff_Email');
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('Staff_Registration', async function (table) {
      table.dropColumn('Staff_Email');
    })
};
