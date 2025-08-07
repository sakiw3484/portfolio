
      document.querySelector('.button-49').addEventListener('click', function() {
        document.querySelector('.AboutMe-content').scrollIntoView({ behavior: 'smooth' });
      });

      document.querySelectorAll('.button-49')[1].addEventListener('click', function() {
        document.querySelector('.Projects-content').scrollIntoView({ behavior: 'smooth' });
      });

      document.querySelectorAll('.button-49')[2].addEventListener('click', function() {
        window.location.href = 'path/to/your/resume.pdf'; // Update with resume path
      });