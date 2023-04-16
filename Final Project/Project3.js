function Feedback() {
    let a = document.getElementById("First").value;
    let b = document.getElementById("Last").value;
    let c = document.getElementById("Email").value;
    let d = document.getElementById("Suggestion").value;
    let text;
    if (a == "a" || b == "" || c == "" || d == "") {
      text = "Please completely fill out the form";
    } else {
      text = "Thank you for your time! Our team will soon read your feedback";
    }
    document.getElementById("thanks").innerHTML = text;
  }
  function Maple(){document.getElementById('Canada').style.display = '';
  document.getElementById('Viet').style.display = 'none';
  document.getElementById('Fish').style.display = 'none';
  
}

function Star(){document.getElementById('Canada').style.display = 'none';
  document.getElementById('Viet').style.display = '';
  document.getElementById('Fish').style.display = 'none';
  
}

function Appear(){document.getElementById('Canada').style.display = '';
  document.getElementById('Viet').style.display = '';
  document.getElementById('Fish').style.display = '';

}