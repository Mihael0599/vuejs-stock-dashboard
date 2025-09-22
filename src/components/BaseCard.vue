<template>
    <div class="card">
        <slot>
        </slot>
    </div>
</template>

<script>
import { stockService } from './services/stockService.js';
export default {
    name: "BaseCard",
    data() {
        return {
            data: []
        }
    },
    async created() {
        this.data = await stockService.getRevenue('$AAPL');
        console.log(this.data);
    }
}
</script>

<style>
.card {
    background-color: #011F35;
    border-radius: 16px;
    padding: 24px 32px;
}
</style>