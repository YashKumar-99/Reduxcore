import axios from "axios";
import { useSelector } from "react-redux";

const INCREMENT = 'ACTION/INCREMENT';
const PADDINGAMOUNTAPI = 'ACTION/PANDDINGAMOUNT';
const FULLFILLEDAMOUNTAPI = 'ACIION/FULLFILLEDAMOUNT';
const REJECTEDAMOUNTAPI = 'ACITON/REJECTEDAMOUNTAPI';
const INCREMENTAMOUNTBYBONUS = 'ACTION/INCREMENTAMOUNTBYBONUS';



const  {amountReducer}= useSelector((store)=>store);

const INCBONUS = 'ACTION/INCBONUS'

export function incrementAmount() {
    return { type: INCREMENT }
}

export function incrementBonus() {
    return { type: INCBONUS }
}


function Panddingamount() {
    console.log('calling panding')

    return { type: PADDINGAMOUNTAPI }

}
function Rejectedamount() {
    console.log('REjected')

    return { type: REJECTEDAMOUNTAPI }

}

function fullfiledamout(amount) {
    console.log('fullfilled!!');

    return { type: FULLFILLEDAMOUNTAPI, payload: amount }

}


export function incrementBonusByAmount() {
    console.log("incrementbonusbyaccount")


    return { type: INCREMENTAMOUNTBYBONUS }
}




export function callTheApi() {

    console.log("entered!!")

    return async (dispatch) => {

        try {
            dispatch(Panddingamount());
            console.log('hello world')
            // await axios.get(`http://localhost:3000/accounts/1`).then((res) => {

            //     const { amount } = res.data;
            //     dispatch(fullfiledamout(amount));
            // })

            const res = await axios.get(`http://localhost:3000/accounts/2`);


            const { amount } = res.data;

            dispatch(fullfiledamout(amount))



            // console.log(res)


        } catch (error) {
            dispatch(Rejectedamount());
        }




    }

}

export { INCREMENT, INCBONUS, PADDINGAMOUNTAPI, FULLFILLEDAMOUNTAPI, REJECTEDAMOUNTAPI, INCREMENTAMOUNTBYBONUS }