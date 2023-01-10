
exports.up = function(knex) {
  return knex.schema
    .table('Staff Registration', async function (table) {
      table.renameColumn('Email1', 'Email');
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('Staff Registration', async function (table) {
      table.renameColumn('Email', 'Email1');
    })
};
