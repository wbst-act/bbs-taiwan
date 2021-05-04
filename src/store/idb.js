import Vue from 'vue'
import VueIdb from 'vue-idb'

Vue.use(VueIdb)

export default new VueIdb({
  version: 1,
  database: 'bbstaiwan',
  schemas: [
    { plot: 'id, name, city, town, loc1, loc2, loc3, water' },
    {
      plot_dtl: 'id, plot, pno, lat, lng, loc1, loc2, loc3, water, create_date'
    },
    {
      bbs_log:
        'id, date, plot, lno, wind, weather, member, create_date, update_date'
    },
    {
      bbs_log_dtl:
        'id, log_id, plot_dtl, log_time, wind, weather, create_date, update_date'
    },
    {
      bbs_log_bird:
        'id, log_dtl, period, bird, distance, qty, group, memo, create_date'
    }
  ],
  options: {
    plot: { type: 'list', primary: 'id' },
    plot_dtl: { type: 'list', primary: 'id' },
    bbs_log: { type: 'list', primary: 'id' },
    bbs_log_dtl: { type: 'list', primary: 'id', updated_at: 'create_date' },
    bbs_log_bird: { type: 'list', primary: 'id' }
  }
})
