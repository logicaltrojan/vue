import Vue from 'vue';
import Vuex from 'vuex';
import SearchApi from '../api/SearchAPI'
import Constant from '../Constant'

Vue.use(Vuex);

const store = new Vuex.Store({

    state : {
        listdata: [{
            'no' : '123',
            'name' : 'test'
        }]
    },
    mutations : {
        [Constant.FETCH_CONTACTS] : (state, payload) =>{
            state.listdata = payload.listdata;
        }
    },
    getters : {
        listdata(){
            return state.listdata;
        }
    },
    actions : {
        [Constant.FETCH_CONTACTS] : (store, payload)=>{
            SearchApi.fetchContacts()
            .then((res)=> {
                console.log('dipatcheingA');
                store.commit(Constant.FETCH_CONTACTS, { listdata : res.data.contacts})
            })
            .catch((e) => {
                console.log("FAILED TO FETCH" , e)
            }
            )
        }
    }
});

export default store;