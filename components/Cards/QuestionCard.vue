<template>
    <v-card tile flat >
        <v-card-title v-if="search" >
            <v-text-field
                solo
                flat
                light
                class="pa-0"
                label="Search Questions.."
                prepend-icon="search"
                append-icon="close"
                :append-icon-cb="() => (search = !search)"
            ></v-text-field>
        </v-card-title>
        <v-card-title v-else >
            <div class="title" >Questions and Answers</div>
            <v-spacer></v-spacer>
            <v-btn flat icon color="info" @click="search = !search" >
                <v-icon>search</v-icon>
            </v-btn>
        </v-card-title>
        <customer-question-card v-for="i in 6" :key="i" />
        <v-card-actions>
            <v-btn flat color="info" >View all 10 Questions</v-btn>
            <v-spacer></v-spacer>
            <v-btn icon ><v-icon>add</v-icon></v-btn>
        </v-card-actions>
        <v-divider></v-divider>
        <v-card-title>
            <div class="caption">Didn't get the right answer you were looking for</div>
            <v-spacer></v-spacer>
            <v-btn >Post Ques</v-btn>
        </v-card-title>
    </v-card>
</template>
<script>
export default {
    
}
</script>

<script>
export default {
    data () {
        return {
            search: false
        }
    }
}
</script>
