var region = "ap-southeast-2";
var accessKeyId = "----------------";
var secretAccessKey = "**************";

AWS.config.update({
  region: region,
  credentials: new AWS.Credentials(accessKeyId, secretAccessKey),
});

var s3 = new AWS.S3();

function refreshFileList(bucketName) {
  var tableBody = document.querySelector("#fileTable tbody");
  tableBody.innerHTML = "";

  s3.listObjectsV2({ Bucket: bucketName }, (err, data) => {
    if (err) {
      console.log("Error fetching data", err);
    } else {
      data.Contents.forEach((object) => {
        var fileRow = document.createElement("tr");
        var fileNameCell = document.createElement("td");
        fileNameCell.textContent = object.Key;
        fileRow.appendChild(fileNameCell);

        var fileSizeCell = document.createElement("td");
        fileSizeCell.textContent = object.Size;
        fileRow.appendChild(fileSizeCell);


        var downloadCell = document.createElement("td");
        var downloadLink = document.createElement("a");
        downloadLink.href = s3.getSignedUrl("getObject", {
          Bucket: bucketName,
          Key: object.Key,
        });
        downloadLink.textContent = "Download";
        downloadCell.appendChild(downloadLink);
        fileRow.appendChild(downloadCell);

        var deleteCell = document.createElement("td");
        var deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", () => {
          deleteFile(bucketName, object.Key);
        });
        deleteCell.appendChild(deleteButton);
        fileRow.appendChild(deleteCell);

        tableBody.append(fileRow);
      });
    }
  });
}

function uploadFiles(bucketName) {
  let files = document.getElementById("fileInput").files;
  var fileCount = files.length;

  for (var i = 0; i < fileCount; i++) {
    var file = files[i];
    var params = {
      Bucket: bucketName,
      Key: file.name,
      Body: file,
    };

    s3.upload(params, (err, data) => {
      if (err) {
        console.log("Error uploading file", err);
      } else {
        console.log("File uploaded successfully");
        refreshFileList(bucketName);
      }
    });
  }
}

function deleteFile(bucketName, key) {
  var params = {
    Bucket: bucketName,
    Key: key,
  };

  s3.deleteObject(params, (err, data) => {
    if (err) {
      console.log("Error deleting file", err);
    } else {
      console.log("File deleted successfully");
      refreshFileList(bucketName);
    }
  });
}

refreshFileList("aman-storage-system");
