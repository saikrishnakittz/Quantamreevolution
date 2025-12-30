export async function submitToGoogleSheets(data) {
  const GOOGLE_SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbx5M5zQa22eMtSYx2B7IG91GSZuKKgrYbHzJv2VJuAMIHkBKibmMm4mZehDIEmHqkQV/exec";

  try {
    const formData = new URLSearchParams({
      ...data,
      timestamp: new Date().toISOString(),
    });

    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      mode: "no-cors",
      body: formData,
    });

    return response;
  } catch (error) {
    console.error("Error submitting to Google Sheets:", error);
    throw error;
  }
}
