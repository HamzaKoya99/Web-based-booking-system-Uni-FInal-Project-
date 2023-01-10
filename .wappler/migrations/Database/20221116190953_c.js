
exports.up = function(knex) {
  return knex.schema
    .table('Staff Registration', async function (table) {
      table.renameColumn('Name', 'Staff_Name');
      table.renameColumn('Email', 'Staff_Email');
      table.renameColumn('Password', 'Staff_Password');
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('Staff Registration', async function (table) {
      table.renameColumn('Staff_Name', 'Name');
      table.renameColumn('Staff_Email', 'Email');
      table.renameColumn('Staff_Password', 'Password');
    })
};
