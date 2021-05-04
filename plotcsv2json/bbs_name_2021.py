#!/usr/bin/env python3
# coding=utf8
import csv
import json
import os
import re
import sys

if __name__ == '__main__':
    if len(sys.argv) < 2:
        print("input plot.csv")
        sys.exit()

    filename = sys.argv[1]
    bird = {}

    with open(filename, newline='') as csvfile:
        rows = csv.DictReader(csvfile)
        for row in rows:
            if row['REMOVE'] == 'X':
                es = []
            else:
                es = [] if row['CODES'] == '' else row['CODES'].split(',')

            bird.setdefault(row['BBS_NAME'], {
                'cn': row['CN'],
                'sn': row['SN'],
                'en': row['EN'],
                'es': es
            })

    #bird['台灣獼猴']['es'] = ['MK']
    #bird['臺灣獼猴']['es'] = ['MK']
    print(bird)
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
