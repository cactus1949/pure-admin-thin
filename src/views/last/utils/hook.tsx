import dayjs from "dayjs";
import { getList } from "@/api/last";
import { ref, reactive, onMounted, toRefs } from "vue";

export function useLast() {
  const form = reactive({
    name1: "",
    name2: "",
    name3: "",
    name4: "",
    name5: ""
  });

  const formRef = ref();
  const loading = ref(true);
  const dataList = ref([]);
  const state = reactive({
    dateTimeRange: "" as any
  });

  const { dateTimeRange } = toRefs(state);

  function resetForm(formEl) {
    if (!formEl) return;
    formEl.resetFields();
    state.dateTimeRange = null;
    fetchData();
  }

  async function fetchData() {
    loading.value = true;
    form.name2 = state.dateTimeRange
      ? dayjs(state.dateTimeRange[0]).format("YYYY-MM-DD HH:mm:ss")
      : "";
    form.name3 = state.dateTimeRange
      ? dayjs(state.dateTimeRange[1]).format("YYYY-MM-DD HH:mm:ss")
      : "";
    const { data } = await getList(form);
    dataList.value = data.list;
    loading.value = false;
  }
  onMounted(() => {
    fetchData();
  });
  return {
    fetchData,
    form,
    dateTimeRange,
    loading,
    resetForm,
    formRef,
    dataList
  };
}
