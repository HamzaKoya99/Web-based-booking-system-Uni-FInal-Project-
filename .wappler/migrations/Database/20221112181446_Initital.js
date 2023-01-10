
exports.up = function(knex) {
  return knex.schema
    .createTable('Request an Appointment', async function (table) {
      table.increments('Appointment_id');
      table.string('First Name');
      table.string('Last Name');
      table.string('Email');
      table.string('Phone Number');
      table.string('NHS Number');
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTable('Request an Appointment')
};
