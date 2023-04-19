import axios from "axios";
import { useState } from "react";
import { UPLOAD_PROFILE_IMG } from "../urls";

export default function ProfilePage(props) {

    const [selectedFile, setSelectedFile] = useState("");

    const uploadFile = (event) => {

        event.preventDefault()

        const formData = new FormData();
        formData.append("file", selectedFile);

        const token = localStorage.getItem('access')
      
        axios
          .post(UPLOAD_PROFILE_IMG, formData, {headers: {Authorization: `Bearer ${token}`}})
          .then((res) => {
            alert("File Upload success");
            props.onImgUpload()
          })
          .catch((err) => alert("File Upload Error"));
      };

    const handleSelectFile = (e) => {
        setSelectedFile(e.target.files[0])
    }

    return (
        <div>
            <img src={props.user.userprofile.profile_pic_url}/>
            <form>
                <input type='file' 
                onChange={handleSelectFile}/>

                <button onClick={uploadFile}>Upload</button>
            </form>
        </div>
    )
}