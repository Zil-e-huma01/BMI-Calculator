document.addEventListener("DOMContentLoaded", function () {
  const heightInput = document.getElementById("heightInput");
  const heightUnit = document.getElementById("heightUnit");
  const weightInput = document.getElementById("weightInput");
  const weightUnit = document.getElementById("weightUnit");
  const btnCalc = document.querySelector(".btnCalc");
  const modal = document.querySelector(".modal");
  const bmiText = document.querySelector(".Bmi");
  const closeButton = document.querySelector(".closeButton");

  btnCalc.addEventListener("click", function () {
    const heightValue = parseFloat(heightInput.value);
    const weightValue = parseFloat(weightInput.value);

    const height = convertToStandardUnit(heightValue, heightUnit.value);
    const weight = convertToStandardUnit(weightValue, weightUnit.value);

    const bmi = calculateBMI(height, weight);

    const bmiCategory = getBMICategory(bmi);

    bmiText.textContent = `Your BMI is: ${bmi.toFixed(2)} - ${bmiCategory}`;

    modal.style.display = "flex";
  });

  modal.addEventListener("click", function (event) {
    if (event.target === modal || event.target === closeButton) {
      modal.style.display = "none";
    }
  });

  function convertToStandardUnit(value, unit) {
    switch (unit) {
      case "in":
        return value * 0.0254;
      case "ft":
        return value * 0.3048;
      case "g":
        return value * 0.001;
      case "lb":
        return value * 0.453592;
      default:
        return value;
    }
  }

  function calculateBMI(height, weight) {
    return weight / (height * height);
  }

  function getBMICategory(bmi) {
    if (bmi < 18.5) {
      return "Underweight";
    } else if (bmi < 24.9) {
      return "Normal weight";
    } else if (bmi < 29.9) {
      return "Overweight";
    } else {
      return "Obese";
    }
  }
});
