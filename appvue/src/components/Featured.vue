<template>
  <div class="featured">
    <div v-if="type" class="category">
      <span>{{ type === "movie" ? "Movies" : "Series" }}:</span>
      <select 
      v-model="optionSelected" 
      @change="getOptionSelected">
        <option
          v-for="option in optionsList"
          :key="option.id"
          :value="option.value"
        >
          {{ option.type }}
        </option>
      </select>
    </div>
    <img
      src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
      alt="feature picture"
    />
    <div class="info">
      <img
        src="https://occ-0-1432-1433.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABUZdeG1DrMstq-YKHZ-dA-cx2uQN_YbCYx7RABDk0y7F8ZK6nzgCz4bp5qJVgMizPbVpIvXrd4xMBQAuNe0xmuW2WjoeGMDn1cFO.webp?r=df1"
        alt="info pic"
      />
      <span class="desc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae adipisci
        repellendus eum quasi illo, velit numquam, maxime tempora sint deleniti,
        aliquid qui? Facilis, adipisci! Ratione hic repudiandae temporibus eum
        earum?
      </span>
      <div class="buttons">
        <button class="play">
          <PlayCircleOutlined />
          <span>play</span>
        </button>
        <button class="more">
          <InfoCircleOutlined />
          <span>Info</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent, reactive, toRefs, watch } from "vue";
import { PlayCircleOutlined, InfoCircleOutlined } from "@ant-design/icons-vue";

interface IOptionsList {
  id: number;
  value: string;
  type: string;
}

interface IFeatured {
  optionsList: IOptionsList[];
  optionSelected: string;
}

export default defineComponent({
  components: {
    [PlayCircleOutlined.name]: PlayCircleOutlined,
    [InfoCircleOutlined.name]: InfoCircleOutlined,
  },
  props: {
    type: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const data = reactive<IFeatured>({
      optionsList: [
        { id: 0, value: "adventure", type: "Adventure" },
        { id: 1, value: "comedy", type: "Comedy" },
        { id: 2, value: "crime", type: "Crime" },
        { id: 3, value: "fantasy", type: "Fantasy" },
        { id: 4, value: "historical", type: "Historical" },
        { id: 5, value: "horror", type: "Horror" },
        { id: 6, value: "romance", type: "Romance" },
        { id: 7, value: "sci-fi", type: "Sci-fi" },
        { id: 8, value: "thriller", type: "Thriller" },
        { id: 9, value: "western", type: "Western" },
        { id: 10, value: "animation", type: "Animation" },
        { id: 11, value: "drama", type: "Drama" },
        { id: 12, value: "documentary", type: "Documentary" },
        { id: 13, value: "genra", type: "Genra" },
      ],
      optionSelected:"genra",
    });
    watch(
      () => props.type,
      () => {},
      {
        deep: true,
        immediate: true,
      }
    );

    const getOptionSelected = ()=>{
      
    }
    return {
      ...toRefs(data),
      getOptionSelected
    };
  },
});
</script>
<style lang='scss' scoped>
.featured {
  height: 90vh;
  position: relative;
  .category{
    position: absolute;
    top:80px;
    left:50px;
    font-size: 30px;
    font-weight: 500;
    color:white;
    display: flex;
    align-items: center;
    select{
      cursor: pointer;
      background-color: var(--main-color);
      border:1px solid white;
      color:white;
      margin-left: 20px;
      padding:5px;
    }
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .info {
    width: 35%;
    position: absolute;
    left: 50px;
    bottom: 100px;
    color: white;
    display: flex;
    flex-direction: column;
    img {
      width: 400px;
    }
    .desc {
      margin: 20px 0px;
    }
    .buttons {
      display: flex;
      button {
        padding: 10px 20px;
        border: none;
        border-radius: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 18px;
        margin-right: 10px;
        cursor: pointer;
        &.play {
          background-color: white;
          color: var(--main-color);
        }
        &.more {
          background-color: grey;
          color: white;
        }
        span {
          margin-left: 5px;
        }
      }
    }
  }
}
</style>