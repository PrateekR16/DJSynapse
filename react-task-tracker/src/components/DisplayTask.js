
import {FaTimes,FaCheck} from 'react-icons/fa'
const DisplayTask = ({tasks,onDelete}) => {
    return (
        <>

            {tasks.map((task) => (
                <div key={task.id}>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Date</th>
                                <th scope="col">Time</th>
                                 <th scope="col">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{task.text}</td>
                                <td>{task.date}</td>
                                <td>{task.time} minutes</td>
                                <td ><FaTimes className="delete" onClick={()=>onDelete(task.id)}/> <FaCheck className="complete"/> </td>
                            </tr>
                        </tbody>
                    </table>

                </div>

            ))}


        </>
    )
}

export default DisplayTask
