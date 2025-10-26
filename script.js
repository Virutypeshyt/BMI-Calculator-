function calculateBMI() {
  const weight = parseFloat(document.getElementById('weight').value);
  const height = parseFloat(document.getElementById('height').value) / 100;
  const result = document.getElementById('result');

  if (isNaN(weight) || isNaN(height)) {
    result.innerText = 'Enter valid numbers!';
    return;
  }

  const bmi = (weight / (height * height)).toFixed(2);
  let category = '';

  if (bmi < 18.5) category = 'Underweight';
  else if (bmi < 24.9) category = 'Normal';
  else if (bmi < 29.9) category = 'Overweight';
  else category = 'Obese';

  result.innerText = `Your BMI is ${bmi} (${category})`;
}