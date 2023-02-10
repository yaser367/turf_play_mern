import React, { useCallback, useMemo } from "react";
import { useDropzone } from "react-dropzone";

const baseStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "20px",
  borderWidth: 2,
  borderRadius: 2,
  borderColor: "#eeeeee",
  borderStyle: "dashed",
  backgroundColor: "#7fde65",
  color: "#000",
  transition: "border .3s ease-in-out",
  width: "80%",
  cursor:"pointer"
};

const activeStyle = {
  borderColor: "#2196f3",
};

const acceptStyle = {
  borderColor: "#00e676",
};

const rejectStyle = {
  borderColor: "#ff1744",
};

function DropzoneComponent({ image, SetImage, bg }) {
  const onDrop = useCallback((acceptedFiles) => {
    
    SetImage((prevState) => [...prevState, ...acceptedFiles]);
  }, []);

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    onDrop,
    // accept: "image/jpeg, image/png",
  });

  const style = useMemo(
    () => ({
      ...baseStyle,backgroundColor:`${bg}`,
      ...(isDragActive ? activeStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isDragActive, isDragReject, isDragAccept]
  );

  return (
    <div {...getRootProps({ style })}>
      <input {...getInputProps()} />
      <div>Drag and drop your images here.</div>
    </div>
  );
}

export default DropzoneComponent;