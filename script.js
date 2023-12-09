// Input name and email value
function getVals(formControl, controlType) {
  switch (controlType) {
    case "nom_field":
      // Get the value for input
      var value = $(formControl).val();
      $("#nom_field").text(value);
      break;

    case "prenom_field":
      // Get the value for input
      var value = $(formControl).val();
      $("#prenom_field").text(value);
      break;

    case "mail_field":
      // Get the value for input
      var value = $(formControl).val();
      $("#mail_field").text(value);
      break;

    case "telephone_field":
      // Get the value for phone input
      var value = $(formControl).val();
      $("#telephone_field").text(value);
      break;

    case "niveauEtude_field":
      // Get the value for date input
      var value = $(formControl).val();
      $("#niveauEtude_field").text(value);
      break;

    case "motivation_field":
      // Get the value for textarea when "Autre" is selected
      var value = $(formControl).val();
      $("#motivation_field").text(value);
      break;

    case "donneePersonnel_field":
      // Get the value of the first radio button
      if ($(formControl).is(":checked")) {
        var value = $(formControl).val();
        $("#donneePersonnel_field").text(value);
      }
      break;
  }
}
