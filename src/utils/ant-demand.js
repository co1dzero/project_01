import Vue from 'vue'

import { Button, Icon, Col, DatePicker, Row, Pagination, Modal, Input, Tabs, Radio, Select, Table, Checkbox, FormModel, Tooltip, ConfigProvider, Switch, TimePicker, InputNumber, Spin, Empty, Tag, List, Carousel, Dropdown, Divider } from 'ant-design-vue'

const antdPlugs = {
  Button,
  Icon,
  Col,
  DatePicker,
  Row,
  Pagination,
  Modal,
  Input,
  Tabs,
  Radio,
  Select,
  Table,
  Checkbox,
  FormModel,
  Tooltip,
  ConfigProvider,
  Switch,
  TimePicker,
  InputNumber,
  Spin,
  Empty,
  Tag,
  List,
  Carousel,
  Dropdown,
  Divider
}

// 创建实例方法
Vue.prototype.$antdconfirm = Modal.confirm
Vue.prototype.$info = Modal.info
Vue.prototype.$success = Modal.success
Vue.prototype.$error = Modal.error
Vue.prototype.$warning = Modal.warning

// 下面一块为转换对象为数组然后遍历，vue.use()动态调用
export const installAnt = () => {
  Object.keys(antdPlugs).forEach(keys => {
    Vue.use(antdPlugs[keys])
  })
}
