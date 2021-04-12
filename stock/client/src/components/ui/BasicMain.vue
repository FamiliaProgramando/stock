<template>
    <main>
        <slot></slot>
    </main>
</template>

<style scoped>
    main {
    width: 100%;
    position: relative;
    display: flex;
    flex-basis: 100px;
    align-content: center;
    justify-content: center;
    align-items: center;
    flex-grow: 2;
    flex-shrink: 2;
    flex-direction: column;
    flex-wrap: nowrap;
    }
</style>
