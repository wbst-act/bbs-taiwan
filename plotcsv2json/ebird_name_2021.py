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

    family = {}
    fid = 0
    bird = {}
    bid = 1
    with open(filename, newline='') as csvfile:
        rows = csv.DictReader(csvfile)
        for row in rows:
            family_name = row['科名'].split(" ")[0]
            if family.get(family_name) == None:
                fid = fid + 1
                family.setdefault(family_name, fid)
                bird.setdefault(row['中文名'].strip(), {
                    'e': row['英文名'], 'f': fid, 'i': bid, 'sn': row['學名'], 'es': []
                })
            else:
                bird.setdefault(row['中文名'].strip(), {
                    'e': row['英文名'], 'f': family.get(family_name), 'i': bid, 'sn': row['學名'], 'es': []
                })
            bid = bid+1
    with open('../public/data/bbs_bird_2021.json', 'r') as f:
        bbs_bird = json.load(f)
        for b in bird:
            if bbs_bird.get(b):
                bird[b]['es'] = bbs_bird[b]['es']
            else:
                ename = bird[b]['e']
                words = re.split(' |-', ename)
                if len(words) == 1:
                    es = words[0][:4].upper()
                elif len(words) == 2:
                    es = words[0][:2].upper()+words[1][:2].upper()
                elif len(words) == 3:
                    es = words[0][:1].upper()+words[1][:1].upper() + \
                        words[2][:2].upper()
                elif len(words) == 4:
                    es = words[0][:1].upper()+words[1][:1].upper() + \
                        words[2][:1].upper()+words[3][:1].upper()
                else:
                    print(ename)
                bird[b]['es'].append(es)
                #print(bird[b]['e'], bird[b]['s'])

                sname = bird[b]['sn']
                words = re.split(' |-', sname)
                if len(words) == 1:
                    es = words[0][:4].upper()
                elif len(words) == 2:
                    es = words[0][:2].upper()+words[1][:2].upper()
                elif len(words) == 3:
                    es = words[0][:1].upper()+words[1][:1].upper() + \
                        words[2][:2].upper()
                elif len(words) == 4:
                    es = words[0][:1].upper()+words[1][:1].upper() + \
                        words[2][:1].upper()+words[3][:1].upper()
                else:
                    print(ename)
                bird[b]['es'].append(es)

    with open('../public/data/ebird_family.json', 'w', encoding='utf8') as f:
        #f.write('const bbs_taiwan_plots =')
        json.dump(family, f, ensure_ascii=False, indent='  ')

    # print(family)
    # print(bird)
    '''
    for b in bird:
        ename = bird[b]['e']
        words = re.split(' |-', ename)
        if len(words) == 1:
            bird[b]['s'] = words[0][:4].upper()
        elif len(words) == 2:
            bird[b]['s'] = words[0][:2].upper()+words[1][:2].upper()
        elif len(words) == 3:
            bird[b]['s'] = words[0][:1].upper()+words[1][:1].upper() + \
                words[2][:2].upper()
        elif len(words) == 4:
            bird[b]['s'] = words[0][:1].upper()+words[1][:1].upper() + \
                words[2][:1].upper()+words[3][:1].upper()
        else:
            print(ename)
        #print(bird[b]['e'], bird[b]['s'])

        sname = bird[b]['sn']
        words = re.split(' |-', sname)
        if len(words) == 1:
            bird[b]['ss'] = words[0][:4].upper()
        elif len(words) == 2:
            bird[b]['ss'] = words[0][:2].upper()+words[1][:2].upper()
        elif len(words) == 3:
            bird[b]['ss'] = words[0][:1].upper()+words[1][:1].upper() + \
                words[2][:2].upper()
        elif len(words) == 4:
            bird[b]['ss'] = words[0][:1].upper()+words[1][:1].upper() + \
                words[2][:1].upper()+words[3][:1].upper()
        else:
            print(ename)
    '''
    # print(bird)

    with open('../public/data/ebird_bird.json', 'w', encoding='utf8') as f:
        #f.write('const bbs_taiwan_plots =')
        json.dump(bird, f, ensure_ascii=False, indent='  ')
