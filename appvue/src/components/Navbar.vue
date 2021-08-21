<template>
  <nav :class="isScrolled ? 'navbar scrolled' : 'navbar'">
    <div class="container">
      <div class="left">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
          alt="logo"
        />
        <span v-for="list of navList" :key="list.id">
          {{ list.title }}
        </span>
      </div>

      <div class="right">
        <SearchOutlined class="icon" />
        <span>KID</span>
        <NotificationOutlined class="icon" />
        <img
          src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt=""
        />
        <div class="profile">
          <CaretDownOutlined class="icon" />
          <div class="options">
            <span v-for="option in optionsList" :key="option.id">
              {{ option.option }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script lang='ts'>
import {
  defineComponent,
  reactive,
  toRefs,
  onMounted,
  onUnmounted,
  watch,
} from "vue";
import {
  SearchOutlined,
  NotificationOutlined,
  CaretDownOutlined,
} from "@ant-design/icons-vue";
interface INavList {
  id: number;
  title: string;
}
interface IOptions {
  id: number;
  option: string;
}

interface INavBarData {
  navList: INavList[];
  optionsList: IOptions[];
  isScrolled: boolean;
}

export default defineComponent({
  components: {
    [SearchOutlined.name]: SearchOutlined,
    [NotificationOutlined.name]: NotificationOutlined,
    [CaretDownOutlined.name]: CaretDownOutlined,
  },
  setup() {
    const data = reactive<INavBarData>({
      navList: [
        { id: 0, title: "Homepage" },
        { id: 1, title: "Series" },
        { id: 2, title: "Movies" },
        { id: 3, title: "New and Popular" },
        { id: 4, title: "My List" },
      ],
      optionsList: [
        { id: 0, option: "Settings" },
        { id: 1, option: "Logout" },
      ],
      isScrolled: false,
    });
    const onScroll = () => {
      data.isScrolled = window.pageYOffset === 0 ? false : true;
    };
    watch(
      () => data.isScrolled,
      () => {},
      {
        deep: true,
        immediate: true,
      }
    );
    onMounted(() => {
      document.addEventListener("scroll", onScroll);
    });
    onUnmounted(() => {
      document.removeEventListener("scroll", onScroll);
    });
    return {
      ...toRefs(data),
    };
  },
});
</script>
<style lang='scss' scoped>
.navbar {
  color: white;
  font-size: 18px;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 999;
  background: linear-gradient(to top, transparent 0%, rgba(0, 0, 0, 0.3), 50%);
  .container {
    padding: 0px 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 70px;
    .left {
      display: flex;
      align-items: center;
      img {
        height: 25px;
        margin-right: 40px;
      }
      span {
        margin-right: 20px;
        cursor: pointer;
      }
    }
    .right {
      display: flex;
      align-items: center;
      .icon {
        margin: 0 15px;
        cursor: pointer;
      }
      img {
        width: 30px;
        height: 30px;
        border-radius: 5px;
        object-fit: cover;
        cursor: pointer;
      }
    }
    .profile {
      .options {
        display: none;
        background-color: var(--main-color);
        border-radius: 5px;
        span {
          padding: 10px;
          cursor: pointer;
        }
      }
      &:hover {
        .options {
          display: flex;
          flex-direction: column;
          position: absolute;
        }
      }
    }
  }
}
.scrolled {
  background-color: var(--main-color);
}
</style>