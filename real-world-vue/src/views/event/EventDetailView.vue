<script setup lang="ts">
import  { type EventItem } from '@/type';
import type { ref, PropType } from 'vue'
import EventService from '@/services/EventService'
import { useRouter } from 'vue-router';
import { useMessageStore } from '@/stores/message';



const props = defineProps({
    event: {
        type: Object as PropType<EventItem>,
        require: true
    }
})


// EventService.getEventById(Number(props.id)).then((response) => {
//     event.value = response.data
// }).catch(error => {
//     console.log(error)
// })
const router = useRouter()
const store = useMessageStore()
function edit() {
    store.updateMessage('You are successfully edited for ' + props.event?.title)
    setTimeout(() => {
        store.resetMessage()
    }, 3000)
    router.push({
        name: 'event-detail',
        params: {
            id: props.event?.id
        }
    })
}
</script>

<template>
    <div>
        <div v-if="event">
            <!-- <h1>{{ event.title }}</h1> -->
            <!-- <div id="nav">
                <RouterLink :to="{ name: 'event-detail', params: { id } }">Details</RouterLink>
                <RouterLink :to="{ name: 'event-register', params: { id } }">Register</RouterLink>
                <RouterLink :to="{ name: 'event-edit', params: { id } }">Edit</RouterLink>
            </div> -->
            <p>{{ event.time }} on {{ event.date }} @ {{ event.location }}</p>
            <p>{{ event.description }}</p>
        </div>
        <span>{{ event }}</span>
    </div>
</template>