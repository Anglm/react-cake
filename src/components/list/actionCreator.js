import {LISTDATA} from "../../store/actionType"
import axios from 'axios'
export default{
    listData(){
        return (dispatch) => {
            axios.get("http://rap2api.taobao.org/app/mock/231812/list").then((res)=>{
                dispatch({
                    type:LISTDATA,
                    list:res
                })
            })
        }
    }
}