# AWS S3 Web Storage Example

This is a simple web application that demonstrates how to interact with Amazon Web Services (AWS) S3 for file storage. Users can upload, list, download, and delete files from an S3 bucket directly from the web browser.

## Demo

You can try out a live demo of this application [here](link-to-demo).

## Features

- Upload files to an AWS S3 bucket.
- List files stored in the S3 bucket.
- Download files from the S3 bucket.
- Delete files from the S3 bucket.

## Prerequisites

Before running this application, ensure you have the following prerequisites:

- AWS account with S3 access and proper IAM permissions.
- Web browser (Chrome, Firefox, Safari, etc.).

## Getting Started

1. Clone the repository to your local machine:

   ```shell
   git clone https://github.com/your-username/aws-s3-web-storage.git

2. Open the index.html file in your preferred web browser.

3. Configure AWS Credentials:
   - Open the file.js script.
   - Replace the accessKeyId and secretAccessKey with your own AWS IAM user's credentials.
   - Ensure that your IAM user has the necessary permissions to interact with the S3 bucket.

4. Run the application by opening index.html in your web browser.

## Troubleshooting
1. If the application is not interacting with AWS S3, check your AWS credentials and permissions.
2. Ensure that your S3 bucket allows CORS access from the domain where the HTML file is hosted.
   ```shell
   [
    {
        "AllowedHeaders": [
            "*"
        ],
        "AllowedMethods": [
            "GET",
            "HEAD"
        ],
        "AllowedOrigins": [
            "*"
        ],
        "ExposeHeaders": []
    }
   ]
