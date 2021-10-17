<template>
    <center>
        <div class="card">
            <table>
                <tr>
                    <th class="table_outer_r"> Title </th>
                    <th class="spacer"> Poster </th>
                    <th class="table_outer_l"> Posted on </th>
                </tr>
                <tr v-for="dox in this.list" :key="dox.id">
                    <td class="table_outer_r"> <router-link :to="{name: 'Dox', params: {id: dox.id}}"> {{ dox.title }} </router-link> </td>
                    <td> Anonymous </td>
                    <td class="table_outer_l"> {{ dox.posted_on }} </td>
                </tr>
            </table>
        </div>
    </center>
</template>

<script>
export default {
    name: 'DoxList',
    props: {
        list: []
    }
}
</script>

<style scoped>
    .card {
        padding: 20px;
        width: auto;
        max-width: 50%;
        height: auto;
        border-radius: 8px;
    }

    @media all and (min-width:100px) and (max-width: 1024px) {
        .card {
            padding: 20px;
            width: auto;
            max-width: 75%;
            height: auto;
            border-radius: 8px;
        }
    }

    .spacer {
        margin-right: 10px;
    }
</style>