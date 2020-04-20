<script>
import { Radar } from 'vue-chartjs';

export default {
  name: 'FrontChart',
  extends: Radar,
  data () {
    return {
      data: {
        labels: ['HTML', 'CSS', 'Javascript', 'SCSS', 'Vue'],
        datasets: [
          {
            label: 'Front-end',
            data: [4, 3, 2, 3, 3],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 99, 132, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 0.7)',
              'rgba(255, 99, 132, 0.7)',
              'rgba(255, 99, 132, 0.7)',
              'rgba(255, 99, 132, 0.7)',
              'rgba(255, 99, 132, 0.7)'
            ],
            borderWidth: 1
          },
        ]
      },
      options: {
        scale:{
          scalelabel:{
            fontFamily:'Noto Sans JP',
            fontSize:30,
          },
          ticks:{
            suggestedMax: 5,
              suggestedMin: 0,
                stepSize: 1,
          }
        }
      }
    }
  },
  mounted () {
    this.renderChart(this.data, this.options)
  }
}
</script>
