import { defineComponent, ref, type PropType } from "vue";
import { cloneDeep } from "@pureadmin/utils";

const props = {
  /** 头部最左边的标题 */
  title: {
    type: String,
    default: "列表"
  },
  /** 对于树形表格，如果想启用展开和折叠功能，传入当前表格的ref即可 */
  tableRef: {
    type: Object as PropType<any>
  },
  /** 需要展示的列 */
  columns: {
    type: Array as PropType<TableColumnList>,
    default: () => []
  }
};

export default defineComponent({
  name: "PureTableBar",
  props,
  emits: ["refresh"],
  setup(props, { slots, attrs }) {
    const size = ref("default");
    const dynamicColumns = ref(cloneDeep(props?.columns));

    return () => (
      <>
        <div {...attrs} class="w-[99/100] mt-2 px-2 pb-2">
          <div class="flex justify-between items-center w-full h-[64px] px-[24px] bg-[#F7F9FE] border-t border-[#DEE4F8] mb-[35px]">
            {slots?.title ? (
              slots.title()
            ) : (
              <p class="font-bold truncate text-list_head_color">
                {props.title}
              </p>
            )}
            <div class="flex items-center justify-around">
              {slots?.buttons ? (
                <div class="flex items-center">{slots.buttons()}</div>
              ) : null}
            </div>
          </div>
          {slots.default({
            size: size.value,
            dynamicColumns: dynamicColumns.value
          })}
        </div>
      </>
    );
  }
});
