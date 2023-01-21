
import axios from "axios";

const BASE_URL = "https://api.itbook.store/1.0/search/mongodb";


const getBooks=async() =>{
  const response =await axios.get(BASE_URL);
  console.log(response.data);
  return response.data.books;
}
export default getBooks;