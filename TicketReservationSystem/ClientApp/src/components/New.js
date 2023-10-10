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
export default function New (props)
{
    const addNewTrain =()=>{
        console.log("The New Train Is: ",entry)

        fetch("api/train", {
            method:"POST",
            body: JSON.stringify(entry),
            headers:{
                "content-type":"application/json"
            }
        }).then(r=> {
            console.log("Response from backend for add new train: ",r)
            window.location="/"
        }).catch(e=>console.log("error adding new train: ",e))
    }
    const newData = (e)=> {
        const name_ = e.target.name;
        let v_ = e.target.value
        if(name_ === "date"){
            v_ = new Date(v_)

        }
        if(name_ === "type"){
            v_ = new Number(v_)

        }
        if(name_ === "isAvailable"){
            v_ = v_ === "true"

        }
        entry[name_] = v_
        console.log("The New Train Is: ",entry)
    }
    return (
        <section className="centered-form">
          <div className="form-container">
            <h1>Add New Train Schedule</h1>
            <div className="input-container">
              <label htmlFor="tn">
                <i className="fas fa-train"></i> Train Name
              </label>
              <input type="text" name="trainName" id="tn" onChange={newData} />
            </div>
            <div className="input-container">
              <label htmlFor="tnu">
                <i className="fas fa-hashtag"></i> Train Number
              </label>
              <input type="text" name="trainNumber" id="tnu" onChange={newData} />
            </div>
            <div className="input-container">
              <label htmlFor="ty">
                <i className="fas fa-subway"></i> Type
              </label>
              <select name="type" id="ty" onChange={newData}>
                <option value={1}>Intercity Train</option>
                <option value={0}>Express Train</option>
              </select>
            </div>
            <div className="input-container">
              <label htmlFor="ro">
                <i className="fas fa-route"></i> Route
              </label>
              <input type="text" name="route" id="ro" onChange={newData} />
            </div>
            <div className="input-container">
              <label htmlFor="da">
                <i className="far fa-calendar-alt"></i>Date
              </label>
              <input type="date" name="date" id="da" onChange={newData} />
            </div>
            <div className="input-container">
              <label htmlFor="ti">
                <i className="far fa-clock"></i> Time
              </label>
              <input type="text" name="time" id="ti" onChange={newData} />
            </div>
            <div className="input-container">
              <label htmlFor="av">
                <i className="fas fa-subway"></i> Availability
              </label>
              <select name="isAvailable" id="av" onChange={newData}>
                <option value="true">Available</option>
                <option value="false">Cancelled</option>
              </select>
            </div>
            <div className="button-container">
              <div className="btn cancel" onClick={() => (window.location = "/")}>
                Cancel
              </div>
              <div className="btn add" onClick={addNewTrain}>
                Add
              </div>
            </div>
          </div>
        </section>
      );
      
}