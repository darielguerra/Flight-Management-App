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