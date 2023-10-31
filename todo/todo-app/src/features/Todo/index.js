import { createSlice, createAction } from "@reduxjs/toolkit"

import { v4 as uuidv4 } from 'uuid';
const initialState = {
    workObj: [],
    status: true
}








const TodoSlice = createSlice({
    name: 'Todo',
    initialState,
    reducers: {

        addTodo: (state, action) => {
            console.log("hello", action.payload);
            const { update, name, id } = action?.payload;

            console.log(name, "names id  here", id)


            if (update) {

                console.log("Are we here??", state.workObj)
                // state.workObj.find((item))
                // state.workObj = [...state.workObj, { name: name, id: id, update: false }];
                state.workObj.map((item) => {

                    if (item.id === id) {
                        console.log(item.name, "vs", name)

                        item.id = id;
                        item.name = name;
                        item.update = false;
                        return;
                    }

                })



            }
            else {
                const newId = uuidv4();
                console.log(newId, "newId")

                state.workObj = [...state.workObj, { name: action.payload, id: newId }]

            }


        },
        getValueInInput: (state, action) => {
            console.log("enteredagain")

            const Id = action.payload;
            console.log(Id, "ids")

            // state.workObj= state.workObj.find((item) => {
            //    if(item.id === Id){
            //        return [...state.workObj,{payload:item.id}]

            //    } 


            // });

            const newState = state.workObj.find((item) => {

                if (item.id == Id) {
                    console.log("entered")

                    item.update = true;

                }
                else {
                    item.update = false;



                }


            })

            // console.log(newState, "newwState") //go into the deep and check please whats goig on





            // state.workObj=[...state.workObj,...{updateId:uniqueOjb.id}]

            // if (uniqueOjb) {


            //     return uniqueOjb


            // 



        },

        deleteTodoItem: (state, action) => {

            const id = action.payload;

            console.log(id, "deleid")


            // const findUser = state.workObj.find((item) => item.id === id)
            // console.log(findUser,"finduser");






            // state.workObj.find((item) => {
            //     console.log(item,"item")

            //     if (item.id !== id) {
            //          item;
            //     }


            // })

            state.workObj = state.workObj.filter((item) => {
                if (item.id !== id) {
                    return item;
                }
            })






            // console.log(state);



        }



    }


})



export const { addTodo, getValueInInput, deleteTodoItem } = TodoSlice.actions;

console.log(TodoSlice)


export default TodoSlice.reducer;