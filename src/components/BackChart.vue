<script>
import { Radar } from 'vue-chartjs';

export default {
  name: 'BackChart',
  extends: Radar,
  data () {
    return {
      data: {
        labels: ['Java', 'Ruby', 'RubyOnRails', 'MySQL'],
        datasets: [
          {
            label: 'Back-end',
            data: [3, 3, 2, 4],
            backgroundColor: [
              'rgba(15, 136, 57, 0.2)',
              'rgba(15, 136, 57, 0.2)',
              'rgba(15, 136, 57, 0.2)',
              'rgba(15, 136, 57, 0.2)'
            ],
            borderColor: [
              'rgba(15, 136, 57, 0.7)',
              'rgba(15, 136, 57, 0.7)',
              'rgba(15, 136, 57, 0.7)',
              'rgba(15, 136, 57, 0.7)'
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
