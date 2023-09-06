const apiUrl = "http://35.229.42.75:420/scraper/feapi-compset-inventory?organization_compset_id=1";

fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then(data => {
    console.log("API response:", data);
    
  })
  .catch(error => {
    console.error("Fetch error:", error);
  });
