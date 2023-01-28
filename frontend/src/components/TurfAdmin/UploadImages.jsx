import React, { useEffect } from "react";
import axios from "axios";
import { Tooltip } from "@mui/material";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { useState } from "react";
import DropzoneComponent from "./DropzoneComponent";
import { toast, Toaster } from "react-hot-toast";
import PreviewImage from "./PreviewImage";
import { useNavigate, useParams } from "react-router-dom";

const UploadImages = () => {
  const Navigate = useNavigate()
  const { id } = useParams();
  const [image, setImage] = useState([]);
  let urls = [];
  useEffect(() => {
    urls = [];
    setImage("");
  }, []);
  let files = [];
  const imageHandler = (e) => {
    e.preventDefault();
    const uploaders = image.map(async (file) => {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "kay6oyd9");
      formData.append("cloud_name", "dxdkwzuyr");
      files = file;
      return axios
        .post(
          "https://api.cloudinary.com/v1_1/dxdkwzuyr/image/upload",
          formData,
          {
            headers: { "X-Requested-With": "XMLHttpRequest" },
          }
        )
        .then((response) => {
          const data = response.data;
          const url = data.url;
          urls.push(url);
        });
    });
    axios.all(uploaders).then(async () => {
     const upload = await axios.post(
        "http://localhost:8080/api/turfAdmin/imgUpload",
        { urls, id }
      );
      toast.promise(upload, {
        loading: "Uploading...",
        success: <b>Successfully Uploaded</b>,
        error: <b>Can't upload</b>,
      });
    });
    Navigate('/turfAdmin/home')
  };
  

  return (
    <div className="">
      <Toaster position="top-center" reverseOrder={false}></Toaster>
      <p className="text-center text-xl font-bold">
        Please Upload your turf Images
      </p>
      <p className="text-center mt-10">click here to Upload</p>
      <form onSubmit={imageHandler}>
        <div className="flex justify-center">
          {/* <Tooltip title="Upload Turf Images">
          <label htmlFor="upload">
            <div class=" font-bold text-gray-700 rounded-full h-[80px] w-[80px] bg-white flex items-center justify-center font-mono cursor-pointer">
              <AiOutlineCloudUpload size={40} />
            </div>
          </label>
        </Tooltip> */}
          {/* <input className="w-40 h-10" type="file" multiple onChange={(e)=>e.target.files[0]} /> */}
          <DropzoneComponent image={image} SetImage={setImage} />
          {/* <input type="te" className="bg-black " placeholder="hell" /> */}
        </div>
        <div className="h-[540px] w-full mt-5 bg-white">
          {/* <div className="border border-indigo-600  h-[350px] w-[80%] mx-auto">
          <p className="text-center text-lg ">Uploaded Images</p>
  
        
         {files.length > 0 &&
          files.map((item, index) => {
         
              <div key={item}>
                <img className="h-40 w-40" src={item} alt="" />
              
              </div>
      
          })}
        </div> */}
          <div className="flex justify-center mt-5">
            <button
              type="submit"
              class=" bg-transparent hover:bg-indigo-600 text-indigo-600  hover:text-white py-1 px-4 border border-indigo-600  hover:border-transparent rounded"
            >
              Uplaod
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UploadImages;
