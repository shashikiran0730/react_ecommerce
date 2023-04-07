import { useContext } from "react";
import { mycontext } from "../App";

export const Specifications = () => {
  const [, , , , pid, setpid] = useContext(mycontext);
  console.log(pid.specifications);
  return (
   
       <div>
        {
            pid.images.map((i)=>(
                <img src={i}></img>
            ))
        }
        {
            pid.specifications.map((i)=>(
                <div>{i}</div>
            ))
        }
       </div> 
    
  );
};
