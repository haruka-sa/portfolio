<script>
import { Radar } from 'vue-chartjs';

export default {
  name: 'Chart',
  extends: Radar,
  data () {
    return {
      data: {
        labels: ['Linux', 'Git', 'GitHub', 'Firebase'],
        datasets: [
          {
            label: 'Dev-Chart',
            data: [1, 2, 3, 4],
            backgroundColor: [
              'rgba(87, 16, 131, 0.2)',
            ],
            borderColor: [
              'rgba(87, 16, 131, 0.7)'
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
