import axios from 'axios';

export function fetchData(param) {
    const { page = 1, limit = 12, make = '', rentalPrice = '', mileageFrom = '', mileageTo = '' } = param;
    return axios.get(`http://localhost:3001/cars?page=${page}&limit=${limit}&make=${make}&rentalPrice=${rentalPrice}&mileageFrom=${mileageFrom}&mileageTo=${mileageTo}`);
    // return axios.get(`https://654bdcd15b38a59f28efd201.mockapi.io/data?page=${page}&limit=${limit}&make=${make}&rentalPrice=${rentalPrice}`);
}