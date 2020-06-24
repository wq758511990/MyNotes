def flipAndInvertImage(seats: list):
    # count = 0
    # map1 = {}
    # for i, v in enumerate(seats):
    #     if v == 0:
    #         count += 1
    #     else:
    #         if count:
    #             if i - count == 0 :
    #                 map1[f'{i - count}'] = count
    #             else :
    #                 map1[f'{i - count}'] = (count // 2 + 1) if count % 2 != 0 else count // 2
    #             count = 0
    # if count:
    #     map1[f'{len(seats) - 1 - count}'] = count
    # print(map1)
    # map1 = sorted(map1.items(), key=lambda x: x[1], reverse=True)
    # return map1[0][1]

    # count = 0
    # list1 = []
    # for i, v in enumerate(seats):
    #     if v == 0:
    #         count += 1
    #     else:
    #         if count:
    #             if i - count == 0 :
    #                 list1.append(count)
    #             else :
    #                 # map1[f'{i - count}'] = (count // 2 + 1) if count % 2 != 0 else count // 2
    #                 list1.append((count // 2 + 1) if count % 2 != 0 else count // 2)
    #             count = 0
    # if count:
    #     # map1[f'{len(seats) - 1 - count}'] = count
    #     list1.append(count)
    # print(list1)
    # list1 = list(sorted(list1))[::-1]
    # return list1[0]
    
    str_seats = ''.join(str(x) for x in seats) # list->str
    empty = str_seats.split('1') # str用1分隔
    max_empty = max(len(x) for x in empty)
    return max((max_empty+1)//2, len(empty[0]), len(empty[-1]))  # 考虑最左和最右    


print(flipAndInvertImage([1,0,0,0,1,0,1]))
