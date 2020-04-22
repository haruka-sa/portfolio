<script>
import { Radar } from 'vue-chartjs';

export default {
  name: 'DevChart',
  extends: Radar,
  data () {
    return {
      data: {
        labels: [],
        datasets: [
          {
            label: 'Dev-Ops',
            data: [2, 4, 4, 2],
            backgroundColor: [
              'rgba(87, 16, 131, 0.2)',
              'rgba(87, 16, 131, 0.2)',
              'rgba(87, 16, 131, 0.2)',
              'rgba(87, 16, 131, 0.2)'
            ],
            borderColor: [
              'rgba(87, 16, 131, 0.7)',
              'rgba(87, 16, 131, 0.7)',
              'rgba(87, 16, 131, 0.7)',
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
    this.getSkills ()
    this.renderChart(this.data, this.options)
  },
  methods: {
    getSkills () {
      const skillCategory = this.$store.getters.getSkills('devops')
      skillCategory.skills.forEach((skill) => {
        this.data.labels.push(skill.name)
      })
    }
  }
}
</script>
