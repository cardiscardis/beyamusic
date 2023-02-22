import cogoToast from "cogo-toast";
import React, { useRef, useState, useEffect, useCallback } from "react";
import { Buffer } from 'buffer';
import axios from "axios";
import Image from 'next/image'


import { fetcher } from '@/lib/fetch';


const DashboardHeader = ({user}) => {

    const [isLoading, setIsLoading] = useState(false);
    const [avatarHref, setAvatarHref] = useState(user?.imageURL);

    const profilePictureRef = useRef();

    const onAvatarChange = useCallback((e) => {
        const file = e.currentTarget.files?.[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = (l) => {
          setAvatarHref(l.currentTarget.result);
        };
        reader.readAsDataURL(file);
        onSubmit()
    }, []);
      
    const onSubmit = useCallback(
        async (e) => {
        //e.preventDefault();
            try {
                setIsLoading(true);
                const formData = new FormData();
                formData.append('phone', user.phone);
                if (profilePictureRef.current.files[0]) {
                formData.append('profilePicture', profilePictureRef.current.files[0]);
                } else {
                    cogoToast.error('Please select a picture!')
                    return
                }
                const response = await fetcher('/api/user', {
                method: 'PATCH',
                body: formData,
                });

                if (response && response.imageURL) {
                
                    cogoToast.success('Your profile has been updated');
                } else cogoToast.error('Unknown Error!')                
            } catch (e) {
                cogoToast.error(e.message);
            } finally {
                setIsLoading(false);
            }
        },
        [user]
    );


    useEffect(() => {
        const getProfileImage = async () => {
            axios.post('/api/user/get_image_url', {
                user: user
            }).then(function (response) {
                //const buff = Buffer.from(response.data, "utf-8");
                //const img = `data:image/png;base64,${Buffer(buff).toString('base64')}`;
                //const data = [Int8Array.from(response.data)]
                //let bufferBase64 = Buffer.concat(response.data);
                
                //console.log(img);

                //let data = Buffer.from(response.data).toString('base64')
                //const blob = new Blob([Int8Array.from(data)], {type: 'image/jpeg' });
                //const imageURL = window.URL.createObjectURL(blob);
                setAvatarHref(response.data.imageURL)
            }).catch(function (error) {
                console.log(error);
            });
    
            //profilePictureRef.current.value = '';
            //const imageURL = `$data:image/jpeg;base64,${response.toString('base64')})`
        }
        getProfileImage()
        
        /* usernameRef.current.value = user.username;
        nameRef.current.value = user.name;
        bioRef.current.value = user.bio; */
        
      }, [user]);



    return (
        <>
        <div className="row" style={{clear: "both"}}>
            <div className="col-12 rounded p-5" style={{textAlign: "center"}}>
                <div className="d-flex align-items-center mb-4 mx-auto" style={{width: "250px"}}>
                    <div className="avatar avatar--xl">
                        <div className="avatar__image">
                            <img src={avatarHref || 'images/users/avatar.png'} alt="user" />
                        </div>
                        </div>
                    <div className="ps-3">
                    <input 
                        type="file" 
                        id="profile" 
                        className="d-none" 
                        aria-label="Your Avatar"
                        accept="image/*"
                        ref={profilePictureRef}
                        onChange={onAvatarChange}
                    />
                    <label htmlFor="profile" className="btn btn-default rounded-pill">Change image</label>
                </div></div>
                <h5>{user?.username ? `@ ${user.username}`: 'Your Name...'}</h5>
                <h6 style={{color: "#d6ccc2"}}>Total Credit: 30 Days / 20 Days Left</h6>
                <div className="row mx-auto" style={{width: "250px"}}>
                    <div className="col-6"><button type="button" className="btn btn-outline-success btn-sm" data-bs-toggle="modal" data-bs-target="#addCredit">Add Credit</button></div>
                    <div className="col-6"><button type="button" className="btn btn-outline-success btn-sm" data-bs-toggle="modal" data-bs-target="#shareCredit">Share Credit</button></div>
                </div>
            </div>
        </div>
        </>
    )
}

export default DashboardHeader