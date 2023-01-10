
exports.up = function(knex) {
  return knex.schema
    .table('Request an Appointment', async function (table) {
      table.renameColumn('First Name', 'First_Name');
      table.renameColumn('Last Name', 'Last_Name');
      table.renameColumn('Phone Number', 'Phone_Number');
      table.renameColumn('NHS Number', 'NHS_Number');
      table.renameColumn('Contact By Phone', 'Contact_By_Phone');
      table.renameColumn('Contact By Email', 'Contact_By_Email');
      table.renameColumn('Area Of Pain', 'Area_Of_Pain');
      table.renameColumn('Pain information', 'Pain_information');
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('Request an Appointment', async function (table) {
      table.renameColumn('First_Name', 'First Name');
      table.renameColumn('Last_Name', 'Last Name');
      table.renameColumn('Phone_Number', 'Phone Number');
      table.renameColumn('NHS_Number', 'NHS Number');
      table.renameColumn('Contact_By_Phone', 'Contact By Phone');
      table.renameColumn('Contact_By_Email', 'Contact By Email');
      table.renameColumn('Area_Of_Pain', 'Area Of Pain');
      table.renameColumn('Pain_information', 'Pain information');
    })
};
