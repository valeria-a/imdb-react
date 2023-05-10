import axios from "axios";
import { useState } from "react";
import { PRESIGNED_URL, UPLOAD_PROFILE_IMG } from "../urls";

export default function ProfilePage(props) {

    // const [selectedFile, setSelectedFile] = useState("");


    // const uploadFile = (event) => {

    //     event.preventDefault()

    //     const formData = new FormData();
    //     formData.append("file", selectedFile);

    //     const token = localStorage.getItem('access')
      
    //     axios
    //       .post(UPLOAD_PROFILE_IMG, formData, {headers: {Authorization: `Bearer ${token}`}}, () => console.log('aaa'))
    //       .then((res) => {
    //         alert("File Upload success");
    //         props.onImgUpload()
    //       })
    //       .catch((err) => alert("File Upload Error"));
    //   };

    // const handleSelectFile = (e) => {
    //     setSelectedFile(e.target.files[0])
    // }

    // return (
    //     <div>
    //         <img src={props.user.userprofile.profile_pic_url}/>
    //         <form>
    //             <input type='file' accept="image/*"
    //             onChange={handleSelectFile}/>

    //             <button onClick={uploadFile}>Upload</button>
    //         </form>
    //     </div>
    // )

    const [imgUrl, setImgUrl] = useState('')

    const download = async () => {
        const token = localStorage.getItem('access')
        const response = await axios.post(PRESIGNED_URL, {}, {headers: {Authorization: `Bearer ${token}`}})
        const presigned_url = response.data['presigned_url']
        setImgUrl(presigned_url)
        // await axios.get(presigned_url)
        // axios({
        //     url: presigned_url,
        //     method: 'GET',
        //     responseType: 'blob', // important
        //   }).then((response) => {
        //     const url = window.URL.createObjectURL(new Blob([response.data]));
        //     const link = document.createElement('a');
        //     link.href = url;
        //     link.setAttribute('download', 'file.png');
        //     document.body.appendChild(link);
        //     link.click();
        //   });

    }


    return(
        <div>
            <img src={imgUrl} />
            <button onClick={download}>Download my secret file</button>
        </div>
    )
}