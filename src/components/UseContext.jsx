import { createContext, useState , useEffect } from "react";
import axios from "axios";
import { auth } from "../Firebase_auth"

const Store_context = createContext();

export default Store_context;

export const Store_x = ({ children }) => {
  const [cards, getcards] = useState([]);  //value cards
  const [addcards, setadd] = useState([]); //arrat add card 
  const [currentUser, setCurrentUser] = useState('') //get email user logi 

  const [Base, getBase] = useState([]);  //basec data 
   //function get data
  const Get_cards = async () => {
    const { data } = await axios.get(
      `https://fakestoreapi.com/products`
    );

    getcards(data)
    console.log('dara' , data)
    getBase(data)

  };

  //change data in page home
  const changeData = async (cat) =>{
    const changes = await Base.filter((x) => x.category === cat );
    getcards( changes);
    
  }
  //top_rate 
  const top_rate = async () =>{
    const changes = await Base.filter((x) => x.rating.rate >= 4 );
    getcards( changes);
    
  }
  //top_count
  const top_count = async () =>{
    const changes = await Base.filter((x) => x.rating.count >= 450 );
    getcards( changes);
    
  }

 //delateitem in card
  const  delateitem = async(item)=> {
    const change = await addcards.filter((x) => x.id !== item);
    setadd(change);
  }


  function signup(email, password) {
    return auth.createUserWithEmailAndPassword(email, password)
  }
//login by fire base
  const  login = (email, password) =>{
    setCurrentUser(email)
    return auth.signInWithEmailAndPassword(email, password)
  }

 
  function logout() {
    return auth.signOut()
  }
  


  useEffect(()  => {
    Get_cards()
    
  

    
  }, [])

  console.log('here curent',currentUser)
 


//  pass data by store 
  let contextData = {
    cards,
    changeData,
    addcards,
    setadd,
    delateitem,
    top_rate,
    top_count,
    login,
    currentUser,
    logout,
    signup,
    setCurrentUser
  }

  return (
    <Store_context.Provider value={contextData}>
      {children}
    </Store_context.Provider>
  );
};
