import axios from 'axios';
import { API } from "../App";

export const getAirports = async () => {
  try {
    const response = await axios.get(`${API}/airports`);
    return response.data;
  } catch (error) {
    console.error('Error fetching airports:', error);
    throw error;
  }
};

export const getPilots = async () => {
  try {
    const response = await axios.get(`${API}/pilots`);
    return response.data;
  } catch (error) {
    console.error('Error fetching pilots:', error);
    throw error;
  }
};