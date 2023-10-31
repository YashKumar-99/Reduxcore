import { useSelector, useDispatch } from "react-redux";
import { MdFindReplace } from 'react-icons/md';
import { AiFillDelete } from 'react-icons/ai';
import { getValueInInput,deleteTodoItem } from "../../features/Todo";


import { useEffect } from "react";

const ShowTodo = () => {


    const { workObj } = useSelector((store) => store.Todo);
    const dispatch = useDispatch();

    console.log(workObj, "workObj")

    const updateHanlder = (id) => {

        dispatch(getValueInInput(id));
    }


    




   

    return (<>

        <p>ShowTodo....</p>


        {
            ((workObj?.length) > 0) && workObj?.map((item) => {
                return (<>
                    <p> {item.id}  :  {item.name} <MdFindReplace onClick={() => updateHanlder(item.id)} /> <br></br><br></br><br></br><br></br><br></br><br></br><AiFillDelete onClick={()=>dispatch(deleteTodoItem(item.id))} /></p>

                </>

                )
            })
        }

    </>)

}

export default ShowTodo;