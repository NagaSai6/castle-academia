import React, { useEffect, useState } from "react";
import CRTModuleSection from "../../components/CoursersOverView/CRTModuleSection/CRTModuleSection";
import AbroadModuleSection from "../../components/CoursersOverView/AbroadModuleSection/AbroadModuleSection";
import StartUpModuleSection from "../../components/CoursersOverView/StartUpModuleSection/StartUpModuleSection";
import axios from "axios";
import { MutatingDots} from "react-loader-spinner";

export default function CoursesOverView() {
  const [dataLoaded,setDataLoaded] = useState(false);
  const [crt_coursesData, setcrt_CoursesData] = useState({});
  const [startup_coursesData, startup_CoursesData] = useState({});
  const [abroad_coursesData, abroad_CoursesData] = useState({});
  useEffect(() => {
    const configuration = {
      method: "get",
      url: "https://castle-academia-server.onrender.com/courses-overview",
    };
    axios(configuration).then((res) => {
      let data = res.data.data; // array of different courses
      setDataLoaded(true);
       data.map((item) => {
        if (item.category === "crt-module") {
          setcrt_CoursesData(item)
        } else if(item.category === "startup-module"){
          startup_CoursesData(item)
        }else if(item.category === 'abroad-module'){
          abroad_CoursesData(item)
        }
      });
    });
  }, []);
  let dom ;

  return (
      <div>
        {dataLoaded ?  <div>
    <CRTModuleSection crt_data={crt_coursesData}/>
    <StartUpModuleSection startup_data={startup_coursesData}/>
    <AbroadModuleSection abroad_data={abroad_coursesData}/>
  </div> : <div style={{marginTop : '100px',display:'flex',justifyContent :'center',height : '90vh',width:'100%',alignContent : 'center'}}><MutatingDots secondaryColor= '#fdd03b' color="#fdd03b" /> </div>}
      </div>
  );
}
