import axios from "axios";
import React, {useState,useEffect,} from "react";

export default function UsersDetail({activeUserId}) {
    const[usersDetail,setUsersDetail] = useState(null);
    const[loading,setLoading]=useState(false);
    useEffect(()=>{
      setLoading(true);
      axios(`https://jsonplaceholder.typicode.com/users/${activeUserId}`)
      .then((res)=> setUsersDetail(res.data))
      .finally(()=> setLoading(false));
    },[activeUserId]);


    return (
    <div> 
        <strong>Kullanıcı Bilgileri</strong>

        {loading && <div> Bilgiler Yükleniyor...</div>}

        {!loading && <pre>{JSON.stringify(usersDetail,null,2)}</pre>}
        


            

    </div>
  );
}
