function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var data = e.parameter;

  // Define the columns in the order you want them in the sheet
  // Order: Name, Email, Phone, Message, Form Type, Timestamp

  // Create header row if sheet is empty
  if (sheet.getLastRow() == 0) {
    sheet.appendRow([
      "Name",
      "Email",
      "Phone",
      "Message",
      "Form Type",
      "Timestamp",
    ]);
  }

  // Extract data
  var name = data.name || "";
  var email = data.email || "";
  var phone = data.phone || "";
  var message = data.message || data.goals || "";
  var formType = data.formType || "Unknown";
  var timestamp = data.timestamp || new Date().toISOString();

  // Append to sheet in the EXACT order of the headers above
  sheet.appendRow([name, email, phone, message, formType, timestamp]);

  return ContentService.createTextOutput(
    JSON.stringify({ status: "success" })
  ).setMimeType(ContentService.MimeType.JSON);
}

function doGet(e) {
  return ContentService.createTextOutput("Script is running!");
}
