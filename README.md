# Image Classifier App

This is a simple web application that allows users to upload images and classify them using pre-trained machine learning models. The app contains three models for classifying gender, facial hair, and glasses presence in the uploaded images.

## Features

- **Multi-Model Classification:** The app uses three separate models to classify gender, facial hair, and glasses presence in images.
- **User-Friendly Interface:** Users can easily upload images and view the classification results.
- **Styling:** The app is styled to provide a pleasant user experience with CSS styling for buttons and results display.

## Usage

1. **Upload Image:** Click on the "Choose File" button to select an image file from your device.
2. **Classify Image:** Click on the "Classify Image" button to initiate the classification process.
3. **View Results:** The results will be displayed in a table format, showing the classification results for each model.

## Models Used

1. **Gender Classification Model:**

   - URL: https://teachablemachine.withgoogle.com/models/_i9lcSwZT/
   - This model classifies images into male or female categories.

2. **Facial Hair Classification Model:**

   - URL: https://teachablemachine.withgoogle.com/models/yO4Bohp6-/
   - This model determines whether the image subject has facial hair or not.

3. **Glasses Presence Classification Model:**
   - URL: https://teachablemachine.withgoogle.com/models/vD7_cXowP/
   - This model identifies whether the image subject is wearing glasses or not.

## Installation

There is no installation required for this web application. Simply open the `index.html` file in a web browser to use the app.

## Credits

- This app utilizes the ml5.js library for image classification.
- The trained models used in this app are provided by Google's Teachable Machine.
