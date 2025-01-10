$(document).ready(function(){

    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('scroll load',function(){

        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        $('section').each(function(){

            let top = $(window).scrollTop();
            let height = $(this).height();
            let offset = $(this).offset().top - 200;
            let id = $(this).attr('id');

            if(top >= offset && top < offset + height){
                $('.navbar ul li a').removeClass('active');
                $('.navbar').find(`[href="#${id}"]`).addClass('active');
            }

        });

    });

    $('.accordion-heading').click(function(){

        $('.accordion .accordion-content').slideUp();

        $(this).next('.accordion-content').slideDown();

    });

});

const typed = new Typed('.multiple-text', {
    strings: ['DigiPark', 'DigiPark'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

function displaymessage(){
    event.preventDefault();
    document.getElementById('feedbackform').innerHTML="<h1>Thank you for your feedback!</h1>";
    alert('Message has been sent.')
    setTimeout(() => {
        document.getElementById('feedbackform').innerHTML=`<div class="inputBox">
        <input type="text" placeholder="Name" required>
        <input type="text" placeholder="Surname" required>
        </div>

        <div class="inputBox">
        <input type="email" placeholder="Email" required>
        <input type="number" placeholder="Contact Number" required>
        </div>

        <textarea name="" id="" cols="30" rows="10" placeholder="Your Experience With Us..." required></textarea>

        <input type="submit" value="message" class="btn" id="messagebtn">`;
    }, 5000);
}

function slotform(){
    event.preventDefault();
    newpage();
    document.getElementById('suprise').outerHTML=`<input type="submit" id="suprise" style="color:rgb(105, 105, 105);opacity: 0.7; cursor: not-allowed; transform: scale(1.1)" class="submitbtn" value="Booking.." readonly>`
    setTimeout(() => {
        window.location="slotbooking.html";
    }, 1200);
    setTimeout(() => {
        document.getElementById('suprise').outerHTML=` <input type="submit" id="suprise" class="submitbtn" value="Book Slot">`;
    }, 1500);
    
}
function newpage(){
    let fname = document.getElementById('n1').value;
    let mname = document.getElementById('n2').value;
    let lname = document.getElementById('n3').value;
    let fullname = fname+" "+mname+" "+lname;
    
    localStorage.setItem("FULLNAME",fullname);
    
}


function myMenuFunction() {
    var i = document.getElementById("navMenu");

    if (i.className === "nav-menu") {
        i.className += " responsive";
    } else {
        i.className = "nav-menu";
    }
}

function verifylogin(){
    event.preventDefault();
   let username = document.getElementById('adminname').value;
   let password = document.getElementById('adminpass').value;

   if(username=="admin" && password=="admin"){
        window.location="bookings.html";
        alert("Login Successfull.");
   }
   else{
    alert("Invalid username or password.");
    document.getElementById('adminname').value="";
    document.getElementById('adminpass').value="";
   }
}

function mainpage(){
    window.location="index.html";
}
function hackerbhai(){
    alert("Pehle fursat mai nikal");
    window.location="index.html";
}