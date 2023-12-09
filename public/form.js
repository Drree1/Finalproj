const submitInfo = (e) => {
    e.preventDefault();
    document.getElementById("results").classList.remove("hidden");
  
    const form = document.getElementById("form-info");
    const fullName = form.elements["full-name"].value;
    const fullGender = form.elements["full-gender"].value;
    const medHist = form.elements["medical-history"].value;
    const fullAddress = form.elements["full-address"].value;
  };
  
  window.onload = () => {
  document.getElementById("form-info").onsubmit = submitInfo;
  }