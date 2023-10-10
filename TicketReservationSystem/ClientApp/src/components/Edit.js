import { useState ,useEffect } from "react";
const entry = {
    id:"",
    trainName:"",
    trainNumber:"",
    type:0,
    route:"",
    date:new Date(),
    time:"",
    isAvailable:false,
    
    };
export default function Edit (props)
{
    const [data, setData] = useState({});
    const [type,setType]=useState(0);
    const [tid,setTid]=useState("");
    const [isAvailable,setIsAvailable]=useState(false);
    const updateTrain =()=>{
        console.log("The New Train Is: ",entry)

        fetch("api/train/" + tid, {
            method:"PUT",
            body: JSON.stringify(entry),
            headers:{
                "content-type":"application/json"
            }
        }).then(r=> {
            console.log("Response from update a  train: ",r)
            window.location="/"
        }).catch(e=>console.log("error updating a train: ",e))
    };
    const newData = (e)=> {
        const name_ = e.target.name;
        let v_ = e.target.value
        if(name_ === "date"){
            v_ = new Date(v_)

        }
        if(name_ === "type"){
            v_ = new Number(v_)
            setType(v_)

        }
        if(name_ === "isAvailable"){
            v_ = v_ === "true"
            setIsAvailable(v_)
        
        }
        entry[name_] = v_
       
    };
    useEffect(()=> {
        let id_ = window.location.search
        if(id_){
            id_ = id_.split("=")[1]
        }
        if(id_){
            setTid(id_)
        fetch("api/train/" + id_).then(r=> r.json()).then(d=>{
            console.log("Train for update: ",d)
            setType(d.type)
            setIsAvailable(d.isAvailable)
            setData(d) 
            Object.assign(entry, d)
        }).catch(e=>console.log("Error getting train for update: ",e))
}},[])
return (
    <section className="centered-form">
      <div className="form-container">
        <h1>Update Train Schedule</h1>
        <div className="input-container">
          <label htmlFor="tn">
            <i className="fas fa-train"></i> Train Name
          </label>
          <input type="text" name="trainName" id="tn" defaultValue={data.trainName} onChange={newData} />
        </div>
        <div className="input-container">
          <label htmlFor="tnu">
            <i className="fas fa-hashtag"></i> Train Number
          </label>
          <input type="text" name="trainNumber" id="tnu" defaultValue={data.trainNumber} onChange={newData} />
        </div>
        <div className="input-container">
          <label htmlFor="ty">
            <i className="fas fa-subway"></i> Type
          </label>
          <select name="type" value={type} id="ty" onChange={newData}>
            <option value={1}>Intercity Train</option>
            <option value={0}>Express Train</option>
          </select>
        </div>
        <div className="input-container">
          <label htmlFor="ro">
            <i className="fas fa-route"></i> Route
          </label>
          <input type="text" name="route" id="ro" defaultValue={data.route} onChange={newData} />
        </div>
        <div className="input-container">
          <label htmlFor="da">
            <i className="far fa-calendar-alt"></i> Date
          </label>
          <input type="date" name="date" id="da" defaultValue={data.date ? data.date.split("T")[0] : ''} onChange={newData} />
        </div>
        <div className="input-container">
          <label htmlFor="ti">
            <i className="far fa-clock"></i> Time
          </label>
          <input type="text" name="time" id="ti" defaultValue={data.time} onChange={newData} />
        </div>
        <div className="input-container">
              <label htmlFor="av">
                <i className="fas fa-subway"></i> Availability
              </label>
              <select name="isAvailable" id="av" value={isAvailable} onChange={newData}>
                <option value="true">Available</option>
                <option value="false">Cancelled</option>
                </select>

            </div>
        <div className="button-container">
          <div className="btn cancel" onClick={() => (window.location = "/")}>
            Cancel
          </div>
          <div className="btn update" onClick={updateTrain}>
            Update
          </div>
        </div>
      </div>
    </section>
  );
  
}