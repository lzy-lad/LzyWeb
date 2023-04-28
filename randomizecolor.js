// Get the button element
const randomizeButton = document.getElementById('randomize-button');

// Function to generate a random color
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Function to set random background and text colors
function setRandomColors() {
  const backgroundColor = getRandomColor();
  const textColor = getRandomColor();
  
  // Check if the contrast ratio between the background and text is sufficient
  const contrastRatio = getContrastRatio(backgroundColor, textColor);
  if (contrastRatio < 4.5) {
    // If the contrast ratio is not sufficient, generate new colors
    setRandomColors();
  } else {
    // If the contrast ratio is sufficient, set the colors
    document.body.style.backgroundColor = backgroundColor;
    document.body.style.color = textColor;
  }
}

// Add click event listener to the button
randomizeButton.addEventListener('click', setRandomColors);

// Function to calculate contrast ratio
function getContrastRatio(background, foreground) {
  const lumA = getRelativeLuminance(background);
  const lumB = getRelativeLuminance(foreground);
  return (Math.max(lumA, lumB) + 0.05) / (Math.min(lumA, lumB) + 0.05);
}

// Function to calculate relative luminance
function getRelativeLuminance(color) {
  const rgb = hexToRgb(color);
  const r = rgb.r / 255;
  const g = rgb.g / 255;
  const b = rgb.b / 255;
  const sRGB = [r, g, b].map((v) => {
    if (v <= 0.03928) {
      return v / 12.92;
    }
    return ((v + 0.055) / 1.055) ** 2.4;
  });
  const L = 0.2126 * sRGB[0] + 0.7152 * sRGB[1] + 0.0722 * sRGB[2];
  return L;
}

// Function to convert hex color to RGB
function hexToRgb(hex) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return {
    r,
    g,
    b
  };
}
