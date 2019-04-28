<template>
    <div>
    <v-data-table
        :headers="headers"
        :items="listdata"
        hide-actions
        class="elevation-1"
        search="search"
    >
        <template v-slot:items='props'>
            <td>{{props.item.no}}</td>
            <td>{{props.item.name}}</td>
            <td>{{props.item.tel}}</td>
            <td>{{props.item.address}}</td>
        </template>
        
    </v-data-table>
    <button @click='getinfo()'>Click me ! </button>
   </div> 
</template>


<script>
import Constant from '../Constant'
import {mapState} from 'vuex'

export default {
    name : "ContactList",
    created : function(){
        this.$store.dispatch(Constant.FETCH_CONTACTS);
    },
    computed : {
        listdata() {
            return this.$store.state.listdata;
        }
    },
    data() {
        return {
            headers : [
                {
                    text : 'Contact List',
                    align : 'left',
                    sortable : false,
                    value : 'name' 
                },
                {text : 'No', value : 'no'},
                {text : 'Name', value : 'name'},
                {text : 'tel', value : 'tel'},
                {text : 'address', value : 'address'},
            ]
        }
    }

}
</script>


<style scoped>

</style>