<template>
    <div>
        <Button type="primary" @click="modal6 = true">Display dialog box</Button>
        <Modal
            v-model="modal6"
            title="Title"
            :loading="loading"
            @on-ok="asyncOK">
            <p>After you click ok, the dialog box will close in 2 seconds.</p>
        </Modal>
    </div>
</template>
<script>

export default {
    companents: {
      Modal: Modal
    },
    data () {
        return {
            modal6: false,
            loading: true
        }
    },
    methods: {

    }
}
</script>