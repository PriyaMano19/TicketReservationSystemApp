import { useEffect, useState } from "react";


export default function Home() 
{

const editIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="currentColor"
    className="bi bi-pencil"
    viewBox="0 0 16 16"
  >
    <path d="M11.293 0.293a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1 0 1.414l-10 10a1 1 0 0 1-.39.242l-3 1a1 1 0 0 1-1.266-1.267l1-3a1 1 0 0 1 .242-.391l10-10z" />
    <path
      fillRule="evenodd"
      d="M10.854 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.39.243l-3 1a.5.5 0 0 1-.628-.628l1-3a.5.5 0 0 1 .243-.39l10-10z"
    />
    <path
      fillRule="evenodd"
      d="M2.5 13a.5.5 0 0 0 .5.5H13a.5.5 0 0 0 0-1H3a.5.5 0 0 0-.5.5z"
    />
  </svg>
);

const deleteIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="currentColor"
    className="bi bi-trash"
    viewBox="0 0 16 16"
  >
    <path
      fillRule="evenodd"
      d="M2.5 1a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H13l-.439 9.295A2 2 0 0 1 11.564 12H4.436a2 2 0 0 1-1.997-1.705L2 2H1.5a.5.5 0 0 1-.5-.5zM5.293 14.293a1 1 0 0 0 1.414 0L8 11.707l1.293 1.293a1 1 0 1 0 1.414-1.414L9.414 10l2.293-2.293a1 1 0 1 0-1.414-1.414L8 8.293 6.707 7 5.414 8.293a1 1 0 1 0 1.414 1.414L8 9.707l1.293 1.293a1 1 0 0 0 1.414-1.414L9.414 8l2.293-2.293a1 1 0 0 0-1.414-1.414L8 6.293 6.707 5 5.414 6.293a1 1 0 0 0 1.414 1.414L8 7.707l1.293 1.293a1 1 0 0 0 1.414-1.414L9.414 10l2.293-2.293a1 1 0 0 0-1.414-1.414L8 8.293 6.707 7 5.414 8.293a1 1 0 0 0 1.414 1.414L8 9.707l1.293 1.293a1 1 0 0 0 1.414-1.414L9.414 10l2.293-2.293a1 1 0 0 0-1.414-1.414L8 7.293 6.707 6l-1.5 1.5a1 1 0 0 0 1.414 1.414L8 8.707l1.293 1.293a1 1 0 0 0 1.414-1.414L9.414 11l1.293 1.293a1 1 0 0 0 1.414-1.414L10.414 10l1.293-1.293a1 1 0 0 0-1.414-1.414L8 6.707l-1.293-1.293a1 1 0 0 0-1.414 1.414L6.586 10 5.293 11.293a1 1 0 0 0-1.414-1.414L4.586 10l-1.293-1.293a1 1 0 1 0-1.414 1.414L2.414 11H1.5a.5.5 0 0 0 0 1 .5.5 0 0 0 .5.5H2h1h1.293a1 1 0 0 0 1.414-1.414L4.586 12 3.293 13.293a1 1 0 0 0 1.414 1.414L5 13h6a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3z"
    />
  </svg>
);


  const [trains,setTrains] = useState([]);
  const [tid,setTid] = useState("");
  const handleModal = (hide)=> {
    const deleteModal = document.querySelector(".delete-modal")
    if(deleteModal){
      if(hide){
        deleteModal.classList.add("hidden")
      }else {
        deleteModal.classList.remove("hidden")
      }
      
    }
  }
  const openDeleteModal = (id) => {
    setTid(id)
   handleModal(false)
  }
  const deleteTrain =()=> {
    // console.log("The train id: ",tid)
    // return
    fetch("api/train/" + tid, {
      method:"DELETE",
      
  }).then(r=> {
      console.log("Response from delete a  train: ",r)
     handleModal(true)
     window.location.reload()
  }).catch(e=>console.log("error deleting a train: ",e))
  }

  useEffect(()=> {
    fetch("api/train", { timeout: 20 }).then(r=> r.json()).then(d=>{
      console.log("The Trains are: ",d)
      setTrains(d)
    }).catch(e=>console.log("The error fetching all trains: ",e))
  },[])



return (
  <main>
    <h1 className="centered-heading">Schedule Train Details</h1>
    <a href="/new" className="add-train-button">
      <i className="fas fa-plus"></i> Add Train
    </a>

    <table>
      <thead>
        <tr>
          <th className="header-cell">Train Name</th>
          <th className="header-cell">Train Number</th>
          <th className="header-cell">Type</th>
          <th className="header-cell">Route</th>
          <th className="header-cell">Date</th>
          <th className="header-cell">Time</th>
          <th className="header-cell">Availablility</th>
          <th className="header-cell">Edit</th>
          <th className="header-cell">Delete</th>
        </tr>
      </thead>
      <tbody>
        {trains.length === 0 ? (
          <tr>
            <td colSpan="9">
              <div className="row waiting">
                <div>Loading</div>
                <div className="loading">...</div>
              </div>
            </td>
          </tr>
        ) : (
          trains.map((train) => (
            <tr key={train.id}>
              <td>{train.trainName}</td>
              <td>{train.trainNumber}</td>
              <td>{train.type === 0 ? "Express Train" : "Intercity Train"}</td>
              <td>{train.route}</td>
              <td>{train.date.split("T")[0]}</td>
              <td>{train.time}</td>
              <td>
                <span className={`status-text ${train.isAvailable ? 'Available' : 'cancelled'}`}>
                  {train.isAvailable ? 'Available' : 'Cancelled'}
                </span>
              </td>
              <td>
                <a href={"/edit?id=" + train.id} className="edit-button">
                  {editIcon} Edit
                </a>
              </td>
              <td onClick={() => openDeleteModal(train.id)} className="delete-button">
                {deleteIcon} Delete
              </td>
            </tr>
          ))
        )}
      </tbody>
    </table>
    <section className="delete-modal hidden">
      <div className="modal-item">
        <h3>Delete Train</h3>
        <p>Are you sure you want to delete this train?</p>
        <div className="button-container">
          <div className="btn cancel" onClick={() => handleModal(true)}>
            Cancel
          </div>
          <div className="btn delete delete-button" onClick={deleteTrain}>
            Delete
          </div>
        </div>
      </div>
    </section>
  </main>
);

   
  }

