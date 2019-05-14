<template>
  <div class="list-detail">
    <dl
      v-for="(val, ind) in list"
      :key="ind"
      :linkUrl="val[linkName]"
      @click="getDeatil(val[content_id], val)"
    >
      <dt>
        <img
          class="imgs"
          :src="val[cover]"
          alt=""
          :style="{ width: '120px', height: '120px' }"
        />
      </dt>
      <dd>
        <p>{{ val[titleName] }}</p>
        <p>{{ val[description] }}</p>
        <p>
          {{ new Date().toLocaleDateString() }}
        </p>
      </dd>
    </dl>
  </div>
</template>
<script>
export default {
  // @click ="getDeatil(val[content_id])">
  props: {
    list: {
      type: Array,
      required: true
    },
    titleName: {
      type: String,
      default: "title"
    },
    description: {
      type: String,
      default: "description"
    },
    cover: {
      type: String,
      default: "cover"
    },
    content_id: {
      type: String,
      default: "content_id"
    },
    linkName: {
      type: String,
      default: "link"
    }
  },
  components: {},
  data() {
    return {};
  },
  computed: {},
  methods: {
    getDeatil(ind, val) {
      if (val.link.indexOf("http") !== -1) {
        window.location.href = val.link;
      } else {
        this.$router.push(val.link);
      }
    }
  },
  created() {},
  mounted() {}
};
</script>
<style lang="scss">
div {
  width: 100%;
  .list-detail {
    width: 100%;
    dl {
      padding: 0 10px;
      margin-top: 8px;
      width: 100%;
      @include flex(row);
      text-align: left;
      justify-content: flex-start;
      margin-bottom: 10px;
      dt {
        width: 40%;
        .imgs {
          @include wh(100%, 100%);
          border: 1px solid gray;
        }
      }
      dd {
        flex: 1;
        margin: 10px;
        p:nth-of-type(1) {
          margin-top: 5px;
          font-size: 15px;
          @include singleText(180px);
        }
        p:nth-of-type(2) {
          font-size: 13px;
          margin-top: 10px;
          @include doubleText(200px);
        }
        p:nth-of-type(3) {
          margin-top: 12px;
          font-size: 13px;
          color: gray;
        }
      }
    }
  }
}
</style>
