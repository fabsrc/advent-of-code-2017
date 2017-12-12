function pipes (input) {
  const list = input.split('\n')
  let count = 0

  function check (line) {
    const [id, ...ids] = line.match(/\d*/g).map(Number)
    count++
    list[id] = null
    ids.forEach(id => list[id] && check(list[id]))
    return count
  }

  return check(list[0])
}

console.assert(pipes(
`0 <-> 2
1 <-> 1
2 <-> 0, 3, 4
3 <-> 2, 4
4 <-> 2, 3, 6
5 <-> 6
6 <-> 4, 5`
) === 6)

console.log(pipes(
`0 <-> 1352, 1864
1 <-> 430
2 <-> 1202, 1416
3 <-> 303, 363, 635
4 <-> 1041, 1383
5 <-> 143, 1513
6 <-> 6
7 <-> 619
8 <-> 167, 1246, 1822
9 <-> 577, 1274, 1347
10 <-> 10, 899
11 <-> 790
12 <-> 606
13 <-> 1134, 1894
14 <-> 539, 1974
15 <-> 683, 1783
16 <-> 438, 1235
17 <-> 17
18 <-> 760, 1162
19 <-> 1146
20 <-> 678, 1235, 1397, 1911
21 <-> 127, 615, 980
22 <-> 22, 187
23 <-> 192, 552
24 <-> 169
25 <-> 471
26 <-> 1030, 1329, 1333
27 <-> 1404
28 <-> 1249
29 <-> 1755
30 <-> 198
31 <-> 510, 1884
32 <-> 1088
33 <-> 54, 372, 616, 938, 1548
34 <-> 1574
35 <-> 238, 1411
36 <-> 114
37 <-> 1962
38 <-> 1554, 1633
39 <-> 72, 486, 1002
40 <-> 40, 1224, 1342, 1511, 1886
41 <-> 1244, 1644
42 <-> 1784
43 <-> 169, 1142
44 <-> 96, 827
45 <-> 842, 1512
46 <-> 1248
47 <-> 283, 1125, 1130
48 <-> 212, 327, 1922
49 <-> 490
50 <-> 359, 1386
51 <-> 1186
52 <-> 414
53 <-> 808
54 <-> 33, 673
55 <-> 614
56 <-> 56
57 <-> 257
58 <-> 482, 701, 1702, 1921
59 <-> 515, 695, 1073
60 <-> 809
61 <-> 865
62 <-> 106, 764
63 <-> 416, 1119, 1360
64 <-> 552
65 <-> 978, 1042
66 <-> 97, 130, 168
67 <-> 180, 339
68 <-> 1076
69 <-> 1550, 1621
70 <-> 1163, 1574, 1834
71 <-> 163, 1789
72 <-> 39, 1461, 1693
73 <-> 266, 652, 1612, 1877
74 <-> 860, 936, 1685
75 <-> 502, 768
76 <-> 1064
77 <-> 1685, 1967
78 <-> 501
79 <-> 743, 1261, 1608
80 <-> 80, 1901
81 <-> 1684
82 <-> 82
83 <-> 234, 504, 1159
84 <-> 1529
85 <-> 705
86 <-> 362, 644
87 <-> 223
88 <-> 1870
89 <-> 1412, 1633
90 <-> 191, 1141, 1993, 1999
91 <-> 588
92 <-> 92
93 <-> 918
94 <-> 972, 1401
95 <-> 1043, 1299
96 <-> 44
97 <-> 66, 1089
98 <-> 1300
99 <-> 243, 1220, 1957
100 <-> 1327
101 <-> 815, 1700, 1782
102 <-> 427, 723, 780, 1033
103 <-> 589, 1586
104 <-> 486
105 <-> 1296
106 <-> 62, 1677
107 <-> 1855
108 <-> 174, 1792
109 <-> 1518
110 <-> 1943
111 <-> 1799
112 <-> 112, 845
113 <-> 1189
114 <-> 36, 1895
115 <-> 775, 894, 987, 1832
116 <-> 455, 1317
117 <-> 436, 630, 944, 1229
118 <-> 1316
119 <-> 282
120 <-> 1022
121 <-> 446, 685
122 <-> 908, 1189
123 <-> 850, 1058, 1400
124 <-> 124, 867
125 <-> 316, 1198
126 <-> 1938
127 <-> 21
128 <-> 514, 871
129 <-> 597
130 <-> 66, 187, 541, 952
131 <-> 637, 728, 1951
132 <-> 1480
133 <-> 921, 1443
134 <-> 506, 576
135 <-> 1510
136 <-> 755
137 <-> 842
138 <-> 1077, 1219
139 <-> 1284, 1664
140 <-> 403
141 <-> 452, 1400
142 <-> 142, 442, 1462, 1463
143 <-> 5, 331, 492
144 <-> 144
145 <-> 844
146 <-> 774, 1141
147 <-> 351, 458
148 <-> 1984
149 <-> 499, 909, 935
150 <-> 153, 1300
151 <-> 151
152 <-> 1331
153 <-> 150
154 <-> 783
155 <-> 155, 1985
156 <-> 1752
157 <-> 716, 1144
158 <-> 647, 750
159 <-> 583
160 <-> 493, 770, 1669, 1675
161 <-> 161, 291, 1890
162 <-> 744, 1088, 1250
163 <-> 71, 803
164 <-> 231
165 <-> 1799
166 <-> 1101
167 <-> 8, 167
168 <-> 66, 441
169 <-> 24, 43, 1015
170 <-> 414, 509, 1222, 1392, 1947
171 <-> 180, 260, 1448
172 <-> 1894
173 <-> 585, 1662
174 <-> 108, 1300, 1304, 1789
175 <-> 574, 1245
176 <-> 1776, 1809
177 <-> 1625
178 <-> 1463
179 <-> 1469, 1648
180 <-> 67, 171
181 <-> 506, 1333
182 <-> 1703
183 <-> 370, 745, 816, 961
184 <-> 1143, 1608, 1696
185 <-> 431, 447, 633
186 <-> 352, 752
187 <-> 22, 130, 201, 232, 279
188 <-> 921
189 <-> 1460
190 <-> 445, 891, 972
191 <-> 90, 1078, 1383, 1957
192 <-> 23, 1057
193 <-> 1438
194 <-> 196, 819, 873
195 <-> 1403
196 <-> 194, 508
197 <-> 865, 1625
198 <-> 30, 855, 1397
199 <-> 399, 401
200 <-> 458
201 <-> 187, 457, 796
202 <-> 754, 964, 1736, 1737
203 <-> 937, 1890
204 <-> 676, 1148, 1472
205 <-> 205
206 <-> 206, 872, 1504
207 <-> 1575, 1717
208 <-> 1349, 1582, 1619, 1952
209 <-> 375, 523
210 <-> 1029
211 <-> 588, 623
212 <-> 48, 404, 820
213 <-> 213
214 <-> 1370
215 <-> 360, 412, 1507, 1800, 1874
216 <-> 287, 634, 1023, 1986
217 <-> 662, 1863
218 <-> 417, 1154
219 <-> 1250, 1442, 1962
220 <-> 595, 935, 1153, 1181
221 <-> 290
222 <-> 1328, 1407
223 <-> 87, 464, 925, 1131
224 <-> 1398
225 <-> 225, 768
226 <-> 999
227 <-> 311, 581, 697
228 <-> 983, 1019
229 <-> 719, 1469, 1820
230 <-> 453, 806, 1205, 1449
231 <-> 164, 451, 1741
232 <-> 187
233 <-> 664, 1419
234 <-> 83, 295, 482, 1684
235 <-> 622
236 <-> 236, 1662
237 <-> 287
238 <-> 35, 1308, 1608, 1805
239 <-> 1365
240 <-> 1177
241 <-> 387, 778, 1051
242 <-> 1233
243 <-> 99, 806, 1614
244 <-> 609, 1468
245 <-> 625, 1618
246 <-> 841, 1835
247 <-> 1720
248 <-> 1382, 1859
249 <-> 601, 1882
250 <-> 250, 1189, 1603, 1673, 1793
251 <-> 511
252 <-> 627
253 <-> 1195
254 <-> 400, 1562, 1893, 1951
255 <-> 285, 588, 1180
256 <-> 1408, 1468
257 <-> 57, 1211, 1940
258 <-> 695, 1174
259 <-> 610, 1176, 1516
260 <-> 171
261 <-> 268
262 <-> 502, 837, 1963
263 <-> 263
264 <-> 622, 638, 1815, 1945
265 <-> 570, 1590
266 <-> 73
267 <-> 336, 1040
268 <-> 261, 1815
269 <-> 652, 966, 1487
270 <-> 508, 522
271 <-> 1259, 1298, 1477, 1767
272 <-> 553, 1103, 1982
273 <-> 593, 1919
274 <-> 934, 1361
275 <-> 1839
276 <-> 329
277 <-> 1017, 1047
278 <-> 671
279 <-> 187, 853
280 <-> 1097, 1370
281 <-> 629
282 <-> 119, 1431
283 <-> 47, 974
284 <-> 1359, 1471
285 <-> 255
286 <-> 321, 883
287 <-> 216, 237
288 <-> 630, 880
289 <-> 289, 1853
290 <-> 221, 1307
291 <-> 161, 691, 1213
292 <-> 808
293 <-> 877, 1031, 1192
294 <-> 294, 1935
295 <-> 234
296 <-> 520, 1725
297 <-> 578, 702, 1184, 1209, 1431
298 <-> 979
299 <-> 1297, 1506
300 <-> 540, 995, 1187, 1774
301 <-> 675
302 <-> 739, 842
303 <-> 3, 1149, 1369, 1484
304 <-> 690
305 <-> 1306
306 <-> 481
307 <-> 474, 1723
308 <-> 323
309 <-> 995
310 <-> 544, 797, 1000
311 <-> 227, 927, 1127
312 <-> 1519
313 <-> 1989
314 <-> 314
315 <-> 536, 560, 1758
316 <-> 125, 582, 679, 1362
317 <-> 317, 510
318 <-> 1382, 1678
319 <-> 682
320 <-> 1733
321 <-> 286, 575
322 <-> 905, 1898
323 <-> 308, 366, 788, 1022, 1119, 1615
324 <-> 1151, 1390, 1540
325 <-> 1022
326 <-> 335, 1858
327 <-> 48
328 <-> 1076, 1456
329 <-> 276, 329, 1268
330 <-> 796, 919, 1330, 1565, 1926
331 <-> 143, 1522
332 <-> 831
333 <-> 1746
334 <-> 1254, 1844
335 <-> 326
336 <-> 267, 913
337 <-> 454, 1365, 1618
338 <-> 1800
339 <-> 67
340 <-> 1061
341 <-> 957
342 <-> 1130, 1242
343 <-> 782, 1629
344 <-> 350, 1216
345 <-> 898
346 <-> 586, 1372
347 <-> 1537
348 <-> 1899
349 <-> 378
350 <-> 344
351 <-> 147, 381, 993
352 <-> 186
353 <-> 353, 646, 913
354 <-> 465
355 <-> 1423, 1695
356 <-> 573, 1241
357 <-> 1695
358 <-> 1100, 1271
359 <-> 50, 1472, 1910
360 <-> 215
361 <-> 1512
362 <-> 86, 1768, 1997
363 <-> 3, 1731
364 <-> 657, 1713, 1992
365 <-> 475, 1490, 1968
366 <-> 323, 1482, 1765
367 <-> 831
368 <-> 1393
369 <-> 1135
370 <-> 183, 592
371 <-> 637, 1518
372 <-> 33
373 <-> 1494
374 <-> 1761
375 <-> 209
376 <-> 1587
377 <-> 1522
378 <-> 349, 686, 1006, 1946
379 <-> 379, 487
380 <-> 1763
381 <-> 351, 1048
382 <-> 1895
383 <-> 1623
384 <-> 1423, 1450
385 <-> 1350, 1770
386 <-> 798, 890
387 <-> 241, 894
388 <-> 1756
389 <-> 629
390 <-> 507
391 <-> 1780
392 <-> 1144
393 <-> 1240, 1279
394 <-> 1227
395 <-> 1361
396 <-> 396
397 <-> 397, 1228
398 <-> 454
399 <-> 199
400 <-> 254, 1147
401 <-> 199, 1068, 1445, 1918
402 <-> 636, 1601, 1934
403 <-> 140, 921
404 <-> 212, 430, 468, 1064, 1346, 1434
405 <-> 633
406 <-> 949
407 <-> 512, 951
408 <-> 1900, 1908
409 <-> 409
410 <-> 1724
411 <-> 624, 733
412 <-> 215, 1455
413 <-> 1612
414 <-> 52, 170
415 <-> 907, 1600
416 <-> 63
417 <-> 218, 835
418 <-> 418, 1116
419 <-> 1531
420 <-> 1154, 1538
421 <-> 485, 511
422 <-> 422
423 <-> 665
424 <-> 1891
425 <-> 1140
426 <-> 1409
427 <-> 102
428 <-> 463
429 <-> 575, 1432, 1779
430 <-> 1, 404
431 <-> 185, 1473
432 <-> 1065, 1720
433 <-> 1554
434 <-> 965
435 <-> 562, 1577
436 <-> 117
437 <-> 960
438 <-> 16, 926, 1342
439 <-> 1171
440 <-> 1198, 1622
441 <-> 168
442 <-> 142
443 <-> 443
444 <-> 1399, 1836
445 <-> 190
446 <-> 121
447 <-> 185, 1249
448 <-> 1505
449 <-> 542, 1433
450 <-> 1859
451 <-> 231, 590, 1641, 1651
452 <-> 141, 452
453 <-> 230
454 <-> 337, 398, 511
455 <-> 116, 455
456 <-> 1231, 1368
457 <-> 201, 1294
458 <-> 147, 200, 1799
459 <-> 1113
460 <-> 1521, 1841
461 <-> 882
462 <-> 683, 1744, 1887
463 <-> 428, 1221
464 <-> 223, 1310
465 <-> 354, 880
466 <-> 960, 1216
467 <-> 511, 1185
468 <-> 404
469 <-> 469
470 <-> 470
471 <-> 25, 494, 747, 1078
472 <-> 855, 1358
473 <-> 473
474 <-> 307, 1288
475 <-> 365, 688, 1881
476 <-> 1129, 1496, 1753
477 <-> 828, 1032, 1376
478 <-> 1474, 1950
479 <-> 479
480 <-> 480, 1318
481 <-> 306, 487
482 <-> 58, 234, 902, 1003
483 <-> 1681, 1730
484 <-> 484, 1071
485 <-> 421, 800, 975, 1124
486 <-> 39, 104
487 <-> 379, 481, 918
488 <-> 488, 1297
489 <-> 897, 1216, 1384
490 <-> 49, 1286
491 <-> 1283
492 <-> 143, 1098
493 <-> 160, 1120
494 <-> 471, 1781
495 <-> 495, 642, 714, 1004
496 <-> 1227
497 <-> 513, 1349, 1382
498 <-> 1846
499 <-> 149, 499
500 <-> 621, 1005, 1640
501 <-> 78, 1254
502 <-> 75, 262, 1008, 1404, 1915
503 <-> 1707
504 <-> 83
505 <-> 1809
506 <-> 134, 181, 506
507 <-> 390, 621, 1630
508 <-> 196, 270
509 <-> 170, 1819
510 <-> 31, 317, 656
511 <-> 251, 421, 454, 467, 1532
512 <-> 407, 1258, 1430
513 <-> 497
514 <-> 128, 840
515 <-> 59, 619, 662
516 <-> 1649
517 <-> 517
518 <-> 731
519 <-> 1522
520 <-> 296, 847
521 <-> 1667
522 <-> 270, 690, 1047, 1246
523 <-> 209, 1087
524 <-> 1267
525 <-> 714, 1126, 1896
526 <-> 1788
527 <-> 1660, 1733
528 <-> 1309, 1955
529 <-> 1912
530 <-> 838
531 <-> 1167, 1515
532 <-> 532, 1128
533 <-> 1602
534 <-> 564, 1108
535 <-> 535, 810
536 <-> 315, 1842
537 <-> 1947
538 <-> 1208, 1445
539 <-> 14, 825
540 <-> 300
541 <-> 130, 1188
542 <-> 449, 1197
543 <-> 1302
544 <-> 310, 1131
545 <-> 1409
546 <-> 772
547 <-> 1954
548 <-> 1662
549 <-> 1601
550 <-> 875, 1899
551 <-> 1208
552 <-> 23, 64, 1140
553 <-> 272, 1616, 1632, 1988
554 <-> 554, 622, 1169
555 <-> 555, 705, 772
556 <-> 625
557 <-> 867, 1210
558 <-> 870, 1039, 1320, 1509, 1995
559 <-> 835, 968
560 <-> 315
561 <-> 1335
562 <-> 435
563 <-> 658
564 <-> 534, 640, 1456, 1610
565 <-> 1130
566 <-> 741
567 <-> 1018
568 <-> 839
569 <-> 1544, 1767
570 <-> 265
571 <-> 1006, 1852
572 <-> 1320
573 <-> 356, 787, 816, 1947
574 <-> 175, 1287, 1381, 1413
575 <-> 321, 429
576 <-> 134
577 <-> 9, 668, 1979
578 <-> 297, 1576
579 <-> 1779
580 <-> 798
581 <-> 227, 832
582 <-> 316, 1033
583 <-> 159, 1550
584 <-> 1988
585 <-> 173, 1275
586 <-> 346, 1343
587 <-> 1499, 1911
588 <-> 91, 211, 255
589 <-> 103, 703
590 <-> 451, 1686
591 <-> 828, 1746
592 <-> 370
593 <-> 273
594 <-> 1358, 1607
595 <-> 220
596 <-> 1050, 1375
597 <-> 129, 1463
598 <-> 598, 1804
599 <-> 1606, 1671
600 <-> 1930
601 <-> 249, 869, 1233, 1336
602 <-> 1150, 1203
603 <-> 603
604 <-> 604, 620
605 <-> 835, 1556, 1770
606 <-> 12, 696, 1634, 1897
607 <-> 1629
608 <-> 608
609 <-> 244, 738
610 <-> 259, 684, 1309
611 <-> 1398
612 <-> 612, 1178, 1808
613 <-> 1245
614 <-> 55, 1701, 1969
615 <-> 21, 759
616 <-> 33, 1160
617 <-> 617, 824
618 <-> 725, 840
619 <-> 7, 515
620 <-> 604, 1247
621 <-> 500, 507, 1039
622 <-> 235, 264, 554, 665, 1476
623 <-> 211, 773, 1382, 1839
624 <-> 411, 943
625 <-> 245, 556, 794, 1277
626 <-> 988, 1429, 1495
627 <-> 252, 708, 1780
628 <-> 981
629 <-> 281, 389, 1132
630 <-> 117, 288, 802, 1438, 1492
631 <-> 753, 1279, 1716, 1843
632 <-> 1715
633 <-> 185, 405
634 <-> 216
635 <-> 3
636 <-> 402, 1983
637 <-> 131, 371
638 <-> 264, 1157
639 <-> 815
640 <-> 564
641 <-> 1473, 1727
642 <-> 495
643 <-> 967, 1996
644 <-> 86, 1586
645 <-> 1063, 1994
646 <-> 353
647 <-> 158, 1732
648 <-> 910, 1758
649 <-> 685, 704
650 <-> 1443, 1490
651 <-> 891
652 <-> 73, 269, 1374
653 <-> 756
654 <-> 1026
655 <-> 1177
656 <-> 510
657 <-> 364
658 <-> 563, 1264, 1402, 1457, 1617
659 <-> 899, 1543
660 <-> 874, 1691
661 <-> 1979
662 <-> 217, 515
663 <-> 953, 1147
664 <-> 233, 820, 1152
665 <-> 423, 622, 856
666 <-> 1020
667 <-> 1093, 1611
668 <-> 577, 892
669 <-> 1563
670 <-> 984, 1927
671 <-> 278, 803, 982
672 <-> 1143
673 <-> 54, 1650, 1902
674 <-> 1624, 1694
675 <-> 301, 1473
676 <-> 204, 1726
677 <-> 786, 1772
678 <-> 20
679 <-> 316
680 <-> 722, 1885
681 <-> 845
682 <-> 319, 777, 1935
683 <-> 15, 462
684 <-> 610
685 <-> 121, 649, 836, 1137
686 <-> 378, 1709
687 <-> 687
688 <-> 475
689 <-> 1950
690 <-> 304, 522, 1357, 1814
691 <-> 291
692 <-> 838, 1183
693 <-> 1298
694 <-> 1493
695 <-> 59, 258, 1529
696 <-> 606
697 <-> 227, 1590
698 <-> 870
699 <-> 1699
700 <-> 1740
701 <-> 58, 1535
702 <-> 297
703 <-> 589, 703
704 <-> 649, 1289, 1652
705 <-> 85, 555
706 <-> 1523
707 <-> 1606
708 <-> 627, 710, 1498, 1598
709 <-> 852, 1835
710 <-> 708
711 <-> 711
712 <-> 1786
713 <-> 991, 1558
714 <-> 495, 525
715 <-> 1185, 1473
716 <-> 157
717 <-> 1425
718 <-> 718, 1316
719 <-> 229, 1568
720 <-> 1977
721 <-> 721, 1272
722 <-> 680, 734, 1547
723 <-> 102
724 <-> 1982
725 <-> 618, 807
726 <-> 1771
727 <-> 1447
728 <-> 131, 1232, 1972
729 <-> 1345, 1875
730 <-> 730, 991
731 <-> 518, 1201, 1484
732 <-> 1972
733 <-> 411, 1596
734 <-> 722
735 <-> 1253
736 <-> 936, 1160
737 <-> 799, 865, 957, 1319
738 <-> 609
739 <-> 302, 1047
740 <-> 1532
741 <-> 566, 1226, 1395
742 <-> 742, 1215
743 <-> 79, 1552
744 <-> 162, 1110
745 <-> 183
746 <-> 1861
747 <-> 471
748 <-> 1671
749 <-> 1099, 1899
750 <-> 158
751 <-> 751
752 <-> 186, 804, 1013, 1403
753 <-> 631, 753
754 <-> 202, 1423, 1670
755 <-> 136, 803, 1343
756 <-> 653, 756
757 <-> 819
758 <-> 758
759 <-> 615
760 <-> 18, 1044
761 <-> 1636
762 <-> 1184, 1251
763 <-> 879, 1227
764 <-> 62, 1486
765 <-> 1993
766 <-> 966, 1665
767 <-> 773, 925, 1295
768 <-> 75, 225
769 <-> 1675
770 <-> 160
771 <-> 801, 916, 985, 996, 1984
772 <-> 546, 555
773 <-> 623, 767, 927, 1447
774 <-> 146, 979, 1583
775 <-> 115, 947
776 <-> 1055
777 <-> 682, 1114, 1480
778 <-> 241
779 <-> 1735
780 <-> 102, 781, 1942
781 <-> 780, 1062
782 <-> 343, 809, 881, 1766
783 <-> 154, 1389, 1763
784 <-> 1168, 1935
785 <-> 1286
786 <-> 677, 833, 1140
787 <-> 573, 1801
788 <-> 323, 1036
789 <-> 983, 1599
790 <-> 11, 1322, 1503, 1667
791 <-> 956
792 <-> 1708
793 <-> 1431
794 <-> 625, 1842
795 <-> 795
796 <-> 201, 330
797 <-> 310, 1425, 1749
798 <-> 386, 580
799 <-> 737, 1561, 1722
800 <-> 485
801 <-> 771
802 <-> 630, 1363
803 <-> 163, 671, 755, 1897, 1953
804 <-> 752, 1356
805 <-> 1459
806 <-> 230, 243
807 <-> 725, 855
808 <-> 53, 292, 1303, 1494
809 <-> 60, 782
810 <-> 535, 1713
811 <-> 1670
812 <-> 1910
813 <-> 1458
814 <-> 896, 1098
815 <-> 101, 639, 815, 898
816 <-> 183, 573
817 <-> 817, 1021, 1262
818 <-> 818, 1077
819 <-> 194, 757, 861
820 <-> 212, 664, 1944
821 <-> 1081, 1109
822 <-> 1769
823 <-> 1758
824 <-> 617
825 <-> 539
826 <-> 1150, 1844
827 <-> 44, 831
828 <-> 477, 591
829 <-> 1947
830 <-> 1165, 1669
831 <-> 332, 367, 827
832 <-> 581
833 <-> 786
834 <-> 1022, 1530
835 <-> 417, 559, 605
836 <-> 685, 1647
837 <-> 262, 1560, 1944
838 <-> 530, 692, 1717
839 <-> 568, 843, 1021, 1788
840 <-> 514, 618, 1390
841 <-> 246, 1190, 1646
842 <-> 45, 137, 302, 1306
843 <-> 839
844 <-> 145, 1715, 1833
845 <-> 112, 681
846 <-> 1136, 1718
847 <-> 520, 1818
848 <-> 1916
849 <-> 1641
850 <-> 123
851 <-> 1072
852 <-> 709
853 <-> 279, 941
854 <-> 1188
855 <-> 198, 472, 807, 1469
856 <-> 665
857 <-> 1318
858 <-> 1608
859 <-> 1901
860 <-> 74
861 <-> 819, 920
862 <-> 1378
863 <-> 1683
864 <-> 1880
865 <-> 61, 197, 737, 1289
866 <-> 866, 1221
867 <-> 124, 557
868 <-> 1485
869 <-> 601, 1029
870 <-> 558, 698
871 <-> 128, 1738
872 <-> 206
873 <-> 194
874 <-> 660, 1100
875 <-> 550, 900
876 <-> 1029
877 <-> 293, 1087, 1486
878 <-> 1726
879 <-> 763, 1252, 1597
880 <-> 288, 465
881 <-> 782
882 <-> 461, 1223, 1252, 1585
883 <-> 286, 954, 1046, 1491
884 <-> 1184
885 <-> 1393, 1487
886 <-> 907, 995, 1123
887 <-> 988, 997
888 <-> 1218, 1679
889 <-> 1544
890 <-> 386, 1867
891 <-> 190, 651, 917, 1593
892 <-> 668
893 <-> 893
894 <-> 115, 387
895 <-> 1378, 1857
896 <-> 814
897 <-> 489, 1829
898 <-> 345, 815
899 <-> 10, 659
900 <-> 875
901 <-> 901, 1132, 1550
902 <-> 482
903 <-> 1172, 1271, 1657
904 <-> 1954
905 <-> 322
906 <-> 1716
907 <-> 415, 886, 1929
908 <-> 122
909 <-> 149
910 <-> 648
911 <-> 911
912 <-> 1292, 1962
913 <-> 336, 353
914 <-> 914
915 <-> 1744
916 <-> 771, 1421
917 <-> 891, 1084, 1428
918 <-> 93, 487
919 <-> 330, 1672
920 <-> 861
921 <-> 133, 188, 403, 1418, 1921
922 <-> 1020, 1515
923 <-> 1597
924 <-> 1102
925 <-> 223, 767, 1175, 1920
926 <-> 438
927 <-> 311, 773
928 <-> 1162, 1317, 1571
929 <-> 929
930 <-> 1485, 1875
931 <-> 1809
932 <-> 1130, 1190, 1553
933 <-> 1303
934 <-> 274
935 <-> 149, 220
936 <-> 74, 736, 1574
937 <-> 203, 1942
938 <-> 33
939 <-> 1616
940 <-> 940, 1577
941 <-> 853
942 <-> 1315, 1345
943 <-> 624
944 <-> 117, 1531
945 <-> 1130
946 <-> 1789
947 <-> 775
948 <-> 1275
949 <-> 406, 1279, 1795
950 <-> 1803
951 <-> 407, 1440, 1785
952 <-> 130
953 <-> 663, 1460
954 <-> 883
955 <-> 1954
956 <-> 791, 1625
957 <-> 341, 737
958 <-> 1932
959 <-> 1624
960 <-> 437, 466, 1501
961 <-> 183, 994
962 <-> 1663
963 <-> 963, 1734
964 <-> 202, 1784
965 <-> 434, 1240
966 <-> 269, 766, 1395
967 <-> 643, 1414
968 <-> 559, 1523
969 <-> 1664
970 <-> 1670
971 <-> 1485
972 <-> 94, 190
973 <-> 984
974 <-> 283
975 <-> 485, 1584
976 <-> 1835
977 <-> 977
978 <-> 65
979 <-> 298, 774
980 <-> 21, 1217, 1897
981 <-> 628, 981
982 <-> 671
983 <-> 228, 789, 1321, 1933
984 <-> 670, 973, 1105
985 <-> 771, 1703
986 <-> 1478
987 <-> 115, 1725
988 <-> 626, 887, 1266
989 <-> 1366, 1601, 1964
990 <-> 1990
991 <-> 713, 730, 1932
992 <-> 1183
993 <-> 351
994 <-> 961
995 <-> 300, 309, 886, 995, 1305
996 <-> 771, 1048, 1203
997 <-> 887
998 <-> 1787
999 <-> 226, 1093, 1367
1000 <-> 310
1001 <-> 1468, 1913
1002 <-> 39, 1718
1003 <-> 482
1004 <-> 495
1005 <-> 500
1006 <-> 378, 571
1007 <-> 1256
1008 <-> 502
1009 <-> 1127
1010 <-> 1567
1011 <-> 1011, 1122, 1840
1012 <-> 1012
1013 <-> 752
1014 <-> 1538, 1775
1015 <-> 169, 1426
1016 <-> 1016, 1960
1017 <-> 277
1018 <-> 567, 1619
1019 <-> 228, 1495
1020 <-> 666, 922
1021 <-> 817, 839
1022 <-> 120, 323, 325, 834
1023 <-> 216, 1271
1024 <-> 1502
1025 <-> 1097
1026 <-> 654, 1455, 1739
1027 <-> 1823, 1906
1028 <-> 1903
1029 <-> 210, 869, 876, 1474, 1756
1030 <-> 26
1031 <-> 293, 1458
1032 <-> 477
1033 <-> 102, 582
1034 <-> 1984
1035 <-> 1977
1036 <-> 788
1037 <-> 1037
1038 <-> 1312, 1796, 1855
1039 <-> 558, 621, 1831
1040 <-> 267, 1478, 1776
1041 <-> 4
1042 <-> 65, 1881
1043 <-> 95, 1202, 1794
1044 <-> 760
1045 <-> 1426
1046 <-> 883
1047 <-> 277, 522, 739
1048 <-> 381, 996, 1578
1049 <-> 1554, 1779
1050 <-> 596
1051 <-> 241, 1117
1052 <-> 1533, 1637
1053 <-> 1797
1054 <-> 1814
1055 <-> 776, 1380
1056 <-> 1732, 1965
1057 <-> 192
1058 <-> 123
1059 <-> 1114
1060 <-> 1282
1061 <-> 340, 1325, 1517
1062 <-> 781, 1810
1063 <-> 645, 1567
1064 <-> 76, 404
1065 <-> 432
1066 <-> 1081, 1384, 1592
1067 <-> 1139
1068 <-> 401
1069 <-> 1327, 1873
1070 <-> 1070
1071 <-> 484, 1334
1072 <-> 851, 1072
1073 <-> 59
1074 <-> 1948
1075 <-> 1227
1076 <-> 68, 328, 1076
1077 <-> 138, 818, 1906
1078 <-> 191, 471, 1966
1079 <-> 1869
1080 <-> 1735, 1811, 1855
1081 <-> 821, 1066, 1895
1082 <-> 1740
1083 <-> 1083
1084 <-> 917
1085 <-> 1111
1086 <-> 1440, 1916
1087 <-> 523, 877
1088 <-> 32, 162
1089 <-> 97, 1854, 1948
1090 <-> 1102, 1896
1091 <-> 1466
1092 <-> 1655
1093 <-> 667, 999, 1159
1094 <-> 1248, 1961
1095 <-> 1243
1096 <-> 1635
1097 <-> 280, 1025
1098 <-> 492, 814
1099 <-> 749
1100 <-> 358, 874
1101 <-> 166, 1846
1102 <-> 924, 1090
1103 <-> 272, 1766
1104 <-> 1712
1105 <-> 984, 1105
1106 <-> 1106, 1620
1107 <-> 1107
1108 <-> 534, 1529
1109 <-> 821
1110 <-> 744
1111 <-> 1085, 1111, 1207
1112 <-> 1373
1113 <-> 459, 1430
1114 <-> 777, 1059
1115 <-> 1115
1116 <-> 418
1117 <-> 1051
1118 <-> 1474, 1583
1119 <-> 63, 323, 1194, 1302
1120 <-> 493
1121 <-> 1464
1122 <-> 1011
1123 <-> 886, 1848
1124 <-> 485
1125 <-> 47, 1705
1126 <-> 525
1127 <-> 311, 1009, 1566
1128 <-> 532
1129 <-> 476
1130 <-> 47, 342, 565, 932, 945
1131 <-> 223, 544
1132 <-> 629, 901
1133 <-> 1133, 1526
1134 <-> 13, 1913
1135 <-> 369, 1871
1136 <-> 846, 1879
1137 <-> 685
1138 <-> 1752
1139 <-> 1067, 1202
1140 <-> 425, 552, 786
1141 <-> 90, 146
1142 <-> 43, 1818
1143 <-> 184, 672, 1411
1144 <-> 157, 392, 1851
1145 <-> 1145, 1628
1146 <-> 19, 1574
1147 <-> 400, 663, 1265
1148 <-> 204, 1289, 1499, 1899
1149 <-> 303, 1797
1150 <-> 602, 826
1151 <-> 324
1152 <-> 664, 1518
1153 <-> 220, 1990
1154 <-> 218, 420, 1811
1155 <-> 1658
1156 <-> 1581, 1778, 1865
1157 <-> 638, 1849
1158 <-> 1445
1159 <-> 83, 1093, 1680
1160 <-> 616, 736
1161 <-> 1161
1162 <-> 18, 928
1163 <-> 70
1164 <-> 1868
1165 <-> 830, 1769
1166 <-> 1687
1167 <-> 531
1168 <-> 784, 1761
1169 <-> 554
1170 <-> 1206, 1327, 1754
1171 <-> 439, 1307, 1525
1172 <-> 903, 1172, 1542
1173 <-> 1173
1174 <-> 258
1175 <-> 925, 1869
1176 <-> 259
1177 <-> 240, 655, 1738
1178 <-> 612
1179 <-> 1537
1180 <-> 255, 1675
1181 <-> 220
1182 <-> 1377, 1877
1183 <-> 692, 992
1184 <-> 297, 762, 884, 1718
1185 <-> 467, 715, 1369
1186 <-> 51, 1600
1187 <-> 300
1188 <-> 541, 854
1189 <-> 113, 122, 250, 1653
1190 <-> 841, 932, 1448
1191 <-> 1225, 1345, 1427
1192 <-> 293, 1927
1193 <-> 1193, 1436
1194 <-> 1119
1195 <-> 253, 1864
1196 <-> 1432
1197 <-> 542, 1368, 1825
1198 <-> 125, 440
1199 <-> 1199, 1570, 1740
1200 <-> 1565
1201 <-> 731
1202 <-> 2, 1043, 1139, 1303
1203 <-> 602, 996, 1250
1204 <-> 1204
1205 <-> 230, 1514
1206 <-> 1170
1207 <-> 1111
1208 <-> 538, 551, 1904
1209 <-> 297
1210 <-> 557
1211 <-> 257, 1629
1212 <-> 1999
1213 <-> 291
1214 <-> 1977
1215 <-> 742, 1311, 1502, 1721
1216 <-> 344, 466, 489, 1457, 1810
1217 <-> 980
1218 <-> 888, 1294
1219 <-> 138
1220 <-> 99
1221 <-> 463, 866
1222 <-> 170
1223 <-> 882, 1817
1224 <-> 40, 1267
1225 <-> 1191, 1857
1226 <-> 741, 1309
1227 <-> 394, 496, 763, 1075, 1673
1228 <-> 397
1229 <-> 117, 1237
1230 <-> 1435, 1551, 1555
1231 <-> 456, 1885
1232 <-> 728
1233 <-> 242, 601
1234 <-> 1699
1235 <-> 16, 20, 1335
1236 <-> 1417
1237 <-> 1229, 1554
1238 <-> 1561
1239 <-> 1731, 1864
1240 <-> 393, 965, 1624
1241 <-> 356, 1241
1242 <-> 342
1243 <-> 1095, 1540
1244 <-> 41, 1802
1245 <-> 175, 613
1246 <-> 8, 522
1247 <-> 620
1248 <-> 46, 1094, 1430
1249 <-> 28, 447
1250 <-> 162, 219, 1203
1251 <-> 762
1252 <-> 879, 882
1253 <-> 735, 1867
1254 <-> 334, 501
1255 <-> 1396
1256 <-> 1007, 1366, 1636
1257 <-> 1257
1258 <-> 512, 1488
1259 <-> 271
1260 <-> 1898, 1978
1261 <-> 79
1262 <-> 817
1263 <-> 1387, 1405, 1580
1264 <-> 658
1265 <-> 1147, 1943
1266 <-> 988
1267 <-> 524, 1224
1268 <-> 329
1269 <-> 1537, 1608
1270 <-> 1540
1271 <-> 358, 903, 1023, 1398
1272 <-> 721, 1410
1273 <-> 1379
1274 <-> 9
1275 <-> 585, 948
1276 <-> 1920
1277 <-> 625
1278 <-> 1483
1279 <-> 393, 631, 949
1280 <-> 1572, 1842
1281 <-> 1281, 1833
1282 <-> 1060, 1283, 1422
1283 <-> 491, 1282
1284 <-> 139
1285 <-> 1893
1286 <-> 490, 785, 1598, 1661
1287 <-> 574
1288 <-> 474, 1600, 1824
1289 <-> 704, 865, 1148, 1681
1290 <-> 1660
1291 <-> 1291, 1301
1292 <-> 912, 1416
1293 <-> 1293, 1605
1294 <-> 457, 1218
1295 <-> 767
1296 <-> 105, 1859
1297 <-> 299, 488
1298 <-> 271, 693
1299 <-> 95, 1445
1300 <-> 98, 150, 174, 1422
1301 <-> 1291
1302 <-> 543, 1119
1303 <-> 808, 933, 1202, 1883
1304 <-> 174
1305 <-> 995
1306 <-> 305, 842
1307 <-> 290, 1171
1308 <-> 238, 1385
1309 <-> 528, 610, 1226
1310 <-> 464, 1520
1311 <-> 1215, 1830
1312 <-> 1038
1313 <-> 1835
1314 <-> 1916
1315 <-> 942
1316 <-> 118, 718
1317 <-> 116, 928
1318 <-> 480, 857
1319 <-> 737
1320 <-> 558, 572
1321 <-> 983
1322 <-> 790, 1368
1323 <-> 1846
1324 <-> 1920
1325 <-> 1061, 1409, 1459
1326 <-> 1486
1327 <-> 100, 1069, 1170, 1441, 1641
1328 <-> 222, 1328
1329 <-> 26
1330 <-> 330
1331 <-> 152, 1358, 1380, 1690, 1888
1332 <-> 1776
1333 <-> 26, 181
1334 <-> 1071
1335 <-> 561, 1235
1336 <-> 601
1337 <-> 1689
1338 <-> 1528, 1689
1339 <-> 1422, 1588
1340 <-> 1911, 1964
1341 <-> 1887
1342 <-> 40, 438
1343 <-> 586, 755, 1806, 1956
1344 <-> 1344, 1354, 1623, 1923
1345 <-> 729, 942, 1191
1346 <-> 404
1347 <-> 9, 1524, 1757, 1945, 1978
1348 <-> 1828
1349 <-> 208, 497
1350 <-> 385
1351 <-> 1399
1352 <-> 0
1353 <-> 1731
1354 <-> 1344, 1587, 1870
1355 <-> 1522, 1625
1356 <-> 804, 1356
1357 <-> 690
1358 <-> 472, 594, 1331
1359 <-> 284, 1934
1360 <-> 63, 1403
1361 <-> 274, 395, 1361
1362 <-> 316
1363 <-> 802, 1779, 1975
1364 <-> 1377
1365 <-> 239, 337
1366 <-> 989, 1256, 1420
1367 <-> 999, 1483
1368 <-> 456, 1197, 1322
1369 <-> 303, 1185
1370 <-> 214, 280, 1747, 1764
1371 <-> 1371
1372 <-> 346, 1546
1373 <-> 1112, 1665
1374 <-> 652
1375 <-> 596, 1375
1376 <-> 477, 1730, 1807
1377 <-> 1182, 1364
1378 <-> 862, 895, 1378, 1391
1379 <-> 1273, 1698, 1715
1380 <-> 1055, 1331, 1847
1381 <-> 574, 1654
1382 <-> 248, 318, 497, 623
1383 <-> 4, 191
1384 <-> 489, 1066
1385 <-> 1308
1386 <-> 50
1387 <-> 1263
1388 <-> 1567
1389 <-> 783
1390 <-> 324, 840, 1772
1391 <-> 1378
1392 <-> 170, 1641
1393 <-> 368, 885
1394 <-> 1645, 1655
1395 <-> 741, 966
1396 <-> 1255, 1396, 1965
1397 <-> 20, 198
1398 <-> 224, 611, 1271, 1549
1399 <-> 444, 1351, 1660
1400 <-> 123, 141
1401 <-> 94
1402 <-> 658
1403 <-> 195, 752, 1360
1404 <-> 27, 502
1405 <-> 1263
1406 <-> 1514
1407 <-> 222
1408 <-> 256
1409 <-> 426, 545, 1325, 1980, 1981
1410 <-> 1272
1411 <-> 35, 1143, 1444
1412 <-> 89
1413 <-> 574
1414 <-> 967, 1680
1415 <-> 1593
1416 <-> 2, 1292
1417 <-> 1236, 1599
1418 <-> 921, 1464
1419 <-> 233
1420 <-> 1366, 1564
1421 <-> 916
1422 <-> 1282, 1300, 1339
1423 <-> 355, 384, 754
1424 <-> 1488
1425 <-> 717, 797
1426 <-> 1015, 1045
1427 <-> 1191
1428 <-> 917
1429 <-> 626, 1911
1430 <-> 512, 1113, 1248
1431 <-> 282, 297, 793, 1663
1432 <-> 429, 1196
1433 <-> 449
1434 <-> 404
1435 <-> 1230
1436 <-> 1193, 1827
1437 <-> 1809
1438 <-> 193, 630
1439 <-> 1773
1440 <-> 951, 1086
1441 <-> 1327
1442 <-> 219, 1808
1443 <-> 133, 650
1444 <-> 1411, 1527, 1689
1445 <-> 401, 538, 1158, 1299
1446 <-> 1831
1447 <-> 727, 773
1448 <-> 171, 1190
1449 <-> 230, 1751
1450 <-> 384
1451 <-> 1451
1452 <-> 1607
1453 <-> 1453
1454 <-> 1454
1455 <-> 412, 1026
1456 <-> 328, 564
1457 <-> 658, 1216
1458 <-> 813, 1031
1459 <-> 805, 1325
1460 <-> 189, 953
1461 <-> 72, 1461, 1573
1462 <-> 142
1463 <-> 142, 178, 597
1464 <-> 1121, 1418, 1905
1465 <-> 1810
1466 <-> 1091, 1751
1467 <-> 1484, 1697
1468 <-> 244, 256, 1001, 1503
1469 <-> 179, 229, 855
1470 <-> 1889
1471 <-> 284
1472 <-> 204, 359, 1748
1473 <-> 431, 641, 675, 715, 1753
1474 <-> 478, 1029, 1118
1475 <-> 1475, 1595
1476 <-> 622
1477 <-> 271
1478 <-> 986, 1040
1479 <-> 1479
1480 <-> 132, 777
1481 <-> 1481
1482 <-> 366
1483 <-> 1278, 1367
1484 <-> 303, 731, 1467, 1778
1485 <-> 868, 930, 971
1486 <-> 764, 877, 1326
1487 <-> 269, 885
1488 <-> 1258, 1424
1489 <-> 1839
1490 <-> 365, 650
1491 <-> 883, 1655
1492 <-> 630, 1505, 1710, 1866
1493 <-> 694, 1785
1494 <-> 373, 808, 1838
1495 <-> 626, 1019
1496 <-> 476, 1666
1497 <-> 1916
1498 <-> 708
1499 <-> 587, 1148, 1596
1500 <-> 1800, 1974
1501 <-> 960
1502 <-> 1024, 1215, 1676
1503 <-> 790, 1468
1504 <-> 206
1505 <-> 448, 1492
1506 <-> 299
1507 <-> 215, 1579
1508 <-> 1678
1509 <-> 558
1510 <-> 135, 1693
1511 <-> 40
1512 <-> 45, 361, 1635
1513 <-> 5
1514 <-> 1205, 1406
1515 <-> 531, 922, 1730
1516 <-> 259
1517 <-> 1061
1518 <-> 109, 371, 1152
1519 <-> 312, 1835
1520 <-> 1310
1521 <-> 460
1522 <-> 331, 377, 519, 1355, 1852, 1871
1523 <-> 706, 968, 1607
1524 <-> 1347
1525 <-> 1171, 1728
1526 <-> 1133
1527 <-> 1444
1528 <-> 1338
1529 <-> 84, 695, 1108
1530 <-> 834
1531 <-> 419, 944
1532 <-> 511, 740
1533 <-> 1052
1534 <-> 1572
1535 <-> 701, 1606
1536 <-> 1536
1537 <-> 347, 1179, 1269
1538 <-> 420, 1014
1539 <-> 1648
1540 <-> 324, 1243, 1270
1541 <-> 1952
1542 <-> 1172
1543 <-> 659
1544 <-> 569, 889
1545 <-> 1545
1546 <-> 1372
1547 <-> 722
1548 <-> 33
1549 <-> 1398
1550 <-> 69, 583, 901
1551 <-> 1230, 1907
1552 <-> 743, 1841
1553 <-> 932
1554 <-> 38, 433, 1049, 1237
1555 <-> 1230
1556 <-> 605
1557 <-> 1728, 1980
1558 <-> 713
1559 <-> 1573
1560 <-> 837, 1803
1561 <-> 799, 1238, 1712
1562 <-> 254
1563 <-> 669, 1610
1564 <-> 1420, 1832
1565 <-> 330, 1200
1566 <-> 1127
1567 <-> 1010, 1063, 1388
1568 <-> 719
1569 <-> 1851
1570 <-> 1199
1571 <-> 928, 1752
1572 <-> 1280, 1534
1573 <-> 1461, 1559
1574 <-> 34, 70, 936, 1146
1575 <-> 207
1576 <-> 578
1577 <-> 435, 940
1578 <-> 1048
1579 <-> 1507
1580 <-> 1263, 1610
1581 <-> 1156
1582 <-> 208, 1839
1583 <-> 774, 1118, 1902
1584 <-> 975
1585 <-> 882
1586 <-> 103, 644, 1637
1587 <-> 376, 1354
1588 <-> 1339, 1913
1589 <-> 1791, 1855
1590 <-> 265, 697
1591 <-> 1631
1592 <-> 1066, 1692, 1707
1593 <-> 891, 1415, 1723
1594 <-> 1594, 1959
1595 <-> 1475
1596 <-> 733, 1499
1597 <-> 879, 923, 1991
1598 <-> 708, 1286, 1965
1599 <-> 789, 1417
1600 <-> 415, 1186, 1288
1601 <-> 402, 549, 989
1602 <-> 533, 1602
1603 <-> 250
1604 <-> 1784
1605 <-> 1293
1606 <-> 599, 707, 1535
1607 <-> 594, 1452, 1523
1608 <-> 79, 184, 238, 858, 1269
1609 <-> 1638
1610 <-> 564, 1563, 1580
1611 <-> 667
1612 <-> 73, 413, 1612
1613 <-> 1997
1614 <-> 243
1615 <-> 323
1616 <-> 553, 939
1617 <-> 658
1618 <-> 245, 337, 1618
1619 <-> 208, 1018
1620 <-> 1106
1621 <-> 69
1622 <-> 440, 1876
1623 <-> 383, 1344
1624 <-> 674, 959, 1240
1625 <-> 177, 197, 956, 1355
1626 <-> 1626, 1790
1627 <-> 1722
1628 <-> 1145
1629 <-> 343, 607, 1211
1630 <-> 507
1631 <-> 1591, 1886
1632 <-> 553
1633 <-> 38, 89
1634 <-> 606
1635 <-> 1096, 1512
1636 <-> 761, 1256
1637 <-> 1052, 1586
1638 <-> 1609, 1638
1639 <-> 1978
1640 <-> 500, 1712
1641 <-> 451, 849, 1327, 1392, 1994
1642 <-> 1785
1643 <-> 1960
1644 <-> 41, 1644
1645 <-> 1394
1646 <-> 841, 1646, 1936
1647 <-> 836
1648 <-> 179, 1539
1649 <-> 516, 1717
1650 <-> 673
1651 <-> 451
1652 <-> 704
1653 <-> 1189
1654 <-> 1381, 1654, 1928
1655 <-> 1092, 1394, 1491
1656 <-> 1755, 1767
1657 <-> 903
1658 <-> 1155, 1658
1659 <-> 1659, 1747
1660 <-> 527, 1290, 1399
1661 <-> 1286
1662 <-> 173, 236, 548
1663 <-> 962, 1431
1664 <-> 139, 969, 1664
1665 <-> 766, 1373
1666 <-> 1496
1667 <-> 521, 790, 1919
1668 <-> 1668
1669 <-> 160, 830
1670 <-> 754, 811, 970
1671 <-> 599, 748
1672 <-> 919
1673 <-> 250, 1227
1674 <-> 1771, 1838
1675 <-> 160, 769, 1180, 1729
1676 <-> 1502
1677 <-> 106
1678 <-> 318, 1508
1679 <-> 888
1680 <-> 1159, 1414
1681 <-> 483, 1289
1682 <-> 1905
1683 <-> 863, 1798, 1891
1684 <-> 81, 234
1685 <-> 74, 77
1686 <-> 590
1687 <-> 1166, 1709
1688 <-> 1820
1689 <-> 1337, 1338, 1444
1690 <-> 1331
1691 <-> 660
1692 <-> 1592
1693 <-> 72, 1510, 1957
1694 <-> 674
1695 <-> 355, 357, 1755
1696 <-> 184, 1828
1697 <-> 1467
1698 <-> 1379
1699 <-> 699, 1234, 1699, 1784
1700 <-> 101
1701 <-> 614, 1728, 1743
1702 <-> 58
1703 <-> 182, 985
1704 <-> 1704
1705 <-> 1125
1706 <-> 1706
1707 <-> 503, 1592
1708 <-> 792, 1880, 1882
1709 <-> 686, 1687
1710 <-> 1492
1711 <-> 1711
1712 <-> 1104, 1561, 1640
1713 <-> 364, 810
1714 <-> 1714, 1845
1715 <-> 632, 844, 1379
1716 <-> 631, 906
1717 <-> 207, 838, 1649, 1717
1718 <-> 846, 1002, 1184
1719 <-> 1719
1720 <-> 247, 432, 1720, 1914
1721 <-> 1215
1722 <-> 799, 1627
1723 <-> 307, 1593
1724 <-> 410, 1756, 1887
1725 <-> 296, 987
1726 <-> 676, 878, 1837
1727 <-> 641
1728 <-> 1525, 1557, 1701, 1875
1729 <-> 1675
1730 <-> 483, 1376, 1515, 1916
1731 <-> 363, 1239, 1353
1732 <-> 647, 1056
1733 <-> 320, 527, 1733
1734 <-> 963
1735 <-> 779, 1080
1736 <-> 202
1737 <-> 202
1738 <-> 871, 1177
1739 <-> 1026
1740 <-> 700, 1082, 1199, 1941
1741 <-> 231
1742 <-> 1936
1743 <-> 1701
1744 <-> 462, 915
1745 <-> 1798
1746 <-> 333, 591
1747 <-> 1370, 1659
1748 <-> 1472, 1930
1749 <-> 797
1750 <-> 1949
1751 <-> 1449, 1466
1752 <-> 156, 1138, 1571
1753 <-> 476, 1473
1754 <-> 1170
1755 <-> 29, 1656, 1695
1756 <-> 388, 1029, 1724
1757 <-> 1347
1758 <-> 315, 648, 823, 1851
1759 <-> 1759
1760 <-> 1760, 1889
1761 <-> 374, 1168
1762 <-> 1814
1763 <-> 380, 783, 1863
1764 <-> 1370, 1949
1765 <-> 366
1766 <-> 782, 1103
1767 <-> 271, 569, 1656
1768 <-> 362
1769 <-> 822, 1165
1770 <-> 385, 605, 1800
1771 <-> 726, 1674, 1907
1772 <-> 677, 1390
1773 <-> 1439, 1773
1774 <-> 300
1775 <-> 1014
1776 <-> 176, 1040, 1332
1777 <-> 1841
1778 <-> 1156, 1484
1779 <-> 429, 579, 1049, 1363
1780 <-> 391, 627
1781 <-> 494
1782 <-> 101
1783 <-> 15
1784 <-> 42, 964, 1604, 1699, 1996
1785 <-> 951, 1493, 1642
1786 <-> 712, 1786
1787 <-> 998, 1787
1788 <-> 526, 839
1789 <-> 71, 174, 946, 1973
1790 <-> 1626
1791 <-> 1589
1792 <-> 108, 1842
1793 <-> 250
1794 <-> 1043
1795 <-> 949
1796 <-> 1038
1797 <-> 1053, 1149
1798 <-> 1683, 1745, 1830
1799 <-> 111, 165, 458
1800 <-> 215, 338, 1500, 1770
1801 <-> 787
1802 <-> 1244
1803 <-> 950, 1560
1804 <-> 598
1805 <-> 238
1806 <-> 1343
1807 <-> 1376
1808 <-> 612, 1442
1809 <-> 176, 505, 931, 1437
1810 <-> 1062, 1216, 1465
1811 <-> 1080, 1154
1812 <-> 1832, 1858
1813 <-> 1813
1814 <-> 690, 1054, 1762
1815 <-> 264, 268
1816 <-> 1816
1817 <-> 1223
1818 <-> 847, 1142
1819 <-> 509
1820 <-> 229, 1688
1821 <-> 1976
1822 <-> 8
1823 <-> 1027
1824 <-> 1288
1825 <-> 1197
1826 <-> 1894, 1977
1827 <-> 1436
1828 <-> 1348, 1696
1829 <-> 897
1830 <-> 1311, 1798
1831 <-> 1039, 1446
1832 <-> 115, 1564, 1812
1833 <-> 844, 1281
1834 <-> 70
1835 <-> 246, 709, 976, 1313, 1519
1836 <-> 444
1837 <-> 1726
1838 <-> 1494, 1674
1839 <-> 275, 623, 1489, 1582
1840 <-> 1011
1841 <-> 460, 1552, 1777
1842 <-> 536, 794, 1280, 1792
1843 <-> 631
1844 <-> 334, 826
1845 <-> 1714
1846 <-> 498, 1101, 1323, 1846
1847 <-> 1380
1848 <-> 1123
1849 <-> 1157
1850 <-> 1850
1851 <-> 1144, 1569, 1758
1852 <-> 571, 1522
1853 <-> 289
1854 <-> 1089
1855 <-> 107, 1038, 1080, 1589
1856 <-> 1947
1857 <-> 895, 1225
1858 <-> 326, 1812
1859 <-> 248, 450, 1296
1860 <-> 1860
1861 <-> 746, 1861
1862 <-> 1882
1863 <-> 217, 1763
1864 <-> 0, 1195, 1239
1865 <-> 1156, 1925
1866 <-> 1492
1867 <-> 890, 1253, 1867
1868 <-> 1164, 1893
1869 <-> 1079, 1175
1870 <-> 88, 1354
1871 <-> 1135, 1522, 1940
1872 <-> 1872
1873 <-> 1069
1874 <-> 215
1875 <-> 729, 930, 1728
1876 <-> 1622, 1903
1877 <-> 73, 1182
1878 <-> 1970
1879 <-> 1136, 1912, 1958, 1989
1880 <-> 864, 1708
1881 <-> 475, 1042
1882 <-> 249, 1708, 1862
1883 <-> 1303
1884 <-> 31
1885 <-> 680, 1231
1886 <-> 40, 1631
1887 <-> 462, 1341, 1724
1888 <-> 1331
1889 <-> 1470, 1760
1890 <-> 161, 203
1891 <-> 424, 1683
1892 <-> 1892
1893 <-> 254, 1285, 1868
1894 <-> 13, 172, 1826
1895 <-> 114, 382, 1081
1896 <-> 525, 1090
1897 <-> 606, 803, 980
1898 <-> 322, 1260
1899 <-> 348, 550, 749, 1148
1900 <-> 408, 1900
1901 <-> 80, 859
1902 <-> 673, 1583
1903 <-> 1028, 1876
1904 <-> 1208
1905 <-> 1464, 1682
1906 <-> 1027, 1077
1907 <-> 1551, 1771
1908 <-> 408
1909 <-> 1909
1910 <-> 359, 812
1911 <-> 20, 587, 1340, 1429
1912 <-> 529, 1879
1913 <-> 1001, 1134, 1588
1914 <-> 1720
1915 <-> 502
1916 <-> 848, 1086, 1314, 1497, 1730
1917 <-> 1951
1918 <-> 401
1919 <-> 273, 1667
1920 <-> 925, 1276, 1324
1921 <-> 58, 921
1922 <-> 48
1923 <-> 1344
1924 <-> 1993
1925 <-> 1865
1926 <-> 330
1927 <-> 670, 1192
1928 <-> 1654
1929 <-> 907
1930 <-> 600, 1748
1931 <-> 1931
1932 <-> 958, 991
1933 <-> 983
1934 <-> 402, 1359
1935 <-> 294, 682, 784
1936 <-> 1646, 1742
1937 <-> 1937, 1971
1938 <-> 126, 1938
1939 <-> 1998
1940 <-> 257, 1871
1941 <-> 1740
1942 <-> 780, 937
1943 <-> 110, 1265
1944 <-> 820, 837
1945 <-> 264, 1347
1946 <-> 378
1947 <-> 170, 537, 573, 829, 1856
1948 <-> 1074, 1089
1949 <-> 1750, 1764
1950 <-> 478, 689
1951 <-> 131, 254, 1917
1952 <-> 208, 1541
1953 <-> 803
1954 <-> 547, 904, 955, 1954
1955 <-> 528
1956 <-> 1343
1957 <-> 99, 191, 1693
1958 <-> 1879
1959 <-> 1594
1960 <-> 1016, 1643
1961 <-> 1094
1962 <-> 37, 219, 912
1963 <-> 262
1964 <-> 989, 1340
1965 <-> 1056, 1396, 1598
1966 <-> 1078
1967 <-> 77
1968 <-> 365
1969 <-> 614
1970 <-> 1878, 1970
1971 <-> 1937
1972 <-> 728, 732
1973 <-> 1789
1974 <-> 14, 1500
1975 <-> 1363
1976 <-> 1821, 1976
1977 <-> 720, 1035, 1214, 1826
1978 <-> 1260, 1347, 1639
1979 <-> 577, 661
1980 <-> 1409, 1557
1981 <-> 1409
1982 <-> 272, 724
1983 <-> 636
1984 <-> 148, 771, 1034
1985 <-> 155
1986 <-> 216
1987 <-> 1987
1988 <-> 553, 584
1989 <-> 313, 1879
1990 <-> 990, 1153
1991 <-> 1597
1992 <-> 364
1993 <-> 90, 765, 1924
1994 <-> 645, 1641
1995 <-> 558
1996 <-> 643, 1784
1997 <-> 362, 1613
1998 <-> 1939, 1998
1999 <-> 90, 1212`
))
