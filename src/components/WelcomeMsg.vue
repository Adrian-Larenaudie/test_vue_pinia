<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
    </div>
</template>

<script>
export default {
    name: 'WelcomeMsg',
    props: {
        msg: String
    }
}
</script>
