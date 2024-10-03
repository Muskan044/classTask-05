function calculateAge() {
    var dob = document.querySelector("#birthdate").value;
    
    if (!dob) {
      alert('Please select your date of birth!');
      return;
    }
  
   
    var dobDate = new Date(dob);
    var today = new Date();
  
    
    var ageYear = today.getFullYear() - dobDate.getFullYear();
    var ageMonth = today.getMonth() - dobDate.getMonth();
    var ageDay = today.getDate() - dobDate.getDate();

    if (ageDay < 0) {
        ageMonth--;
        ageDay += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
      }
    
      if (ageMonth < 0) {
        ageYear--;
        ageMonth += 12;
      }
    
    
      document.getElementById('years').textContent = ageYear;
      document.getElementById('months').textContent = ageMonth;
      document.getElementById('days').textContent = ageDay;
    }