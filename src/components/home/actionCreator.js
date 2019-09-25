import {HOMEDATA} from '../../store/actionType'
import axios from 'axios'
export default {
    homeData(){
        return (dispatch) => {
            axios.get("http://rap2api.taobao.org/app/mock/231812/home").then((res=>{
                dispatch({
                    type:HOMEDATA,
                    list:res
                })
            }))
        }
    }
}