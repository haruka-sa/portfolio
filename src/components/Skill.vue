<template>
  <div id="skillSection">
    <h1 id="skillTitle">
      Skill Set
    </h1>
    <div id="skillExplain">
      <p>
        五段階評価にて、スキルをまとめました。
        Front-endは、ポートフォリオ実装において知識や技術が身に付いたと感じています。
        5つの内、JavaScriptが最も苦手なので、克服していきたいです。
        Back-endはまだほとんど触ったことがありませんが、今後の研修で触る予定です。
        DevOpsは、GitとGitHubの知識・技術は身に付いたと感じています。
        LinuxとFirebaseにおいては、まだ理解できていない部分が多いので、勉強し、理解を深めていきます。
      </p>
    </div>
    <div id="gitHubLabel">
      <label for="gitHubLink">GitHub:</label>
      <a
        id="gitHubLink"
        href="https://github.com/haruka-sa/portfolio"
      >
        https://github.com/haruka-sa/portfolio
      </a>
    </div>
    <div id="push">
      <div class="balloon">
        PUSH!
      </div>
    </div>
    <div id="skillCategories">
      <ul>
        <li>
          <span
            id="front"
            @click="setCurrentChart('front')"
          >
            Front-end
          </span>
        </li>
        <li>
          <span
            id="back"
            @click="setCurrentChart('back')"
          >
            Back-end
          </span>
        </li>
        <li>
          <span
            id="DevOps"
            @click="setCurrentChart('devOps')"
          >
            DevOps
          </span>
        </li>
      </ul>
    </div>



    <div id="skillList">
      <ul
        id="front-end"
        :class="{'front-change': isFrontActive}"
      >
        <li>HTML</li>
        <li>CSS</li>
        <li>Javascript</li>
        <li>SCSS</li>
        <li>Vue</li>
      </ul>
      <ul
        id="back-end"
        :class="{'back-change': isBackActive}"
      >
        <li>Java</li>
        <li>Ruby</li>
        <li>RubyOnRails</li>
        <li>MySQL</li>
      </ul>
      <ul
        id="devops"
        :class="{'dev-change': isDevOpsActive}"
      >
        <li>Linux</li>
        <li>Git</li>
        <li>GitHub</li>
        <li>Firebase</li>
      </ul>
    </div>
    <div id="skillGraph">
      <div
        v-if="isFrontActive && loadChart"
      >
        <FrontChart />
      </div>
      <div
        v-if="isBackActive && loadChart"
      >
        <BackChart />
      </div>
      <div
        v-if="isDevOpsActive && loadChart"
      >
        <DevChart />
      </div>
    </div>
  </div>
</template>

<script>
import FrontChart from './FrontChart.vue';
import BackChart from './BackChart.vue';
import DevChart from './DevChart.vue';

export default {
  name: 'SkillSection' ,
  components: {
    FrontChart,
    BackChart,
    DevChart
  },
  data(){
    return {
      currentChart: 'front'
    }
  },
  computed: {
    isFrontActive() {
      return this.currentChart=='front';
    },
    isBackActive() {
      return this.currentChart=='back';
    },
    isDevOpsActive() {
      return this.currentChart=='devOps';
    },
    loadChart () {
      return this.$store.state.loaded
    }
  },
  methods: {
    setCurrentChart(chart) {
      this.currentChart = chart;
    }
  }
}
</script>

<style lang="scss" scoped>
  #skilltSection {
    background: #fff;
    width: 100%;
    height: auto;
    text-align: center;
  }

  #skillTitle {
    color: #20879f;
    font-family: 'Noto Sans JP', sans-serif;
    font-weight: bold;
    font-size: 18pt;
    text-shadow: 0 2px 5px rgba(0, 0, 0, 0.5);
    text-align: center;
    padding: 20px 0 10px 0;
  }

  #skillExplain {
    color: #707070;
    font-family: 'Noto Sans JP', sans-serif;
    font-size: 12pt;
    word-wrap: break-word;
    line-height: 1.25em;
    padding: 20px 0 30px 0;
    width: 80%;
    margin: 0 auto;
  }

  #gitHubLabel {
    text-align: center;
    color: #20879f;
  }

  #gitHubLink {
    color: #20879f;
    font-family: 'Noto Sans JP', sans-serif;
    text-align: center;
  }

  #push {
    width: 500px;
    margin: 0 auto;
  }

  .balloon {
    position: relative;
    display: inline-block;
    padding: 0 2px;
    margin: 15px 0 0 20px;
    width: 70px;
    height: 70px;
    line-height: 70px;
    text-align: center;
    color: #fff;
    font-size: 15px;
    font-weight: bold;
    background: #ffcc75;
    border-radius: 50%;
    box-sizing: border-box;
  }

  .balloon::before {
    content: "";
    position: absolute;
    bottom: -12px;
    right: -12px;
    margin-top: -15px;
    border: 15px solid transparent;
    border-left: 20px solid #ffcc75;
    z-index: 0;
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
  }

  #skillCategories {
    padding: 0 0 20px 0;
    text-align: center;

    li {
      display: inline-block;
      margin: 0 10px;
    }

    #front {
      color: #b51a1a;
      font-size: 18px;
      cursor: pointer;
    }

    #back {
      color: #0f8839;
      font-size: 18px;
      cursor: pointer;
    }

    #DevOps {
      color: #571083;
      font-size: 18px;
      cursor: pointer;
    }
  }

  #skillList {
    font-size: 13px;
    width: auto;
    text-align: center;

    li {
      display: inline-block;
      margin: 10px 10px;
    }

    .front-change li {
      background-color: rgba(181, 26, 26, 0.25);
    }

    .back-change li {
      background-color: rgba(15, 136, 57, 0.25);
    }

    .dev-change li {
      background-color: rgba(87, 16, 131, 0.25);
    }

    #front-end li {
      color: rgba(181, 26, 26, 0.75);
      height: 20px;
      font-weight: bold;
      padding: 12px 20px 2px 20px;
      box-shadow: 0 0 8px gray;
      border-radius: 10px;
    }

    #back-end li {
      color: rgba(15, 136, 57, 0.75);
      height: 20px;
      font-weight: bold;
      padding: 12px 20px 2px 20px;
      box-shadow: 0 0 8px gray;
      border-radius: 10px;
    }

    #devops li {
      color: rgba(87, 16, 131, 0.75);
      height: 20px;
      font-weight: bold;
      padding: 12px 20px 2px 20px;
      box-shadow: 0 0 8px gray;
      border-radius: 10px;
    }
  }

  #skillGraph {
    width: 400px;
    height: 400px;
    margin: 0 auto;
    padding: 20px 0 30px 0;
  }

  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&display=swap');
</style>
