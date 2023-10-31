import { useDispatch, useSelector } from "react-redux";
import React, { useState, useEffect } from "react";
import { addTodo } from "../../features/Todo";



const AddTodo = () => {




    const dispatch = useDispatch();


    const { workObj } = useSelector((store) => store.Todo)
    const [value, setValue] = useState('');


    const updateObj = workObj?.find((item) => item?.update === true);
    console.log(updateObj, "updateobj")



    const handleSubmit = (e) => {
        e.preventDefault();

        if(value !== '' || value === undefined){

            if (updateObj !== undefined && updateObj.update) {
                dispatch(addTodo({ ...updateObj, name:value}));
    
                setValue('');
            }
            else {
                dispatch(addTodo(value));
                setValue('');
            }
    
        }

       


    }




    
    useEffect(() => {


        if (updateObj?.update === true) {
            setValue(updateObj.name);

        }


    }, [updateObj])



    return (<>Add Todd:
        <form>
            <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
            <button type="submit" onClick={handleSubmit} >ADD</button>
        </form>

    </>)

}

export default AddTodo;