#!/usr/bin/env python3
# coding=utf8
import csv
import json
import os
import re


bird = {}

with open('2021BBS鳥類名錄.csv', newline='') as csvfile:
    rows = csv.DictReader(csvfile)
    for row in rows:

        es = [] if row['E_CODES'] == '' else row['E_CODES'].split(' ')
        bs = [] if row['B_CODES'] == '' else row['B_CODES'].split(' ')
        ss = [] if row['S_CODES'] == '' else row['S_CODES'].split(' ')

        es = list(filter(lambda x: len(x) == 4 and 'ʻ' not in x, es))
        if bs not in es and len(bs) >= 1:
            #print(row['BBS_NAME'], es, bs)
            es = bs + es
        if ss not in es and len(ss) >= 1:
            es = es + ss

        bird.setdefault(row['BBS_NAME'], {
            'cn': row['C_NAME'],
            'sn': row['S_NAME'],
            'en': row['E_NAME'],
            'es': es
        })

bird['台灣獼猴']['es'] = ['MK']
bird['臺灣獼猴']['es'] = ['MK']
'''
with open('2021BBS鳥類名錄_export.csv', 'w', newline='') as csvfile:
    writer = csv.writer(csvfile)
    writer.writerow(['BBS Name', '簡碼', 'eBird 中文', 'eBird 英文', 'ebird 學名'])
    for b in bird:
        writer.writerow([b, ','.join(bird[b]['es']), bird[b]['cn'],
                         bird[b]['en'], bird[b]['sn']])

'''
with open('../public/data/bbs_bird_2021.json', 'w', encoding='utf8') as f:
    #f.write('const bbs_taiwan_plots =')
    json.dump(bird, f, ensure_ascii=False, indent='  ')
