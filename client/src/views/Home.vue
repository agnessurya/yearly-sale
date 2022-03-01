<template>
  <div class="home"> 
    <Bar
      v-if="loaded"
    />
  </div>
</template>

<script>
import { Bar } from 'vue-chartjs'
import axios from 'axios'


export default {
  name: 'Home',
   components: { Bar },
   data: () => ({
     loaded: false,
    chartdata: {
      labels: ['January', 'February'],
      datasets: [
        {
          label: 'Data One',
          backgroundColor: '#f87979',
          data: [40, 20]
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false
    }
  }),
  async mounted () {
    this.loaded = false
    try {
      const data  = await axios({url :'http://localhost:5000/sales', 
                                    method : 'GET', 
                                    headers : {access_token: localStorage.getItem("acces_token")
                                }})
                                
                            console.log(data)    
      // this.chartdata = data.data
      this.loaded = true
    } catch (e) {
      console.error(e)
    }
  }
}
</script>
