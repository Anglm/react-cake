import {DETAILDATA} from "../../store/actionType"
import axios from 'axios'
export default{
    detailData(){
        return (dispatch) => {
            axios.get("http://rap2api.taobao.org/app/mock/231812/detail/get").then((res)=>{
                dispatch({
                    type:DETAILDATA,
                    list:res
                })
            })
        }
    }
}