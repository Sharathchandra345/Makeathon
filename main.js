function uncheckOther(id) {
    const checkboxes = document.getElementsByName(id.name);
    for (let i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].id !== id) {
        checkboxes[i].checked = false;
      }
    }
  }


  function displayMealSections() {
    // Get the current time
    var now = new Date();
  
    // Calculate the start and end times for breakfast
    var breakfastStartTime = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 3, 30, 0); // 3:30 AM
    var breakfastEndTime = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 9, 30, 0); // 9:30 AM
  
    // Check if the current time is within the specified time period for breakfast
    if (now >= breakfastStartTime && now <= breakfastEndTime) {
      // Display the breakfast section
      document.getElementById("menu").querySelector("#menu > div:nth-child(1)").style.display = "flex";
    } else {
      // Hide the breakfast section
      document.getElementById("menu").querySelector("#menu > div:nth-child(1)").style.display = "none";
    }
  
    // Calculate the start and end times for lunch
    var lunchStartTime = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 8, 30, 0); // 8:30 AM
    var lunchEndTime = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 14, 30, 0); // 2:30 PM
  
    // Check if the current time is within the specified time period for lunch
    if (now >= lunchStartTime && now <= lunchEndTime) {
      // Display the lunch section
      document.getElementById("menu").querySelector("#menu > div:nth-child(2)").style.display = "flex";
    } else {
      // Hide the lunch section
      document.getElementById("menu").querySelector("#menu > div:nth-child(2)").style.display = "none";
    }
  
    // Calculate the start and end times for dinner
    var dinnerStartTime = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 13, 30, 0); // 1:30 PM
    var dinnerEndTime = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 21, 30, 0); // 9:30 PM
  
    // Check if the current time is within the specified time period for dinner
    if (now >= dinnerStartTime && now <= dinnerEndTime) {
      // Display the dinner section
      document.getElementById("menu").querySelector("#menu > div:nth-child(3)").style.display = "flex";
    } else {
      // Hide the dinner section
      document.getElementById("menu").querySelector("#menu > div:nth-child(3)").style.display = "none";
    }
  
    // Refresh the display every minute
    setTimeout(displayMealSections, 60000);
  }
  
  // Call the displayMealSections function to start displaying the meal sections
  displayMealSections();
  