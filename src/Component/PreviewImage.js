import React from "react";
import Colors from "../Theme/Color";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";

export default function PreviewImage() {
  const uploadedImage = React.useRef(null);
  const imageUploader = React.useRef(null);

  const handleImageUpload = (e) => {
    const [file] = e.target.files;
    if (file) {
      const reader = new FileReader();
      const { current } = uploadedImage;
      current.file = file;
      reader.onload = (e) => {
        current.src = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div
    // style={{
    //   display: "flex",
    //   flexDirection: "column",
    //   alignItems: "center",
    //   justifyContent: "center",
    // }}
    >
      <input
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        ref={imageUploader}
        style={{
          display: "none",
        }}
      />
      <div
        style={{
          height: 78,
          width: 78,
          borderRadius: "100%",
          backgroundColor: Colors.lightGray,
          marginBottom: -10,
        }}
      >
        <img
          ref={uploadedImage}
          style={{
            width: "100%",
            height: "100%",
            borderRadius: "100%",
            objectFit: "cover",
          }}
        />
      </div>{" "}
      {/* Button */}
      <AddCircleOutlineRoundedIcon
        onClick={() => imageUploader.current.click()}
        sx={{
          width: 20,
          height: 20,
          color: Colors.seaGreen,
          ml: 6,
          mt: -5,
          backgroundColor: Colors.white,
          borderRadius: "100%",
        }}
      />
    </div>
  );
}
