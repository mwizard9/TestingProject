import { useSelector, useDispatch } from "react-redux";
import { MdDeleteForever } from "react-icons/all.js";
import { removeUser } from "../Store/Slice/UserSlice";

const DisplayUser = () => {
    const dispatch = useDispatch();
    const data = useSelector((state) => {
        return state.users;
    })
    const deleteUser = (id) => {
        dispatch(removeUser(id))
    }

    console.log(data)

    return <>
        {
            data.map((user, id) => {
                return <li key={id}>
                    {user}
                    <button className="btn-delete" style={{ margin: '20px' }} onClick={() => deleteUser(id)} >
                        <MdDeleteForever className="delete-icon" />
                    </button>
                </li>
            }
            )
        }
    </>
}

export default DisplayUser