<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click="loadExperiences">Load Submitted Experiences</base-button>
      </div>
      <ul>
        <survey-result
          v-for="result in results"
          :key="result.id"
          :name="result.name"
          :rating="result.rating"
        ></survey-result>
      </ul>
    </base-card>
  </section>
</template>

<script>
import SurveyResult from './SurveyResult.vue';
import axios from 'axios'

export default {
  components: {
    SurveyResult,
  },
  data() {
    return {
      results: [],
    };
  },
  methods: {
    loadExperiences() {
      axios.get('https://vue-http-demo-3d0d0-default-rtdb.firebaseio.com/surveys.json')
      .then((res) =>{
        const results = []
        for(let id in res.data){
          console.log(res.data[id])
          results.push({
            name: res.data[id].name,
            rating: res.data[id].rating
          })
        }
        this.results = results
      })
      .catch((err) => console.log(err))

      // fetch('https://vue-http-demo-3d0d0-default-rtdb.firebaseio.com/surveys.json')
      //   .then((response) => {
      //     if (response.ok) {
      //       return response.json();
      //     }
      //   })
      //   .then((data) => {
      //     const results = [];
      //     for (const id in data) {
      //       results.push({
      //         id: id,
      //         name: data[id].name,
      //         rating: data[id].rating,
      //       });
      //     }
      //     this.results = results;
      //   });

    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>