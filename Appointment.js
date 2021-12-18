import React from 'react'
import "./Appointment.css"
const Appointment = () => {
    return (
      <div class="Card">
        <div class="container1">
  <div >
    <h2>Appointment</h2>
    <br></br>
  </div>
  <div class="row">
    <div class="column">
      <form action="">
        <label for="fname">First Name
        <input type="text" id="fname" name="firstname" placeholder="Your name.."/></label>
        <label for="lname">Last Name
        <input type="text" id="lname" name="lastname" placeholder="Your last name.."/></label>
        <label for="lname">DOB
        <input type="date" id="date" name="date" placeholder="XX/XX/XXXX"/></label>
        <br></br>
        <label for="country">Specialist</label>
        <select id="" name="country">
          <option value="Cadio">Cardiology</option>
          <option value="neuro">Neurology</option>
          <option value="Nephro">Nephrology</option>
          <option value="Uro">Urology</option>
          <option value="Gastro">Gastroenterology</option>
          <option value="Dermato">Dermatology</option>
          <option value="Opthalmo">Opthalmology</option>
          <option value="Gynaeco">Gynaecology</option>
          <option value="General Physician">General Physician</option>
        </select>
      
        <label for="City">City</label>
        <select id="" name="city">
          <option value="Delhi">Delhi</option>
          <option value="Bombay">Bombay</option>
          <option value="Kolkata">Kolkata</option>
          <option value="Jaipur">Jaipur</option>
          <option value="Banglore">Banglore</option>
        </select>
        
        <label for="subject">Subject</label>
        <textarea id="subject" name="subject" placeholder="Write something.." ></textarea>
        <input type="submit" value="Submit"/>
      </form>
    </div>
  </div>
</div>
      </div>
            

    )
}

export default Appointment
