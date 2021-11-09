let dateContainer = document.getElementById('date')
let date = new Date().toLocaleDateString('fa-IR')
dateContainer.innerText = date.replace(/[۰-۹]/g, d => '۰۱۲۳۴۵۶۷۸۹'.indexOf(d))
