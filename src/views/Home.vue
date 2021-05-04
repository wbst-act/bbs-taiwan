<template lang="pug">
v-app
  v-navigation-drawer(
    app,
    v-model="drawer",
    color="blue-grey lighten-5"
    :clipped="$vuetify.breakpoint.lgAndUp"
  )
    v-list(dense, nav)
      //
        v-list-item(to="/")
          v-list-item-icon
            v-icon(color="blue-grey") {{ icons.mdiNotebookEdit }}
          v-list-item-content 記錄清單
      v-list-item(:to="encodeURI('/合併匯出')")
        v-list-item-icon
          v-icon(color="blue-grey") {{ icons.mdiMicrosoftExcel }}
        v-list-item-content 合併匯出
      v-list-item(:to="encodeURI('/樣區設定')")
        v-list-item-icon
          v-icon(color="blue-grey") {{ icons.mdiMapMarker}}
        v-list-item-content 樣區設定
      // 
        v-list-item(to="/操作手冊")
            v-list-item-icon
              v-icon(color="blue-grey") {{ icons.mdiFaceAgent}}
            v-list-item-content 操作手冊
      v-list-item(:to="encodeURI('/鳥名錄')")
          v-list-item-icon
            v-icon(color="blue-grey") {{ icons.mdiFormatListBulleted}}
          v-list-item-content 中華鳥名錄
      v-list-item(:to="encodeURI('/eBird匯入產生器')")
          v-list-item-icon
            v-icon(color="blue-grey") {{ icons.mdiCloudUpload}}
          v-list-item-content eBird匯入產生器
      v-list-item(:to="encodeURI('/關於程式')")
          v-list-item-icon
            v-icon(color="blue-grey") {{ icons.mdiInformationOutline}}
          v-list-item-content 關於程式
  v-app-bar(app, color="blue-grey", dense, dark, :clipped-left="$vuetify.breakpoint.lgAndUp")
    v-app-bar-nav-icon(@click.stop="drawer = !drawer")
    v-toolbar-title BBS Taiwan記錄工具
    v-spacer
    .subtitle-2 {{ version }}
  v-main
    router-view
    v-snackbar(:value="updateExists" :timeout="-1" color="blue-grey" centered)
      | 有新版本可以更新
      template(v-slot:action="{ attrs }")
        v-btn(@click="refreshApp" text dark) 更新
</template>

<script>
import {
  mdiMapMarker,
  mdiNotebookEdit,
  mdiFaceAgent,
  mdiInformationOutline,
  mdiMicrosoftExcel,
  mdiFormatListBulleted,
  mdiCloudUpload
} from '@mdi/js'
import { version } from '../../package.json'
import update from '../mixins/update'
export default {
  name: 'Home',
  mixins: [update],
  data: () => ({
    icons: {
      mdiMapMarker,
      mdiNotebookEdit,
      mdiFaceAgent,
      mdiInformationOutline,
      mdiMicrosoftExcel,
      mdiFormatListBulleted,
      mdiCloudUpload
    },
    drawer: null,
    version: version
  })
}
</script>
