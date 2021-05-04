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
    birds = {}
    history = {}

    with open('../public/data/ebird_bird.json', 'r') as f:
        birds = json.load(f)

        with open(filename, newline='') as csvfile:
            rows = csv.DictReader(csvfile)

            for row in rows:
                plotid = row['樣區編號']
                if history.get(plotid) == None:
                    history.setdefault(plotid, [])

                if birds.get(row['鳥名']) == None:
                    print(row['鳥名'])
                else:
                    history[plotid].append(birds[row['鳥名']]['i'])

    print(history)

    with open('../public/data/plot_bird.json', 'w', encoding='utf8') as f:
        #f.write('const bbs_taiwan_plots =')
        json.dump(history, f, ensure_ascii=False, indent='  ')
