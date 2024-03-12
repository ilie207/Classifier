"use strict";

// URLs for the three image classification models
var imageModelURL = "https://teachablemachine.withgoogle.com/models/IPfqhFwOd/";
var imageModelURL2 =
  "https://teachablemachine.withgoogle.com/models/z83jBonUC/";
var imageModelURL3 =
  "https://teachablemachine.withgoogle.com/models/yO4Bohp6-/";

// Variables to store the classifiers
let classifier1;
let classifier2;
let classifier3;

// Preload function to load the models before setup
function preload() {
  // Load the models using ml5.js
  classifier1 = ml5.imageClassifier(imageModelURL + "model.json");
  classifier2 = ml5.imageClassifier(imageModelURL2 + "model.json");
  classifier3 = ml5.imageClassifier(imageModelURL3 + "model.json");
}

// Setup function to initialize the app
function setup() {
  // Create a canvas
  createCanvas(400, 400);

  // Add event listeners for file input and classify button
  document
    .getElementById("fileInput")
    .addEventListener("change", handleFileSelect);
  document
    .getElementById("classifyButton")
    .addEventListener("click", classifyImage);
}

// Function to handle file selection
function handleFileSelect(event) {
  // Read the selected file
  let file = event.target.files[0];
  let reader = new FileReader();

  // Load the image when file is loaded
  reader.onload = function (e) {
    let img = document.getElementById("selectedImage");
    img.src = e.target.result;
  };

  reader.readAsDataURL(file);
}

// Function to classify the uploaded image using all three models
function classifyImage() {
  // Check if an image is selected
  if (document.getElementById("selectedImage").src !== "") {
    let img = select("#selectedImage").elt;
    // Call the classify function for each model
    classifier1.classify(img, gotResult);
    classifier2.classify(img, gotResult2);
    classifier3.classify(img, gotResult3);
  }
}

// Callback function for the first model's classification result
function gotResult(error, results) {
  if (error) {
    console.error("classifier error (1):", error);
    return;
  }
  // Display the classification result in the corresponding div
  let resultDiv = document.getElementById("results");
  let label = results[0].label;
  let confidence = results[0].confidence * 100;

  let confidenceText = getConfidenceText(confidence);

  resultDiv.innerHTML = `Label: ${label}<br>Confidence: ${confidence.toFixed(
    2
  )}%<br>${confidenceText} ${label}`;
}

// Callback function for the second model's classification result
function gotResult2(error, results) {
  if (error) {
    console.error("classifier error (2):", error);
    return;
  }
  // Display the classification result in the corresponding div
  let resultDiv = document.getElementById("results2");
  let label = results[0].label;
  let confidence = results[0].confidence * 100;

  let confidenceText = getConfidenceText(confidence);

  resultDiv.innerHTML = `Label: ${label}<br>Confidence: ${confidence.toFixed(
    2
  )}%<br>${confidenceText} ${label}`;
}

// Callback function for the third model's classification result
function gotResult3(error, results) {
  if (error) {
    console.error("classifier error (3):", error);
    return;
  }
  // Display the classification result in the corresponding div
  let resultDiv = document.getElementById("results3");
  let label = results[0].label;
  let confidence = results[0].confidence * 100;

  let confidenceText = getConfidenceText(confidence);

  resultDiv.innerHTML = `Label: ${label}<br>Confidence: ${confidence.toFixed(
    2
  )}%<br>${confidenceText} ${label}`;
}

// Function to determine confidence text based on confidence level
function getConfidenceText(confidence) {
  let confidenceText = "";
  if (confidence >= 51 && confidence <= 59) {
    confidenceText = "Subject could be";
  } else if (confidence >= 60 && confidence <= 79) {
    confidenceText = "Subject is likely";
  } else {
    confidenceText = "Subject is";
  }
  return confidenceText;
}
