<script>
import { Radar } from 'vue-chartjs';

export default {
  name: 'Chart',
  extends: Radar,
  data () {
    return {
      data: {
        labels: ['Java', 'Ruby', 'RubyOnRails', 'MySQL'],
        datasets: [
          {
            data: [1, 2, 3, 4],
            backgroundColor: [
              'rgba(15, 136, 57, 0.2)',
            ],
            borderColor: [
              'rgba(15, 136, 57, 0.7)'
              // 'rgba(255, 99, 132, 1)',
              // 'rgba(54, 162, 235, 1)',
              // 'rgba(255, 206, 86, 1)',
              // 'rgba(75, 192, 192, 1)'
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
