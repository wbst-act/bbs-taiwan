#!/usr/bin/env python3
# coding=utf8
import csv
import json
import os
import sys

'''
X_經度 longitude lng
Y_緯度 latitude lat

lng: '121°32\'16.20"',
lat: '25°12\'58.13"'
'''
if __name__=='__main__':
    if len(sys.argv) < 2:
        print("input plot.csv")
        sys.exit()
    filename = sys.argv[1]
    plot = {}
    with open(filename, newline='') as csvfile:
        rows = csv.DictReader(csvfile)
        for row in rows:
            if row['樣區編號'] == '' or row['樣區編號'] == None:
                continue

            if plot.get(row['樣區編號']) == None:
                plot.setdefault(
                    row['樣區編號'], {'name': row['樣區名稱'], 'city': row['縣市'], 'plotdtl': []})
            plot[row['樣區編號']]['plotdtl'].append({'id': row['樣區樣點編號'], 'pno': int(
                row['樣點代號']), 'lng': row['X_經度(度分秒)'], 'lat': row['Y_緯度(度分秒)']})


    with open('../public/data/bbs_plot.json', 'w', encoding='utf8') as f:
        #f.write('const bbs_taiwan_plots =')
        json.dump(plot, f, ensure_ascii=False, indent='  ')
        # f.write('\n')
        #f.write('export { bbs_taiwan_plots }')

    #os.rename('bbs_plot.js', '../public/data/bbs_plot.json')
