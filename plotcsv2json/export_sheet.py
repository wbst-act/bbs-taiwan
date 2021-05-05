#!/usr/bin/env python3
# coding=utf8
import csv
import json
import os
import re
import sys


if __name__ == '__main__':
  '''
  with open('../public/data/ebird_bird.json', 'r') as f:
    ebird = json.load(f)

    with open('bird_sheet.csv', 'w', newline='') as csvfile:
      writer = csv.writer(csvfile)
      writer.writerow(['id', 'fid', 'cname', 'ename', 'sname', 'shortname'])
      for b in ebird:
        writer.writerow([ebird[b]['i'], ebird[b]['f'], b, ebird[b]['e'], ebird[b]['sn'], ','.join(ebird[b]['es'])])
  
  with open('../public/data/ebird_family.json', 'r') as f:
    familys = json.load(f)

    with open('family_sheet.csv', 'w', newline='') as csvfile:
      writer = csv.writer(csvfile)
      writer.writerow(['fid', 'name'])
      for b in familys:
        writer.writerow([familys[b], b])
  
  with open('../public/data/bbs_bird_2021.json', 'r') as f:
    birds = json.load(f)

    with open('bbs_bird_sheet.csv', 'w', newline='') as csvfile:
      writer = csv.writer(csvfile)
      writer.writerow(['bbsname', 'cname', 'ename', 'sname', 'shortname'])
      for b in birds:
        writer.writerow([b, birds[b]['cn'], birds[b]['en'], birds[b]['sn'], ','.join(birds[b]['es'])])
  '''
  
  with open('../public/data/plot_bird.json', 'r') as f:
    plots = json.load(f)

    with open('plot_bird_sheet.csv', 'w', newline='') as csvfile:
      writer = csv.writer(csvfile)
      writer.writerow(['pid', 'bird'])
      for b in plots:
        #print(b, ','.join( [str(int) for int in plots[b]]))
        writer.writerow([b, ','.join( [str(int) for int in plots[b]])])
  