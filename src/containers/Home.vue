<template>
  <div class="home">
    <img src="../assets/logo.png">
      <Spinner v-if="articleLoading" />
      <div v-if="articleData">
        <code>
          {{articleData}}
        </code>
      </div>
  </div>
</template>

<script>

import {mapGetters} from 'vuex'
import { mapActions } from 'vuex'
import Spinner from '@/components/Spinner'

export default {
  name: 'home',
  components: {
    Spinner
  },
  computed: {
    ...mapGetters({
      articleData: 'articles/data',
      articleLoading: 'articles/pending'
    })
  },
  mounted(){
    this.retrieve()
  },
  methods:{
    ...mapActions({
      retrieve: 'articles/RETRIEVE'
    }),
  }
}
</script>
