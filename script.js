//your JS code here. If required.
  let currentStep = 1;

        let prev = document.getElementById("prev");
        let next = document.getElementById("next");
        let progress = document.getElementById("progress");

        let circles = document.querySelectorAll(".circle");

        next.addEventListener("click", function() {

            currentStep++;

            updateProgress();

        });

        prev.addEventListener("click", function() {

            currentStep--;

            updateProgress();

        });

        function updateProgress() {

            circles.forEach(function(circle, index) {

                if (index < currentStep) {
                    circle.classList.add("active");
                } else {
                    circle.classList.remove("active");
                }

            });

            progress.style.width =
                ((currentStep - 1) / (circles.length - 1)) * 100 + "%";

            prev.disabled = currentStep === 1;

            next.disabled = currentStep === circles.length;

        }