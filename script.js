function validation(){
    var name = document.getElementById('name').value
    var Email = document.getElementById('Email').value
    var Mobile = document.getElementById('Mobile').value
    var city = document.getElementById('City').value
    if (name == ""){
        document.getElementById('Name').innerHTML = 'plz fill the name'
        return false
    } 
    if (Email == ""){
        document.getElementById('email').innerHTML = 'plz fill the email'
        return false
    } 
    if (Mobile == ""){
        document.getElementById('Mobile').innerHTML = 'plz fill the Mobile number'
        return false
    } 
    if (city == ""){
        document.getElementById('city').innerHTML = 'plz fill the City'
        return false
    } 
 } 