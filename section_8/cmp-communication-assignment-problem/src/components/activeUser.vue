<template>
<div>
    <li>
    <ul>
      <li>
        <h2>UserName:</h2>
        {{ userName }}
      </li>
      <li>
        <h3>Age:</h3>
        {{ age }}
      </li>
    </ul>
  </li>
</div>
</template>

<script>
export default{
    props: {
        userName:{
            type: String,
            required: true
        },
        age:{
            type: String,
            required: true
        }
    },
    data(){
        return{

        };
    },
    methods: {
        
    }
}
</script>