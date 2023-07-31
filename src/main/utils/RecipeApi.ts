import axios from "axios";

const RecipeApi = axios.create({
  baseURL:'https://master-7rqtwti-yj2le3kr2yhmu.uk-1.platformsh.site/yumazoo/',
  timeout: 3000,
  headers: {
    'Access-Control-Allow-Origin': '*', 
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
    Accept: "application/json;charset=UTF-8",
    dataType: "json",
    "Content-Type": "json",
  },
});

export default RecipeApi;
