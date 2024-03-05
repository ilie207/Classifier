"use strict";

var imageModelURL = "https://teachablemachine.withgoogle.com/models/_i9lcSwZT/";
var imageModelURL2 =
  "https://teachablemachine.withgoogle.com/models/yO4Bohp6-/";
var imageModelURL3 =
  "https://teachablemachine.withgoogle.com/models/vD7_cXowP/";

let classifier1;
let classifier2;
let classifier3;

function preload() {
  classifier1 = ml5.imageClassifier(imageModelURL + "model.json");
  classifier2 = ml5.imageClassifier(imageModelURL2 + "model.json");
  classifier3 = ml5.imageClassifier(imageModelURL3 + "model.json");
}

function setup() {
  createCanvas(400, 400);
  document
    .getElementById("fileInput")
    .addEventListener("change", handleFileSelect);
  document
    .getElementById("classifyButton")
    .addEventListener("click", classifyImage);
}

function handleFileSelect(event) {
  let file = event.target.files[0];
  let reader = new FileReader();

  reader.onload = function (e) {
    let img = document.getElementById("selectedImage");
    img.src = e.target.result;
  };

  reader.readAsDataURL(file);
}

function classifyImage() {
  if (document.getElementById("selectedImage").src !== "") {
    let img = select("#selectedImage").elt;
    classifier1.classify(img, gotResult);
    classifier2.classify(img, gotResult2);
    classifier3.classify(img, gotResult3);
  }
}

function gotResult(error, results) {
  if (error) {
    console.error("classifier error (1):", error);
    return;
  }
  let resultDiv = document.getElementById("results");
  let label = results[0].label;
  let confidence = results[0].confidence * 100;

  let confidenceText = getConfidenceText(confidence);

  resultDiv.innerHTML = `Label: ${label}<br>Confidence: ${confidence.toFixed(
    2
  )}%<br>${confidenceText} ${label}`;
}

function gotResult2(error, results) {
  if (error) {
    console.error("classifier error (2):", error);
    return;
  }
  let resultDiv = document.getElementById("results2");
  let label = results[0].label;
  let confidence = results[0].confidence * 100;

  let confidenceText = getConfidenceText(confidence);

  resultDiv.innerHTML = `Label: ${label}<br>Confidence: ${confidence.toFixed(
    2
  )}%<br>${confidenceText} ${label}`;
}

function gotResult3(error, results) {
  if (error) {
    console.error("classifier error (3):", error);
    return;
  }
  let resultDiv = document.getElementById("results3");
  let label = results[0].label;
  let confidence = results[0].confidence * 100;

  let confidenceText = getConfidenceText(confidence);

  resultDiv.innerHTML = `Label: ${label}<br>Confidence: ${confidence.toFixed(
    2
  )}%<br>${confidenceText} ${label}`;
}

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
