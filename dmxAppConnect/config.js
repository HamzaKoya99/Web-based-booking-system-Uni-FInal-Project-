dmx.config({
  "Staff_HomePage": {
    "repeat2": {
      "meta": null,
      "outputType": "datetime"
    },
    "data_view1": {
      "meta": [
        {
          "type": "number",
          "name": "Appointment_id"
        },
        {
          "type": "datetime",
          "name": "DateOfAppointment"
        },
        {
          "type": "text",
          "name": "First Name"
        },
        {
          "type": "text",
          "name": "Last Name"
        },
        {
          "type": "text",
          "name": "Area Of Pain"
        },
        {
          "type": "text",
          "name": "Pain information"
        }
      ],
      "outputType": "array"
    },
    "repeat1": {
      "meta": [
        {
          "type": "number",
          "name": "Appointment_id"
        },
        {
          "type": "datetime",
          "name": "DateOfAppointment"
        }
      ],
      "outputType": "array"
    }
  },
  "All_Appointments": {
    "tableRepeat1": {
      "meta": [
        {
          "type": "number",
          "name": "Appointment_id"
        },
        {
          "type": "datetime",
          "name": "DateOfAppointment"
        },
        {
          "type": "text",
          "name": "First_Name"
        },
        {
          "type": "text",
          "name": "Last_Name"
        },
        {
          "type": "text",
          "name": "NHS_Number"
        },
        {
          "type": "text",
          "name": "Area_Of_Pain"
        },
        {
          "type": "text",
          "name": "Pain_information"
        }
      ],
      "outputType": "array"
    }
  }
});
