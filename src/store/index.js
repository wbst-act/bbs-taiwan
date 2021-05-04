import Vue from 'vue'
import Vuex from 'vuex'
import VueIdb from './idb.js'
Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'
let modules = VueIdb.modules

export default new Vuex.Store({
  state: {
    hydrated: false,
    wind: {
      0: '靜, 樹葉草莖不動',
      1: '風拂面, 樹葉有聲, 草莖及小枝動',
      2: '塵沙飛揚，紙片飛舞，小樹幹搖動',
      3: '大樹搖動，木板或雜物可能被吹倒'
    },
    weather: {
      A: '沒有雲, 或零星幾朵雲',
      B: '部分有雲 (零散) 或雲層多變',
      C: '雲層滿佈（包括陰天）',
      D: '濃霧',
      E: '毛毛雨',
      F: '陣雨'
    },
    period: { A: '0-3分鐘', B: '3-6分鐘', X: '<0 or >6分鐘(補充記錄)' },

    plottype: {
      '': '無',
      A1: '闊葉林',
      A2: '針葉林',
      A3: '針闊混林（針闊葉樹各＞10％）',
      A4: '竹林',
      A5: '竹闊混林（竹闊葉樹各＞10％）',
      A6: '木麻黃防風林',
      A7: '其他森林',
      B1: '水稻田',
      B2: '其他水田（如菱角田、荷花田）',
      B3: '甘蔗田',
      B4: '旱田（如各類菜園、鳳梨花生田等）',
      B5: '果園/苗圃（如檳榔、柳丁、蓮霧、香蕉、龍眼等）',
      B6: '其他農墾地',
      C1: '高莖旱生草地（高度＞50公分，如五節芒草生地）',
      C2: '低莖旱生草地（高度＜50公分，如龍磐草原牧草地）',
      C3: '高莖草澤（高度＞50公分，如蘆葦草澤）',
      C4: '低莖草澤（高度＜50公分，如雲林苑草或茳茳鹹草）',
      C5: '箭竹草原',
      C6: '其他草生地',
      D1: '水庫',
      D2: '埤塘/湖泊',
      D3: '河川（寬度＞3公尺）',
      D4: '溪澗（寬度＜3公尺）',
      D5: '其他淡水水域',
      E1: '魚塭/鹽田（滿水）',
      E2: '魚塭/鹽田（放乾）',
      E3: '魚塭/鹽田（廢棄）（植被生長至魚塭/鹽田中央）',
      E4: '其他魚塭鹽田',
      F1: '泥灘型潮間帶',
      F2: '礁岩型潮間帶',
      F3: '石礫型海岸',
      F4: '沙灘型海岸',
      F5: '海洋',
      F6: '其他海岸',
      G1: '都市',
      G2: '公園',
      G3: '農村村莊',
      G4: '其他建築區',
      H: '其他'
    },
    watertype: {
      '': '無',
      A: '有「溪澗」或「溝渠」流過範圍內',
      B: '有小面積的「池塘」存在於範圍內'
    },
    distance: {
      A: '0-25m',
      B: '25-100m',
      C: '100m以上',
      D: '飛過',
      X: '未判定距之補充記錄'
    }
  },

  actions: {},
  mutations: {
    DELETE_INDEXED_DB() {}
  },
  modules: modules,
  getters: {
    hydrated: state => state.hydrated
  },
  plugins: [VueIdb.plugin],
  strict: debug
})
