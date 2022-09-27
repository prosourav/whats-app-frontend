import axios from "axios";

const url = "http://localhost:8001/api/v1";

export const addUser = async (data) => {
  try {
    await axios.post(`${url}/user/addUser`, data);
  } catch (e) {
    console.log("error", e);
  };
};

export const getUsers = async () => {
  try {
    const { data } = await axios.get(`${url}/user/getUsers`);
    return data;
  } catch (err) {
    console.log(err);
  };
};

export const setConversation = async (data) => {
  try {
    await axios.post(`${url}/user/conversation/add`, data);
  } catch (err) {
    console.log(err);
  };
};

export const getConverSationId = async (data) => {
  try {
    const response = await axios.post(`${url}/user/conversation/getConversationId`, data);
    return response?.data;
  } catch (err) {
    console.log(err);
  };
};

export const sendMessage = async (data) => {
  try {
    await axios.post(`${url}/user/conversation/sendMsg`, data);
  } catch (err) {
    console.log(err);
  };
};

export const fetchAllMessages = async (id) => {
  try {
    const response = await axios.post(`${url}/user/conversation/getMessages/${id}`);
    return response;
  } catch (err) {
    console.log(err);
  };
};


