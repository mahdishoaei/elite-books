<template>
    <v-sheet
        style="background: none;"
    >
        <v-slide-group
            v-model="model"
            class="pa-4"
            selected-class="bg-success"
            show-arrows
        >
            <v-slide-group-item
                v-for="item in managersInfo"
               :key="item.id"
            >
                <ManagersCard 
                 :name="item.name"
                 :position="item.position" 
                 :img="item.img" 
                 class="mx-3 mt-3 mb-3" 
                 />
            </v-slide-group-item>
        </v-slide-group>
    </v-sheet>
</template>

<script setup>
import { managerDS } from '@/stores/managerData'
const manager = managerDS()

const managersInfo = computed(()=>{
     return manager.managers
    
})
const model = ref(null);
</script>