<template>
  <section>
    <base-card>
      <h2>{{ fullName }}</h2>
      <h3>{{ rate }}</h3>
    </base-card>
  </section>
  <section>
    <base-card>
      <header>
        <h2>Interested? Reach out now!</h2>
        <base-button link :to="contactLink" :mode="hiddenBtn">Contact</base-button>
      </header>
      <router-view></router-view>
    </base-card>
  </section>
  <section>
    <base-card>
      <base-badge v-for="area in areas" :key="area" :type="area" :title="area"> </base-badge>
      <p>{{ description }}</p>
    </base-card>
  </section>
</template>

<script>
export default{
    props: ['id'],
    data(){
        return{
            selectedCoach: null
        };
    },
    computed:{
        fullName(){
            return this.selectedCoach.firstName + ' ' + this.selectedCoach.lastName
        },
        rate(){
            return this.selectedCoach.hourlyRate
        },
        area(){
            return this.selectedCoach.areas
        },
        description(){
            return this.selectedCoach.description
        },
        contactLink(){
            const currentPath = this.$route.path
            if(currentPath.includes('contact')){return currentPath}
            console.log(currentPath)
            return this.$route.path + '/contact'
        },
        hiddenBtn(){
            const currentPath = this.$route.path
            if(currentPath.includes('/contact')){
                return 'hidden'
            }
            return ''
        }

    },
    created(){
        this.selectedCoach = this.$store.getters['coaches/coaches'].find(
            (coach) => coach.id === this.id
            )
    }
}
</script>
