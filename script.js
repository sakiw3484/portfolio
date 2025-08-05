async function sendMessage() {
    const input = document.getElementById("user-input");
    const message = input.value.trim();
    if (!message) return;

    addMessage("You", message);
    input.value = "";

    const response = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt: message }),
    });

    const data = await response.json();
    addMessage("SakiyahBot", data.reply);
  }

  function addMessage(sender, text) {
    const chatLog = document.getElementById("chat-log");
    const msg = document.createElement("div");
    msg.innerHTML = `<strong>${sender}:</strong> ${text}`;
    chatLog.appendChild(msg);
    chatLog.scrollTop = chatLog.scrollHeight;
  }



      document.querySelector('.button-49').addEventListener('click', function() {
        document.querySelector('.AboutMe-content').scrollIntoView({ behavior: 'smooth' });
      });

      document.querySelectorAll('.button-49')[1].addEventListener('click', function() {
        document.querySelector('.Projects-content').scrollIntoView({ behavior: 'smooth' });
      });

      document.querySelectorAll('.button-49')[2].addEventListener('click', function() {
        window.location.href = 'path/to/your/resume.pdf'; // Update with your resume path
      });