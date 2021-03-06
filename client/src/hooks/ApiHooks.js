import React from 'react';
import axios from 'axios';

const postPicture = async (picture_name, picture_image, post_id) => {
    console.log("postPicture started");
    try {
        const resp = await axios.post('api/post/picture', {
            params: {
                picture_name: picture_name,
                picture_image: picture_image,
                post_id: post_id
            }
        });
        console.log("RESP from postPicture: " + resp);
    } catch (e) {
        console.log("Error: " + e.message);
    }
}



const getPost = async (postId) => {
    console.log("getPost started");
    try {
    const resp = await axios.get('api/get/onepost', {
        params: {
            post_id: postId
        }
    });
    console.log("RESP from getPost " + resp.data);
    //console.log("json from getPost " , "deprecated");
    console.log("parse " + JSON.stringify(resp.data));
    return resp;
} catch (e) {
    console.log("Error: " + e.message);
}
};

const getAllPosts = async () => {
    console.log("getAllPosts started");
    try {
        const resp = await axios.get('api/get/allposts', {
        });
        console.log("RESP from getAllPosts " + resp.data.length);
        return resp;
    } catch (e) {
        console.log("Error: " + e.message);
    }
};

const postOnePost = async (title, post_body, user_id, username ) => {
    console.log("postOnePost started");
    try {
        const params = {
            title: title,
            post_body: post_body,
            user_id: user_id,
            username: username
          }
        const resp = await axios.post('api/post/posttodb', params);
        console.log("Resp from postOnePost" + resp);
        return resp;
    } catch (e) {
        console.log("Error: " + e.message);
    };
};

const editOnePost = async (title, post_body, user_id, post_id, username) => {
    console.log("edit post started" + title, post_body, user_id, post_id, username);
    try {
        const params = {
            title: title,
            post_body: post_body,
            user_id: user_id,
            post_id: post_id,
            username: username
          }
          const resp = await axios.put('api/put/updatepost', params);
          console.log("Resp from update post " + resp);
          return resp
    } catch (e) {
        console.log("Error: " + e.message);
    }
}

const Login = async (username, password) => {
    console.log("Login started");
    try {
        const params = {
            username: username,
            password: password
        }
        const resp = await axios.post('api/post/login', params)
        console.log("Resp from Login " + resp);
        return resp;
    } catch(e) {
        console.log("Errorrrrrr: " + e.message);
    }
}

export  {
    getPost,
    getAllPosts,
    postOnePost,
    editOnePost,
    postPicture,
    Login
}